/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Question:
// Why I use appName will show the Error:
//  ERROR  Invariant Violation: "main" has not been registered. This can happen if:
// * Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
// * A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes

// some answer: https://stackoverflow.com/questions/62649381/invariant-violation-main-has-not-been-registered
AppRegistry.registerComponent('main', () => App);
