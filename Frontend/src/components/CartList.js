import React, { useState, useEffect } from "react";
import './compostyle/cartlist.css';
import CartDelete from "./CartDelete";

const CartList = ({ cartid, item, quantity, wools, cost, image, length, available }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedWool, setSelectedWool] = useState(null);
  const [total, setTotal] = useState(quantity * cost);

  useEffect(() => {
    setTotal(quantity * cost);
  }, [quantity, cost]);

  const confirmDelete = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const i = require(`../uploads/${image}`);

  return (
    <div className="cartlistwhole">
      <div className="cartimage">
        <img src={i} alt="product" />
      </div>
      <div className="cartdetails">
        <p><b>Wool Type : </b>{wools}</p>
        <p><b>Available :</b>{available} Tons</p>
      </div>
      <div className="cartdetails">
        <p><b>Cost :</b>₹ {cost} Per Ton</p>
        <p><b>Length :</b>{length} mm</p>
      </div>
      <div className="cartdetails2"></div>
      <div className="cartdetailsm">
        <div className="cartdetails3">
          <h3>{quantity} X {cost} = </h3>
          <h3 className="onlyone"><b> ₹ {total}</b></h3>
        </div>
        <div className="cartdetails4">
          <button type="button" id="delbutton" onClick={confirmDelete}>DELETE ITEM</button>
          {isPopupVisible && <CartDelete id={cartid} onClose={handleClosePopup} />}
        </div>
      </div>
      <br />
    </div>
  )
};

export default CartList;
