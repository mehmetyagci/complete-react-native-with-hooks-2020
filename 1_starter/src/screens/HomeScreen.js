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
        title="Go to Images Demo"
        onPress={() => navigation.navigate ('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate ('Counter')}
      />
      <Button
        title="Go to Counter2 Demo"
        onPress={() => navigation.navigate ('Counter2')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate ('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate ('Square')}
      />
      <Button
        title="Go to Square2 Demo"
        onPress={() => navigation.navigate ('Square2')}
      />
      <Button
        title="Go to Text Input Demo"
        onPress={() => navigation.navigate ('Text')}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate ('Box')}
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
