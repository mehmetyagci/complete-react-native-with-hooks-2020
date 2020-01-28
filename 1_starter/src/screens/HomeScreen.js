import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  console.log ('HomeScreen->navigation', navigation);
  return (
    <View>
      <Text style={styles.text}>Hi MY! Work harder and clever.</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate ('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate ('List')}
      />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate ('Image')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate ('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
