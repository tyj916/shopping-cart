import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './NavigationBar.module.css';
import { ShoppingCart } from "lucide-react";

function NavigationBar({length, handleClick}) {
  return (
    <nav>
      <ul className={styles['nav-horizontal']}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='shop'>Shop</Link>
        </li>
        <li>
          <button 
            type="button" 
            onClick={handleClick} 
            className={styles['cart-button']}
          >
            <ShoppingCart className={styles.icon} aria-label="cart" /> 
            &#40;{length}&#41;
          </button>
        </li>
      </ul>
    </nav>
  );
}

NavigationBar.propTypes = {
  length: PropTypes.number,
  handleClick: PropTypes.func,
}

export default NavigationBar;