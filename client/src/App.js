import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Switch } from 'react-router';

function App() {
	return (
		<>
		{/* <Switch>
			<Route exact path="/reviews/:id"> */}
				<Home />
			{/* </Route>
		</Switch> */}
		</>
	);
}

export default App;
