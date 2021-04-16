import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaRegHeart, FaTimes} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';
import {useGlobalContext} from '../context';

function Aside() {
	const [value, setValue] = useState(0);
	const {isSidebarOpen, setIsSidebarOpen, setIsSearchOpen} = useGlobalContext();

    const activate = (e) => {
    	setValue(+e.target.id);
    }

	return (
		<aside className={isSidebarOpen && "show"}>
            <div className="close-btn" onClick={()=>setIsSidebarOpen(false)}><FaTimes /></div>
		    <div className="logo">
		        <h2>Meta Movies</h2>
		    </div>
		    <div className="search-icon" onClick={()=>setIsSearchOpen(true)}>
		        <button>🔎</button>
		        <input type="text" placeholder="Search movies"/>
		    </div>
			<nav className="nav-container">
				<ul className="nav-items">
					<li className="nav-item" onClick={()=>setIsSidebarOpen(false)}>
					    <Link to="/"  id="0" className={value===0&&"active"} onClick={activate}>Now Playing Movie</Link>
					</li>
					<li className="nav-item" onClick={()=>setIsSidebarOpen(false)}>
					    <Link to="/popular" id="1" className={value===1&&"active"} onClick={activate}>Popular Movies</Link>
					</li>
					<li className="nav-item" onClick={()=>setIsSidebarOpen(false)}>
					    <Link to="/top_rated" id="2" className={value===2&&"active"} onClick={activate}>Top Rated Movies</Link>
					</li>
					<li className="nav-item" onClick={()=>setIsSidebarOpen(false)}>
					    <Link to="/trending" id="3" className={value===3&&"active"} onClick={activate}>Trending Movies</Link>
					</li>
				</ul>
			</nav>
			<div className="info">
			    <p>Built with <FaRegHeart /> by radouan</p>
			</div>
		</aside>
	)
}

export default Aside