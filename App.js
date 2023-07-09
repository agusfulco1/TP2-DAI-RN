import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Cafe from './Cafe'
import React from 'react';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  
  return (
    <View style={styles.container}>
      <Image 
        style={styles.stretc}
        source={require('./logo.png')}
      />
      <Text style={styles.text}>Proba nuestro café</Text>
      <Cafe />
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
    height: "30%"
  },
  text: {
    fontWeight: 'bold'
  }
});
