import React from 'react'
import DiscountForm from './discount_form';
import styled from 'styled-components';

// styles
const Total = styled.p`
background-color: #071906;
color: #e4f8e2;
padding: 10px;
width: 350px;
border-radius: 10px;
font-size: 25px;
`


const Checkout = ({handleDiscount, setCode, totalPrice, discountApplied, placeOrder, orderPlaced}) => {
    
    // const handleOrderPlaced = () => {
    //     placeOrder();
    // }
    if(!orderPlaced){
  return (
    <>
    <Total>Total Price: £{totalPrice}</Total>
    <DiscountForm handleDiscount={handleDiscount} setCode={setCode} discountApplied={discountApplied}></DiscountForm>
    <button onClick={placeOrder}> Place Order </button>
    </>
  )
    }else{
        return (
            <h2>Order Placed!</h2>
        )
    }
}

export default Checkout;