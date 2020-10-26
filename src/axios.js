import axios from 'axios';

const instance = axios.create({
  //comment before hosting
    // baseURL: 'http://localhost:8000'
  //uncomment before hosting
  baseURL: 'https://fradoacademyendpoints.herokuapp.com',
});

export default instance;
