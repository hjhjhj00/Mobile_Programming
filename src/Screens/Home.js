import React from 'react';

import {SafeAreaView,  ScrollView, View, Text, StyleSheet, Button, } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NavHome from './NavHome';
import Board from './Board';
import Chat from './Chat';
import Events from './Events';
import LoginScreen from './loginScreen';
const styles=StyleSheet.create({
    scrollView: {
        backgroundColor : 'white',
    },
    boldtext:{
        fontWeight: 'bolder',
        fontSize: 30,
    },
    text:{
        fontSize: 20,
    }
});

const MyBoard = createStackNavigator();
//const MyEvent=createStackNavigator();
function Home(){
    return(
        <MyBoard.Navigator initialRouteName='NavHome' screenOptions={{ headerShown: false }}>
        <MyBoard.Screen name='NavHome' component={NavHome} />
        <MyBoard.Screen name='Board' component={Board} />
        <MyBoard.Screen name='Chat' component={Chat} />
        <MyBoard.Screen name='Events' component={Events} />
        <MyBoard.Screen name='LoginScreen' component={LoginScreen} />
        </MyBoard.Navigator>
     
    )
}

export default Home;

/*
<SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <View style={{height:60, borderStyle: 'solid', }}>
                <Text style={styles.boldtext}>
                    동행
                </Text>
                </View>
                <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.boldtext}>
                    오픈채팅
                </Text>
                <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
                <Text style={styles.boldtext}>
                    커뮤니티
                </Text>
                <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
                <Text style={styles.boldtext}>
                    지금 뜨는 행사
                </Text>
                <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
           
      </ScrollView>
        </SafeAreaView>
        */