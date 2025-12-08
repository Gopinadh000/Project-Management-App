import { verifyJWT, getTokenFromCookie, getTokenFromHeader } from './jwt.service.js';
import {ReE} from '../../utils/Res.utils.js';

export const authenticateToken = (req, res, next) => {
    // First try to get token from cookie, then from header
    let token = getTokenFromCookie(req);
    
    if (!token) {
        token = getTokenFromHeader(req);
    }

    if (!token) {
        return ReE(res, { message: 'Access token required' }, 401);
    }

    try {
        const decoded = verifyJWT(token);
        req.user = decoded;
        next();
    } catch (error) {
        return ReE(res, { message: 'Invalid or expired token' }, 401);
    }
};

export const authenticateCookie = (req, res, next) => {
    const token = getTokenFromCookie(req);

    if (!token) {
        return ReE(res, { message: 'Authentication cookie required' }, 401);
    }

    try {
        const decoded = verifyJWT(token);
        req.user = decoded;
        next();
    } catch (error) {
        return ReE(res, { message: 'Invalid or expired cookie' }, 401);
    }
};

export const authenticateHeader = (req, res, next) => {
    const token = getTokenFromHeader(req);

    if (!token) {
        return ReE(res, { message: 'Authorization header required' }, 401);
    }

    try {
        const decoded = verifyJWT(token);
        req.user = decoded;
        next();
    } catch (error) {
        return ReE(res, { message: 'Invalid or expired token' }, 401);
    }
};

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return ReE(res, { message: 'Authentication required' }, 401);
        }

        if (!roles.includes(req.user.role)) {
            return ReE(res, { message: 'Insufficient permissions' }, 403);
        }

        next();
    };
}; 