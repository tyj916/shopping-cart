import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Cart.css'

function Cart({ items }) {
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
    </div>
  )
}

Cart.propTypes = {
  items: PropTypes.array
}

export default Cart;