import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../firebase/config';
import { planningSlice } from '../redux/reducers/planningReduser';
import { selectors } from '../redux/selectors';

export const FriendWishesPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { category } = queryString.parse(history.location.search);

	const chooseBirthdayBoyWishes = useSelector((state) => selectors.chooseBirthdayBoyWishes(state));

	// -------- selectors --------
	// const state = useState((state) => state);
	// console.log(state);
	// console.log('getCurrentUser', selectors.getCurrentUser(state));
	// console.log('getCirrentUserNickName', selectors.getCirrentUserNickName(state));
	// console.log('getCirrentUserInfo', selectors.getCirrentUserInfo(state));
	// console.log('chooseBirthdayBoyWishes', selectors.chooseBirthdayBoyWishes());

	const { friend } = useParams();
	useEffect(() => {
		currentBirthdayBoyWishes(friend);
	}, []);

	const currentBirthdayBoyWishes = (id) => {
		firestore.collection(category).doc(id).collection('wishes').onSnapshot((doc) => {
			const wishes = doc.docs.map((d) => ({ ...d.data(), wishId: d.id }));
			dispatch(planningSlice.actions.getFriendWishes({ birthdayBoys: wishes }));
			console.log('wishes', wishes);
		});
	};

	console.log('choose birthday boy wishes', chooseBirthdayBoyWishes);

	return (
		<div>
			<h3>Friend wishes</h3>
			{chooseBirthdayBoyWishes.length &&
				chooseBirthdayBoyWishes.map(({ wish, wishId }) => <h2 key={wishId}>{wish}</h2>)}
		</div>
	);
};
