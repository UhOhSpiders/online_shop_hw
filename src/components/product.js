import React from 'react'
import styled from 'styled-components';

const Product = ({product, addToBasket}) => {

  const handleClick = () => {
    addToBasket(product);
  }
  
  // styles
  const Image = styled.img`
  width: 250px;
  border-radius: 10px;
  `

  const ProductBox = styled.div`
  /* background-color: red; */
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 2%;
  gap: 2px;
  `

  const Button = styled.button`
  background-color: #d54854;
  padding: 15px 32px;
  color: white;
  border-style: hidden;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    /* border-style: solid;
    border-color: black;
    border-width: 2px; */
    box-shadow: 2px 2px 5px #071906;
  }
  `

  // render
return <ProductBox>
  <Image src={product.image}></Image>
  <h2 >{product.name}</h2>
  <p>{product.description}</p>
  <Button onClick={handleClick}>Add To Basket</Button>
</ProductBox>
  
}

export default Product;