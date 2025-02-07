import axios from 'axios';
import { BASE_URL } from './constants';


const requester = axios.create({
  baseURL: BASE_URL
});

export default requester;
