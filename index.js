/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './screen/HomeScreen';
import AppStack from './navbar/AppStack';
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import AuthStack from './navbar/AuthStack';

AppRegistry.registerComponent(appName, () => App);
