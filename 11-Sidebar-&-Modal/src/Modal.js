import React, {} from 'react';
import {useGlobalContext} from './context';

function Modal() {
    const {isModalOpened, closeModal} = useGlobalContext();

	return (
		<div className={`${isModalOpened ? "modal" : "modal hide-modal"}`}>
		    <div className="modal-content">
		        <span className="close-modal-btn" onClick={closeModal}>×</span>
		    </div>
		</div>
	)
}

export default Modal