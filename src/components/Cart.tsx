import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    // Dynamically loading Collect.js script
    const script = document.createElement("script");
    script.src =
      "https://secure.tnbcigateway.com/token/Collect.js?datatokenizationkey=5mN8N7-jhr55W-N22pxX-uAW2s9";
    script.async = true;
    script.onload = () => {
      const collectJs = (window as any).CollectJs;
      if (collectJs) {
        collectJs.setup({
          merchant: "Merchant ID",
          paymentSelector: "#paymentForm",
          onTokenizeSuccess: (token: string) => handleToken(token),
          onTokenizeError: (error: string) => handleError(error),
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup for unmount
      document.body.removeChild(script);
    };
  }, []);

  const handleToken = (token: string) => {
    console.log("Tokenization successful:", token);
    // Token handling goes here (send to backend)
  };

  const handleError = (error: string) => {
    console.error("Tokenization failed:", error);
    // Error handling goes here
  };

  return (
    <form id="paymentForm">
      <div>
        <label>Card Number</label>
        <div data-collect="cardNumber">
          <input />
        </div>
      </div>
      <div>
        <label>Expiration Date</label>
        <div data-collect="expirationDate">
          <input />
        </div>
      </div>
      <div>
        <label>CVC</label>
        <div data-collect="cvv">
          <input />
        </div>
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
}
