import React, { createContext, useContext, useState} from 'react';

const AppContext = createContext();
const baseUrl = "https://opentdb.com/api.php?";
const mapId = {
    general: 9,
    sport: 21,
    computer: 18,
    music: 11,
}
const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [pref, setPref] = useState({});
    const [isPrefOpen, setIsPrefOpen] = useState(true);
    const [isQuestionOpen, setIsQuestionOpen] = useState(false);
    const [isScoreOpen, setIsScoreOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(15);
    const [index, setIndex] = useState(0);

    const fetchData = async (amount, category, difficulty) => {
    	try{
          const response = await fetch(`${baseUrl}amount=${amount}&category=${mapId[category]}&difficulty=${difficulty}&type=multiple`);
          const data = await response.json();
          if(data.results.length > 0) {
            setQuestions(data.results);
            setLoading(false);
          }
        }
        catch(error) {
        	console.log(error);
        	setLoading(false);
        }
    }
    React.useEffect(() => {
    	fetchData(pref.number, pref.category, pref.difficulty);
    }, [pref.number, pref.category, pref.difficulty]);

    return (
        <AppContext.Provider value={{setPref,
        	                         loading,
        	                         questions,
        	                         isPrefOpen,
        	                         isQuestionOpen,
        	                         isScoreOpen,
        	                         setIsQuestionOpen,
        	                         setIsScoreOpen,
        	                         setIsPrefOpen,
        	                         score,
        	                         setScore,
        	                         timer,
        	                         setTimer,
        	                         index,
        	                         setIndex,
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
