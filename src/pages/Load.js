import React, { useEffect, useState } from 'react';
import ReactLoadings from 'react-loading';
import logo from '../images/logo.png';
import './styles/Load.css';
import next from '../images/next.png';
import '@fontsource/kavoon';
import { Link } from 'react-router-dom'; 

function Load() {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="load0">
    <div className="load">
      <img src={logo} alt="Logo" />
      <h1>WOOL INFO HEAVEN</h1>
      <p>
        <i>#CUL-T-TADE</i>
      </p>
      {showLoading ? (
        <ReactLoadings type="bubbles" color="#FDB323" height={100} width={50} />
      ) : (
        <Link to="/login">
        <img src={next} alt="Log"></img>
        </Link>
      )}
    </div>
    </div>
  );
}

export default Load;
