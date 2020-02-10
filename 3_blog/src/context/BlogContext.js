import React from 'react';

const BlogContext = React.createContext ();

export const BlogProvider = ({children}) => {
  //const blogPosts = [{title: 'Blog Post #1'}, {title: 'Blog Post #2'}];
  const [blogPosts, setBlogPosts] = useState ([]);

  const addBlogPost = () => {
    setBlogPosts ([
      ...blogPosts,
      {title: `My blogpost #${blogPosts.length + 1}`},
    ]);
  };

  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
