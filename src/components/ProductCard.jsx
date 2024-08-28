import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import AddToCart from './AddToCart';

function ProductCard({
  id,
  title, 
  price, 
  image,
  rating
}) {
  return (
    <li className='product-card'>
      <Link to={'/product/' + id}>
        <img src={image} alt="" />
        <h2>{title}</h2>
      </Link>
      
      <p>${price}</p>
      <p>Rating: {rating.rate}</p>
      <AddToCart />
    </li>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.object
}

export default ProductCard;