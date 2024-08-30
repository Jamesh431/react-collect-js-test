import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="checkout-wrapper">
      <div className="header-wrapper">
        <h1>Welcome to Checkout!</h1>

        <Link to={"../"}>
          <p>Back to home</p>
        </Link>
      </div>

      <div className="checkout-wrapper"></div>
    </div>
  );
}
