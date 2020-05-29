import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase/config';

export const AuthenticationNav = () => {
	const singOut = () => {
		auth.singOut();
	};

	const history = useHistory();
	return (
		<nav>
			<button
				onClick={() =>
					history.push({
						pathname: '/birthday',
						search: '?category=birthday'
					})}
			>
				Birthday
			</button>

			<button
				onClick={() =>
					history.push({
						pathname: '/travel',
						search: '?category=travel'
					})}
			>
				Travel
			</button>

			<button
				onClick={() =>
					history.push({
						pathname: '/buy',
						search: '?category=buy'
					})}
			>
				Buy
			</button>

			<button onClick={singOut}>Sing out</button>
		</nav>
	);
};
