import { useStore } from 'dharma-react'
import { counterStore } from '../store/counter'

const { increment, decrement } = counterStore.actions

export function Counter() {
  const { count } = useStore(counterStore)

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
