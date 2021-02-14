import React from "react";

function CartItem(props) {
  const { imageSource } = props;
  return (
    <div className="CartItem">
      <div className="Product-Image">
        <img src="../images/samsung.jpeg" />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Cell Phone</h2>
          <div className="info-stock">In Stock </div>
          <div className="item-actions">
            <div className="item-quantity" />
            <select />
            <div className="item-delete">Delete</div>
          </div>
        </div>
      </div>
      <div className="CartItem-price">$500</div>
    </div>
  );
}

export default CartItem;
