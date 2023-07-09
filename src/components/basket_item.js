import React from 'react'
import styled from 'styled-components';

// styles
const BasketItemDiv = styled.div`
background-color: #d3f5d1;
padding: 10px;
margin: 10px;
width: 350px;
border-radius: 10px;
`

const BasketItem = ({product}) => {
  return (
    <>
    <BasketItemDiv>
    <p>{product.name}</p>
    <h3>x {product.quantity}</h3>
    </BasketItemDiv>
    </>
  )
}

export default BasketItem;