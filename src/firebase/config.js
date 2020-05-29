import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAx5Nd5OlOlcDdNMo1y5rzvQgEazzq0x-E',
	authDomain: 'wishlist-180bb.firebaseapp.com',
	databaseURL: 'https://wishlist-180bb.firebaseio.com',
	projectId: 'wishlist-180bb',
	storageBucket: 'wishlist-180bb.appspot.com',
	messagingSenderId: '801252133564',
	appId: '1:801252133564:web:6f2f5cfdd40bb7d15edeb9'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
