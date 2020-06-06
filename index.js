/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/EntryPoint';
import {name as appName} from './app.json';
import i18next from './App/I18next';

AppRegistry.registerComponent(appName, () => App);
