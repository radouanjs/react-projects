import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

function AppProvider({children}){
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
        <AppContext.Provider value={{
        	                            isSidebarOpen, 
        	                            setIsSidebarOpen,
        	                            isSearchOpen,
        	                            setIsSearchOpen
                                    }}>
        	{children}
        </AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export default AppProvider