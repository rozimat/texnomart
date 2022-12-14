import React from "react";
import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbBox } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import  categories  from "../../dummy-headerCaregor.json";
import  navbarName  from "../../dummy-headerSrc.json";


const Header = () => {
  const [selectedOption, setSelectedOption] = useState("Barcha kategoriyalar");
  return (
    <div className="back">
      <div className="header">
        <div className="header__top">
          <img className="header__top--logo" src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="texnomart*" />
          <Link to="uzur" className="header__top--katalog"> <BsUiChecksGrid />  Katalog </Link>
          <button className="header__top--menu"> <FiMenu /></button>
          <div className="header__top--search">
            <select className="header__top--search__select" style={selectedOption.length < 7 ? { width: `${selectedOption.length * 10}px` } : { width: `${selectedOption.length * 7}px` }} onChange={(e) => { setSelectedOption(e.target.value) }}>
              {
                categories.map((cat, index) =>
                  <option value={cat} key={index}> {cat} </option>
                )
              }
            </select>
            <input className="header__top--input" type="text" />
            <div className="header__top--wrapper">
              <MdOutlineSettingsVoice className="header__top--wrapper__icon" />
            </div>
            <button><BiSearch className="header__top--btn" /></button>
          </div>
          <div className="header__top--wrapperIcon">
            <Link className="header__top--wrapperIcon__link">
              <TbBox className="header__top--wrapperIcon__link--icon" />
              <h5 className="header__top--wrapperIcon__link--text"> Buyurtma/holat </h5>
            </Link>
            <Link to="/login" className="header__top--wrapperIcon__link">
              <SlUser className="header__top--wrapperIcon__link--icon" />
              <h5 className="header__top--wrapperIcon__link--text"> Kirish </h5>
            </Link>
            <Link className="header__top--wrapperIcon__link">
              <FaBalanceScaleLeft className="header__top--wrapperIcon__link--icon" />
              <h5 className="header__top--wrapperIcon__link--text"> Taqqoslash </h5>
            </Link>
            <Link className="header__top--wrapperIcon__link">
              <AiOutlineHeart className="header__top--wrapperIcon__link--icon" />
              <h5 className="header__top--wrapperIcon__link--text"> Sevimlilar </h5>
            </Link>
            <Link className="header__top--wrapperIcon__link">
              <FiShoppingCart className="header__top--wrapperIcon__link--icon" />
              <h5 className="header__top--wrapperIcon__link--text"> Savatcha </h5>
            </Link>
          </div>
        </div>
        <div className="header__bottom">
          <button className="header__bottom--katalog"> <BsUiChecksGrid />  Katalog</button>
          <div className="header__bottom--box">
            {
              navbarName.map((navName, index) =>
                <>
                  <Link key={index} to="/" className="header__bottom--box__link"> {navName}</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>

  );
}
export default Header;