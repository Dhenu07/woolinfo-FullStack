import React, { useState } from 'react';
import './compostyle/woolbuylist.css';
import WoolBuyPopup from './woolbuypopup'; 
import weight from '../images/weight.svg';
import money from '../images/money.svg';
import len from '../images/length.svg';
import vege from '../images/vm.svg';
import world from '../images/world.svg';
import mappin from '../images/mappin.svg';
import ema from '../images/mail.svg';
import ph from '../images/phone.svg';
import farm from '../images/farm.svg';

const WoolBuyList = ({ item,wools, available, cost, length, Vm, Country, Address, Email, Phone, farmname, image, description,curr_date }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedWool, setSelectedWool] = useState(null);

  const handleShowMore = (wool) => {
    setSelectedWool(wool);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setSelectedWool(null);
    setIsPopupVisible(false);
  };

  const a = require(`../uploads/${image}`);

  return (
    <div className="item_con">
      <img className="item_img" src={a} alt={image} />
      <div className="list_para">
        <div className='parade'>
          <svg fill="#000000" width="60px" height="35px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M16.44 309.74c-2.44 11.52-2.82 21.72-1.14 30.61 2.57 13.13 9.94 29.4 25.12 29.08 1.13-.03 5.08-.63 7.58-1.43 0 26.51 10.75 50.51 28.12 67.88 24.77 24.77 61.13 34.06 94.65 24.34C187.28 491.97 220.02 512 256 512c35.98 0 68.72-20.03 85.23-51.78 33.52 9.72 69.88.43 94.65-24.34C453.25 418.51 464 394.51 464 368c2.5.8 6.45 1.4 7.58 1.43 15.18.32 22.55-15.95 25.12-29.08 1.68-8.89 1.3-19.09-1.14-30.61C506.33 293.83 512 275.21 512 256c0-35.98-20.03-68.72-51.78-85.23 9.71-33.52.44-69.87-24.34-94.65-24.77-24.78-61.12-34.05-94.65-24.34C324.72 20.03 291.97 0 256 0c-35.97 0-68.72 20.03-85.23 51.78-33.53-9.71-69.88-.44-94.65 24.34-24.78 24.78-34.05 61.13-24.34 94.65C20.03 187.28 0 220.02 0 256c0 19.21 5.67 37.83 16.44 53.74zM256 480c-34.46 0-61.85-26.98-63.88-60.02l-7.02-2.91c-24.94 20.91-62.54 20.01-86.36-3.81C87.16 401.68 80 385.67 80 368c0-5.84.79-11.51 2.25-16.88 3.9-2.84 7.26-5.96 10.07-9.36 13.24-16.01 18.13-20.42 15.82-41.15-4.79-12.3-6.07-36.94-5.81-53.6.26-16.66.64-25.63 6.8-38.79 1.37-2.75-21.6 7.52-24.51 9.37-22.59 14.4-34.88 32.69-50.56 54.59A64.403 64.403 0 0 1 32 256c0-34.17 27-61.79 60.02-63.87l-2.92-7.02c-20.89-24.87-20.09-62.47 3.8-86.37 23.9-23.89 61.49-24.69 86.36-3.81l-2.92-7.02C194.15 58.98 221.53 32 256 32s61.85 26.98 63.88 60.02l7.02 2.91c24.87-20.88 62.46-20.08 86.36 3.81 23.89 23.9 24.69 61.5 3.8 86.37l2.92 7.02C453 194.21 480 221.83 480 256c0 5.59-.72 11.01-2.06 16.18-15.68-21.9-27.97-40.19-50.56-54.59-2.91-1.85-25.88-12.12-24.51-9.37 6.16 13.16 6.54 22.13 6.8 38.79.26 16.66-1.02 41.3-5.81 53.6-2.31 20.73 2.58 25.14 15.82 41.15 2.81 3.4 6.17 6.52 10.07 9.36A64.32 64.32 0 0 1 432 368c0 17.67-7.16 33.68-18.74 45.26-23.82 23.82-61.42 24.72-86.36 3.81l-7.02 2.91C317.85 453.02 290.46 480 256 480zM145.75 196.32c-7 20.16-10.51 39.72-10.51 58.69 0 26.31 3.46 50.23 10.38 71.76C162.49 379.24 197 421 256 421c59.32 0 93.38-41.36 110.16-94.23 6.83-21.53 10.25-45.45 10.25-71.76 0-14.35-1.71-28.36-5.13-42.03-10.42 0-19.94-3.89-28.57-11.66-8.63-7.78-14.05-16.96-16.28-27.56-4.61 5.3-10.08 9.74-16.4 13.33-6.32 3.59-12.64 5.38-18.96 5.38-10.43 0-21.79-6.49-34.09-19.47-2.05 9.56-6.75 17.89-14.1 24.98-7.34 7.09-15.72 10.64-25.11 10.64-7.35 0-14.4-2.86-21.15-8.59-6.75-5.72-11.83-12.34-15.24-19.86-7.19 7.19-14.92 16.66-27.94 16.66-2.4 0-5.34-.01-7.69-.51zm73.68 68.82c0 15.15-12.28 27.43-27.43 27.43s-27.43-12.28-27.43-27.43c0-15.14 12.28-27.42 27.43-27.42s27.43 12.28 27.43 27.42zM320 292.57c-15.15 0-27.43-12.28-27.43-27.43 0-15.14 12.28-27.42 27.43-27.42s27.43 12.28 27.43 27.42c0 15.15-12.28 27.43-27.43 27.43z"/></svg>
          <p>{wools}</p>
        </div>
        <div className='parade'>
          <img src={weight} alt="Weight" />
          <p>{available} Ton</p>
        </div>
        <div className='parade'>
          <img src={money} alt="Cost" />
          <p>{cost} per ton</p>
        </div>
        <div className='parade'>
          <img src={len} alt="Length" />
          <p>{length} mm</p>
        </div>
        <div className='parade'>
          <img src={vege} alt="VM" />
          <p>{Vm}% VM</p>
        </div>
        <div className='parade'>
          <img src={world} alt="Country" />
          <p>{Country}</p>
        </div>
        {/* <div className='parade'>
          <img src={farm} alt="Farm" />
          <p>{farmname}</p>
        </div> */}
      </div>
      <button type='button' onClick={() => handleShowMore({ item,wools, available, cost, length, Vm, Country, Address, Email, Phone, farmname, image, description,curr_date })}>See More</button>

      {isPopupVisible && <WoolBuyPopup wool={selectedWool} onClose={handleClosePopup} />}
    </div>
  );
};

export default WoolBuyList;
