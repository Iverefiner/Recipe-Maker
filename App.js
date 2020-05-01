import React from 'react';
import * as firebase from 'firebase';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
