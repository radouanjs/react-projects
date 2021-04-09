import React from 'react';
import phone from './images/phone.svg';
import {useGlobalContext} from './context';

function Hero() {
    const {closeSubmenu} = useGlobalContext();

	return (
		<section className="hero" onMouseOver={closeSubmenu}>
			<div className="text">
			    <h1>Payments infrastructure for the internet</h1>
			    <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
Start now﻿</p>
			</div>
			<div className="phone-image">
                <img src={phone} alt="phone" />
			</div>
		</section>
	)
}

export default Hero
