import React from 'react';
import "./styles/login.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
// import Logo from '../images/logo.png';

export default function Login(){

    return(
        <div className="body">
        <div className="container" id="container">
<div class="form-container sign-in-container">
<form action="#">
   <h1 className="h1">Login</h1>
   <div className="social-container">
   <a href="#" class="social"><i class="fa fa-facebook"></i></a>
   <a href="#" class="social"><i class="fa fa-google"></i></a>
   <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
</div>
<span>or use your account</span>
<input type="email" name="email" placeholder="Email"/>
<input type="password" name="password" placeholder="Password"/>
<a href="#">Forgot Your Password</a>

<Link to='/dashboard'><button>Sign In</button></Link>
</form>
</div>
<div className="overlay-container">
<div className="overlay">
   <div className="overlay-panel overlay-right">
       <h1 className="h1">Hello, Trader!</h1>
       <p className="p">Enter your details and start journey with us</p>
   </div>
   </div>
   </div>
   </div>
   </div>
        );
}