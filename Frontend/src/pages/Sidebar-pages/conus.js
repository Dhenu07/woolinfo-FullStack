import React from "react";
import { Form } from "react-router-dom";
import '../styles/contact.css';
import SideBar from "../../sidebar";
import 'font-awesome/css/font-awesome.min.css';
export default function ContactUs(){
    return( 
      <div className="app-container">
     <SideBar activeItem="6"/>
     <div className="ccb">
      <div className="contactbody">
      <section className="contact-section">
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" color="#FFCD00" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
            <span>Phone No.</span>
            <span className="text">1-2392-23928-2</span>
          </div>
          <div>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" color="#FFCD00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
            <span>E-mail</span>
            <span className="text">mail@company.com</span>
          </div>
          <div>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" color="#FFCD00" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
            <span>Address</span>
            <span className="text">2939 Patrick Street, Victoria TX, United States</span>
          </div>
          <div>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" color="#FFCD00" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg></span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>
        <div className="contact-form">
        <form id ="contact-form">      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" className="su" value="SUBMIT"/>
</form>
        </div>
      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5463546651546!2d76.9558325156543!3d11.016844593825468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a5e5f90c59%3A0xd05e54a7de54a325!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1668515354754!5m2!1sen!2sin" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>

      <div className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="fa fa-facebook-f"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-youtube"></a>
        </div>
      </div>
    </section>
    </div>
    </div>
    </div>
       );
}