import React, {useState, useEffect} from 'react';
import Tours from './Tours';

const url="https://course-api.com/react-tours-project";

function App(){
   const [tours, setTours] = useState([]);
   const [isLoading, setLoading] = useState(true);
   
   const fetchTours = async () => {
   	    const response = await fetch(url);
   	    const tours = await response.json();
   	    setTours(tours);
   	    setLoading(false);
   }
 
    const deleteTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

   useEffect(() => {
       fetchTours();
   }, [])
   
   if(tours.length === 0){
   	  return <main><button onClick={()=> fetchTours()}>Refresh</button></main>
   }
   if(isLoading){
   	  return <main><h1>Loading...</h1></main>
   }
   
	return <Tours tours={tours} deleteTour={deleteTour}/>
}

export default App;