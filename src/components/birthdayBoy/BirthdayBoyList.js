import React from 'react';
import { Link } from 'react-router-dom';
import BirthdatBoyCard from '../../ui/card/Card';

export const BirthdayBoyList = ({ data, history }) => {
	const handleClick = (birthdayBoy) => {
		history.push({
			pathname: `/birthday/${birthdayBoy.wishId}`,
			search: '?category=birthday',
			hash: `#birthdayBoy-${birthdayBoy.birthdayBoyName}`
		});
	};

	return (
		<div>
			<ul>
				{data.map((birthdayBoy) => {
					console.log('birthdayBoy', birthdayBoy);
					return <BirthdatBoyCard key={birthdayBoy.wishId} {...birthdayBoy} handleClick={handleClick} />;
				})}
			</ul>
			<Link to="/birthday/birthdayBoy">BirthdayBoy</Link>
		</div>
	);
};
