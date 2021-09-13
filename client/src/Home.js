import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
	const [ users, setUsers ] = useState([]);
	useEffect(() => {
		fetch('/users').then((r) => r.json()).then((userData) => {
			setUsers(userData);
		});
	}, []);
	console.log(users);
	return <div>console.log('hello');</div>;
}

export default Home;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     fetch("/restaurants")
//       .then((r) => r.json())
//       .then(setRestaurants);
//   }, []);
