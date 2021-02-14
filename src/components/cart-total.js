import React from "react";

function CartTotal({products}) {
  const getTotalPrice=()=>{
    const reducer = (acc, product)=> product.productQuantity*product.productPrice+acc;
     const s = products.reduce(reducer,0);
     return s;
  }
  return (
    <div className="Cart-Total">
      <h3>Subtotal(5 items): 
        <span className = "CartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button className="checkout-button">Proceed to checkout</button>
    </div>
  );
}

export default CartTotal;
