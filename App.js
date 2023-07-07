import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Cafe from './Cafe'
import React, {useState, useEffect} from 'react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  
  return (
    <View style={styles.container}>
      <Image 
        style={styles.stretc}
        source={require('./logo.png')}
      />
      <Text style={styles.text}>Probá nuestro café</Text>
      <Cafe/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  stretc: {
    width: windowWidth,
    height: "50%"
  },
  text: {
    fontWeight: 'bold'
  }
});
