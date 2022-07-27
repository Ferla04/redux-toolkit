import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter'


function App() {

  const { value } = useSelector( state => state.counterStore )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>count is { value }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }> Increment </button>
        <button onClick={ () => dispatch( decrement() ) }> Decrement </button>
        <button onClick={ () => dispatch( incrementBy(2) ) }> Increment by 2 </button>
      </div>
    </div>
  )
}

export default App
