import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

class HttpRequest {
  constructor(BASE_URL, TIMEOUT) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT
    });
    // 拦截器
    this.instance.interceptors.response.use((res) => {
      return res.data;
    }, err => {
      return Promise.reject(err);
    })
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.instance.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.instance.request({ ...config, method: 'post' })
  }
}


const rqInstance = new HttpRequest(BASE_URL, TIMEOUT);
export default rqInstance;