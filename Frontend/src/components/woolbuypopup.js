import React, { useState } from 'react';
import './compostyle/popup.css';
import farm from '../images/farm.svg';
import axios from 'axios';

const WoolBuyPopup = ({ wool, onClose }) => {
  const { item,wools, available, cost, length, Vm, Country, Address, Email, Phone, farmname, image, description,curr_date } = wool;

  const [quantity, setQuantity] = useState(5);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

  const increaseQuantity = () => {
    if(quantity < available)
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 5) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const addtocart = async (item, quantity) => {
    try {
        const type="raw wool";
        const itemId=item;
        console.log(itemId);
        const response = await axios.post('http://localhost:5000/cart/add',itemId,quantity,type);
        console.log(response.data);
        setShowSuccessPopup(true); 
        setTimeout(() => setShowSuccessPopup(false), 2000); 
        return response.data; 
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error; 
    }
};
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img className="popup-img" src={require(`../uploads/${image}`)} alt={image} />
        <div className="popup-details">
          <div className='ttop1'>
            <img src={farm} alt="farm icon" />
            <h1>{farmname}</h1>
          </div>
          <div className='top'>
            <h2>{wools} Wool</h2>
          </div>
          <div className="mon">
            <p>₹{cost} Per Ton</p>
          </div>
          <div className='avai'>
            <p>• {available} Tons in Stock</p>
          </div>
          <br></br>
          <div className="quantity-control">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <br></br>
          {showSuccessPopup && (
            <div className="successPopup">
              <span role="img" aria-label="tick">✅</span><h4>Added to Cart Succesfully</h4>
            </div>
          )}
          <div><button type='button' onClick={() => addtocart({item,quantity})}>Add to Cart</button></div>
          <h3>Other Information</h3>
          <table>
            <tbody>
              <tr>
                <td><b>Length</b></td><td> {length} mm</td>
              </tr>
              <tr><td><b>VM </b></td><td>{Vm}%</td></tr>
              <tr>
                <td><b>Country</b></td><td>{Country}</td>
              </tr>
              <tr>
                <td><b>Email</b></td><td>{Email}</td>
              </tr>
              <tr>
                <td><b>Address</b> </td><td>{Address}</td>
              </tr>
              <tr><td><b>Phone</b></td><td>{Phone}</td></tr>
              <tr><td><b>Date Added</b></td><td>{curr_date.substring(0,10)}</td></tr>
            </tbody>
          </table>
          <p><b>About farm and produce :</b></p>
          <p>{description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default WoolBuyPopup;
