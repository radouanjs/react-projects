export const paginate = (deals) => {
	const dealsPerPage = 4;
	const numberOfPages = Math.ceil(deals.length / dealsPerPage);

	const newDeals = Array.from({length: numberOfPages}, (_,index) => {
		const start = index * dealsPerPage;
		return deals.slice(start, start + dealsPerPage);
	})

	return newDeals;
}