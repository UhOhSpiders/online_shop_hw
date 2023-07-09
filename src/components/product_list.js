import React from 'react'
import Product from './product'
import styled from 'styled-components';


// styles
const ListContainer = styled.div`
display: flex;
justify-content: space-around;
`
const ListItems = styled.div`
display: flex;
flex-wrap: wrap;
`


const ProductList = ({products, addToBasket}) => {
    const listItems = products.map((product, id) => {
      return <Product addToBasket={addToBasket} product={product} key={id}/>
    })

// render
  return (
    <ListContainer>
        <ListItems>{listItems}</ListItems>
    </ListContainer>
  )
}

export default ProductList;