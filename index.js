/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/EntryPoint';
import {name as appName} from './app.json';
import i18n from './App/Utils/i18nNext';

AppRegistry.registerComponent(appName, () => App);
