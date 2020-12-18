import produce, { Draft } from 'immer'

import { pokemonProps } from '../../../pages/Home/'

type actionProps = {
  type: 'ADD_WISHLIST' | 'REM_WISHLIST'
  pokemon: pokemonProps
}

const addWishlist = produce((draft: Draft<actionProps>[], pokemon) => {
  const poke = {
    ...pokemon,
    favorite: true
  }
  draft.push(poke)
})

const remWishlist = produce((draft: Draft<actionProps>[], pokemon) => {
  const pokemonIndex = draft.findIndex(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item: any) => item.name === pokemon.name
  )
  if (pokemonIndex >= 0) {
    draft.splice(pokemonIndex, 1)
  }
})

export default function wishlist(state = [], action: actionProps) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return addWishlist(state, action.pokemon)
    case 'REM_WISHLIST':
      return remWishlist(state, action.pokemon)
    default:
      return state
  }
}
