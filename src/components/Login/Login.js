import React from 'react';
import './Login.css';

const Login = () => (

  <form action=".components/index.js">
  <div className="content"><centre>
    <label for="uname"><b>Username:<br/></b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/><br/>

    <label for="psw"><b>Password:<br/></b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/><br/>

    <button type="submit">Login</button></centre>
    
  </div>
  </form>
);

export default Login
