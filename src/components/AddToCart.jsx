import { useState } from "react";
import PropTypes from 'prop-types';

function AddToCart({
  productId,
  title,
  price,
  image,
  addItemToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    setQuantity(+e.target.value);
  }

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function minusQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleAddToCart() {
    const item = {
      id: productId,
      title,
      price,
      image,
      quantity
    };

    addItemToCart(item);
  }

  return (
    <div className='add-to-cart-controller'>
      <span className='quantity-controller'>
        <button type='button' onClick={minusQuantity}>-</button>
        <input type="tel" aria-label='quantity' value={quantity} onChange={handleQuantityChange} />
        <button type='button' onClick={addQuantity}>+</button>
      </span>
      <button type='button' onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

AddToCart.propTypes = {
  productId: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  addItemToCart: PropTypes.func
}

export default AddToCart;