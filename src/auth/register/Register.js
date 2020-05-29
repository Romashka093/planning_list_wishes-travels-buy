import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singUpUser } from '../../redux/authentication/authOperations';

const initialState = {
	email: null,
	password: null,
	displayName: null
};

export const Register = () => {
	const [ state, setState ] = useState(initialState);
	const dispatch = useDispatch();
	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log('state', state);
		dispatch(singUpUser(state));
	};
	const handleChange = ({ target: { name, value } }) => {
		setState((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<form onSubmit={handleSubmit}>
			<input onChange={handleChange} placeholder="name" type="text" name="displayName" />
			<input onChange={handleChange} placeholder="email" type="email" name="email" />
			<input onChange={handleChange} placeholder="password" type="password" name="password" />
			<button type="submit">sing up</button>
		</form>
	);
};

export default Register;
