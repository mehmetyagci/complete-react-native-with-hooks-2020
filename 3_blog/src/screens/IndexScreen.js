import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const blogPosts = useContext (BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        style={styles.flatListStyle}
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text style={styles.blogPostStyle}>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  flatListStyle: {
    backgroundColor: '#f5f5f5',
    color: 'blue',
  },
  blogPostStyle: {
    margin: 10,
    color: 'blue',
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

export default IndexScreen;
