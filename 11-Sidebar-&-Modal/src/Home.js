import React from 'react';
import {useGlobalContext} from './context';

function Home() {
	const {openModal, openSidebar} = useGlobalContext();

	return (
		<main className="home">
			<div className="open-sidebar" onClick={openSidebar}>
			   <div></div>
			   <div></div>
			   <div></div>
			</div>
			<button className="open-modal-btn" onClick={openModal}>Show Modal</button>
		</main>
	)
}

export default Home