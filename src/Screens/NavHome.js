import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import Buttons from '../Components/ScreenButton';
import Board from './Board';
import LoginScreen from './loginScreen';
import Events from './Events';
import Chat from './Chat';
//import BoardBody from '../Components/BoardBody';
//import BoardHeader from '../Components/BoardHeader';


const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  });

function NavHome({navigation}){
    return(
        <SafeAreaView>
        <View>
            <Text style={styles.text}>
                동행 모집 글
            </Text>
            <Buttons title="Board" onPress={() => navigation.navigate('Board')}/>
            <Text style={styles.text}>
                지금 뜨는 행사
            </Text>
            <Buttons title="Events" onPress={() => navigation.navigate('Events')}/>
            <Text style={styles.text}>
                채팅
            </Text>
            <Buttons title="Chat" onPress={() => navigation.navigate('Chat')}/>
            <Text style={styles.text}>
                마이페이지
            </Text>
            <Buttons title="Login" onPress={() => navigation.navigate('LoginScreen')}/>
            
        </View>
        </SafeAreaView>
    )
}


export default NavHome;