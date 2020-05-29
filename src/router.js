import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PlanningPage } from './pages/PlanningPage';
import { BirthdayBoyPage } from './pages/BirthdayBoyPage';
import { FriendWishesPage } from './pages/FriendWishesPage';
import { BirthdayPage } from './pages/BirthdayPage';
import { TravelPage } from './pages/TravelPage';
import { BuyPage } from './pages/BuyPage';
import { Login } from './auth/login/Login';
import { Register } from './auth/register/Register';

export const useRoute = (isAuthentication) => {
	if (!isAuthentication) {
		return (
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Redirect to="/login" />
			</Switch>
		);
	}
	return (
		<Switch>
			<Route exact path="/" component={PlanningPage} />
			<Route path="/birthday/birthdayBoy" component={BirthdayBoyPage} />
			<Route path="/birthday/:friend" component={FriendWishesPage} />
			<Route path="/birthday" component={BirthdayPage} />
			<Route path="/travel" component={TravelPage} />
			<Route path="/buy" component={BuyPage} />
			<Redirect to="/" />
		</Switch>
	);
};
