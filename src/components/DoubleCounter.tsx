import React, { useEffect, useState } from 'react'


// this component display the content of the array "arr"
// first interval increase the counter by 1
// secound interval push the counter value to the array "arr"
//find the problem and edit the code

export const DoubleCounter = () => {
  const [counter, setCounter] = useState(1)
  const [arr, setArr] = useState<Array<number>>([1,2])
  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1)
    }, 1000)

    setInterval(() => {
      arr.push(counter)
      setArr(arr)
    }, 2000)
  }, [])
  return (
    <div>{arr.join("_")}</div>
  )
}
