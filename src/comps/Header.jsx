import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase/config';

const Header = () => {
	return (
		<div className="title">
			<h1>WambaGram</h1>
			<h1>
				<Link onClick={() => firebase.logout()}>Log Out</Link>
			</h1>
			<h1>
				{firebase.getCurrentUsername() === null ? (
					<Link to="/auth/login">Login</Link>
				) : (
					<b>{firebase.getCurrentUsername()}</b>
				)}
			</h1>
			<h2>Your Pictures</h2>
			<p>Lost your mind into those beautiful pictures</p>
		</div>
	);
};

export default Header;
