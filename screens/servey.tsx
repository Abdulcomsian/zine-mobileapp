import React, {useState, Fragment, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import APIs from '../lib/api';
import Mainheader from '../components/header';
import {WebView} from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";

const ServeyScreen = ({navigation}: {navigation: any}) => {
  const [videoArr, setVideoArr] = useState([]);

  useEffect(() => {
    APIs.GetVideo()
      .then(res => {
        if (res.success) {
          setVideoArr(res.data);
        }
      })
      .finally(() => {});
  }, []);
  return (
    <Fragment>
      <View style={styles.mainContainer}>
        <Mainheader title="Survey" navigation={navigation} />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'ios' ? 130 : 100,
            paddingTop: Platform.OS === 'ios' ? 50 : 30,
          }}>
          <View style={{ width: "100%", padding:20}}>
            <YoutubePlayer height={200} videoId={"O433Arp-l0E"} />
          </View>
          <View style={{ width: "100%", padding:20}}>
            <YoutubePlayer height={200} videoId={"WSJHAsnot54"} />
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
};
export default ServeyScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
