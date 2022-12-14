import React from "react";
import "./Footer.scss";
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer =()=>{
  return(
   <div className="foot ">
     <div className="footer">
      <div className="footer__up">
       <div className="footer__up--left">
          <p className="footer__up--left__text"> Savolingiz bormi? Unda qo'ng'iroq qiling!</p>
          <Link className="footer__up--left__number"> +99899 638 98 99 </Link>
          <div className="footer__up--left__wrapper">
            <div className="footer__up--left__wrapper--link">
              <FaFacebookF className="footer__up--left__wrapper--link__icon"/>
            </div>
            <div className="footer__up--left__wrapper--link"> 
              <FaTelegramPlane className="footer__up--left__wrapper--link__icon"/> 
            </div>
            <div className="footer__up--left__wrapper--link">  
              <FaInstagram className="footer__up--left__wrapper--link__icon"/>
            </div>
            <div className="footer__up--left__wrapper--link">
              <FaYoutube className="footer__up--left__wrapper--link__icon"/>
            </div>
          </div>
          <Link className="footer__up--left__link">
            <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg" alt="" />
          </Link>
          <Link className="footer__up--left__location">
            Do'konlarimizning mansillari Toshkent
          </Link>
          <Link  className="footer__up--left__wrapper--link__icons"><FaTelegramPlane/> Bonusingizni bilib oling </Link>
        </div>
        <div className="footer__up--right">
          <div  className="footer__up--right__wrap">
            <h3 className="footer__up--right__wrap--heading"> Kompaniya </h3>
            <Link  className="footer__up--right__wrap--link">B2B savdosi</Link>
            <Link  className="footer__up--right__wrap--link">Biz haqimizda</Link>
            <Link  className="footer__up--right__wrap--link">Yangiliklar va sharxlar</Link>
            <Link  className="footer__up--right__wrap--link">IMEI ni tekshirish</Link>
         </div>
         <div  className="footer__up--right__wrap">
          <h3 className="footer__up--right__wrap--heading"> Ma'lumotlar</h3>
          <Link  className="footer__up--right__wrap--link"> Bepul yetkazib berish</Link>
          <Link  className="footer__up--right__wrap--link"> Bonus tizimi</Link>
          <Link  className="footer__up--right__wrap--link"> Texnomartda ishlash</Link>
          <Link  className="footer__up--right__wrap--link"> Shaxsiy kabinet</Link>
          <Link  className="footer__up--right__wrap--link"> Aloqa raqami</Link>
         </div>
         <div  className="footer__up--right__wrap">
          <h3 className="footer__up--right__wrap--heading">Haridlarga yordam</h3>
          <Link  className="footer__up--right__wrap--link"> Muddatli to'lovga sotib olish</Link>
          <Link  className="footer__up--right__wrap--link"> Maxsulotni qaytarish</Link>
          <Link  className="footer__up--right__wrap--link"> Mahsulot uchun kafolat</Link>
          <Link  className="footer__up--right__wrap--link"> Ko'p so`raladigan savollar</Link>
          <Link  className="footer__up--right__wrap--link__icon"><FaTelegramPlane/> Bonusingizni bilib oling </Link>
         </div>
        </div>


       </div>
      <div className="footer__down">
        <p className="footer__down--text">
            2016 - 2022 (c) texnomart.uz. Barcha huquqlar himoyalangan.
            Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi.

        </p>
        <div className="footer__down--wrapperCard">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII=" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" />
        </div>
      </div>
    </div>
   </div>
  );
}
export default Footer;
