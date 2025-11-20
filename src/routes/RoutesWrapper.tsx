


import {useEffect} from 'react';
import { useNavigate, useLocation,  } from 'react-router-dom';
import App from '../App';
import AuthRoutes from './auth-routes/AuthRoutes';

const RoutesWrapper = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn =  true

  useEffect(() => {
        // Redirect to login page only if user is not logged in and not already on the login or register page
        if (!isLoggedIn && location.pathname !== '/login' && location.pathname !== '/register') {
            navigate('/login');
        }
    }, [isLoggedIn, navigate, location.pathname]);

    console.log(isLoggedIn , "islogin")

    return (
        <div className=''>
            {isLoggedIn ? <App /> : <AuthRoutes />}
        </div>
    );
};

export default RoutesWrapper
