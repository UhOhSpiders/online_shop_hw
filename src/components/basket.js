import React from 'react'
import Product from './product'
import BasketItem from './basket_item'
import styled from 'styled-components'
import DiscountForm from './discount_form'

// styles
const Total = styled.p`
background-color: #d54854;
padding: 10px 0;
margin: 10px;
width: 350px;
border-radius: 10px;
font-size: 25px;
`

const Basket = ({basket, totalPrice, handleDiscount, setCode}) => {
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
      <div>{basketItems}
      <Total>Total Price: £{totalPrice}</Total>
      </div>
    </div>
    <DiscountForm handleDiscount={handleDiscount} setCode={setCode}></DiscountForm>
    </>
  )
}

export default Basket;