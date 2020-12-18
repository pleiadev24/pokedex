import { pokemonProps } from '../../../pages/Home/'

export function addWishlist(poke: pokemonProps) {
  return {
    type: 'ADD_WISHLIST',
    pokemon: poke
  }
}

export function remWishlist(poke: pokemonProps) {
  return {
    type: 'REM_WISHLIST',
    pokemon: poke
  }
}
