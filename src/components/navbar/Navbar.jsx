import React from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import {BiWorld} from "react-icons/bi";
import {GoLocation} from "react-icons/go";
import {BsTelephone } from "react-icons/bs";


const Navbar =()=>{
  return(
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper--location">
        <GoLocation className="navbar__wrapper--location__icon"/>
        <select className="navbar__wrapper--location__selected">
          <option > Toshkent </option>
          <option > Toshkent vil</option>
          <option > Samarqand vil </option>
          <option > Navoiy vil </option>

        </select>
        </div>
        <img className="navbar__wrapper--logo" src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="texnomart*" />
        <div className="navbar__wrapper--links">
          <Link>Bizing dokonimiz</Link>
          <Link>B2B savdosi</Link>
          <Link>Muddatli to'lov asosida sotib olish</Link>
          <Link>To'lov usullari</Link>
          <Link>Maxsulotlar uchun kafolat</Link>
        </div>
        <div className="navbar__wrapper--aloqa">
          <p>Aloqa markazi:</p>
          <BsTelephone className="navbar__wrapper--aloqa__icon"/>
          <span>+99899 638 98 99</span>
        </div>
        <div className="navbar__wrapper--lang">
          <BiWorld className="navbar__wrapper--lang__icon"/>
          <select className="navbar__wrapper--lang__select">
            <option>UZ</option>
            <option>УЗ</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Navbar;





