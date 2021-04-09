import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
	return (
		<nav>
		    <div className="logo"><Link to="/"><h1>ThemealDB</h1></Link></div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
