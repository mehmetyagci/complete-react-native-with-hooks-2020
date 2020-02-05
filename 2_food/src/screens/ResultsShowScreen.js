import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import yelp from '../api/yelp';
import {ScrollView} from 'react-native-gesture-handler';

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
    <View style={styles.container}>
      <ScrollView>
        {/*        <Image style={styles.image} source={{uri: result.image_url}} />  */}
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.name}>Price</Text>
        <Text>{result.price}</Text>
        <Text style={styles.name}>Rating</Text>
        <Text>{result.rating}</Text>
        <Text style={styles.name}>Phone</Text>
        <Text>{result.phone}</Text>

        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    marginHorizontal: 15,
  },
  image: {
    height: 120,
    width: 'auto',
    borderRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
});

export default ResultsShowScreen;
