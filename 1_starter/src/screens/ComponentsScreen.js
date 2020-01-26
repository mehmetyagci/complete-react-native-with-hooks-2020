import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Bye there';
  // const greeting2 = {color: 'red'}; // Invalid, don't use object style declaration
  const greeting3 = <Text>Hello to you!</Text>;
  const myName = 'Mehmet YAĞCI';

  //return <Text style={{fontSize: 30}}>This is the components screen</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>Hi there!</Text>
      <Text>{greeting}</Text>
      {/*    <Text>{greeting2}</Text> */}
      {greeting3}
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
