/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//useState
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
} from 'react-native';
//Button, Alert 추가 함.

//import comp01 from './Components/comp01';
//<comp01>태그 추가해서 component 사용.
//const[visible, setVisible] = useState(true);
//const onPress = () =>{
    //setVisible()
//}


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Box from './src/Components/Box';

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
  //setValue는 callback function
  return (
    <SafeAreaView>
    <View>
    <Text style={styles.text}>Hello! React-Native!</Text>
    </View>
    <Button title="Popup" onPress={()=>Alert.alert('Alert Test!')}/>
    <Text>{value}</Text>
    <Button title="Count" onPress={()=> {setValue(value+2)}}/>
    <Box/>
    </SafeAreaView>
  );
}
//Button 추가 여기다.
//<Button title="Toggle", onPress={onPress}/>
    //{visible ? <Box rounded={true}/> : null}

//Counter 추가
//function Counter(){
  //const [count,setCount]=useState(0);
  //return()

//}

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
