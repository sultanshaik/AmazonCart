import React from "react";

function CartTotal() {
  return (
    <div className="Cart-Total">
      <h3>Subtotal(5 items): 
        <span className = "CartTotal-price">$ 2172</span>
      </h3>
      <button className="checkout-button">Proceed to checkout</button>
    </div>
  );
}

export default CartTotal;
