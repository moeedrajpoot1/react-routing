import React from 'react'
import Navbar from '../components/Navbar'

const DefaultLayouts = (props) => {
  return (
    <>
    <Navbar/>
    <div> This Is DefaultLayouts</div>
    {props.children}
    </>
  )
}

export default DefaultLayouts