import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState ('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName (newValue)}
      />
      <Text>My name is:{name}</Text>
      {name.length < 5
        ? <Text style={styles.dangerText}>
            Your name must be longer than 5 characters{' '}
          </Text>
        : null}
    </View>
  );
};

const styles = StyleSheet.create ({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  dangerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
});

export default TextScreen;
