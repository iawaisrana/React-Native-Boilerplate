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

- [React Native](https://facebook.github.io/react-native/) (v**0.62.3**)
- [Clear directory layout](#directory-layout) to provide a base design for your application
- [Redux](https://redux.js.org/) (v4.0.5) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.1.3) to separate side-effects and logic from state and UI logic
- [React Navigation 5](https://reactnavigation.org/) with a [`NavigationService`](App/Navigation/NavigationService.js) to handle routing and navigation in the app
- [i18Next](https://www.i18next.com/) (v11.3.5) to facilitate the more than one language App
- [Firebase](https://rnfirebase.io/) (v5.6.0)
- [Push Notifications](https://rnfirebase.io/messaging/usage) integrated in the app
- [Code-Push](https://github.com/Microsoft/react-native-code-push) (v6.2.0) This plugin provides client-side integration for the CodePush service, allowing you to easily add a dynamic update experience to your React Native app(s).
- [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk) (v2.0.0) to facilitate the facebook login
- [google-signin](https://github.com/react-native-community/google-signin) (v4.0.0) to facilitate the google signin
- [Dark Theme Support](https://callstack.github.io/react-native-paper/theming.html) with a [`DarkTheme`](App/Utils/DarkTheme.js)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) (v3.2.0) setup by default
- [axios](https://github.com/axios/axios) to make API calls (v0.19.2)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) pre configured for React Native

**Note:** Custom Drawer and Custom Bottom Tabs are also part of the app.

## Directory layout

- [`App/Components`](App/Components): Presentational components
- [`App/Screens`](App/Screens): The application's screens
- [`App/Assets`](App/Assets): Assets (image, audio files, language ...) used by the application
- [`App/Navigation`](App/Navigation): React-Navigation setting
- [`App/Sagas`](App/Sagas): Redux sagas
- [`App/Actions`](App/Action): Redux actions
- [`App/Reducers`](App/Reducers): Redux reducers
- [`App/Api`](App/Api): Application services, e.g. API clients
- [`App/Stores`](App/Stores): Redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Utils`](App/Utils): Language and Styles helpers for the application

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- For [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- For [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Using the boilerplate

To create a new project using the boilerplate:
- Clone this repository
- Remove the previous git history: `rm -rf .git/`
- Install the npm dependencies by running `yarn` or `npm install`
- `Without custom Bundle Identifier` rename the React Native project to your own project name: `yarn run rename -- <YourProjectName>` or `npm run rename -- <YourProjectName>` (the default name is `boilerplate`)
- `With custom Bundle Identifier (Android only. For iOS, please use Xcode)` rename the React Native project to your own project name: `yarn run rename -- <YourProjectName> -b <bundleIdentifier>` or `npm run rename -- <YourProjectName> -b <bundleIdentifier>` (the default name is `boilerplate`)
- **Android Google Setup:-** For push notifications and google signin to work in the android app place your `google-services.json` into `Android/app` folder
- **Android Facebook Setup:-** For facebook login to work in the android app please provide `facebook_app_id` and `fb_login_protocol_scheme` value in the `App/app/src/main/res/values/strings.xml`
- **iOS Google Setup:-** For push notifications and google signin to work in the iOS app drag your `GoogleService-Info.plist` to project folder in the xcode and place `REVERSED_CLIENT_ID` present in the `GoogleService-Info.plist` to the **Url Types** present in the **Info** tab
- **iOS Facebook Setup:-** For Facebook login to work in the iOS app please provide `FacebookAppID` value in the `Info.plist` and place `fb_login_protocol_scheme` to the **Url Types** present in the **Info** tab
- **[Optional] Code-Push Android Setup:-** For code-push to work in the android app please first [create app on app center for os="Android" and platform="React Native" ](https://appcenter.ms/) . After creating the app you will get app secret key, insert your app_secret into `android/app/src/main/assets/appcenter-config.json`. Go to the `Distribute` side menu on the app center, click code push, and generate production and staging deployment keys. Insert production deployment key into file `.env.production` present in the root directory and insert staging deployment key `.env.staging and .env`
- **[Optional] Code-Push iOS Setup:-** For code-push to work in the iOS app please first [create app on app center for os="iOS" and platform="React Native" ](https://appcenter.ms/) . After creating the app you will get the app secret key, insert your app_secret into `AppCenter-Config.plist`. Go to the `Distribute` side menu on the app center, click code push, and generate production and staging deployment keys. Insert production deployment key into `Build Settings/User-Defined/CodePushDeploymentKey/Release` present in the root directory and insert staging deployment key into `Build Settings/User-Defined/CodePushDeploymentKey/Debug`

You can now create a new git repository for your project (using `git init`) and create the first commit.