import React from 'react'

const Product = ({product, addToBasket}) => {

  const handleClick = () => {
    addToBasket(product);
  }
  
  const imagePath = `./${product.id}.jpg`
  
return <div>
  <img src={imagePath}></img>
  <li onClick={handleClick}>{product.name}</li>
  <li>{product.description}</li>
</div>
  
}

export default Product;