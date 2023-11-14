import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const [canIncrement, setCanIncrement] = useState(true)
  const [canDecrement, setCanDecrement] = useState(false)

  const decrement = () => {
    setCount(count => count - 1)
    setCanIncrement(true)
    setCanDecrement(count > 1)
  };
  
  const increment = () => {
    setCount(count => count + 1)
    setCanIncrement(count < 8)
    setCanDecrement(true)
  };

  return (
    <>
      <button onClick={decrement} disabled={!canDecrement}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={!canIncrement}>+</button>
    </>
  )
}

export default Counter;