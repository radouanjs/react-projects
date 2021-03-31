import react from 'react';
import Tour from './Tour';

const Tours = ({tours, deleteTour}) => {
	return (
        <div className="tours">
            {tours.map(tour =>{
                return <Tour id={tour.id} image={tour.image} name={tour.name} price={tour.price} info={tour.info} deleteTour={deleteTour}/>
              }
            )}
        </div>
	)
}

export default Tours;