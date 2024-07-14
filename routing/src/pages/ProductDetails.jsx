import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params=useParams()
    const navigate=useNavigate()
  return (
    <>
    <button onClick={()=>{navigate("/products")}}   >Go To All Products   </button>
    </>
  )
}

export default ProductDetails