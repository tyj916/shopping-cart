function AddToCart() {
  return (
    <div className='add-to-cart-controller'>
      <span className='quantity-controller'>
        <button type='button'>-</button>
        <input type="tel" />
        <button type='button'>+</button>
      </span>
      <button type='button'>Add to cart</button>
    </div>
  )
}

export default AddToCart;