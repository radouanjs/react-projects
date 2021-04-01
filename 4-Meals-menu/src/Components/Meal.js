import react from 'react';

const Meal = ({id, title, price, img, desc})=>{
	return (
		<div className="meal" key={id}>
            <div className="meal-image">
                <img src={img} alt={title} />
            </div>
            <div className="info">
                <div className="title-and-price">
                    <p className="title">{title}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="description">
                    <p>{desc}</p>
                </div>
            </div>
		</div>
	)
}

export default Meal;
