import React from 'react'
import Product from './product'
import BasketItem from './basket_item'
import styled from 'styled-components'

// styles
const Total = styled.p`
background-color: #d54854;
padding: 10px;
margin: 10px;
width: 350px;
border-radius: 10px;
font-size: 25px;
`

const Basket = ({basket, totalPrice}) => {
  const tidyBasket = basket.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.id === current.id)){
      accumulator.push(current);
    }
    return accumulator;
    }, []);
  
  const basketItems = tidyBasket.map((product, index) => {
    return <BasketItem product={product} key={index}/>
  })
  
  return (
    <>
    
    <div>
      <div>{basketItems}</div>
      <Total>Total Price: £{totalPrice}</Total>
    </div>
    </>
  )
}

export default Basket;