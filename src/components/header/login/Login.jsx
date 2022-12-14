import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login =()=>{
  return(
    <div className= "login__madal ">
      <div className="login__madal--wrapper">
        <div className="login__madal--wrapper__top">
          <h4 className="login__madal--wrapper__top-span">LOG IN</h4>
          <Link to="/" className="login__madal--wrapper__top--btn"> 
            <CiCircleRemove className="login__madal--wrapper__top--btn__icon"/>
          </Link>
        </div>
        <form className="login__madal--wrapper__bottom">
          <div>
            <h2>Email</h2>
            <input type="text" placeholder="Enter your E-mail" required />
          </div>
          <div>
            <h2>Password</h2>
            <input type="password" placeholder="Enter your Password"  required/>
          </div>
          <button  className="login__madal--wrapper__bottom--btn" type="submit" > Login </button>
          <h3>Allaqachon siz akaunt olganmisiz? <Link to="/login"> Sign in</Link></h3>
        </form>
      </div>
    </div>
  );
}
export default Login;