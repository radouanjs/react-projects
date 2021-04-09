import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import SingleMeal from './Pages/SingleMeal';
import About from './Pages/About';
import Error from './Pages/Error';

function App() {
  return (
    <>
        <Router>
            <Switch> 
	            <Route exact path="/">
	                <Home />
	            </Route>
	            <Route path="/meal/:id">
	                <SingleMeal />
	            </Route>
	            <Route path="/about">
	               <About />
	            </Route>
	            <Route path="*">
	               <Error />
	            </Route>
            </Switch>
        </Router>
    </>
  );
}

export default App;
