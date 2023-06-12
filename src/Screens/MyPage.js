import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {StyleSheet} from 'react-native';
//import Providers from '../context/index';
import LoginScreen from './loginScreen';


const style=StyleSheet.create({
    color: 'blue',
});


const MyStack = createStackNavigator();
function MyPage(){

    return (
     <MyStack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <MyStack.Screen name='Login' component={LoginScreen} />
    </MyStack.Navigator>
    );}

export default MyPage;