import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';
export default function Cafe() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.stretch}
        source={require('./mocha.jpg')}
      />
      <Text style={styles.mocha}>Mocha</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:"60%",
    height:"40%",
  },
  stretch: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  mocha: {
    textAlign: 'center',
    backgroundColor: 'green',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    fontWeight: 'bold',
    height: 30,
    color: 'white',
    textAlignVertical: 'center'
  }
  });