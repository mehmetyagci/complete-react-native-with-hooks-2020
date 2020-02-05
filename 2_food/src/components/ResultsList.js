import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
  //console.log ('ResultsList->title2:', title);
  //console.log ('ResultsList->results2:', results);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results Total: {results.length}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
