import React from "react";

function CartItem(props) {
  const { imageSource , price, quantity, name,id , changeItemQuantity , deleteItem} = props;

  return (
    <div className="CartItem">
      <div className="Product-Image">
        <img src={imageSource} />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>{name}</h2>
          <div className="info-stock">In Stock </div>
          <div className="item-actions">
            <div className="item-quantity" />
            <select value={quantity} onChange = {(e)=>{
                changeItemQuantity(e,id)
            }}>
              <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                            <option value="7">Qty: 7</option>
                            <option value="8">Qty: 8</option>
                            <option value="9">Qty: 9</option>
            </select>
            <span className="divider">|</span>
            <div className="item-delete" onClick = {()=>{deleteItem(id)}}>Delete</div>
          </div>
        </div>
      </div>
      <div className="CartItem-price">${price}</div>
    </div>
  );
}

export default CartItem;
