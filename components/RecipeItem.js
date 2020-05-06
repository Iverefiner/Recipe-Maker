import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeItem = ({ title, removeRecipeHandler, id }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => removeRecipeHandler(id)}>
				<View style={styles.listItem}>
					<Text>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	},
});

export default RecipeItem;
