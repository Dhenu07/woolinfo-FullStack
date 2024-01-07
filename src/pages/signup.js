import React from "react";
import "./styles/login.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom'; 
// import next from '../images/next.png';
function Signup(){
 return(
  <div className="body">
  <div className="container" id="container">
<div class="form-container sign-in-container">
<form action="#">
<h1 className="h1">Sign Up</h1>
<div className="social-container">
<a href="#" class="social"><i class="fa fa-facebook"></i></a>
<a href="#" class="social"><i class="fa fa-google"></i></a>
<a href="#" class="social"><i class="fa fa-linkedin"></i></a>
</div>
<span>or use your email for registration</span>
<input type="text" name="name" placeholder="Name"/>
<input type="email" name="email" placeholder="Email"/>
<input type="password" name="password" placeholder="Password"/>

<button>Sign Up</button>
</form>
</div>
<div className="overlay-container">
<div className="overlay">
<div className="overlay-panel overlay-right">
<h1 className="h1">Welcome Trader!</h1>
 <p className="p">To keep connected with us please login with your personal info</p>
 <Link to="/login"><button>Log in</button></Link>
</div>
</div>
</div>
</div>
</div>
 );   
}
export default Signup;