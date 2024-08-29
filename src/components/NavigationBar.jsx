import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function NavigationBar({length, handleClick}) {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='shop'>Shop</Link>
        </li>
        <li>
          <button type="button" onClick={handleClick}>Cart &#40;{length}&#41;</button>
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