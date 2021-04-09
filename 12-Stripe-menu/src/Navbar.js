import React from 'react';
import logo from './images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';

function Navbar() {
    const {openSubmenu, openSidebar} = useGlobalContext();

    const displaySubmenu = (e) => {
    	const button = e.target;
    	const page = button.textContent;
    	const rect = button.getBoundingClientRect();
    	const buttonCenter = (rect.left + rect.right)/2;
    	openSubmenu(page, buttonCenter);
    }

	return (
		<nav>
			<div className="nav-header">
			    <div className="nav-logo"><img src={logo} alt="stripe-logo" /></div>
			    <div className="bars" onClick={openSidebar}><FaBars /></div>
			</div>
			<div className="nav-center">
			    <ul>
			    	<li>
			    	    <button onMouseOver={displaySubmenu}>Products</button>
			    	</li>
			    	<li>
			    	    <button onMouseOver={displaySubmenu}>Developers</button>
			    	</li>
			    	<li>
			    	    <button onMouseOver={displaySubmenu}>Company</button>
			    	</li>
			    </ul>
			</div>
			    <button className="signin-btn">Sign in ></button>
		</nav>
	)
}

export default Navbar