import React from 'react';

import {View, StyleSheet} from 'react-native';

function Box0(){
    return <View style={styles.box}/>
}


const styles = StyleSheet.create({
    box:{
        width:64,
        height:64,
        backgroundColor:'blue',
    },
    rounded:{
        borderRadius : 16,
    }
});



function Box(props){
    return <View style={[styles.box, styles.rounded]}/>
}

export default Box;