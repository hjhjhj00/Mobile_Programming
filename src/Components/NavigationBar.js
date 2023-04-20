import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


const style=StyleSheet.create({
    color: 'blue',
});
e
function NavigationBar(){
    return(
        <View>
            <Text>
                This is Home.
            </Text>
        </View>
    )
}

//<NavigationContainer>
      //<Stack.Navigator initialRouteName='Home'>
        //<Stack.Screen name='Home' component={Home}/>
        //<Stack.Screen name='Game' component={Game}/>
      //</Stack.Navigator>
//<NavigationContainer/>


export default NavigationBar;