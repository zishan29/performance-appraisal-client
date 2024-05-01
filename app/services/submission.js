import axios from 'axios';
const baseurl = 'https://performance-appraisal-api.adaptable.app';

const submit = (submissionData) => {
  const token = localStorage.getItem('token');
  const request = axios.post(`${baseurl}/submissions`, submissionData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.then((response) => response.data);
};

const getSubmission = (name, userId) => {
  const token = localStorage.getItem('token');
  const request = axios.get(`${baseurl}/submission`, {
    params: {
      name: name,
      userId: userId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.then((response) => response.data);
};

const editSubmission = (updatedSubmission) => {
  const token = localStorage.getItem('token');
  const request = axios.put(`${baseurl}/submission`, updatedSubmission, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.then((response) => response.data);
};

export default { submit, getSubmission, editSubmission };
