import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View stlye={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>

    </View>
  );
};

const styles = StyleSheet.create ({
  viewStyle: {
    borderWidth: 3,
    bordercolor: 'black',
    alignItems: "stretch"  // default value
  },
  textStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default BoxScreen;
