import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Buttons(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'yellow',
    height: '25%',
  },
  text: {
    fontSize: 30,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});