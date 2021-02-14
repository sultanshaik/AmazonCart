import React from "react";

function CartItem(props) {
  const { imageSource , price, quantity } = props;

  const getOptions=()=>{
    let arr = [];
    for(let i=0;i<quantity;i++){
      arr.push(<option>Qty:{i}</option>)
    }

    return arr;
  }

  return (
    <div className="CartItem">
      <div className="Product-Image">
        <img src={imageSource} />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Cell Phone</h2>
          <div className="info-stock">In Stock </div>
          <div className="item-actions">
            <div className="item-quantity" />
            <select>
              {getOptions().map(quan=>quan)}
            </select>
            <span className="divider">|</span>
            <div className="item-delete">Delete</div>
          </div>
        </div>
      </div>
      <div className="CartItem-price">${price}</div>
    </div>
  );
}

export default CartItem;
