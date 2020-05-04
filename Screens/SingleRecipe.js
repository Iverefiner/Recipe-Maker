import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const SingleRecipe = ({ recipe }) => {
	return (
		<TouchableOpacity>
			<View style={styles.listItem}>
			{/* {recipe.item.map(recipe =)} */}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});

export default SingleRecipe;
