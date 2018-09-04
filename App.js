import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash'
import Login from './components/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up bye to start working on your app!</Text>
    //     <Text>Changes you make will automatically reload.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
