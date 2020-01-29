import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  // state === { counter: number}
  // action === {type: 'increment' || 'decrement' }

  switch (action.type) {
    case 'increase':
      return {...state, counter: state.counter + action.payload};
    case 'decrease':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
};

const CounterScreen2 = () => {
  const [state, dispatch] = useReducer (reducer, {counter: 0});
  console.log (state);

  const {counter} = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch ({type: 'increase', payload: COUNTER_INCREMENT});
          console.log (counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch ({type: 'decrease', payload: COUNTER_INCREMENT});
          console.log (counter);
        }}
      />
      <Text>Current Count:{counter}</Text>
      <Text>Current Count:{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({});

export default CounterScreen2;
