import React from "react";
import CartItem from "./cart-items";
import Products from '../Products';

function ShoppingCart() {
  return (
    <div className="Shopping-Main">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="Cart-items">
      {Products.map(product=>{
        return <CartItem imageSource = {product.productImage} price = {product.productPrice}
         quantity = {product.productQuantity} />
      })}
      </div>
  
      
    </div>
  );
}

export default ShoppingCart;
