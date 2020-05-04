import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = (title) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>Recipe Maker</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 50,
		marginTop: StatusBar.currentHeight,
		backgroundColor: '#f7287b',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerTitle: {
		color: 'black',
		fontSize: 50
	}
});

export default Header;
