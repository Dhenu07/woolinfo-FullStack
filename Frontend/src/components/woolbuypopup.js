import React from 'react';
import './compostyle/popup.css';

const WoolBuyPopup = ({ wool, onClose }) => {
  const { wools, available, cost, length, Vm, Country, Address, Email, Phone, farmname, image, description } = wool;

  return (
    <div className="popup-container">
      <div className="popup-content">
        <img className="popup-img" src={require(`../uploads/${image}`)} alt={image} />
        <div className="popup-details">
          <h2>{wools}</h2>
          <p>Available: {available} Ton</p>
          <p>Cost: {cost} per ton</p>
          <p>Length: {length} mm</p>
          <p>VM: {Vm}%</p>
          <p>Country: {Country}</p>
          <p>Phone: {Phone}</p>
          <p>Farm: {farmname}</p>
          <p>Phone: {Phone}</p>
          <p>Farm: {farmname}</p>
          <p>Description:<p></p>{description}</p>
          {/* Other details */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default WoolBuyPopup;
