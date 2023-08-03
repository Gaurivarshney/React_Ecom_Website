import React from 'react'
import './Heading.css'
function Heading({title, desc}) {
  return (
    <div className='heading'>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Heading
