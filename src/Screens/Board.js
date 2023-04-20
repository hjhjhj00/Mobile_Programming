import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Button, } from 'react-native';

//import BoardBody from '../Components/BoardBody';
//import BoardHeader from '../Components/BoardHeader';

const style=StyleSheet.create({
    color: 'blue',
});

function Board(){
    return(
        <SafeAreaView>
        <View>
            <Text>
                This is Board.
            </Text>
        </View>
        </SafeAreaView>
    )
}


export default Board;