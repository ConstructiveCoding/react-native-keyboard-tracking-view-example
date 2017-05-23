/* @flow */
import React, { Component } from 'react';
import {
  Alert,
  Button,
  Image,
	ListView,
  Keyboard,
	StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class TableRow extends Component {
	focus = () => {
		console.log('FOCUS CALLED ON ROW ' + this.props.title);
		this.textInputRef.focus();
	}

	render() {
		return (
			<View style={styles.rowContainer}>
				<Text style={styles.rowTitle}>{this.props.title}</Text>
				<TextInput
					style={styles.rowInput}
					keyboardType='numeric'
					autoCorrect={false}
					ref={(ref) => this.textInputRef = ref}
					onBlur={this.props.onBlur}
					onFocus={this.props.onFocus}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rowContainer: {
		backgroundColor: 'white',
		height: 50,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rowTitle: {
		flex: 1,
		backgroundColor: 'white',
		textAlign: 'center'
	},
	rowInput: {
		backgroundColor: 'white',
		flex: 1,
		borderColor: 'black',
		borderWidth: 1,
		marginHorizontal: 10,
		paddingHorizontal: 10
	},
});