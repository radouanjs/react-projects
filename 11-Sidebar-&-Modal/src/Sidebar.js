import React from 'react'
import {useGlobalContext} from './context';
import {links} from './data';

function Sidebar() {
	const {isSidebarOpened, closeSidebar} = useGlobalContext();

	return (
		<div className={`${isSidebarOpened ? "sidebar" : "sidebar hide-sidebar"}`}>
		    <div className="logo">
		        Coding Life
		    </div>
			<span className="close-sidebar-btn" onClick={closeSidebar}>×</span>
			<nav>
			<ul>
				{
					links.map(link=>(
                       <li key={link.id}>
                           <span>{link.icon}</span>
                           <a href={link.path}>{link.text}</a>
                       </li>
					))
				}
			</ul>
			</nav>
		</div>
	)
}

export default Sidebar