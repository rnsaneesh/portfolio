import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from "react";
import backgroundImage from './assets/backgrnd.avif';
import Exp from './FuntionalComponents/Exp';
import Navbar from './FuntionalComponents/Navbar'
import Home from './FuntionalComponents/Home'
import About from './FuntionalComponents/About'
import Contact from './FuntionalComponents/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: "100vh",
    width:"100%",
    overflow: 'visible',
  };
  const goRef= useRef(null);


  const goToContact=()=>{
     goRef.current.scrollIntoView({behavior : "smooth"});
  };
  return (
    <>
    <div style={backgroundStyle}>
     <div className="app-container"> 
    <Navbar></Navbar>

    <section id="home"><Home onScroll={goToContact} /></section>
    <section id="about"><About /></section>
    <section id="exp"><Exp /></section>
    <section  ref={goRef} id="contact"><Contact /></section>
  
</div>  
</div>
    
    </>
  );
}

export default App
