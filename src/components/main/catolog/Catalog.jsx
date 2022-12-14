import React from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import "./Catalog.scss";

const Catalog = () => {
  return(
    <div className="catalog">
      <BsUiChecksGrid className="catalog__icon"/>
      <span className="catalog__text">  Mahsulotlar  katalogi </span>
    </div>
  );
}
export default  Catalog;
