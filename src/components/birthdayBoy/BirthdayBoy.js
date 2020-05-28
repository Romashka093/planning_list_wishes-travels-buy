import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { currentBirthdayBoys } from '../../redux/operations';
import { BirthdayBoyList } from './BirthdayBoyList';

export function BirthdayBoy() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { category } = queryString.parse(history.location.search);
	const { birthday } = useSelector((state) => state.planning);

	console.log('birthday', birthday);

	useEffect(() => {
		dispatch(currentBirthdayBoys(category));
	}, []);

	return (
		<div>
			<h2>Birthday Page</h2>
			<BirthdayBoyList history={history} data={birthday.allBirthdayBoys} />
		</div>
	);
}
