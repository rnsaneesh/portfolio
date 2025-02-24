import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from "react";
import Exp from './FuntionalComponents/Exp';
import Navbar from './FuntionalComponents/Navbar'
import Home from './FuntionalComponents/Home'
import About from './FuntionalComponents/About'
import Contact from './FuntionalComponents/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  const goRef= useRef(null);


  const goToContact=()=>{
     goRef.current.scrollIntoView({behavior : "smooth"});
  };
  return (
    <>
     <div className="app-container"> 
    <Navbar></Navbar>

    <section id="home"><Home onScroll={goToContact} /></section>
    <section id="about"><About /></section>
    <section id="exp"><Exp /></section>
    <section  ref={goRef} id="contact"><Contact /></section>
    
    





</div>      
    </>
  );
}

export default App
