import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { X } from 'lucide-react';

function Cart({ items, handleClear, handleClose }) {
  const totalPrice = items.reduce(
    (accumulator, current) => accumulator + (current.price * current.quantity),
    0,
  ).toFixed(2);

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Shopping Cart</h2>
        <button type='button' aria-label='close' onClick={handleClose}><X /></button>
      </div>
      <ul>
        {
          items.map(item => {
            return (
              <li key={item.id} className={styles.item}>
                <Link to={'/product/' + item.id}>
                  <div className={styles['item-img']}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles['item-details']}>
                    <p data-test-id='cart-item' className={styles['item-title']}>{item.title}</p>
                    <div className={styles.price}>
                      <p className={styles['item-price']}>${item.price}</p>
                      <p className={styles['item-quantity']}>x{item.quantity}</p>
                      <p className={styles['item-total']}>${item.price * item.quantity}</p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <h2 className={styles['total-price']}>Total: ${totalPrice}</h2>
      <div className={styles.buttons}>
        <button type='button' onClick={handleClear}>Clear</button>
        <button type='button' onClick={() => alert('Checkout done.\nPS: This function is not within current learning scope.')}>Checkout</button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  handleClear: PropTypes.func,
  handleClose: PropTypes.func,
}

export default Cart;