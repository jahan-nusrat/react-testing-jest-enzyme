import React, { useState } from 'react'

const styles = {
  fontFamily: 'monospace',
  width: '500px',
  margin: 'auto',
  btn : {
    padding: '0.5rem 1rem',
    backgroundColor: 'lightgreen',
    outline: 'none',
    border: '1px solid yellow',
    fontSize: '15px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

const MyComponent = () => {
  const [state, setState] = useState(true)
  const toggleText = () => {
    setState(!state)
  }
  return (
    <div style={styles}>
      <button style={styles.btn} onClick={toggleText}>Toggle</button>
      {state && <p>Lorem ipsum dolor sit</p>}
    </div>
  )
}

export default MyComponent
