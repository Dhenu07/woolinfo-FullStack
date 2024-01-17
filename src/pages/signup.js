import React, { useState } from "react";
import { Link ,useNavigate} from 'react-router-dom';
import "./styles/login.css";
import 'font-awesome/css/font-awesome.min.css';

function Signup() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [isEmailValid, setIsEmailValid] = useState(true);
 const [isPasswordValid, setIsPasswordValid] = useState(true);
 const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
 const [errorMessage, setErrorMessage] = useState('');
 const navigate = useNavigate();
 const validateEmail = (value) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   setIsEmailValid(emailRegex.test(value));
 };

 const validatePassword = (value) => {
   setIsPasswordValid(value.length >= 8);
 };

 const validateConfirmPassword = (value) => {
   setIsConfirmPasswordValid(value === password);
 };

 const handleSignup = () => {
   if (name === '' || email === '' || password === '' || confirmPassword === '') {
     setErrorMessage('Please fill in all required fields.');
   } else if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    alert(`Hi ${name} Signup successful!,Redirecting to dashboard...`);
     setTimeout(() => {
       navigate('/dashboard');
     }, 1000);
   } else {
     setErrorMessage('Please check the fields for errors.');
   }
 };

 return (
   <div className="body">
     <div className="container" id="container">
       <div className="form-container sign-in-container">
         <form>
           <h1 className="h1">Sign Up</h1>
           {errorMessage && <span className="error-message">{errorMessage}</span>}
           <div className="social-container">
             <a href="#" className="social"><i className="fa fa-facebook"></i></a>
             <a href="#" className="social"><i className="fa fa-google"></i></a>
             <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
           </div>
           <span>or use your email for registration</span>
           <input
             type="text"
             name="name"
             placeholder="Name"
             onChange={(e) => setName(e.target.value)}
             required
           />
           <input
             type="email"
             name="email"
             placeholder="Email"
             onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value) }}
             className={isEmailValid ? '' : 'invalid'}
           />
           {!isEmailValid && <span className="error-message">Please enter a valid email address.</span>}
           <input
             type="password"
             name="password"
             placeholder="Password"
             onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value) }}
             className={isPasswordValid ? '' : 'invalid'}
           />
           {!isPasswordValid && <span className="error-message">Password should be at least 8 characters.</span>}
           <input
             type="password"
             name="confirmPassword"
             placeholder="Confirm Password"
             onChange={(e) => { setConfirmPassword(e.target.value); validateConfirmPassword(e.target.value) }}
             className={isConfirmPasswordValid ? '' : 'invalid'}
           />
           {!isConfirmPasswordValid && <span className="error-message">Passwords do not match.</span>}

           <button type="button" onClick={handleSignup}>Sign Up</button>
         </form>
       </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="h1">Welcome Trader!</h1>
              <p className="p">To keep connected with us please login with your personal info</p>
              <Link to="/login"><button>SIGN IN</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
