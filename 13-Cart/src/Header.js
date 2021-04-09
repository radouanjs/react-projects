import React from 'react'
import {MdShoppingBasket} from 'react-icons/md';
import {useGlobalContext} from './context';

function Header() {
    const {amount} = useGlobalContext();

	return (
		<header>
			<div className="logo"><h2>Cart</h2></div>
			<div className="counter">
			    <span className="count">{amount}</span>
			    <span className="icon"><MdShoppingBasket/></span>
			</div>
		</header>
	)
}

export default Header