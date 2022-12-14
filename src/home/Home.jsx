import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Banner from './../components/banner/Banner';

const Home =()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element= { <Navbar/>}/>
      </Routes>
      <Routes>
        <Route path="/" element= {  <Header/>}/>
      </Routes>
      <Routes>
        <Route path="/" element= {  <Banner/>}/>
      </Routes>
    </div>

  );
}
export default Home;