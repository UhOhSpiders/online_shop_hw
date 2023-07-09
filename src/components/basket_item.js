import React from 'react'
import styled from 'styled-components';

// styles
const BasketItemDiv = styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 1fr 1fr;
background-color: #d3f5d1;
padding: 10px;
/* margin: 10px; */
width: 350px;
border-radius: 10px;
height: 100px;
`

const Image = styled.img`
height: 100px;
border-radius: 10px;
grid-column: 3;
grid-row-start: span 3;

`
const Button = styled.button`
background-color: #071906;
color: #e4f8e2;
width: 370px;
padding: 10px;
color: white;
border-style: hidden;
border-radius: 10px;
cursor: pointer;
&:hover{
  box-shadow: 2px 2px 5px #071906;
}
`


const BasketItem = ({product, removeById}) => {

  const handleRemoveById = () => {
    removeById(product.id)
  }

  return (
    <>
    <BasketItemDiv>
    <p>{product.name}</p>
    <Image src={product.image}></Image>
    <h3>x {product.quantity}</h3>
    </BasketItemDiv>
    <Button onClick={handleRemoveById}>remove from basket</Button>
    </>
  )
}

export default BasketItem;