import React from 'react'
import { useState } from 'react'

export const State1 = () => {
  const [state, setState] = useState({
    counter: 0,
    user: {
      name: 'Alex',
      surname: 'Cords',
    }
  })
  console.log(state)

const handleClick= e =>{
  setState({
    ...state,                      // show all state (counter + user)
    counter: state.counter + 1,    // show counter only
  })
}

  return (
    <div>
      <button onClick={handleClick}>I was clicked {state.counter} times</button>
    </div>
  )
}
