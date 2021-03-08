import React, { useState } from 'react'

const Ticket = (props) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prevState) => prevState + 1)
  }
  return (
    <div style={{width: '300px', margin: 'auto', textAlign:'center'}}>
      <h2 className='title'>{props.name}</h2>
      <button style={{padding:'0.5rem 1rem', backgroundColor: 'yellow', cursor: 'pointer'}} onClick={increment}>Add</button>
      <h2 className='total'>Count: {count}</h2>
    </div>
  )
}

export default Ticket
