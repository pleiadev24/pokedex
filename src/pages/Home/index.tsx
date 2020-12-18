import { FormEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Favorite,
  FavoriteBorder,
  Search
} from '@styled-icons/material-outlined'

import * as S from './styles'

import Logo from '../../components/Logo'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

import api from '../../services/api'
import Heading from '../../components/Heading'

export type pokemonProps = {
  id: number
  name: string
  image: imageProps
  types: typeProps[]
}

type imageProps = {
  front_default: string
}

type typeProps = {
  type: {
    name: string
  }
}

// type wishlistProps = {
//   wishlist: pokemonProps
// }

const Home = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState(0)
  const [pokemon, setPokemon] = useState<pokemonProps>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wishlist = useSelector((state: any) => state.wishlist)
  const dispatch = useDispatch()

  const fetchPokemon = async (name: string) => {
    await api
      .get(`pokemon/${name}`)
      .then(({ data, status }) => {
        const poke = {
          id: data.id,
          name: data.name,
          image: data.sprites,
          types: data.types
        }
        setPokemon(poke)
        setStatus(status)
      })
      .catch((error) => {
        setStatus(error.status)
        console.log(error)
      })
  }

  const handleSeach = async (Event: FormEvent) => {
    Event.preventDefault()
    fetchPokemon(name)
  }

  const handleFavorite = () => {
    const res = wishlist.findIndex(
      (item: pokemonProps) => pokemon && item.id === pokemon.id
    )

    if (res < 0) {
      dispatch({
        type: 'ADD_WISHLIST',
        pokemon
      })
    } else {
      dispatch({
        type: 'REM_WISHLIST',
        pokemon
      })
    }
  }

  useEffect(() => {
    console.log(wishlist)
  }, [wishlist])

  return (
    <S.Wrapper>
      <S.Form>
        <Logo />
        <TextField placeholder="Digite o nome do pokemon" onInput={setName} />
        <Button onClick={(Event: FormEvent) => handleSeach(Event)}>
          Buscar <Search size={20} />
        </Button>
        <Favorite size={30} aria-label="favorite" />
      </S.Form>
      {pokemon && status === 200 && (
        <S.Card>
          <img src={pokemon.image.front_default} />
          <Heading lineLeft lineColor="secondary">
            {pokemon.name}
          </Heading>
          {pokemon.types.map((item: typeProps, index) => (
            <Heading key={index} lineLeft lineColor="secondary">
              {item.type.name}
            </Heading>
          ))}
          <Button onClick={() => handleFavorite()}>
            Favorito <FavoriteBorder size={20} />
          </Button>
        </S.Card>
      )}
    </S.Wrapper>
  )
}
export default Home
