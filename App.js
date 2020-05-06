import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateRecipe from './Screens/CreateRecipe';
import RecipeList from './Screens/RecipeList';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="CreateRecipe">
				<Stack.Screen name="CreateRecipe" component={CreateRecipe} options={{ title: 'Make a Recipe!' }} />
				<Stack.Screen name="RecipeList" component={RecipeList} options={{ title: 'Your Recipes' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
