import axios from "axios";

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4002/api/v1/",
  withCredentials: true, // IMPORTANT: Send cookies with every request
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle 401 errors globally
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized - token expired or invalid
    if (error.response && error.response.status === 401) {
      // Clear any local auth state if needed
      // The actual redirect will be handled by ProtectedRoute or AuthContext
      console.error("Unauthorized access - redirecting to login");
    }
    return Promise.reject(error);
  }
);
