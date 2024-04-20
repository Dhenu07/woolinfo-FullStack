import React, { useState, useEffect } from "react";
import styles from '../styles/profilecard.module.css';
import SideBar from "../../sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Profile() {
  const [selectedImage, setSelectedImage] = useState("https://i.pinimg.com/736x/85/d6/4e/85d64ede4e32839466d60cbc191130df.jpg");
  const [showGallery, setShowGallery] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup
  const [activeItem, setActiveItem] = useState("1");
    const handleItemClick = (id) => {
        setActiveItem(id);
    };

  useEffect(() => {
    fetch('http://localhost:5000/getbio')
      .then(response => response.json())
      .then(data => {
        setBio(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        setPassword(data.password);
        setSelectedImage(data.image); 
      })
      .catch(error => console.error('Error fetching bio:', error));
  }, []);

  const handleImageClick = () => {
    setShowGallery(true);
  };

  const selectImageFromGallery = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowGallery(false);
  };

  const imageGallery = [
    "https://i.pinimg.com/564x/96/78/4c/96784c9eccfd1b02096c01d89a3fd792.jpg",
    "https://i.pinimg.com/564x/1e/26/21/1e262186a1cd5a696fa533b2f1d73cc7.jpg",
    "https://i.pinimg.com/564x/32/4d/b4/324db46b78ddccaca3ac27459bf80037.jpg",
    "https://i.pinimg.com/564x/6b/95/ef/6b95efea7065709c5f709d6f99425389.jpg",
    "https://i.pinimg.com/564x/d2/f7/62/d2f762cb45b347768b6a569e2d20307a.jpg",
    "https://i.pinimg.com/564x/b7/7d/b5/b77db5f92a502ad06405e2f7161f055c.jpg",
    "https://i.pinimg.com/564x/8f/38/81/8f3881386d050a0d76ff85ff4471c9ef.jpg",
    "https://i.pinimg.com/564x/64/91/6f/64916f52037c018a3b99c186827490ef.jpg",
    "https://i.pinimg.com/564x/4c/da/a6/4cdaa617dc5ac7ecab3b74aa7154fc37.jpg"
  ];

  const handleSave = () => {
    axios.post('http://localhost:5000/getupdate', { name, email, phone, address, password, image: selectedImage })
      .then(response => {
        console.log('Profile saved successfully:', response.data);
        setShowSuccessPopup(true); // Show success popup when save is successful
        setTimeout(() => setShowSuccessPopup(false), 2000); // Hide success popup after 2 seconds
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <SideBar activeItem="7" />
      <div className={styles.containeremp}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader} onClick={handleImageClick}>
            <img id="profile-image" className={styles.profileIcon} src={selectedImage} alt="Profile Image" />
          </div>
          {showSuccessPopup && (
            <div className={styles.successPopup}>
              <span role="img" aria-label="tick">✅</span> Profile Saved
            </div>
          )}
          <div className={styles.profileInfo}>
            <label htmlFor="name">Name:</label>
            <input type="text" className={styles.name} value={name} onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <div className={styles.profileInfo}>
            <label htmlFor="email">Email:</label>
            <input type="email" className={styles.email} value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          </div>
          <div className={styles.profileInfo}>
            <label htmlFor="phone">Phone:</label>
            <input type="text" className={styles.phone} value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
          </div>
          <div className={styles.profileInfo}>
            <label htmlFor="address">Address:</label>
            <input type="text" className={styles.addr} value={address} onChange={(e) => setAddress(e.target.value)} /><br />
          </div>
          <div className={styles.profileInfo}>
            <label htmlFor="password">Password:</label>
            <input type={passwordVisible ? "text" : "password"} className={styles.pass} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className={styles.changevisible} onClick={togglePasswordVisibility}>
              {passwordVisible ? "Hide" : "Show"}
            </button><br />
          <div className={styles.profileInfo}>
            <button className={styles.saveButton} onClick={handleSave}>Save</button>
          </div>
          <div className={styles.socialLinks}>
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      {showGallery && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setShowGallery(false)}>&times;</span>
            <h2>Profile Gallery</h2>
            <div className={styles.imageGallery}>
              {imageGallery.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} onClick={() => selectImageFromGallery(imageUrl)} />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.selldeals}>
                    <div className={`list-it ${activeItem === "1" ? "active" : ""}`}>
                        <Link to='/profile/buyhistory' onClick={() => handleItemClick("1")}>
                            <p>Buy History</p>
                        </Link>
                    </div>
                    <div className={`list-it ${activeItem === "2" ? "active" : ""}`}>
                        <Link to='/profile/sellhistory' onClick={() => handleItemClick("2")}>
                            <p>Sell History</p>
                        </Link>
                    </div>
                </div>
    </>
  );
}
