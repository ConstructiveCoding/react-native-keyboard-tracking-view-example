/* @flow */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

export default class App {
	constructor() {
    Navigation.startTabBasedApp({
      tabs: createTabs(),
      tabsStyle: {
        tabBarBackgroundColor: '#363636',
        tabBarButtonColor: '#FFFFFF',
        tabBarSelectedButtonColor: '#B4D84B'
      },
      appStyle: {
        orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
      },
      portraitOnlyMode: true,
      animationType: 'none'
    });
	}
}

const createTabs = () => {
  let tabs = [
    {
      label: 'Home',
      screen: 'example.screenOne',
      title: 'Home'
    },
    {
      label: 'No Tab',
      screen: 'example.screenTwo',
      title: 'No Tabs'
    }
  ];

  return tabs;
}