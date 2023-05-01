import React from 'react'

const Display = ({name,address})=>{
// const Display = (props) => {
//     console.log(props)
//     // destructuring object
//     let {name,address}=props 
  return (
    <>
        <h1 >Name: {name}</h1>
        <h1 >Address: {address}</h1>    
    </>
  )
}

export default Display