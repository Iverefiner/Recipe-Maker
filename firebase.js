import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCOUvgKUVHedah0GqIIpGPCHlfPTkCVLs4',
	authDomain: 'recipe-maker-521b9.firebaseapp.com',
	databaseURL: 'https://recipe-maker-521b9.firebaseio.com',
	projectId: 'recipe-maker-521b9',
	storageBucket: 'recipe-maker-521b9.appspot.com',
	messagingSenderId: '195317649281',
	appId: '1:195317649281:web:49650353bbdf9ad7846280',
	measurementId: 'G-HZQDXCWMBG'
};

// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp({ firebaseConfig });
}
// firebase.analytics();

export default firebase;
