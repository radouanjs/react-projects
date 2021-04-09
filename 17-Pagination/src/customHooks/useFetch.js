import {useState, useEffect} from 'react';
import {paginate} from '../utils';
const url = "https://api.discountapi.com/v2/deals?api_key=mCcbUkkH";

export const useFetch = () => {
	const [data, setDeals] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchGames = async () => {
		
		const response = await fetch(url);
		const data = await response.json();

        setDeals(paginate(data.deals));
		setLoading(false);
	}

	useEffect(() => {
		fetchGames();
	}, [])

    return {data, loading};
}
