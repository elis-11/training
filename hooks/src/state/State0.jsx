import { useState } from 'react'

export const State0 = () => {

const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)
const [count3, setCount3] = useState(0)

  return (
    <div className='flex justify-center'>
        <ul>
            <li>
        <button className='w-48 mb-1 p-3 bg-violet-200' onClick={()=> setCount1(count1 + 1)}>I was clicked: {count1} times</button>
            </li>
            <li>
        <button className='w-48 mb-1 p-3 bg-violet-200' onClick={()=> setCount2(count2 + 1)}>I was clicked: {count2} times</button>
            </li>
            <li>
        <button className='w-48 mb-1 p-3 bg-violet-200' onClick={()=> setCount3(count3 + 1)}>I was clicked: {count3} times</button>
            </li>
        </ul>
    </div>
  )
}
