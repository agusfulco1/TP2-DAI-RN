import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import Cafe from './cafe.js'
export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.stretch}
        source="https://logos-world.net/wp-content/uploads/2022/01/Central-Perk-Logo.png"
      />
      <Text style={styles.text}>Probá nuestro café</Text>
      <Cafe></Cafe>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  stretch: {
    flex: 1,
    width: "100%",
    contentFit: "cover",
  },
  text: {
    fontWeight: 'bold'
  }
});
