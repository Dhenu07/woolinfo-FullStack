import React from "react";
import { useEffect } from "react";
import photo from "../../images/logo.png";
import '../styles/profile.css';
import SideBar from "../../sidebar";
export default function Profile(){
    useEffect(() => {
        // Load Bootstrap JavaScript dependencies
        const script1 = document.createElement('script');
        script1.src = 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
        script1.integrity = 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN';
        script1.crossOrigin = 'anonymous';
        document.body.appendChild(script1);
    
        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
        script2.integrity = 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q';
        script2.crossOrigin = 'anonymous';
        document.body.appendChild(script2);
    
        const script3 = document.createElement('script');
        script3.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js';
        script3.integrity = 'sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T';
        script3.crossOrigin = 'anonymous';
        document.body.appendChild(script3);
    
        return () => {
          // Cleanup: remove the dynamically added script elements
          document.body.removeChild(script1);
          document.body.removeChild(script2);
          document.body.removeChild(script3);
        };
      }, []);
    
    
    return (
        <div className="app-container">
        <SideBar activeItem="7"/>
        <div className="containeremp-profile">
    <form method="post">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
            <div className="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>Kshiti Ghelani</h5>
            <h6>Web Developer and Designer</h6>
            <p className="proile-rating">RANKINGS : <span>8/10</span></p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="profile-work">
            <p>WORK LINK</p>
            <a href="">Website Link</a><br />
            <a href="">Bootsnipp Profile</a><br />
            <a href="">Bootply Profile</a>
            <p>SKILLS</p>
            <a href="">Web Designer</a><br />
            <a href="">Web Developer</a><br />
            <a href="">WordPress</a><br />
            <a href="">WooCommerce</a><br />
            <a href="">PHP, .Net</a><br />
          </div>
        </div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>Kshiti123</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>Kshiti Ghelani</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>kshitighelani@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>123 456 7890</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Profession</label>
                </div>
                <div className="col-md-6">
                  <p>Web Developer and Designer</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>Experience</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Hourly Rate</label>
                </div>
                <div className="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Total Projects</label>
                </div>
                <div className="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>English Level</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Availability</label>
                </div>
                <div className="col-md-6">
                  <p>6 months</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Your Bio</label><br />
                  <p>Your detail description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>        </div>
    );
}