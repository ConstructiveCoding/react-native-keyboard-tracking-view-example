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
	TouchableOpacity,
  View,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { KeyboardTrackingView } from 'react-native-keyboard-tracking-view';
import TableRow from '../components/tableRow';

export default class ScreenTwo extends Component {

	rowRefs = {}
  
  constructor(props) {
    super(props);
		
    const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return false;
			}
		});

		let data = [];

		for (let i = 0; i < 30; i++) {
			data[i] = { title: `${i}`}
		}

		this.state = {
			focusedRow: -1,
			dataSource: ds.cloneWithRows(data),
		};

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

	_navigatePrevious = () => {
		const newFocus = +this.state.focusedRow - 1;
		if (newFocus >= 0) {
			this.rowRefs[newFocus].focus();
		}
	}

	_navigateNext = () => {
		const newFocus = +this.state.focusedRow + 1;
		this.rowRefs[newFocus].focus();
	}

	_navigateToHome = () => {
		this.props.navigator.switchToTab({ tabIndex: 0 });
	}

	_renderRow = (rowData, sectionID, rowID, highlightRow) => {
		return <TableRow 
						ref={(ref) => this.rowRefs[rowID] = ref}
						key={rowID}
						title={rowData.title}
						onFocus={ () => {
							this.setState({ focusedRow: rowID });
						}}
					/>
	}

  _onNavigatorEvent = (event) => {
    switch(event.id) {
      case 'willAppear': {
        this.props.navigator.toggleTabs({
          to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
          animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
        break;
      }
      case 'didAppear': {
        break;
      }
      case 'willDisappear': {
        this.props.navigator.toggleTabs({
          to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
          animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
        break;
      }
      case 'didDisappear': {
        break;
      }
    }
  }

	render() {
		return (
      <View style={styles.container}>
				<Button title="Back To Home" onPress={this._navigateToHome}/>
        <ListView
					ref={(ref) => this.listViewRef = ref }
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					style={styles.listView}
				/>
				{/*<KeyboardTrackingView style={styles.navigationWrapper}>
					<Text style={styles.navigation}></Text>
					<TouchableOpacity onPress={this._navigatePrevious} style={styles.navButton}><Text>Prev</Text></TouchableOpacity>
					<TouchableOpacity onPress={this._navigateNext} style={styles.navButton}><Text>Next</Text></TouchableOpacity>
				</KeyboardTrackingView>*/}
      </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	listView: {
		alignSelf: "stretch"
	},
	navigationWrapper: {
		flexDirection: 'row',
		height: 40,
		alignSelf: "stretch",
		backgroundColor: '#CCCCCC'
	},
	navigation: {
		flex: 1,
		height: 30,
	},
	navButton: {
		flex: 0.5,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
	}
});