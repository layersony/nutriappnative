import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './Homepage';
import SearchForm from './SearchForm';
import Splash from './Splash';
import { screensEnabled } from 'react-native-screens';

const Stack = createStackNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{backgroundColor: 'pink'}}>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown:false }}/>
        <Stack.Screen name="Search" component={SearchForm}/>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}






