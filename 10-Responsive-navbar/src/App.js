import React, { useState, useRef, useEffect } from 'react';
import { socialMedia, links } from './data.js';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);
  const ulRef = useRef(null);

  const showNav = () => {
       setIsVisible(!isVisible);
  }

  useEffect(()=>{
  	const ulHeight = ulRef.current.getBoundingClientRect().height;
  	if(isVisible){
  	    navRef.current.style.height = ulHeight + "px";
  	}else{
  		navRef.current.style.height = '0px'
  	}
  }, [isVisible]);

  return (
    <div className="app">
      <header>
      	<div className="logo">Coding <span>Life</span></div>
      	<nav ref={navRef}>
      		<ul ref={ulRef}>
      			{
	            	links.map(link => (
	                    <li key={link.id}><a href={link.url}>{link.text}</a></li>
	            	))
                }
      		</ul>
      	</nav>
      	<div className="social__media">
            {
            	socialMedia.map(item => (
                    <a href={item.url} key={item.id}>{item.icon}</a>
            	))
            }
      	</div>
      	<div className="bars" onClick={showNav}>
      	    {isVisible ? <MdClose /> : <FaBars />}
      	</div>
      </header>
    </div>
  );
}

export default App;
