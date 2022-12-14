import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Home from './home/Home';
import { useState } from "react";
import { Route, Routes} from "react-router-dom";

function App() {
  const [loginActive, setLoginActive]= useState(false);
 
  return (
    <div className='app container'>
      <Home/>
      <Main/>
     <Routes>
      <Route path="/" element={ <Footer/>}/>
     </Routes>
    </div>
  );
}

export default App;
