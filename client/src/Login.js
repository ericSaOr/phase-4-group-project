import React, { useState } from 'react';

function Login() {
	const [ userName, setUserName ] = useState([]);
	const [ password, setPassword ] = useState([]);

	function handleSubmit() {
		console.log('FIRED!');
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={setUserName} type="text" name="Enter Username" />
				<input onChange={setPassword} type="text" name="Enter Password" />
				<input type="button" name="Submit" />
			</form>
		</div>
	);
}

export default Login;
