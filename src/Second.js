import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
  return (
    <>
        <h1>Second</h1>
        <Link to="/first">Go to First</Link>
        </>
  )
}

export default Second