import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Recommend.scss";
import { CiHeart } from "react-icons/ci";
import { FaBalanceScaleLeft } from "react-icons/fa";
import {FiShoppingCart, FiArrowRight, FiArrowLeft} from "react-icons/fi";


const Product = () =>{
  const [productData , setProductData ] = useState([]);
  const productWrapperEl = useRef();
  const [ currentData, setCurrentData] = useState(0);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProductData(data))
  }, [])

  
  const swipeRight = () => {
    if(currentData < productData.length - 1){
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
      setCurrentData(productData.length -1)
    }
}
useEffect(() => {
  productWrapperEl.current.scrollLeft = currentData * 240;
}, [currentData])


  return(
    <div className="recommend">
     <div className="recommend__batafsil">
      <h2 className="recommend__batafsil--heading"> To'plamlar </h2>
      <Link className="recommend__batafsil--link"> Barchasini ko'rish <FiArrowRight/> </Link>
     </div>
     <button className="recommend__recom"> Tavsiya etaman </button>
      <div className="recommend__carusel" ref={productWrapperEl}>
      <button data-btn-type='left' className="commerce__btn" onClick={swipeLeft}> <FiArrowLeft/> </button>

        {
          productData.map((item, index)=>
              <div key={index} className="recommend__carusel--card">
                <span className="recommend__carusel--card__rec" >Tavsiya etaman</span>
                <Link  className="recommend__carusel--card__link">
                  <img className="recommend__carusel--card__link--img"  src="https://bosch-home.uz/image/cache/catalog/Malaya%20bitovaya/Sokovijimalki/mes25a0.1-450x600.jpg" alt="" />
                  <p className="recommend__carusel--card__link--text"> Televizor Samsun UE32T4500 Smart</p>
                </Link>
                <span className="recommend__carusel--card__price">3 000 000 sum </span>
                <div className="recommend__carusel--card__wrapper">
                  <button className="recommend__carusel--card__wrapper--btn">
                    <FiShoppingCart className="recommend__carusel--card__wrapper--btn__icon"/>
                    Savatcha
                  </button>
                  <CiHeart className="recommend__carusel--card__wrapper--heart" />
                  <FaBalanceScaleLeft className="recommend__carusel--card__wrapper--balance"/>
                </div>
              </div>
            )
        }
          <button data-btn-type='right' className="recommend__btn" onClick={swipeRight}> <FiArrowRight/> </button>
      </div>
    </div>
  );
}
export default Product;

