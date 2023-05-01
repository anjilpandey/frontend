import React, { useContext } from 'react'
import Display from './Display'
import { GlobalContext } from './GlobalContext'

const Data = () => {
    let info=useContext(GlobalContext)
  return (
    <>
    {info}
    <Display name={"Anjil"} address={"Kathmandu"}/>
    </>
  )
}

export default Data