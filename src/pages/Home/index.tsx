import { FormEvent, useState, useEffect } from 'react'
import { Favorite, Search } from '@styled-icons/material-outlined'

import * as S from './styles'

import Logo from '../../components/Logo'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

import api from '../../services/api'
import Heading from '../../components/Heading'

type pokemonProps = {
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

const Home = () => {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState<pokemonProps>()

  const fetchPokemon = async (name: string) => {
    const result = await api.get(`pokemon/${name}`)
    console.log(result)
    console.log(result.data.name)

    const poke = {
      name: result.data.name,
      image: result.data.sprites,
      types: result.data.types
    }
    setPokemon(poke)
  }

  const handleSeach = async (Event: FormEvent) => {
    Event.preventDefault()
    fetchPokemon(name)
  }

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])
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
      {pokemon && (
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
        </S.Card>
      )}
    </S.Wrapper>
  )
}
export default Home
