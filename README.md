# React-Native-Boilerplate

<div align="center">
    <img src="app/assets/images/logo.png" alt="Logo" width="100%">
</div>

[![Release Date](https://img.shields.io/badge/Release%20Date-May%202020-green.svg)](https://shields.io/)
[![Version](https://img.shields.io/badge/Version-v2.0.0-green.svg)](https://shields.io/)
[![TypeScript Support](https://img.shields.io/badge/Typescript%20Support-Yes-green.svg)](https://shields.io/)
[![Dark Theme Setup](https://img.shields.io/badge/Theme%20Configured-Yes-green.svg)](https://shields.io/)
[![Firebase](https://img.shields.io/badge/Firebase-Yes-green.svg)](https://shields.io/)
[![Code-Push Integrated](https://img.shields.io/badge/Code%20Push%20Integrated-Yes-green.svg)](https://shields.io/)
[![Push Notifications](https://img.shields.io/badge/Push%20Notifications%20Configured-Yes-green.svg)](https://shields.io/)
[![Redux](https://img.shields.io/badge/Redux-Yes-green.svg)](https://shields.io/)
[![Offline Storage](https://img.shields.io/badge/Data%20Persist-Yes-green.svg)](https://shields.io/)
[![Splash Screen](https://img.shields.io/badge/Splash%20Screen-Yes-green.svg)](https://shields.io/)
[![Multilingual Support](https://img.shields.io/badge/Multilingual%20Support-Yes-green.svg)](https://shields.io/)
[![Maintained](https://img.shields.io/badge/Maintained%3F-Yes-green.svg)](https://shields.io/)

## Overview

This project is a versatile [React Native](https://facebook.github.io/react-native/) boilerplate designed to expedite the development of cross-platform mobile applications. It offers a well-structured architecture that optimizes the separation of concerns between the UI and business logic. The codebase is meticulously documented, making it easy for developers to understand and integrate into their projects.

**If you find this boilerplate useful, please consider giving the repository a star.**

## Architecture

The core principle of the boilerplate is the clear separation of concerns:

- **Presentational components** are distinct from **screens**.
- Global [Redux](https://redux.js.org/) stores manage **state**.
- Application side-effects (such as API calls) are isolated from UI and state manipulation using [Redux Saga](https://redux-saga.js.org/).

## Features

The boilerplate includes:

- [React Native](https://facebook.github.io/react-native/) (v**0.72.7**)
- [Redux](https://redux.js.org/) (v4.2.1) for state management
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v6.0.0) for state persistence
- [Redux Sagas](https://redux-saga.js.org) (v1.2.3) for managing side-effects and logic
- [React Navigation 6](https://reactnavigation.org/) with a [`NavigationService`](App/Navigation/NavigationService.js) for routing and navigation
- [i18Next](https://www.i18next.com/) (v23.7.6) for multilingual support
- [Firebase](https://rnfirebase.io/) (v18.6.1) integration
- Integrated push notifications
- [Code-Push](https://github.com/Microsoft/react-native-code-push) (v8.1.0) for dynamic updates
- [react-native-fbsdk-next](https://github.com/thebergamo/react-native-fbsdk-next) (v12.1.1) for Facebook login
- [google-signin](https://github.com/react-native-google-signin/google-signin) (v10.1.1) for Google Sign-In
- [Theme Support](https://callstack.github.io/react-native-paper/theming.html) with a [`DarkTheme`](App/Theme/DarkTheme.js) and [`LightTheme`](App/Theme/LightTheme.js)
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) (v3.3.0) configured by default
- [axios](https://github.com/axios/axios) (v0.19.2) for API calls
- [TypeScript](https://www.typescriptlang.org/) configured for React Native
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) pre-configured for React Native

## Directory Layout

The project follows a clear directory structure:

- [`app/components`](app/components): Presentational components
- [`app/containers`](app/containers): Application screens
- [`app/assets`](app/assets): Assets (images, audio files)
- [`app/i18next`](app/localization): Language setup and localization
- [`app/navigation`](app/navigation): React-Navigation settings
- [`app/redux/store`](app/redux/store): Redux stores (separated by module)
- [`app/redux/sagas`](app/redux/sagas): Redux sagas for each module
- [`app/configs`](app/configs): Configuration for staging and production servers
- [`app/services`](app/services): Services for API calls and SDK functions
- [`app/constants`](app/constants): Screen routes, endpoints, and design helpers
- [`app/theme`](app/theme): Light and Dark theme configurations
- [`app/utils`](app/utils): Common helper functions for design and styles

## Requirements

Node 8 or greater is required. For iOS development, a Mac and Xcode 9 or newer are necessary. Dependencies required by React Native can be found in the [Android development guide](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3) and [iOS development guide](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies).

## Getting Started

To use this boilerplate for a new project:

1. Clone this repository.
2. Remove the previous git history: `rm -rf .git/`
3. Install npm dependencies: `yarn` or `npm install`.
4. Rename the React Native project:
   - Without custom Bundle Identifier:
     - `yarn run rename -- <YourProjectName>` or `npm run rename -- <YourProjectName>` (default name is `boilerplate`).
   - With custom Bundle Identifier (Android only, for iOS use Xcode):
     - `yarn run rename -- <YourProjectName> -b <bundleIdentifier>` or `npm run rename -- <YourProjectName> -b <bundleIdentifier>` (default name is `boilerplate`).
5. [Facebook SDK Android/iOS Setup](https://github.com/thebergamo/react-native-fbsdk-next): Replace `FacebookAppID`, `FacebookClientToken`, and `FacebookLoginProtocolScheme` values in the `.env.staging` and `.env.production` files.
6. [Google Sign-In SDK

Android Setup](https://react-native-google-signin.github.io/): Place your `google-services.json` into the `Android/app` folder. 7. [Google Sign-In SDK iOS Setup](https://react-native-google-signin.github.io/): For iOS, drag your `GoogleService-Info.plist` to the Xcode project folder and replace `REVERSED_CLIENT_ID` in `.env.staging` and `.env.production`. 8. [Optional] [Codepush Android Setup](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md): Insert your App Center app_secret into `android/app/src/main/assets/appcenter-config.json`. In the App Center, generate production and staging deployment keys and place them in `.env.production` and `.env.staging` against `CodePushDeploymentKey_Android`. 9. [Optional] [Codepush iOS Setup](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-ios.md): Insert your App Center app_secret into `AppCenter-Config.plist`. In the App Center, generate production and staging deployment keys and place them in `.env.production` and `.env.staging` against `CodePushDeploymentKey_iOS`. 10. Create a new git repository for your project (`git init`) and commit.

## Running the Project

Once all the requirements are installed, set up and run the project:

1. Install dependencies: `yarn` or `npm install`.
2. For Android:
   - Generate a debug key only the first time:
     - `cd android/app`
     - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
     - `cd ../..`
   - Start the metro bundler: `yarn start` or `npm install`.
   - Run the Android application: `yarn run android:staging:release` or `npm run android:staging:release`.
3. For iOS:
   - `cd ios`
   - `pod install`
   - `cd ..`
   - Run the iOS application: `react-native run-ios`.

## Documentation

### [CodePush](https://microsoft.github.io/code-push/)

CodePush is an App Center cloud service that enables Apache Cordova and React Native developers to deploy mobile app updates directly to their users’ devices.

### [Google Sign-In SDK](https://react-native-google-signin.github.io/docs/install)

Google Sign-In is a secure authentication system that reduces the burden of login for your users, by enabling them to sign in with their Google Account.

### [Facebook SDK](https://github.com/thebergamo/react-native-fbsdk-next)

The Facebook SDK facilitates integration with Facebook, providing features such as Facebook Analytics, Facebook Login, Share and Send dialogs, App Events, and Graph API.

### [I18next](https://www.i18next.com/)

I18next is an internationalization-framework for JavaScript that goes beyond standard i18n features, providing a complete solution for localizing products across web, mobile, and desktop.

## License

This project is released under the [MIT License](LICENSE).

## **Why Choose This Boilerplate?**

### 1. Cutting-Edge Tech Stack:

Stay updated with React Native v0.72.7 for compatibility with the latest advancements.

### 2. Clear Architecture:

Well-structured codebase separates UI components and business logic for readability and maintainability.

### 3. React Navigation 6:

Seamless navigation with a `NavigationService` for intuitive routing.

### 4. Redux State Management:

Efficient state handling using Redux (v4.2.1) for predictability and scalability.

### 5. Persistent State:

Redux Persist (v6.0.0) ensures a seamless user experience by persisting state across sessions.

### 6. Redux Sagas for Side Effects:

Isolate side-effects and logic with Redux Sagas (v1.2.3) for clean and scalable code.

### 7. Multilingual Support:

i18Next (v23.7.6) facilitates effortless integration of multiple languages.

### 8. Firebase Integration:

Leverage Firebase (v18.6.1) for real-time database, authentication, and push notifications.

### 9. Dynamic Updates with Code-Push:

Keep the app current with Code-Push (v8.1.0) for hassle-free dynamic updates.

### 10. Social Media Authentication:

Facebook SDK (v12.1.1) and Google Sign-In (v10.1.1) streamline user authentication.

### 11. Themed UI:

Customize the user interface with built-in Dark and Light themes.

### 12. Effortless Splash Screen:

Pre-configured splash screen setup with [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) (v3.3.0).

### 13. Structured Directory Layout:

Well-organized folders for efficient project navigation.

### 14. Comprehensive Documentation:

Extensive readme and code comments for easy understanding and customization.

### 15. TypeScript Support:

Develop with confidence and catch errors early with TypeScript.

### 16. Code Quality Assurance:

Pre-configured [prettier](https://prettier.io/) and [eslint](https://eslint.org/) settings for consistent coding styles and error identification.

## Conclusion:

This boilerplate is a foundation for scalable, maintainable, and feature-rich cross-platform mobile applications. It prioritizes efficiency, reliability, and modern best practices, providing a development philosophy rather than just a codebase.
