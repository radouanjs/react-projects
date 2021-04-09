import React from 'react';
import {useGlobalContext} from './context';

function Cart() {
	const {products, toggleAmount, removeProduct} = useGlobalContext();

	return (
		<section className="cart">
		    <ul>
				{
					products.map(product => {
						const {id, title, price, img, amount} = product;
						
							return (
		                       <li key={id}>
		                       	<div className="product-info">
		                       	   <img src={img} alt="product" />
		                       	   <div className="product-spec">
		                       	       <h4 className="product-name">{title}</h4>
		                       	       <p className="product-price">{`$${price}`}</p>
		                       	       <button className="remove-btn" 
		                       	               onClick={()=>removeProduct(id)}>remove</button>
		                       	   </div>
		                       	</div>
		                       	<div className="product-quantity">
		                       	    <button onClick={()=>toggleAmount(id, 'inc')}>+</button>
		                       	    <span>{amount}</span>
		                       	    <button onClick={()=>toggleAmount(id, 'dec')}>-</button>
		                       	</div>
		                       </li> 
							)
					    
					})
				}
			</ul>
		</section>
	)
}

export default Cart