import { Link } from "react-router-dom";
import Cart from "../components/Cart";

export default function Checkout() {
  return (
    <div className="checkout-wrapper">
      <div className="header-wrapper">
        <h1>Welcome to Checkout!</h1>

        <Link to={"../"}>
          <p>Back to home</p>
        </Link>
      </div>

      <div className="checkout-wrapper">
        <Cart />
      </div>
    </div>
  );
}
