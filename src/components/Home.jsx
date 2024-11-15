import { Link } from "react-router-dom";
import Shop from "./Shop";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This project is built to practice the concepts I&apos;ve learned so far.</p>
      <p>Concepts practiced in this project:</p>
      <ul>
        <li>React Router</li>
        <li>React Testing</li>
        <li>PropTypes</li>
        <li>Data fetching and control with useEffect</li>
        <li>CSS Modules</li>
      </ul>

      <p>Things need to be improved:</p>
      <ul>
        <li>Pop out cart after clicking add to cart button</li>
        <li>Better design</li>
        <li>Responsive design</li>
      </ul>

      <p>These concepts are mainly used in <Link to='shop'>the shop page</Link> so I will just leave this page as this</p>
      <Link to='shop'>Navigate to shop page to find out more.</Link>

      <Shop />
    </div>
  );
}

export default Home;