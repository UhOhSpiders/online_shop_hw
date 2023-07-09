import React from 'react'

const DiscountForm = ({handleDiscount, setCode}) => {
  
    const handleCodeInput = (event) => {
      setCode(event.target.value)
      console.log(event.nativeEvent.data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        handleDiscount(event.target[0].value);
    }
  
    return (
    <div>
    <form onSubmit={handleSubmit}>
        <label for="discountCode">Enter Discount Code:</label>
        <input onChange={handleCodeInput} type="text" id="discountCode" name="discountCode"/><br></br>
        <input type="submit" value="Submit"></input>
    </form>
    </div>
  )
}

export default DiscountForm;