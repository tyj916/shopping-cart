import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({
  title, 
  price, 
  imageURL,
  rating
}) {
  return (
    <li className='product-card'>
      <img src={imageURL} alt="" />
      <h2>{title}</h2>
      <p>${price}</p>
      <p>Rating: {rating.rate}</p>
      <div className='add-to-cart-controller'>
        <span className='quantity-controller'>
          <button type='button'>-</button>
          <input type="tel" />
          <button type='button'>+</button>
        </span>
        <button type='button'>Add to cart</button>
      </div>
    </li>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageURL: PropTypes.string,
  rating: PropTypes.object
}

export default ProductCard;