import PropTypes from 'prop-types'

function Cart({ items }) {
  return (
    <div>
      <ul>
        {
          items.map(item => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
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