import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveHeight} from '../../Components/Responsive';
import PushController from '../../Components/Push';
import messaging from '@react-native-firebase/messaging';

//pass the login type to push controller then inside it,
//chedk if type == google then subscribe to topic google, send push.

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      imageUrl: null,
      type: null,
      orientation: 'portrait',
    };
  }
  componentDidMount() {
    this.getToken();
    console.log(' gett value s...  ' + Platform.OS);
    this.getValues();
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      console.log(width + '  ' + height + Platform.OS);
      if (width < height) {
        this.setState({
          orientation: 'portrait',
        });
      } else {
        this.setState({
          orientation: 'landscape',
        });
      }
      console.log(' here ... ' + this.state.orientation);
    });
  }

  componentWillUnmount() {
    // Dimensions.remove('change');
  }

  getValues = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      const image = await AsyncStorage.getItem('@image');
      const type = await AsyncStorage.getItem('type');
      if (value !== null) {
        this.setState({
          name: value,
          imageUrl: image,
          type: type,
        });
      }
    } catch (e) {}
  };

  async getToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      // user has a device token set it into store
      await AsyncStorage.setItem('fcmToken', fcmToken);
    } else {
      console.log(' elssse  ***');
      // NotificationService.error(constant.error, 'Could not get the FCM token');
    }
  }

  render() {
    return (
      <View style={{flex: 1, marginBottom: responsiveHeight(9)}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{flex: 1}}>
            <PushController type={this.state.type} />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.homeText}>Hello {this.state.name}</Text>
                <Text style={styles.welcome}>Welcome Back!</Text>
              </View>
              <Image
                source={{
                  uri: `${this.state.imageUrl}`,
                }}
                style={styles.imageBox}
              />
            </View>
            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.newBox1
                  : styles.newBox2
              }>
              <ScrollView contentContainerStyle={styles.section1}>
                <View style={styles.box4}>
                  <View style={styles.cubes}>
                    <Text> Box 1</Text>
                  </View>
                  <View style={styles.box5}>
                    <Text>Box 2</Text>
                  </View>
                </View>
                <View style={styles.box6}>
                  <View style={styles.cube2}>
                    <Text>Box 3</Text>
                  </View>
                </View>
              </ScrollView>

              <ScrollView
                contentContainerStyle={[
                  this.state.orientation === 'portrait'
                    ? styles.addTop
                    : styles.addLeft,
                  styles.section2,
                ]}>
                <Text style={styles.top}> Section 2</Text>
                <View style={styles.circle1}>
                  <Text>Circle 1</Text>
                </View>
                <View style={styles.circle2}>
                  <Text>Circle 2</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
