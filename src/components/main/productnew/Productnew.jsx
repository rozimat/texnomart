import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScaleLeft } from "react-icons/fa";
import {FiShoppingCart, FiArrowRight, FiArrowLeft} from "react-icons/fi";
import bestPrice from "../../../dummy-bestprice.json";

const Product = () =>{
  const [productData , setProductData ] = useState([]);
  const productWrapperEl = useRef();
  const [ currentData, setCurrentData] = useState(0);


  
  const swipeRight = () => {
    if(currentData < bestPrice.length - 1){
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
      setCurrentData(bestPrice.length -1)
    }
}
useEffect(() => {
  productWrapperEl.current.scrollLeft = currentData * 240;
}, [currentData])


  return(
    <div className="product">
     <div className="product__batafsil">
      <h2 className="product__batafsil--heading"> Zo'r narx </h2>
      <Link className="product__batafsil--link"> Barchasini ko'rish <FiArrowRight/> </Link>
     </div>
      <div className="product__carusel" ref={productWrapperEl}>
      <button data-btn-type='left' className="product__btn" onClick={swipeLeft}> <FiArrowLeft/> </button>

        {
          bestPrice.map((item, index)=>
              <div key={index} className="product__carusel--card">
                <span className="product__carusel--card__best">  Zo'r narx </span>
                <Link  className="product__carusel--card__link">
                  <img className="product__carusel--card__link--img"  src={item.img} alt="" />
                  <p className="product__carusel--card__link--text">{item.name} </p>
                </Link>
                <span className="product__carusel--card__price"> {item.price} </span>
                <div className="product__carusel--card__wrapper">
                  <button className="product__carusel--card__wrapper--btn">
                    <FiShoppingCart className="product__carusel--card__wrapper--btn__icon"/>
                    Savatcha
                  </button>
                  <CiHeart className="product__carusel--card__wrapper--heart" />
                  <FaBalanceScaleLeft className="product__carusel--card__wrapper--balance"/>
                </div>
              </div>
            )
        }
          <button data-btn-type='right' className="product__btn" onClick={swipeRight}> <FiArrowRight/> </button>
      </div>
    </div>
  );
}
export default Product;

