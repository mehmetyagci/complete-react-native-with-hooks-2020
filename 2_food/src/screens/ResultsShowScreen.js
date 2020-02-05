import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState (null);

  const id = navigation.getParam ('id');

  console.log ('ResultsShowScreen->result:', result);

  const getResult = async id => {
    const response = await yelp.get (`/${id}`);
    console.log ('getResult1:', response);
    setResult (response.data);
  };

  useEffect (() => {
    getResult (id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>Results Show Id:{id}</Text>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
