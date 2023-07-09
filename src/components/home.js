import React from 'react'
import ProductList from './product_list'

const Home = ({products, addToBasket}) => {
   return(
   <>
    
<ProductList products={products} addToBasket={addToBasket}/>
    </>
   )
}

export default Home;