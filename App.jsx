import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import {Users} from './src/pages/Users';

const Navigation = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Navigation.Navigator>
      <Navigation.Screen name="Home"  component={Home} options={{ headerShown: false }}  />
      <Navigation.Screen name="Users" component={Users} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
}