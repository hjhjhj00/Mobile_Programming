/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PropsWithChildren, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {
  Colors,
  //DebugInstructions,
  //Header,
  //LearnMoreLinks,
  //ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/Screens/Home';
import MyPage from './src/Screens/MyPage';
import Chat from './src/Screens/Chat';
import Events from './src/Screens/Events';
import Board from './src/Screens/Board';
import Find from './src/Images/Find.png';
import chatBox from './src/Images/chatBox.png';
import chatBubble from './src/Images/chatBubble.png';
import Event from './src/Images/Event.png';
import userAlt from './src/Images/userAlt.png';
//import Providers from './src/context/index';
import HomeStack from './src/context/homeStack';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [value, setValue] = useState(2);
  const CountFunc=()=>{
    setValue(value+1)
  }

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name = "Home" component={Home} options={{
    tabBarIcon: ({ size }) => (
      <Image source={Find} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />
      <Tab.Screen name ="Chat" component={HomeStack} options={{
    tabBarIcon: ({ size }) => (
      <Image source={chatBox} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />
      <Tab.Screen name="Board" component={Board} options={{
    tabBarIcon: ({ size }) => (
      <Image source={chatBubble} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />
      <Tab.Screen name="Events" component={Events} options={{
    tabBarIcon: ({ size }) => (
      <Image source={Event} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />
     <Tab.Screen name="MyPage" component={MyPage} options={{
    tabBarIcon: ({ size }) => (
      <Image source={userAlt} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

/*
 <Tab.Screen name="MyPage" component={MyPage} options={{
    tabBarIcon: ({ size }) => (
      <Image source={userAlt} style={{ width: size, height: size }} />
    ),
    headerShown: false,
  }} />*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    color: 'red',
  }
});

export default App;
