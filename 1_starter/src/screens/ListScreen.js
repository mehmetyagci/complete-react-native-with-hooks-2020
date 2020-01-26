import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'},
    {name: 'Friend #10'},
    {name: 'Friend #11'},
    {name: 'Friend #12'},
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text>{item.name}</Text>;
        // item === { name: 'Friend #1' }
        // element === {item: name:'Friend #1'}, index:0 }
      }}
    />
  );
};

const styles = StyleSheet.create ({});

export default ListScreen;
