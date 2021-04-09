import React, {useRef, useState} from 'react';
import {FaRegComment} from 'react-icons/fa';
import {BiLike} from 'react-icons/bi';
import {HiDownload} from 'react-icons/hi';
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai';
import {MdFullscreen} from 'react-icons/md';

function Video({video}) {
	const [paused, setPaused] = useState(true);
	const {duration,picture_id,url,
		    views,likes,comments,downloads
		} = video;

		const videoRef = useRef(null);
		const controls = useRef(null);
		const play = () => {
			if(videoRef.current.paused) {
			    videoRef.current.play();
			    setPaused(false);
			}else {
				videoRef.current.pause();
				setPaused(true);
			}
		}

	return (
		<section className="video" 
		         onMouseOver={()=>controls.current.style.opacity = "1"}
		         onMouseOut={()=>controls.current.style.opacity = "0"}>
			<video src={url} ref={videoRef}
			       poster={`https://i.vimeocdn.com/video/${picture_id}_295x166.jpg`} 
			/>
			{paused && <div className="video-data">
			    <p>{views} Views</p>
			    <p>{comments} <FaRegComment/></p>
			    <p>{likes} <BiLike /></p>
			    <p>{downloads} <HiDownload /></p>
			    <p>{duration}</p>
			</div>}
			<div className="controls" onClick={play} ref={controls}>
			    {
			    	paused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />
			    }
			</div>
			<div className="fullsc" onClick={()=>videoRef.current.requestFullscreen()}>
			    <MdFullscreen />
			</div>
		</section>
	)
}

export default Video