import axios from "axios";
import { useNavigate } from "react-router-dom";

export const apiInstance = axios.create({
  baseURL: "http://localhost:4002/api/v1/",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json", // Set default content type
    // 'Authorization': `Bearer ${localStorage.getItem('appuser-token')}`
  },

  //   withCredentials: true, //important to send cookies with requests,
});

export const useAuthInterceptor = () => {
  const navigate = useNavigate();

  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status == 401) {
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
};
