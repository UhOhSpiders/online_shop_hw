import React from 'react'

const DiscountForm = ({handleDiscount, setCode, discountApplied}) => {
  
    const handleCodeInput = (event) => {
      setCode(event.target.value)
      console.log(event.nativeEvent.data)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        handleDiscount(event.target[0].value);
    }
    if(!discountApplied){
    return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="discountCode">Enter Discount Code:</label>
        <input onChange={handleCodeInput} type="text" id="discountCode" name="discountCode"/><br></br>
        <input type="submit" value="Apply Discount Code"></input>
    </form>
    </div>
  )
      }{
        return(
          <h2>Discount applied!</h2>
        )
      }
}

export default DiscountForm;