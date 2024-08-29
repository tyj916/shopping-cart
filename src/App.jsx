import { useState } from 'react';
import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar';
import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

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

  function clearCart() {
    setCartItems([]);
  }

  function toggleCart() {
    setOpenCart(!openCart);
  }

  function closeCart() {
    setOpenCart(false);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to='/' className={styles.logo}>Project Logo</Link>
          <NavigationBar 
            length={getCartItemQuantity()} 
            handleClick={toggleCart}
          />
        </div>
      </header>
      {openCart && <Cart items={cartItems} handleClear={clearCart} handleClose={closeCart} />}
      <div className={styles.container}>
        <Outlet context={addItemToCart} />
      </div>
    </>
  )
}

export default App
