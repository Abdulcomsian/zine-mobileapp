/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import {RNTwilioPhone} from 'react-native-twilio-phone';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// RNTwilioPhone.handleBackgroundState();
AppRegistry.registerHeadlessTask(
  'RNCallKeepBackgroundMessage',
  () =>
    ({name, callUUID, handle}) => {
      // Make your call here

      return Promise.resolve();
    },
);
