import React, {useRef, useEffect} from 'react';
import {useGlobalContext} from './context';

function Submenu() {
    const {isSubmenuOpen, 
    	   position, 
    	   page: {page, links},
    } = useGlobalContext();

    const submenu = useRef(null);

    useEffect(()=>{
        submenu.current.style.left = `${position}px`;
    }, [position])

	return (
		<div ref={submenu} className={
			                 `${isSubmenuOpen ? "submenu show-submenu" : "submenu"}`}>
			<h4>{page}</h4>
			<ul className="submenu-links">
				{
	              links.map((link, index) => {
	              	const {label, icon, url} = link;
	              	return (
	              	    <li key={index}>
	              		    <a href={url}><span>{icon}</span>{label}</a>
	                    </li>
	                )
	              }) 
				}
			</ul>
		</div>
	)
}

export default Submenu