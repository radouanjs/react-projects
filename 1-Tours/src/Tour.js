import react, {useState} from 'react';

const Tour = ({id, image, name, price, info, deleteTour}) => {
	const [readMore, setReadMore] = useState(true);
	return (
		<section className="tour" key={id}>
		    <div className="tour-image">
		        <img src={image} alt={name} />
		    </div>
		    <div className="tour-info">
		        <div className="title-and-price">
		            <p id="title">{name}</p>
		            <p id="price">${price}</p>
		        </div>
		        <div className="description">
		            <p>{readMore ? info : `${info.substring(0, 200)}...`}
		            <button onClick={() => setReadMore(!readMore)}>{readMore?"Show less":"Show more"}</button>
		            </p>        
		        </div>
		    </div>
		    <button id="delete" onClick={()=>deleteTour(id)}>not interesed</button>
		</section>
	)
}

export default Tour;