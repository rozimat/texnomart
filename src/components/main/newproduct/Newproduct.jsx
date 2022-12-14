import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Newproduct.scss";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScaleLeft } from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import newProduct from "../../../dummy-newproduct.json";

const Newproduct = () =>{
  
 

  return(
    <div className="newproduct">
     <div className="newproduct__batafsil">
      <h2 className="newproduct__batafsil--heading"> Yangi mahsulot</h2>
     </div>
      <div className="newproduct__carusel" >
        {
          newProduct.map((item, index)=>
              <div key={index} className="newproduct__carusel--card">
                <Link  className="newproduct__carusel--card__link">
                  <img className="newproduct__carusel--card__link--img"  src={item.img} alt="photo" />
                  <p className="newproduct__carusel--card__link--text">{item.name} </p>
                </Link>
                <span className="newproduct__carusel--card__price"> {item.price} </span>
                <div className="newproduct__carusel--card__wrapper">
                  <button className="newproduct__carusel--card__wrapper--btn">
                    <FiShoppingCart className="newproduct__carusel--card__wrapper--btn__icon"/>
                    Savatcha
                  </button>
                  <CiHeart className="newproduct__carusel--card__wrapper--heart" />
                  <FaBalanceScaleLeft className="newproduct__carusel--card__wrapper--balance"/>
                </div>
              </div>
            )
        }

      </div>
    </div>
  );
}
export default Newproduct;

