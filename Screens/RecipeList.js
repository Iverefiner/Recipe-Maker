import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SingleRecipe from './SingleRecipe';
import firebase from '../firebase';
import axios from 'axios';

const RecipeList = ({}) => {
	const [ recipes, setRecipes ] = useState({});

	useEffect(() => {
		const fetchRecipes = async () => {
			const db = firebase.firestore();
			const data = await db.collection('recipes').get();
			setRecipes(data.docs.map((doc) => doc.data()));
		};
		fetchRecipes();
		console.log(recipes);
	}, []);

	return (
		<View style={styles.screen}>
			<Text>Loading...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		backgroundColor: '#d61c7f'
	}
});

export default RecipeList;
