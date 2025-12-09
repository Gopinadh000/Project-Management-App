import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.APP_JWT_TOKEN || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '5m'; // 5 minutes for cookies
const COOKIE_NAME = 'auth_token';
import { ReE } from '../../utils/Res.utils.js';

export const generateJWT = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        companyId: user.company_id
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};


export const verifyJWT = async (token) => {
    try {
        return await jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }
};


export const decodeJWT = (token) => {
    try {
        return jwt.decode(token);
    } catch (error) {
        throw new Error('Invalid token');
    }
};



export const jwtTokenAuthorization = (req, res, next) => {
    const { authorization } = req.headers;

    // Check if authorization header exists
    if (!authorization) {
        return ReE(res, { message: 'Authorization token required' }, 401);
    }

    // Extract token from "Bearer TOKEN" format
    const parts = authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return ReE(res, { message: 'Invalid authorization format. Expected: Bearer <token>' }, 401);
    }

    const token = parts[1];

    // Check if token exists
    if (!token) {
        return ReE(res, { message: 'Token is missing' }, 401);
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach decoded user data to request object for use in controllers
        req.user = decoded;
        req.userId = decoded.id;
        req.userEmail = decoded.email;
        req.userRole = decoded.role;
        req.companyId = decoded.companyId;

        console.log(req.user , "req.user");

        return next();
    } catch (error) {
        // Handle different JWT error types
        if (error.name === 'TokenExpiredError') {
            return ReE(res, { message: 'Token has expired' }, 401);
        } else if (error.name === 'JsonWebTokenError') {
            return ReE(res, { message: 'Invalid token' }, 401);
        } else if (error.name === 'NotBeforeError') {
            return ReE(res, { message: 'Token not active yet' }, 401);
        } else {
            return ReE(res, { message: 'Invalid or expired token' }, 401);
        }
    }
}




// export const setAuthCookie = (res, user) => {
//     const token = generateJWT(user);
    
//     // Set HTTP-only cookie with 5-minute expiration
//     res.cookie(COOKIE_NAME, token, {
//         httpOnly: true,
//         secure: process.env.APP_ENV === 'PROD', // Use secure in production
//         sameSite: 'strict',
//         maxAge: 5 * 60 * 1000, // 5 minutes in milliseconds
//         path: '/'
//     });
    
//     return token;
// };






// export const clearAuthCookie = (res) => {
//     res.clearCookie(COOKIE_NAME, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         path: '/'
//     });
// };




// export const getTokenFromCookie = (req) => {
//     return req.cookies[COOKIE_NAME];
// };

// export const getTokenFromHeader = (req) => {
//     const authHeader = req.headers['authorization'];
//     return authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
// }; 