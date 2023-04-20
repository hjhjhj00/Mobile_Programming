import React from 'react';

import {SafeAreaView, View, Text, StyleSheet, Button, } from 'react-native';


const style=StyleSheet.create({
    color: 'blue',
});

function Chat(){
    return(
        <SafeAreaView>
        <View>
            <Text>
                This is Chat.
            </Text>
        </View>
        </SafeAreaView>
    )
}

export default Chat;