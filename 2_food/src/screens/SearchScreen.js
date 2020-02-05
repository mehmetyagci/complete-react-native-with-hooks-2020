import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState ('');
  const [searchApi, results, errorMessage] = useResults ();

  // console.log ('SearchScreen->results:', results);

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    const filteredResult = results.filter (result => {
      return result.price === price;
    });
    // console.log (
    //   `filterResultsByPrice:${price},filteredResult:${filteredResult}`
    // );
    return filteredResult;
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi (term)}
      />
      {/* onTermSubmit={() => searchApi ()} */}
      {/* <Text>Search Screen</Text> */}
      {/* <Text> {term} results: </Text> */}
      {/*<Text> We have found {results.length} results </Text>*/}
      {errorMessage ? <Text>ErrorMessage: {errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice ('₺')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice ('₺₺')} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice ('₺₺₺')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
