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