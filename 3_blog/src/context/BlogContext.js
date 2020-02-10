import React, {useState, useReducer} from 'react';

const BlogContext = React.createContext ();

/* state or blogPosts */
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: `My blogpost #${state.length + 1}`}];
    default:
      return state;
  }
};

export const BlogProvider = ({children}) => {
  //const blogPosts = [{title: 'Blog Post #1'}, {title: 'Blog Post #2'}];
  const [blogPosts, dispatch] = useReducer (blogReducer, []);

  const addBlogPost = () => {
    dispatch ({type: 'add_blogpost'});
  };

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
