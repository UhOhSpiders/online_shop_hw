import React from 'react'

const BasketItem = ({product}) => {
  return (
    <>
    <li>{product.name} x {product.quantity}</li>
    </>
  )
}

export default BasketItem;