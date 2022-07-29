import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const { pokemons = [], page, isLoading } = useSelector( state => state.pokemonsStore )

  useEffect(() => {
    dispatch( getPokemons() );

  }, [])

  return (
    <div className='pokemon'>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading? 'true' : 'false' }</span>

      <ul className='pokemon__list'>
        {
          pokemons.map( ({ name }) => (
            <li key={name}>{ name }</li>
          ))
        }
      </ul>

      <button
        disabled= { isLoading }
        onClick={() => dispatch( getPokemons(page) )}
      >
        Next
      </button>

    </div>
  )
}
