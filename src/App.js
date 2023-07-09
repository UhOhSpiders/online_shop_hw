import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home.js'
import Nav from './components/nav.js'
import Basket from './components/basket.js'
import Checkout from './components/checkout.js'

const App = () => {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');
    const [code, setCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
      loadProducts();
    }, [])

    useEffect(() => {
      getTotalPrice();
    },[basket])

    const beyblades = [
            {
              id: 1,
              name: "Spryzen Requiem",
              price: 19.99,
              description: "Spryzen Requiem is an Attack type Beyblade with a Dragon Bit Beast. It features a unique 'Requiem' layer that can change its shape during battle.",
              image: "https://i.ebayimg.com/images/g/MhQAAOSwXZpiefiu/s-l1600.jpg",
            },
            {
              id: 2,
              name: "Valkyrie 17S, Destroy' 2B",
              price: 24.99,
              description: "Valkyrie 17S, Destroy' 2B is an Attack type Beyblade with a Valkyrie Bit Beast. It features a 'Destroy' layer that can destroy other Beyblades' layers.",
              image: "https://static.wikia.nocookie.net/beyblade/images/e/e6/Cho-Z_Valtryek.Z-P.Ds%27.jpg",
            },
            {
              id: 3,
              name: "Rage Longinus 100HF",
              price: 29.99,
              description: "Rage Longinus 100HF is an Attack type Beyblade with a Longinus Bit Beast. It features a 'Rage' layer that can generate powerful shockwaves.",
              image: 'https://i.ebayimg.com/images/g/cKQAAOSwH8xiaQwn/s-l1600.jpg',
            },
            {
              id: 4,
              name: "Astral Spryzen 12 Volcanic Xtend+",
              price: 34.99,
              description: "Astral Spryzen 12 Volcanic Xtend+ is an Attack type Beyblade with a Spryzen Bit Beast. It features a 'Volcanic' layer that can generate powerful flames.",
              image: 'https://static.wikia.nocookie.net/beyblade/images/4/4d/BBDB-Astral_Spriggan_Over_Quattro-0_%28Left%29.png'
            },
            {
              id: 5,
              name: "Genesis Valtryek 7 Vertex",
              price: 39.99,
              description: "Genesis Valtryek 7 Vertex is an Attack type Beyblade with a Valtryek Bit Beast. It features a 'Genesis' layer that can create a powerful vortex.",
              image: 'https://i.ebayimg.com/images/g/lG0AAOSwdN1jyXMV/s-l1200.jpg'
            },
          ]; 

const loadProducts = () => {
    setProducts(beyblades);
}

const addToBasket = (product) => {
  setBasket([...basket, product]);
  setOrderPlaced(false);
  let inputID = product.id;
  let productToChange = products.find(findProduct);
  function findProduct(product) {
    return product.id === inputID;
  }
  productToChange.quantity = productToChange.quantity || 0;
  productToChange.quantity += 1;
  console.log(productToChange.quantity);
  setProducts(products);
}

const removeById = (id) => {
  let currentBasket = basket;
  let newBasket = currentBasket.filter((product) => {
    return product.id != id;
  })
  setBasket(newBasket);
}

const handleDiscount = (code) => {
  if(!discountApplied){
    if(code === '123'){
  setDiscountApplied(true)
  const discountedPrice = (totalPrice/2)
  setTotalPrice(discountedPrice.toFixed(2))
    }
  }
}

const getTotalPrice = () => {
  if(!discountApplied){
  const initialValue = 0; 
  const sumBasket = basket.reduce((a,c) => a + c['price'], initialValue);
  setTotalPrice(sumBasket.toFixed(2));
  }else{
    const initialValue = 0; 
  let sumBasket = basket.reduce((a,c) => a + c['price'], initialValue);
  setTotalPrice(sumBasket.toFixed(2));
  setTotalPrice(totalPrice/2)
  }
}

const placeOrder = () => {
  setBasket([]);
  setTotalPrice('0');
  setDiscountApplied(false);
  setOrderPlaced(true);
}

return (
    <Router>
      <>
      <Nav basket={basket}/>
      <Routes>
        <Route path="/" element={<Home products={products} addToBasket={addToBasket}/>}/>
        <Route path="/basket" element={<Basket basket={basket} totalPrice={totalPrice} removeById={removeById}/>}/>
        <Route path="/checkout" element={<Checkout handleDiscount={handleDiscount} setCode={setCode} totalPrice={totalPrice} discountApplied={discountApplied} placeOrder={placeOrder} orderPlaced={orderPlaced}/>}/>
      </Routes>
      </>
    </Router>
  );
}

export default App;
