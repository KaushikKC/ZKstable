/**
 * @format
 */
global.Buffer = global.Buffer || require('buffer').Buffer;
import {AppRegistry} from 'react-native';
import App from './App';
import "./globals";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
