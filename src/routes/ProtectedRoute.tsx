import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/context/AuthContext';

/**
 * ProtectedRoute component
 * 
 * This component protects routes that require authentication.
 * - If user is loading: shows nothing (you can add a loading spinner)
 * - If user is authenticated: renders the protected route
 * - If user is not authenticated: redirects to /login
 */
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated, 'isLoading:', isLoading);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render protected route
  return <Outlet />;
};

export default ProtectedRoute;


