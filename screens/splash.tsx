import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {FreshchatUser, Freshchat} from 'react-native-freshchat-sdk';

const logo = require('../assets/img/logo.png');
const SplashScreen = ({navigation}: {navigation: any}) => {
  const {loggedIn, detail} = useSelector(({USER}) => USER);
  const handleScollTab = React.useCallback(() => {
    navigation.replace(loggedIn ? 'BottomTab' : 'SignIn');
  }, [loggedIn, navigation]);
  useEffect(() => {
    if (loggedIn) {
      // console.log('detail', detail);
      // const freshchatUser = new FreshchatUser();
      // Freshchat.getUser(user => {
      //   var restoreId = user.restoreId;
      //   console.log('restoreId: ' + restoreId);
      //   const [fn, ln] = detail.name.split(' ');
      //   freshchatUser.firstName = fn;
      //   freshchatUser.lastName = ln;
      //   freshchatUser.email = detail.email;
      //   Freshchat.setUser(freshchatUser, error => {
      //     console.log(error);
      //   });
      // });

      // Freshchat.identifyUser(freshchatUser.email, null, error => {
      //   console.log(error);
      // });
    }
    setTimeout(() => {
      handleScollTab();
    }, 3000);
  }, [loggedIn, handleScollTab, detail]);
  return (
    <View style={styles.mainContainer}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoImage: {width: 450, resizeMode: 'contain'},
});
