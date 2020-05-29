import { auth } from '../../firebase/config';

export const singInUser = () => (dispatch, getState) => {};

export const singUpUser = ({ email, password, displayName }) => async (dispatch, getState) => {
	try {
		const user = await auth.createUserWithEmailAndPassword(email, password);
		const update = auth.currentUser;
		await update.updateProfile({
			displayName: displayName,
			photoURL: 'https://example.com/jane-q-user/profile.jpg'
		});

		console.log('user:', user);
	} catch (error) {
		console.log(error.code);
		console.log(error.message);
	}
};
