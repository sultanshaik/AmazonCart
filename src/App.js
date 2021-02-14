import React, { Fragment, useState } from "react";
import "./style.css";
import Products from  './Products'

import { Header, ShoppingCart, CartTotal } from "./components";

export default function App() {
  const [items, setItems] = useState(Products);

  const changeProducts=(products)=>{
    setItems(products);
  }

  return (
    <Fragment>
      <Header header="Amazon Cart" />
      <div className="App-main">
        <ShoppingCart products = {items} changeProducts = {changeProducts}/>
        <CartTotal products={items} />
      </div>
    </Fragment>
  );
}
