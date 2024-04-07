import axios from "axios";

// create axios instance
const instance = axios.create({
  // specifies the base URL for all the requests made by this Axios instance
  baseURL: "http://localhost:5050",
  // If the server does not respond within this time frame, the request will be aborted.
  timeout: 20000,
});

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
