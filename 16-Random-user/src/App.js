import React, {useState, useEffect} from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
  FaFlag,
} from 'react-icons/fa';
import './App.css';
const url = "https://randomuser.me/api";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
    	setLoading(true)
     	const response = await fetch(url);
     	const data = await response.json();
        
	  	const {
	  		name: {first, last},
	  		email,
	  		dob: {date},
	  		location: {street: {number, name}, country},
	  		phone,
	  		picture: {large},

	    } = data.results[0];
	    const newUser = {
	    	name: `${first} ${last}`,
	    	birthday: date.substring(0, 9),
	    	email,
	    	address: `${name} ${number}`,
	    	phone,
	    	image: large,
	    	country
	    }
	    setUser(newUser)
	    setLoading(false);
    }
  useEffect(() => {
        fetchData()  
    }, [])

  return (
    <div className="container">
        <div className="user">
	        <div className="user-image">
	            <img src={user && user.image} alt={user && user.name} />
	            <div>
	            	<h4>{user && user.name}</h4>
	            	<p>{user && user.email}</p>
	            </div>
	        </div>
	        <div className="user-info">
	           <ul>
	           	    <li>
	           	        <span className="icon"><FaCalendarTimes /></span>
	           	        {user && user.birthday}
	           	    </li>
	           	    <li>
	           	        <span className="icon"><FaMap /></span>
	           	        {user && user.address}
	           	    </li>
	           	    <li>
	           	        <span className="icon"><FaPhone /></span>
	           	        {user && user.phone}
	           	    </li>
	           	    <li>
	           	        <span className="icon"><FaFlag /></span>
	           	        {user && user.country}
	           	    </li>
	           </ul>
	        </div>
	           <button className="btn" onClick={fetchData}>
	                {loading ? "Loading..." : "Random user"}
	           </button>
        </div>
    </div>
  );
}

export default App;
