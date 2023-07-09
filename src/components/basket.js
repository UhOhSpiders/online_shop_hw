import React from 'react'
import Product from './product'
import BasketItem from './basket_item'
import styled from 'styled-components'
import DiscountForm from './discount_form'
import {Link} from 'react-router-dom'

// styles
const Total = styled.p`
background-color: #071906;
color: #e4f8e2;
padding: 10px;
width: 350px;
border-radius: 10px;
font-size: 25px;
`

const Button = styled.button`
background-color: #d54854;
width: 350px;
padding: 10px;
color: white;
border-style: hidden;
border-radius: 10px;
font-size: 25px;
cursor: pointer;
&:hover{
  box-shadow: 2px 2px 5px #071906;
}
`

const Basket = ({basket, totalPrice, removeById}) => {
  const tidyBasket = basket.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.id === current.id)){
      accumulator.push(current);
    }
    return accumulator;
    }, []);
  
  const basketItems = tidyBasket.map((product, index) => {
    return <BasketItem product={product} key={index} removeById={removeById}/>
  })
  
  if(basket.length === 0){return(
    <h2>Your basket is empty!</h2>
  )
  }{
  return (
    <>
    
    <div>
      
      <div>{basketItems}
      <Total>Total Price: £{totalPrice}</Total>
      </div>
    </div>
    <Link to="/checkout">
      <Button>Go to checkout</Button>
      </Link>
  
    </>

  )
  }
}

export default Basket;