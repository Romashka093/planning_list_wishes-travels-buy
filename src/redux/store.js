import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './reducers/userReduser';
import { planningSlice } from './reducers/planningReduser';

// export const { actions } = planningSlice;

const rootReduser = combineReducers({
	[userSlice.name]: userSlice.reducer,
	[planningSlice.name]: planningSlice.reducer
});

export const store = configureStore({
	reducer: rootReduser
});
