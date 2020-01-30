import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View stlye={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  viewStyle: {
    borderWidth: 3,
    bordercolor: 'black',
  },
  textStyle: {
    borderWidth: 2,
    borderColor: 'red',
    marginVertical: 20,
    marginHorizontal: 30,
  },
});

export default BoxScreen;
