import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
  console.log ('ResultsList->title2:', title);
  console.log ('ResultsList->results2:', results);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>Results Total: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return <ResultsDetail result={item} />;
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
