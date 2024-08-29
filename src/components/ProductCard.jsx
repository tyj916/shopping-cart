import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';
import AddToCart from './AddToCart';

function ProductCard({
  id,
  title, 
  price, 
  image,
  rating,
  addItemToCart
}) {
  return (
    <li className={styles.card}>
      <Link to={'/product/' + id} className={styles.link}>
        <div className={styles['product-details']}>
          <img src={image} alt="" />
          <h2 className={styles.title}>{title}</h2>
          <p>Rating: {rating.rate}</p>
          <p>${price}</p>
        </div>
      </Link>
      <AddToCart
        productId={id}
        title={title}
        price={price}
        image={image}
        addItemToCart={addItemToCart}
      />
    </li>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.object,
  addItemToCart: PropTypes.func
}

export default ProductCard;