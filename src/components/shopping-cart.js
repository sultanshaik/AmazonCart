import React from "react";
import CartItem from "./cart-items";
import Products from '../Products';

function ShoppingCart({products, changeProducts}) {
  const changeItemQuantity= (e,id)=>{
    const newProducts = [...products];
    newProducts[id].productQuantity = parseInt(e.target.value);
    changeProducts(newProducts);
  }

  const deleteItem= (id)=>{
    const newProducts = products.filter((val, index)=>{
      return index!==parseInt(id);
    });
    changeProducts(newProducts);
  }

  return (
    <div className="Shopping-Main">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="Cart-items">
      {products.map((product, index)=>{
        return <CartItem key={index} id={index} name = {product.productName} imageSource = {product.productImage} price = {product.productPrice}
         quantity = {product.productQuantity} changeItemQuantity = {changeItemQuantity} deleteItem={deleteItem} />
      })}
      </div>
  
      
    </div>
  );
}

export default ShoppingCart;
