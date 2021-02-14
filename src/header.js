import React, { Fragment } from "react";
import "./style.css";

export default function Header(props) {
  const { header } = props;
  return (
    <div class="App-Header">
      <h1>{header}</h1>
    </div>
  );
}
