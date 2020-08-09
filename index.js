/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
import i18next from './app/i18next';

AppRegistry.registerComponent(appName, () => App);
