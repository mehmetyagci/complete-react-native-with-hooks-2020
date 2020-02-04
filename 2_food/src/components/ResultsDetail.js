import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  console.log ('ResultsDetail->result.name2:', result.name);

  return (
    <View style={styles.detailStyle}>
      <Text stlye={styles.detailTitle}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  detailStyle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  detailTitle: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
