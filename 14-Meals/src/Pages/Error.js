import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
	return (
		<div className="error-page">
		    <div>
			    <h1>404</h1>
			    <h3>Page not found</h3>
			    <Link to="/"><button>👈 Back to home</button></Link>
			</div>
		</div>
	)
}

export default Error