import { useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {

  const { data: todos = [], isLoading } = useGetTodosQuery()


  return (
    <div className='todo'>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>IsLoading: { isLoading? 'true': 'false' }</h4>

      <pre>...</pre>

      <ul>
        {
          todos.map( todo => (
            <li key={ todo.id }>
              <strong>{ todo.completed? 'DONE:' : 'Pending:' } </strong>
              { todo.title }
            </li>
          ))
        }
      </ul>

      <button>
        next Todo
      </button>
    </div>
  )
}

/*El RTK Query esta hecho para optimizar las peticiones http*/
