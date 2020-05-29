import React from 'react';
import { useSelector } from 'react-redux';

export const PlanningPage = () => {
	const { user: { nickName } } = useSelector((state) => state.user);
	return (
		<div>
			<h2>Hello {nickName}</h2>
		</div>
	);
};
