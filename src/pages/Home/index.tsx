import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Favorite,
  FavoriteBorder,
  Search
} from '@styled-icons/material-outlined'

import * as S from './styles'

import { addWishlist, remWishlist } from '../../store/modules/wishlist/actions'

import Logo from '../../components/Logo'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

import api from '../../services/api'
import Heading from '../../components/Heading'
import { Grid } from '../../components/Grid'
import { Container } from '../../components/Container'

export type pokemonProps = {
  id: number
  name: string
  image: imageProps
  types: typeProps[]
  favorite?: boolean
}

type imageProps = {
  front_default: string
}

type typeProps = {
  type: {
    name: string
  }
}

type pokeListProps = pokemonProps[]

const Home = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState(0)
  const [pokeList, setPokeList] = useState<pokeListProps>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wishlist = useSelector((state: any) => state.wishlist)
  const dispatch = useDispatch()

  const fetchPokemon = async (name: string) => {
    await api
      .get(`pokemon/${name}`)
      .then(({ data, status }) => {
        const isFavorite = wishlist.findIndex(
          (item: pokemonProps) => item.name === data.name
        )
        const poke = {
          id: data.id,
          name: data.name,
          image: data.sprites,
          types: data.types,
          favorite: isFavorite < 0 ? false : true
        }
        setPokeList([poke])
        setStatus(status)
      })
      .catch((error) => {
        setPokeList([])
        setStatus(error.response.status)
      })
  }

  const handleShowFavorite = () => {
    if (wishlist.length == 0) {
      setStatus(0)
      setPokeList([])
    } else {
      setStatus(1)
      setPokeList(wishlist)
    }
  }
  const handleSeach = async (Event: FormEvent) => {
    Event.preventDefault()
    name != '' && fetchPokemon(name)
  }

  const handleFavorite = (poke: pokemonProps) => {
    if (poke.favorite) {
      dispatch(remWishlist(poke))
    } else {
      dispatch(addWishlist(poke))
    }
    if (pokeList) {
      const newPokeList = pokeList.filter(
        (item: pokemonProps) => item.name != poke.name
      )
      const newPokemon = {
        ...poke,
        favorite: !poke.favorite
      }
      setPokeList([newPokemon, ...newPokeList])
    }
  }

  return (
    <Container>
      <S.Form>
        <Logo />
        <div>
          <S.SearchGroup>
            <TextField placeholder="Nome do pokemon" onInput={setName} />
            <Button onClick={(Event: FormEvent) => handleSeach(Event)}>
              <Search size={30} />
            </Button>
          </S.SearchGroup>
          <Button type="button" minimal onClick={() => handleShowFavorite()}>
            Ver favoritos <Favorite size={30} aria-label="favorite" />
          </Button>
        </div>
      </S.Form>
      <Grid>
        {pokeList?.map((poke, index) => (
          <S.Card key={index}>
            <img src={poke.image.front_default} />
            <Heading lineLeft lineColor="secondary">
              {poke.name}
            </Heading>
            {poke.types.map((item: typeProps, index) => (
              <Heading size="small" key={index} lineLeft lineColor="secondary">
                {item.type.name}
              </Heading>
            ))}
            <Button
              icon={
                poke.favorite ? (
                  <Favorite size={20} />
                ) : (
                  <FavoriteBorder size={20} />
                )
              }
              onClick={() => handleFavorite(poke)}
              minimal
            />
          </S.Card>
        ))}
        <S.ContentMessage>
          <Heading>
            {status == 0
              ? 'Procure por um Pokemon'
              : status == 404
              ? 'Não encontramos o pokemon que você procurou'
              : status == 505
              ? 'Aconteceu um erro inesperado na conexão com a API pokedex'
              : status == 2
              ? 'Você ainda não tem favoritos'
              : ''}
          </Heading>
        </S.ContentMessage>
      </Grid>
    </Container>
  )
}
export default Home
