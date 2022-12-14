import React from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
const Navbar =()=>{
  return(
    <div className="navbar">
      <div className="navbar__wrapper">
        <select className="navbar__wrapper--selected">
          <option > Toshkent </option>
        </select>
        <div className="navbar__wrapper--links">
          <Link>Bizing dokonimiz</Link>
          <Link>B2B savdosi</Link>
          <Link>Muddatli to'lov asosida sotib olish</Link>
          <Link>To'lov usullari</Link>
          <Link>Maxsulotlar uchun kafolat</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;





