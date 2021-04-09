import React from 'react'

function Game({deal}) {
	const {title, provider_name, price, value, url, image_url, created_at, category_name} = deal;
	return (
		<div className="deal-container">
			<div className="deal-image">
			    <img src={image_url} alt=""/>
			</div>
			<div className="deal-info">
			    <h4 className="deal-title">{title}</h4>
			    <div className="deal-price">
			        <p className="discount">
			            <sup>$</sup><span className="price">{price}</span> <sub><del>${value}</del></sub>
			        </p>
			        <p className="category">{category_name}</p>
			        <p className="deal-provider">{provider_name}</p>
			    </div>
			    <a href={url} target="blank" className="deal-url">Shop</a>
			</div>
		</div>
	)
}

export default Game