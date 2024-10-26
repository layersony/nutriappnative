import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  const { onPress, title = 'Get Started' } = false;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>NutriSearch<Text style={styles.span}>254</Text></Text>
      
      <Text style={styles.subheader}>Discover your perfect diet with NutriSearch 254</Text>

      <Text style={styles.subheader}>Welcome Maingi</Text>

      <Pressable style={styles.getStartedbutton} onPress={()=> navigation.navigate('Splash')}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({ 
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    paddingTop: 20,
  },
  header: {
    fontSize: 40,
    paddingBottom: 30,
  },
  span: {
    color: 'blue'
  },
  subheader: {
    paddingBottom: 30,
    fontSize: 18,
  },
  getStartedbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 200
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

{/* <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Search')}
      /> */}