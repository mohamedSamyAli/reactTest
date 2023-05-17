import React, { useEffect, useState } from 'react'

// this component display counter in the screen that must increase every 1 secound
// but its not work as expected 
//find the problem and edit the code
export const Counter = () => {
  const [counter, setCounter] = useState(1)
  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1)
    }, 1000)

  }, [])
  return (
    <div>{counter}</div>
  )
}
