import React from 'react';
import { useHistory } from 'react-router-dom';

export const UnAuthenticationNav = () => {
	const history = useHistory();
	return (
		<nav>
			<button
				onClick={() =>
					history.push({
						pathname: '/login'
					})}
			>
				Login
			</button>

			<button
				onClick={() =>
					history.push({
						pathname: '/register'
					})}
			>
				Registration
			</button>
		</nav>
	);
};
