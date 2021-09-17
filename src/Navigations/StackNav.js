import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/LogIn';

const Stack = createStackNavigator();

function StackNav() {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn' screenOptions={{headerShown:false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
      </NavigationContainer>
  );
}

export default StackNav;