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
    width:"70%",
    height:"35%",
  },
  stretch: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  mocha: {
    textAlign: 'center',
    backgroundColor: 'green',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    fontWeight: 'bold',
    height: 30,
    color: 'white',
    textAlignVertical: 'center'
  }
  });