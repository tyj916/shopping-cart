import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>There&apos;s nothing here because the creator is lazy to build this page</p>
      <Link to='shop'>Navigate to shop page to find out more.</Link>
    </div>
  );
}

export default Home;