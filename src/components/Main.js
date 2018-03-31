import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';
import About from './About';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Posts}/>
			<Route exact path="/posts/add" component={AddPost}/>
			<Route exact path="/posts/:id" component={PostDetails}/>
			<Route exact path='/about' component={About}/>
		</Switch>
	</main>
)

export default Main;