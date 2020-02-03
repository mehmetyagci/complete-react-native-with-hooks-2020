import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 2gIhDkSYT34hwBM3MLgk8rBtPzrdWp_WZ3nITM-8-ya-aiSOzjtmZ4NisJNpVmlR4oRn0ARDEozwi7MWxVUJN-1OL5x18d9Q827BKIYFHFIE6fV1AaslAa6Triw1XnYx',
  },
});
