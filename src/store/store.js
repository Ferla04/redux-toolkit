import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    pokemonsStore: pokemonSlice.reducer,

    /*RTK */
    [todosApi.reducerPath]: todosApi.reducer // <-- Espacio donde se coloca el resultado de la api
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
})