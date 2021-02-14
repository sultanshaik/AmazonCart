import React, { Fragment } from "react";
import "./style.css";

import { Header, ShoppingCart, CartTotal } from "./components";

export default function App() {
  return (
    <Fragment>
      <Header header="Amazon Cart" />
      <div className="App-main">
        <ShoppingCart />
        <CartTotal />
      </div>
    </Fragment>
  );
}
