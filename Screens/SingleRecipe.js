import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList } from 'react-native';

const SingleRecipe = ({ recipe }) => {
	return (
		<TouchableOpacity>
			<View style={styles.recipeBackground}>
				<Text style={styles.titleText}>{recipe.item.name}</Text>
				<View style={styles.listItem}>
					<Text>Ingredients:</Text>
					<FlatList
						data={recipe.item.ingredients}
						renderItem={({ item }) => <Text>{item}</Text>}
						listKey={(item, index) => 'ingredients' + index.toString()}
					/>
				</View>
				<View style={styles.listItem}>
					<Text>Equipment:</Text>
					<FlatList
						data={recipe.item.equipment}
						renderItem={({ item }) => <Text>{item}</Text>}
						listKey={(item, index) => 'equipment' + index.toString()}
					/>
				</View>
				<View style={styles.listItem}>
					<Text>Directions:</Text>
					<FlatList
						data={recipe.item.steps}
						renderItem={({ item }) => <Text>{item}</Text>}
						listKey={(item, index) => 'directions' + index.toString()}
					/>
				</View>
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
		borderWidth: 1,
		backgroundColor: '#d61c7f'
	},
	recipeBackground: {
		backgroundColor: '#f4f4f4',
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
		fontWeight: "900"
	}
});

export default SingleRecipe;
