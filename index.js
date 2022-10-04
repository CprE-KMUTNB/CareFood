/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './screen/HomeScreen';
import AppStack from './navbar/AppStack';

AppRegistry.registerComponent(appName, () => App);
