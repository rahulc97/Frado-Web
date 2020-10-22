import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://reboothack12345.herokuapp.com',
  //comment before hosting
  //   baseURL: 'http://localhost:8000'
  //uncomment before hosting
  baseURL: 'https://fradoacademyendpoints.herokuapp.com',
});

export default instance;
