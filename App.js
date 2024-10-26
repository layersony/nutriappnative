import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import components
import Navbar from './components/Navbar'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Navbar style={styles.navbar}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  navbar: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});
