import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../Screens/loginScreen';
import SignupScreen from '../Screens/signupScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}