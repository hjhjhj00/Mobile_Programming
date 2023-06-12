import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Providers from '../context/index';

const style=StyleSheet.create({
    color: 'blue',
});

function MyPage(){
    return <Providers/>;
}

export default MyPage;