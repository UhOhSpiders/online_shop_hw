import React from 'react'
import Product from './product'
import BasketItem from './basket_item'

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
      <p>Total Price: £{totalPrice}</p>
      <ul>{basketItems}</ul>
    </div>
    </>
  )
}

export default Basket;