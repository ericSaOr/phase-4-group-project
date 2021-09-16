import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import { Route, Switch } from 'react-router';

function App() {
	return (
		<>
		
				<Home />
				<Login />
		</>
	);
}

export default App;
