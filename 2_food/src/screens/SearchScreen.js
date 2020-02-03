import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState ('');
  const [results, setResults] = useState ([]);
  const [errorMessage, setErrorMessage] = useState ('');

  const searchApi = async searchTerm => {
    console.log ('Hi there!');
    try {
      //console.log ('searchApi');
      const response = await yelp.get ('/search', {
        params: {
          limit: 2,
          term: searchTerm,
          location: 'istanbul',
        },
      });
      //console.log ('response2:', response);
      //console.log ('response.data2:', response.data);
      //console.log ('response.data.businesses2:', response.data.businesses);
      setResults (Object.keys (response.data.businesses).length);
      // console.log (
      //   'response.data.businesses->keys:',
      //   Object.keys (response.data.businesses)
      // );
      // console.log (
      //   'response.data.businesses->values:',
      //   Object.values (response.data.businesses)
      // );
    } catch (err) {
      console.log (err);
      setErrorMessage ('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered. BAD CODE!
  // searchApi ('pasta');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi (term)}
      />
      {/* onTermSubmit={() => searchApi ()} */}
      <Text>Search Screen</Text>
      <Text> {term} results: </Text>
      <Text> We have found {results} results </Text>
      {errorMessage ? <Text>ErrorMessage: {errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
