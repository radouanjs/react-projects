import React, { createContext, useContext, useState } from 'react';
import {sublinks} from './data';

const AppContext = createContext();

function AppProvider({children}) {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [position, setPosition] = useState("46%");
	const [page, setPage] = useState({page: '', links: []});


	const openSubmenu = (text, position) => {
		const section = sublinks.find(link => link.page === text.toLowerCase());
		setIsSubmenuOpen(true);
		setPosition(position)
		setPage(section)
	}
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	}
	const openSidebar = () => {
		setIsSidebarOpen(true);
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	}

    return (
        <AppContext.Provider value={{isSubmenuOpen,
        	                         isSidebarOpen,
        	                         openSubmenu,
        	                         openSidebar,
        	                         closeSubmenu,
        	                         closeSidebar,
        	                         setPosition,
        	                         position,
        	                         page
        	                        }}>
        	{children}
        </AppContext.Provider> 
    )
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export default AppProvider;