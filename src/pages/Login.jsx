import React, { useState } from 'react';
import firebase from '../firebase/config';
import { withRouter } from 'react-router';

const Login = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const submitLoginForm = async () => {
		//axios to firebase
		try {
			const rst = await firebase.login(email, password);
			console.log('rst: ', rst);
			props.history.replace('home');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div>
				<label>Email</label>
				<input
					type="text"
					name="email"
					placeholder="Email Address"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div>
				<button type="submit" onClick={submitLoginForm}>
					Login
				</button>
			</div>
		</div>
	);
};

export default withRouter(Login);
