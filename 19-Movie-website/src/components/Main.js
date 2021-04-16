import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NowPlaying from '../pages/NowPlaying';
import Popular from '../pages/Popular';
import Trending from '../pages/Trending';
import TopRated from '../pages/TopRated';
import SingleMovie from '../pages/SingleMovie';
import Search from '../components/Search';
import {useGlobalContext} from '../context';

function Main() {
	const {isSearchOpen} = useGlobalContext();
	return (
			<main>
                {isSearchOpen && <Search />}
			    <Switch>
			        <Route exact path="/">
				        <NowPlaying />
				    </Route>
				    <Route path="/popular">
				        <Popular />
				    </Route>
				    <Route path="/trending">
				        <Trending />
				    </Route>
				    <Route path="/top_rated">
				        <TopRated />
				    </Route>
				     <Route path="/movie/:id">
				        <SingleMovie />
				    </Route>
			    </Switch>
			</main>
	)
}

export default Main