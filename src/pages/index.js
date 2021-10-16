import * as React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../components/store/counterSlice'

const IndexPage = () => {
  const count = useSelector((state) => state.counterReducer.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default IndexPage
