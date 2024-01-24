import React, { useState } from 'react';
import compo from './compostyle/woolform.module.css';

export default function Woolform() {
  const [location, setLocation] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  function handleChange(e) {
    const selectedFiles = e.target.files;
    const allowedTypes = ['image/jpeg', 'image/jpg'];

    const newFiles = Array.from(selectedFiles).filter(file => {
      const fileName = file.name.toLowerCase();
      const isAllowedType = allowedTypes.includes(file.type);
      return isAllowedType && (fileName.endsWith('.jpeg') || fileName.endsWith('.jpg'));
    });

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    setError('');
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(`Error getting location: ${error.message}`);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };


  return (
      <form action="#" className={compo.woolform}>
        <div className={compo.woolist}>
        <div className={compo.innerbox}>
        <p>Wool Type</p>
        <select name="wools" id="wool" className={compo.wlist}>
            <option value="wool1">Greasy Wool</option>
            <option value="wool2">Scoured Wool</option>
            <option value="wool3">Carbonised Wool</option>
            <option value="wool4">Noils & Wastes</option>
            <option value="wool5">Tops & Open Tops</option>
            <option value="wool6">Yarn</option>
        </select>
        </div>
        <div className={compo.innerbox}>
          <p>Cost Per Kilo</p>
          <input type="number" id="cost" name="cost" min="0" max="1000"className={compo.input} placeholder="Cost"/>
        </div>
        <div className={compo.innerbox}>
          <p>Length</p>
          <input type="number" id="length" name="length"min="0" max="1000" className={compo.input} placeholder="length in mm"/>
        </div>
        <div className={compo.innerbox}>
          <p>Microns</p>
          <input type="number" id="microns" name="microns"min="0" max="1000" step="0.05"className={compo.input} placeholder="microns"/>
        </div>
        <div className={compo.innerbox}>
          <p>VM</p>
          <input type="number" id="vm" name="vm" min="0" max="100" className={compo.input} placeholder="in %"/>
        </div>
        <div className={compo.innerbox}>
        <p>Your Location</p>
        <button type="button" onClick={handleGetLocation}>
          Get Location
        </button>
        {location && (
          <div>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className={compo.innerbox}>
        <p>Phone Number</p>
        <input type="tel" id="phone" name="phone" className={compo.input} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        </div>
        <div className={compo.innerbox}>
          <p>Testing Certificate Available?</p>
          <div className={compo.radiocontainer}>
        <label>
            <input type="radio" name="choice" value="yes"/>
            Yes
        </label>
        <label>
            <input type="radio" name="choice" value="no"/>
            No
        </label>
    </div>
        </div>
        <div className={compo.innerbox}>
          <p>Email</p>
        <input name="email" type="email" className={compo.input} placeholder="Email" />   
          </div>
        <div className={compo.innerbox}>  
        <p>Title</p>
        <input name="title" type="text" className={compo.input} placeholder="Title" />
          </div>
        <div className={compo.innerbox}>  
        <p>Sub-Title</p>
        <input name="sub-title" type="text" className={compo.input} placeholder="Sub-Title" />
          </div>
        <div className={compo.innerbox}>
          <p>Description</p>
       <textarea name="text" className={compo.input} placeholder="Description above 1000 words" rows="100" cols="50"></textarea>
          </div>
          <div className={compo.innerbox}>
          <p>Wool Images</p>
          <div className={compo.upload}>
            <input
              className={compo.input1}
              type="file"
              name="name"
              onChange={handleChange}
              multiple 
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className={compo.imagebox}>
            {files.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} className={compo.image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className={compo.submitform}>
          <input type="submit" value="Upload"/>
        </div>
        </div>
      </form>
  );
}
