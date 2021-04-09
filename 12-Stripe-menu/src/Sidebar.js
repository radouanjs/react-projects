import React from 'react';
import {sublinks} from './data';
import {FaTimes} from 'react-icons/fa';
import {useGlobalContext} from './context';

function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();

	return (
		<div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
		    <div className="sidebar-content">
			    <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
			    <div className="links">
                    <ul>
                    	{
                    		sublinks.map(link => {
                    			const {page, links} = link;
                    			return (
                    			<li>
                    				<h4>{page}</h4>
                    				<div className="anchor">
	                    				{
	                    					links.map(link => {
	                    						const {label, icon, url} = link;
	                    						return (
                                                    <span>
                                                        {icon}<a href={url}>{label}</a>
                                                    </span>
	                    						)
	                    					})
	                    				}
                    				</div>
                    			</li>
                    		    )
                    		})
                    	}
                    </ul>
			    </div>
		    </div>
		</div>
	)
}

export default Sidebar
