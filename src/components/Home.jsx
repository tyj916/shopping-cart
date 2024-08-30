import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This project is built to practice the concepts I&apos;ve learned so far.</p>
      <p>Concepts used in this project:</p>
      <ul>
        <li>React Router</li>
        <li>React Testing</li>
        <li>PropTypes</li>
        <li>Data fetching and control with useEffect along with useEffect</li>
        <li>CSS Modules</li>
      </ul>
      <p>These concepts are mainly used in <Link to='shop'>the shop page</Link> so I will just leave this page as this</p>
      <Link to='shop'>Navigate to shop page to find out more.</Link>
    </div>
  );
}

export default Home;