import { useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(newItem) {
    const newCartItems = [];
    let hasItem = false;

    cartItems.forEach(item => {
      if (item.id === newItem.id) {
        hasItem = true;

        const modifiedItem = {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: item.quantity + newItem.quantity,
        }

        newCartItems.push(modifiedItem);
      } else {
        newCartItems.push(item);
      }
    });

    if (!hasItem) {
      newCartItems.push(newItem);
    }

    setCartItems(newCartItems);
  }

  function getCartItemQuantity() {
    return cartItems.reduce(
      (accumulator, current) => accumulator + current.quantity, 
      0,
    );
  }

  return (
    <>
      <header>
        <div className='logo'>Project Logo</div>
        <NavigationBar length={getCartItemQuantity()} />
      </header>
      <Cart items={cartItems} />
      <Outlet context={addItemToCart} />
    </>
  )
}

export default App
