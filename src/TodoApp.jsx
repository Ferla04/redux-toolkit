import { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)

  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo = {}, isLoading } = useGetTodoByIdQuery(todoId)

  const nextTodo = () => setTodoId( todoId + 1 )
  const prevTodo = () => {
    if( todoId > 1 ) setTodoId( todoId - 1 )
  }


  return (
    <div className='todo'>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>IsLoading: { isLoading? 'true': 'false' }</h4>

      {/* ALL TODOS */}
      {/* <ul>
        {
          todos.map( todo => (
            <li key={ todo.id }>
              <strong>{ todo.completed? 'DONE:' : 'Pending:' } </strong>
              { todo.title }
            </li>
          ))
        }
      </ul> */}

      {/* USE GET BY ID */}
      <pre>{ JSON.stringify( todo ) }</pre>

      <button onClick={ prevTodo }>
        prev Todo
      </button>
      <button onClick={ nextTodo }>
        next Todo
      </button>
    </div>
  )
}

/*El RTK Query esta hecho para optimizar las peticiones http*/
