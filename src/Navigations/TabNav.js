import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );
}

export default TabNav;