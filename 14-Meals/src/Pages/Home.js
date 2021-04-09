import React, {useRef} from 'react';
import Navbar from '../Components/Navbar';
import Meals from '../Components/Meals';
import Loading from '../Components/Loading';
import {useGlobalContext} from '../context';

function Home() {
    const {meals, handleInput, loading} = useGlobalContext();
    const input = useRef();
    React.useEffect(()=>{
        input.current.focus();
    }, [])
	return (
		<div>
		    <Navbar />
		    <div className="search">
		        <input ref={input} type="text" 
                       placeholder="Search Your Favorite Meal" 
                       onChange={handleInput}/>
		    </div>
            <main>
                <h1>Meals</h1>
                {
                	loading ? <Loading /> : meals.length < 1 ?
                    <h1>No Cocktails Matched Your Search Criteria</h1> :
                    <Meals /> 
                }
            </main>
		</div>
	)
}

export default Home
