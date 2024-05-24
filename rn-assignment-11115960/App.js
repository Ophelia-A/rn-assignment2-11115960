import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.new}>My name is <Text style={styles.ophie}>Ophelia</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4A460',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new:{
    fontSize: 24
  },
  ophie: {
    fontWeight: 'bold',
  }
});
 