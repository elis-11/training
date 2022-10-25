import { useState } from 'react'
import { Actions } from './Actions'
import { Status } from './Status'

export const Context2 = () => {
  const [counter, setCounter] = useState(0)

const countBooks= n => setCounter(counter + n)

  return (
<div>
    <Status counter={counter}/>
    <Actions countBooks={countBooks}/>
</div>
    )
}
