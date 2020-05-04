import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SingleRecipe from './SingleRecipe';



const RecipeList = ({}) => {
	const [ recipes, setRecipes ] = useState(fakeData);

	return (
		<View style={styles.screen}>
			<View>
				<FlatList
					keyExtractor={(item, index) => index.toString}
					data={recipes}
					renderItem={(item) => <SingleRecipe recipe={item} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	}
});

export default RecipeList;
