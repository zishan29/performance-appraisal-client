import axios from 'axios';
const baseurl = 'https://performance-appraisal-api.adaptable.app';

const signup = (userData) => {
  const request = axios.post(`${baseurl}/signup`, userData);
  return request.then((response) => response.data);
};

const login = (userData) => {
  const request = axios.post(`${baseurl}/login`, userData);
  return request.then((response) => response.data);
};

const verifyToken = (userData) => {
  const request = axios.post(`${baseurl}/verifyToken`, userData);
  return request.then((response) => response.data);
};

const getUserProgress = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(`${baseurl}/userProgress`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request.then((response) => response.data);
};

const getCategories = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(`${baseurl}/categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return request.then((response) => response.data);
};

const getUserScores = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(`${baseurl}/userScores`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.then((response) => response.data);
};

const getUserDetails = () => {
  const token = localStorage.getItem('token');
  const request = axios.get(`${baseurl}/userDetails`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.then((response) => response.data);
};

export default {
  signup,
  login,
  verifyToken,
  getUserProgress,
  getCategories,
  getUserScores,
  getUserDetails,
};
