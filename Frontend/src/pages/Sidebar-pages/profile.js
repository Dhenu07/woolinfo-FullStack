import React from "react";
import { useEffect } from "react";
import styles from '../styles/profilecard.module.css';
import SideBar from "../../sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Profile(){
  const selectFile = () => {
    document.getElementById('fileInput').click();
};

const previewFile = () => {
    const preview = document.getElementById('profile-image');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
};

    return (
      <>
      <SideBar activeItem="7"/>
        <div className={styles.containeremp}>        
        <div className={styles.profileCard}>
            <div className={styles.profileHeader} onClick={selectFile}>
                <img id="profile-image" className={styles.profileIcon} src="https://via.placeholder.com/150" alt="Profile Image" />
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={previewFile} />
            </div>
            <div className={styles.profileInfo}>
                <label htmlFor="name">Name:</label>
                <input type="text" className={styles.name} /><br />
            </div>
            <div className={styles.profileInfo}>
                <label htmlFor="email">Email:</label>
                <input type="email" className={styles.email} /><br />
            </div>
            <div className={styles.profileInfo}>
                <label htmlFor="phone">Phone:</label>
                <input type="text" className={styles.phone} /><br />
            </div>
            <div className={styles.profileInfo}>
                <label htmlFor="address">Address:</label>
                <input type="text" className={styles.addr}  /><br />
            </div>
            <div className={styles.profileInfo}>
                <label htmlFor="name">Password:</label>
                <input type="password" className={styles.pass} /><br />
            </div>
            <div className={styles.socialLinks}>
                <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div> 
        </div>
        </>
    );
}