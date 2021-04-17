import './App.css';
import Stories from './Stories';
import {useGlobalContext} from './context';

function App() {
    const {query, searchQuery} = useGlobalContext();
  
	return (
	    <div className="container">
	        <h1>Hacker News</h1>
	        <input type="text" value={query} 
	                           onChange={(e)=>searchQuery(e.target.value)}
	                           placeholder="Search anything"
	                           />
	        <Stories />
	    </div>
	);
}

export default App;
