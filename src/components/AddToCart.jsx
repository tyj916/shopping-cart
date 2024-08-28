import { useState } from "react";

function AddToCart() {
  const [count, setCount] = useState(1);

  function handleCountChange(e) {
    setCount(+e.target.value);
  }

  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className='add-to-cart-controller'>
      <span className='quantity-controller'>
        <button type='button' onClick={minusCount}>-</button>
        <input type="tel" aria-label='count' value={count} onChange={handleCountChange} />
        <button type='button' onClick={addCount}>+</button>
      </span>
      <button type='button'>Add to cart</button>
    </div>
  )
}

export default AddToCart;