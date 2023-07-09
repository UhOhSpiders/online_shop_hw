import React from 'react'
import ProductList from './product_list'

const Home = ({products, addToBasket}) => {
   return(
   <>
    <h1>Rare Beyblades</h1>
<ProductList products={products} addToBasket={addToBasket}/>
    </>
   )
}

export default Home;