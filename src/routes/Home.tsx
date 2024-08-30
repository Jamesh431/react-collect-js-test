import { Link } from "react-router-dom";

export default function Home() {
  <div className="home-wrapper">
    <h1>Welcome Home!</h1>

    <Link to={"./checkout"}>
      <p>To Checkout</p>
    </Link>
  </div>;
}
