import React from 'react';
import {useGlobalContext} from './context';

function Story({story}) {
	const {objectID, title, points, num_comments, url} = story;
	const {removeStory} = useGlobalContext();

	return (
		<div className="story">
			<p className="story-title">{title}</p>
			<ul>
				<li>{points} points</li>
				<li>{num_comments} comments</li>
			</ul>
			<div>
				<a href={url} id="story-url" target="blank">Read More</a>
				<button className="remove-btn" onClick={()=>removeStory(objectID)}>Remove</button>
			</div>
		</div>
	)
}

export default Story