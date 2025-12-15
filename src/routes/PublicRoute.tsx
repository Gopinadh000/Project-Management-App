import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/context/AuthContext';

/**
 * PublicRoute component
 * 
 * This component handles public routes (login, register).
 * - If user is authenticated: redirects to home/dashboard
 * - If user is not authenticated: renders the public route
 */
const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

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

  // Redirect to home if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Render public route
  return <Outlet />;
};

export default PublicRoute;


