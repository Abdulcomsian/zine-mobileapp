import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Mainheader from '../components/header';
async function fetchAccessToken() {
  const response = await fetch(
    'https://XXXXXX.ngrok.io/accessToken?identity=alice',
  );
  const accessToken = await response.text();

  return accessToken;
}
const CallScreen = ({navigation}: {navigation: any}) => {
  const {top} = useSafeAreaInsets();

  // ...

  // Options passed to CallKeep (https://github.com/react-native-webrtc/react-native-callkeep#setup)
  const callKeepOptions = {
    ios: {
      appName: 'TwilioPhone Example',
      supportsVideo: false,
    },
    android: {
      alertTitle: 'Permissions required',
      alertDescription: 'This application needs to access your phone accounts',
      cancelButton: 'Cancel',
      okButton: 'OK',
      additionalPermissions: [],
      // Required to get audio in background when using Android 11
      foregroundService: {
        channelId: 'com.example.reactnativetwiliophone',
        channelName: 'Foreground service for my app',
        notificationTitle: 'My app is running on background',
      },
    },
  };
  return (
    <View style={[styles.mainContainer]}>
      <Mainheader title="Call" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#333', fontWeight: 'bold', fontSize: 28}}>
          Coming Soon
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default CallScreen;
