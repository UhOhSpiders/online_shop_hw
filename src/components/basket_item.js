import React from 'react'
import styled from 'styled-components';

// styles
const BasketItemDiv = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #d3f5d1;
padding: 2px;
margin: 10px;
width: 350px;
border-radius: 10px;
`

const Image = styled.img`
width: 80px;
height: 80px;
border-radius: 10px;
grid-column:2;
`

const BasketItem = ({product}) => {
  return (
    <>
    <BasketItemDiv>
    <p>{product.name}</p>
    <Image src={product.image}></Image>
    <h3>x {product.quantity}</h3>
    
    </BasketItemDiv>
    </>
  )
}

export default BasketItem;