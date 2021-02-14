import React from "react";
import "../style.css";

export default function Header(props) {
  const { header } = props;
  return (
    <div className="App-Header">
      <h1>{header}</h1>
    </div>
  );
}
