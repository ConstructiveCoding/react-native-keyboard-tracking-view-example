import { Navigation } from 'react-native-navigation';

import ScreenOne from './screenOne';
import ScreenTwo from './screenTwo';

export function registerScreens(store: Object, provider: Function) {
	Navigation.registerComponent('example.screenOne', () => ScreenOne);
	Navigation.registerComponent('example.screenTwo', () => ScreenTwo);
}
