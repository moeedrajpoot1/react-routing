import React from 'react'
import { Outlet } from 'react-router-dom'
const Auth = () => {
  return (
    <>
    <div>Auth Page</div>
    <Outlet/>
    </>
  )
}

export default Auth