import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const RecipeInput = ({ onAddRecipe, visible, onCancel }) => {
	const [ enteredRecipe, setEnteredRecipe ] = useState('');

	const recipeInputHandler = (enteredText) => {
		setEnteredRecipe(enteredText);
	};

	const addRecipeHandler = () => {
		onAddRecipe(enteredRecipe);
		setEnteredRecipe('');
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="New Recipe"
					style={styles.input}
					onChangeText={recipeInputHandler}
					value={enteredRecipe}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={onCancel} />
					</View>
					<View style={styles.button}>
						<Button title="Add" onPress={addRecipeHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '50%'
	},
	button: {
		width: '40%'
	}
});

export default RecipeInput;
