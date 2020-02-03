import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({title, results}) => {
  
  console.log ('ResultsList->title:', title);
  console.log ('ResultsList->results:', results);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={result => result.id}
        renderItem={item => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
