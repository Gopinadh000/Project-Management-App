import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiInstance } from '../api/axios-setup/axiosInstance';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  companyId: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialCheck, setIsInitialCheck] = useState(true);
  const navigate = useNavigate();

  // Check if user is authenticated on mount and when needed
  const checkAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Call the /auth/me endpoint to check if user is authenticated
      // The cookie will be automatically sent because withCredentials: true is set in axios
      const response = await apiInstance.get('/auth/me');
      
      if (response.data?.status && response.data?.data?.user) {
        setUser(response.data.data.user);
      } else {
        setUser(null);
      }
    } catch (error: unknown) {
      const status = (error as { response?: { status?: number } })?.response?.status;
      const errorData = (error as { response?: { data?: { message?: string } } })?.response?.data;
      
      if (status === 401 || status === 403) {
        setUser(null);
      } else if (status) {
        setUser(null);
      } else {
       
        
        setUser((currentUser) => {
          return currentUser || null;
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await apiInstance.post('/auth/login', { email, password });
      
      if (response.data?.status && response.data?.data?.user) {
        setIsInitialCheck(false);
        setIsLoading(false);
        setUser(response.data.data.user);

        await new Promise((resolve) => setTimeout(resolve, 50));

        // Navigate to home
        navigate("/", { replace: true });
        return;
      }
      throw new Error(response.data?.message || 'Login failed');
    } catch (error: unknown) {
      setIsLoading(false);
      setUser(null);
      const errorMessage = error instanceof Error 
        ? error.message 
        : (error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Login failed';
      throw new Error(errorMessage);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await apiInstance.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    }
    setUser(null);

    requestAnimationFrame(() => {
      navigate("/login", { replace: true });
    });
  };

  useEffect(() => {
    if (isInitialCheck) {
      checkAuth().finally(() => {
        setIsInitialCheck(false);
      });
    }
  }, [checkAuth, isInitialCheck]);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

