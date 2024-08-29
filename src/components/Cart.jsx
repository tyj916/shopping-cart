import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Cart.css'

function Cart({ items, handleClear }) {
  const totalPrice = items.reduce(
    (accumulator, current) => accumulator + (current.price * current.quantity),
    0,
  );

  return (
    <div className='cart'>
      <ul>
        {
          items.map(item => {
            return (
              <li className='cart-item' key={item.id}>
                <Link to={'/product/' + item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p>x{item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <h2 className='total-price'>Total: ${totalPrice}</h2>
      <div>
        <button type='button' onClick={handleClear}>Clear</button>
        <button type='button' onClick={() => alert('Checkout done.\nPS: This function is not within current learning scope.')}>Checkout</button>
      </div>
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array,
  handleClear: PropTypes.func,
}

export default Cart;