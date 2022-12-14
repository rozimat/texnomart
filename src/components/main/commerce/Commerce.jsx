import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Commerce.scss";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScaleLeft } from "react-icons/fa";
import {FiShoppingCart, FiArrowRight, FiArrowLeft} from "react-icons/fi";
import imagesComerce from "../../../dummy-commerce.json";


const Product = () =>{
  const productWrapperEl = useRef();
  const [ currentData, setCurrentData] = useState(0);
  

  
  const swipeRight = () => {
    if(currentData < imagesComerce.length - 1){
      setCurrentData(currentData =>  currentData + 1)
    }
    else{
      setCurrentData(0)
    }
}
const swipeLeft = () => {
    if(currentData > 0){
      setCurrentData(currentData => currentData - 1)
    }
    else{
      setCurrentData(imagesComerce.length -1)
    }
}
useEffect(() => {
  productWrapperEl.current.scrollLeft = currentData * 240;
}, [currentData])


  return(
    <div className="commerce">
     <div className="commerce__batafsil">
      <h2 className="commerce__batafsil--heading"> Xit savdo </h2>
      <Link className="commerce__batafsil--link"> Barchasini ko'rish <FiArrowRight/> </Link>
     </div>
      <div className="commerce__carusel" ref={productWrapperEl}>
      <button data-btn-type='left' className="commerce__btn" onClick={swipeLeft}> <FiArrowLeft/> </button>

        {
          imagesComerce.map((item, index)=>
              <div key={index} className="commerce__carusel--card">
                <span className="commerce__carusel--card__xit"> Xit savdo</span>
                <Link  className="commerce__carusel--card__link">
                  <img className="commerce__carusel--card__link--img"  src={item.img} />
                  <p className="commerce__carusel--card__link--text"> {item.name}</p>
                </Link>
                <span className="commerce__carusel--card__price">{item.price}</span>
                <div className="commerce__carusel--card__wrapper">
                  <button className="commerce__carusel--card__wrapper--btn">
                    <FiShoppingCart className="commerce__carusel--card__wrapper--btn__icon"/>
                    Savatcha
                  </button>
                  <CiHeart className="commerce__carusel--card__wrapper--heart" />
                  <FaBalanceScaleLeft className="commerce__carusel--card__wrapper--balance"/>
                </div>
              </div>
            )
        }
          <button data-btn-type='right' className="commerce__btn" onClick={swipeRight}> <FiArrowRight/> </button>
      </div>
    </div>
  );
}
export default Product;

