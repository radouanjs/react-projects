const baseUrl = "https://api.themoviedb.org/3";

export const movies = {
	nowPlaying: `${baseUrl}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,
	popular: `${baseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
	trending: `${baseUrl}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`,
	topRated: `${baseUrl}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
	searching: `${baseUrl}/search/movie?api_key=${process.env.REACT_APP_API_KEY}`,
}