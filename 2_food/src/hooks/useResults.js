import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState ([]);
  const [errorMessage, setErrorMessage] = useState ('');

  const searchApi = async searchTerm => {
    // console.log ('Hi there!');
    try {
      //console.log ('searchApi');
      const response = await yelp.get ('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'istanbul',
        },
      });

      console.log ('response11:', response);
      //console.log ('response.data2:', response.data);
      //console.log ('response.data.businesses2:', response.data.businesses);
      setResults (response.data.businesses);
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
  useEffect (() => {
    searchApi ('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
