import React from 'react';
import "./styles/login.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import Vide from '../components/videoback';
import axios from "axios";
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
export default function Login(){
    axios.defaults.withCredentials = true;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const navigate = useNavigate();
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(value));
      };
     
      const validatePassword = (value) => {
        setIsPasswordValid(value.length >= 8);
      };
      const [errorMessage, setErrorMessage] = useState('');  
      const handlelogin = () => {
        console.log(isEmailValid,isPasswordValid);
        if (email === '' || password === '') {
            setErrorMessage('Please fill in all required fields.');
            return;
        } else if (isEmailValid && isPasswordValid) {    
            axios.post('http://localhost:5000/login', { email, password })
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem('userId', res.data);
                    setTimeout(() => {
                        navigate('/home');
                    }, 1000);
                })
                .catch((err) => {
                    console.log(err);
                    setErrorMessage("Password or Email incorrect");
                });
        } else {
            setErrorMessage('Please check the fields for errors.');
        }
    };
     
    return(
        <div className="body">
            <Vide/>
        <div className="container" id="container">
       <div class="form-container sign-in-container">
<form>
   <h1 className="h1">Login</h1>
   <div className="social-container">
   <a href="#" class="social"><i class="fa fa-facebook"></i></a>
   <a href="#" class="social"><i class="fa fa-google"></i></a>
   <a href="#" class="social"><i class="fa fa-linkedin"></i></a>
</div>
<span>or use your account</span>
<input type="email"
  name="email"
  placeholder="Email"
  onChange={(e) => { setEmail(e.target.value); validateEmail(e.target.value) }}
  className={isEmailValid ? '' : 'invalid'}
  />
<input type="password" name="password" placeholder="Password"
onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value) }}
className={isEmailValid ? '' : 'invalid'}
/>
<a href="#">Forgot Your Password</a>
{errorMessage && <span className="error-message">{errorMessage}</span>}
<button type="button" onClick={handlelogin}>Log In</button>
</form>
</div>
<div className="overlay-container">
<div className="overlay">
   <div className="overlay-panel overlay-right">
       <h1 className="h1">Hello, Trader!</h1>
       <p className="p">Enter your details and start journey with us</p>
       <Link to='/signup'><button type="button">Sign up</button></Link>
   </div>
   </div>
   </div>
   </div>
   
   </div>
        );
}