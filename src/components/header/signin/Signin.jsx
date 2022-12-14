import {React, useState} from "react";
import { CiCircleRemove } from "react-icons/ci";
import "./Signin.scss";
import { Link } from "react-router-dom";
const Signin =()=>{

  return(
    <div className= "signin__madal ">
      <div className="signin__madal--wrapper">
        <div className="signin__madal--wrapper__top">
        <h4 className="signin__madal--wrapper__top--span"> SIGN IN</h4>
          <Link to="/" className="signin__madal--wrapper__top--btn"> 
        <CiCircleRemove className="signin__madal--wrapper__top--btn__icon"/> </Link>
        </div>
        <form className="signin__madal--wrapper__bottom" >
        <div>
            <h2>Name</h2>
            <input type="text" placeholder="Enter your name"/>
          </div>
          <div>
            <h2>Email</h2>
            <input type="text" placeholder="Enter your e-mail"/>
          </div>
          <div>
            <h2>Password</h2>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button  className="signin__madal--wrapper__bottom--btn" type="submit"> Login </button>
          <h3>Allaqachon siz akaunt olganmisiz? <Link to="/loginin"> Log in</Link></h3>
        </form>
      </div>
    </div>
  );
}
export default Signin;