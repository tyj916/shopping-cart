import { Link } from "react-router-dom";

function NavigationBar() {
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
          <button type="button">Cart</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;