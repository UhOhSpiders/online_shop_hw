import React from 'react'
import Product from './product'

const ProductList = ({products, addToBasket}) => {
    const listItems = products.map((product, id) => {
      return <Product addToBasket={addToBasket} product={product} key={id}/>
    })
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default ProductList;