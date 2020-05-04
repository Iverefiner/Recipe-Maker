import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import RecipeList from './Screens/RecipeList';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Recipe Maker' }} />
				<Stack.Screen name="Recipes" component={RecipeList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
