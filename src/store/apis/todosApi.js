import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({

  reducerPath:'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  /*Diferentes funciones para traer la información */
  endpoints: ( builder ) => ({
    getTodos: builder.query({
      query: () => '/todos' // <-- esos todos se estan concatenando con la Url principal
    })
  })

})
/* El CreateApi de RTK nos crea un customhook */
/* la funcion de los endPoints la convierte en un customhook */
export const { useGetTodosQuery } = todosApi