import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({result}) => {
  console.log ('ResultsDetail->result.name2:', result.name);

  return (
    <View>
      <Image style={styles.image} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
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
