// services/apiService.js
import axios from "axios";

const BASE_URL = "https://984f868854d6.ngrok-free.app/api/v1";

export const login = (email, password) => {
  return axios.post(
    `${BASE_URL}/login`,
    { email, password },
    { withCredentials: true }
  );
};

export const sendSignupLink = (email) => {
  return axios.post(`${BASE_URL}/sendSignupLink`, { email });
};
