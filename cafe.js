import { StyleSheet, Text, View} from 'react-native';
import { Image } from 'expo-image';
export default function Cafe() {
    <View >
        <Image 
        style={styles.stretch}
        source="https://www.torani.com/sites/default/files/recipes/illustration/GettyImages-940535678-min.jpg"
        />
        <Text style={styles.mocha}>Mocha</Text>
    </View>
    
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
     contentFit: "Cover"
    },
    text: {
      fontWeight: 'bold'
    }
  });