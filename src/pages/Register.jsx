import React, { useState } from 'react';
import firebase from '../firebase/config';
import { withRouter } from 'react-router';

const Register = (props) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ name, setName ] = useState('');

	const submitForm = async () => {
		//axios to firebase
		try {
			await firebase.register(email, password, name);
			props.history.replace('/auth/login');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div>
				<label>Name</label>
				<input type="text" name="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
			</div>

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
				<button type="submit" onClick={submitForm}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default withRouter(Register);
