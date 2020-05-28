import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BirthdayPage } from './pages/BirthdayPage';
import { PlanningPage } from './pages/PlanningPage';
import { FriendWishesPage } from './pages/FriendWishesPage';
import { TravelPage } from './pages/TravelPage';
import { BuyPage } from './pages/BuyPage';
import { BirthdayBoyPage } from './pages/BirthdayBoyPage';
import { useDispatch } from 'react-redux';
import { userSlice } from './redux/reducers/userReduser';
import css from './App.module.css';

const createUser = {
	nickName: 'Anna',
	info: {
		birthdayDate: '27-05-2020'
	}
};

function App(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userSlice.actions.getUser({ userInfo: createUser }));
	}, []);

	return (
		<main className={css.conteiner}>
			<ul>
				<li>
					<button
						onClick={() =>
							props.history.push({
								pathname: '/birthday',
								search: '?category=birthday'
							})}
					>
						Birthday
					</button>
				</li>
				<li>
					<button
						onClick={() =>
							props.history.push({
								pathname: '/travel',
								search: '?category=travel'
							})}
					>
						Travel
					</button>
				</li>
				<li>
					<button
						onClick={() =>
							props.history.push({
								pathname: '/buy',
								search: '?category=buy'
							})}
					>
						Buy
					</button>
				</li>
			</ul>
			<Switch>
				<Route exact path="/" component={PlanningPage} />
				<Route path="/birthday/birthdayBoy" component={BirthdayBoyPage} />
				<Route path="/birthday/:friend" component={FriendWishesPage} />
				<Route path="/birthday" component={BirthdayPage} />
				<Route path="/travel" component={TravelPage} />
				<Route path="/buy" component={BuyPage} />
			</Switch>
		</main>
	);
}

export default App;
