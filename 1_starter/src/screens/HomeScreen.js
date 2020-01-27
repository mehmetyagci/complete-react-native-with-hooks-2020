import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = props => {
  console.log ('HomeScreen->props.navigation', props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi MY! Work harder and clever.</Text>
      <Button
        onPress={() => props.navigation.navigate ('Components')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log ('TouchableOpacity presed')}>
        <Text>Go To List Demo</Text>
        <Text>Go To List Demo</Text>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
