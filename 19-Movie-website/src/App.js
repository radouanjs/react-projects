import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './context';

function App() {
	const {setIsSidebarOpen, isSidebarOpen} = useGlobalContext();
  return (
  	<Router>
        <div className="container">
        {
	        !isSidebarOpen && 
	        <div className="open-btn" onClick={()=>setIsSidebarOpen(true)}>
                <FaBars />
	        </div>
	      }
            <Aside />
            <Main />
        </div>
    </Router>
  );
}

export default App;
