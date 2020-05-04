import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import RecipeInput from '../components/RecipeInput';

export default function HomeScreen() {
	const [ recipes, setRecipes ] = useState([]);
	const [ isAddMode, setIsAddMode ] = useState(false);

	const addRecipeHandler = (recipeTitle) => {
		if (recipeTitle) {
			setRecipes((currentRecipes) => [ ...currentRecipes, { id: Math.random().toString(), value: recipeTitle } ]);
			setIsAddMode(false);
		} else {
			alert('Enter a Recipe');
		}
	};

	const removeRecipeHandler = (recipeId) => {
		setRecipes((currentRecipes) => {
			return currentRecipes.filter((recipe) => recipe.id !== recipeId);
		});
	};

	const cancelRecipeAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<View>
				<Button title="Add New Recipe" onPress={() => setIsAddMode(true)} />
				<RecipeInput
					visible={isAddMode}
					onAddRecipe={addRecipeHandler}
					onCancel={cancelRecipeAdditionHandler}
				/>
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={recipes}
					renderItem={(itemData) => (
						<RecipeItem
							title={itemData.item.value}
							removeRecipeHandler={removeRecipeHandler}
							id={itemData.item.id}
						/>
					)}
				/>
			</View>
			<View>
				<Button title="Go To RecipeList" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		// padding: 50,
		flex: 1,
		backgroundColor: '#d61c7f'
	}
});
