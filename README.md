<div align="center">
    <img src="App/Assets/Images/logo.png" alt="Logo" width="100%">
</div>

[![Release Date](https://img.shields.io/badge/Release%20Date-May%202020-green.svg)](https://shields.io/)
[![Version](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://shields.io/)
[![TypeScript Support](https://img.shields.io/badge/Typescript%20Support-Yes-green.svg)](https://shields.io/)
[![Dark Theme Setup](https://img.shields.io/badge/Dark%20Theme-Yes-green.svg)](https://shields.io/)
[![Firebase](https://img.shields.io/badge/Firebase-Yes-green.svg)](https://shields.io/)
[![Code-Push Integrated](https://img.shields.io/badge/CodePush%20Integrated-Yes-green.svg)](https://shields.io/)
[![Push Notifications](https://img.shields.io/badge/PushNotifications%20Integrated-Yes-green.svg)](https://shields.io/)
[![Redux](https://img.shields.io/badge/Redux-Yes-green.svg)](https://shields.io/)
[![Offline Storage](https://img.shields.io/badge/Data%20Persist-Yes-green.svg)](https://shields.io/)
[![Splash Screen](https://img.shields.io/badge/Splash%20Screen-Yes-green.svg)](https://shields.io/)
[![Multilingual Support](https://img.shields.io/badge/Multilingual%20Support-Yes-green.svg)](https://shields.io/)
[![Maintained](https://img.shields.io/badge/Maintained%3F-Yes-green.svg)](https://shields.io/)

# React-Native-Boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **a design optimized for developing reliable cross-platform mobile applications** through the separation of concerns between the UI and business logic. It is remarkably documented so that each section of code that lands in your application can be understood and used.

```
If you find this boilerplate useful then please give the repository a star
```

## Design

The main purpose of the design of the boilerplate is the separation of concerns

- **Presentational components are separated from Screens**.
  
- **State is managed using global [Redux](https://redux.js.org/) stores**.
  
- **Application side-effects (API calls, etc.) are separated from UI and state manipulation using [Redux Saga](https://redux-saga.js.org/)**.
  
## Content

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.62.3**)
- a [clear directory layout](#directory-layout) to provide a base design for your application
- [Redux](https://redux.js.org/) (v4.0.5) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.1.3) to separate side-effects and logic from state and UI logic
- [React Navigation 5](https://reactnavigation.org/) with a [`NavigationService`](App/Navigation/NavigationService.js) to handle routing and navigation in the app, with a splash screen set up by default
- [i18Next](https://www.i18next.com/) (v11.3.5) to facilitate the more than one language App
- [Firebase](https://rnfirebase.io/) (v5.6.0)
- [Push Notifications](https://rnfirebase.io/messaging/usage) integrated in the app
- [Code-Push](https://github.com/Microsoft/react-native-code-push) (v6.2.0) This plugin provides client-side integration for the CodePush service, allowing you to easily add a dynamic update experience to your React Native app(s).
- [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk) (v2.0.0) to facilitate the facebook login
- [google-signin](https://github.com/react-native-community/google-signin) (v4.0.0) to facilitate the google signin
- [Dark Theme Support](https://callstack.github.io/react-native-paper/theming.html) with a [`DarkTheme`](App/Utils/DarkTheme.js)
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Screens`](App/Screens): the application's screens
- [`App/Assets`](App/Assets): assets (image, audio files, language ...) used by the application
- [`App/Navigation`](App/Navigation): react navigation setting
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Actions`](App/Action): redux actions
- [`App/Reducers`](App/Reducers): redux reducers
- [`App/Api`](App/Api): application services, e.g. API clients
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Utils`](App/Utils): language and styles helpers for the application