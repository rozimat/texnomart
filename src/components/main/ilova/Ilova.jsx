import React from "react";
import { Link } from "react-router-dom";
import "./Ilova.scss";

const Ilova =()=>{
  return(
    <div className="ilova">
      
      <div className="ilova__left">
        <img src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="mobile" />
      </div>
      <div className="ilova__right">
        <h1 className="ilova__right--heading"> Ilovani yuklang </h1>
        <p className="ilova__right--text"> Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring! </p>
        <div className="ilova__right--imgWrapper">
          <img  className="ilova__right--imgWrapper__img" src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="QR" />
          <p  className="ilova__right--imgWrapper--text"> Kamerani yo'naltiring va Texnomart ilovasini bepul yuklang</p>
        </div>
        <Link to="https://play.google.com/store/apps/details?id=com.texnomart.app&pli=1" className="ilova__btn">
          <img src="https://texnomart.uz/_nuxt/img/play-market-kr.a90fe79.png" alt="" />
        </Link>
      </div>
     
    </div>
  );
}
export default Ilova;
