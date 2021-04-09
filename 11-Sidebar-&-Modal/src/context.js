import React, { createContext, useContext,useState } from 'react';

const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);
   
	const openModal = () => {
		setIsModalOpened(true);
	}
	const closeModal = () => {
		setIsModalOpened(false);
	}
	const openSidebar = () => {
		setIsSidebarOpened(true);
	}
	const closeSidebar = () => {
		setIsSidebarOpened(false);
	}

     return (
        <AppContext.Provider value={{isModalOpened,
        	                         closeModal,
        	                         openModal,
        	                         isSidebarOpened,
                                     openSidebar,
                                     closeSidebar
        	                    }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook
const useGlobalContext = () => {
	return useContext(AppContext);
}

export { useGlobalContext, AppProvider }