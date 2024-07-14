import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex gap-3 w-full bg-blue-300'  >
    <NavLink to={"/"}   >Home </NavLink>
    <NavLink to={"/about"}    >About </NavLink>
    <NavLink to={"products"} >Products </NavLink>
    </div>
  )
}

export default Navbar