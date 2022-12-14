import React from "react";
import "./Main.scss";
import Swiper from './swiper/Swiper';
import Public from "./public/Public";
import Catalog from "./catolog/Catalog";
import Product from "./productnew/Productnew";
import Newproduct from "./newproduct/Newproduct";
import Commerce from "./commerce/Commerce";
import Recommend from "./recommend/Recommend";
import Ilova from "./ilova/Ilova";
import Time from "./time/Time";
import {Route, Routes} from "react-router-dom";

const Main = ()=>{
  return(
    <div className="main">
      <Routes>
        <Route path="/" element={<Swiper/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Public/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Product/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Newproduct/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Commerce/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Recommend/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Ilova/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Time/>}/>
      </Routes>
    </div>
  );
}
export default Main;