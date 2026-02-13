import axios from "axios";

console.log(import.meta.env.VITE_API_URL_LOCAL, "ausuasb");

const baseUrlValue =
  import.meta.env.VITE_INSTANCE_TYPE == "DEV"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_LOCAL;

export const apiInstance = axios.create({
  baseURL: baseUrlValue,
  withCredentials: true, // IMPORTANT: Send cookies with every request
  headers: {
    "Content-Type": "application/json",
  },
});


console.log(apiInstance, "apiNSTACNE");



// Response interceptor to handle 401 errors globally
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized - token expired or invalid
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - redirecting to login");
    }
    return Promise.reject(error);
  }
);
