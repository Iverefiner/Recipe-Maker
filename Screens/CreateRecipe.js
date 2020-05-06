import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import RecipeInput from '../components/RecipeInput';
// import RecipeList from './RecipeList';
import SingleRecipe from './SingleRecipe';

export default function CreateRecipe({ navigation }) {
	const [ recipes, setRecipes ] = useState([]);
	const [ isAddMode, setIsAddMode ] = useState(false);

	const addRecipeHandler = (recipeTitle) => {
		if (recipeTitle) {
			setRecipes((currentRecipes) => [ ...currentRecipes, { id: Math.random().toString(), value: recipeTitle } ]);
			setIsAddMode(false);
		} else {
			alert('Enter a name for your recipe!');
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
				<View>
					<Button title="Go to RecipeList" onPress={() => navigation.navigate('RecipeList')} />
				</View>

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
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
		backgroundColor: '#d61c7f',
		padding: 10,
		alignItems: 'center'
	}
});
