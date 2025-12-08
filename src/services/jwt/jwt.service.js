import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.APP_JWT_TOKEN || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '5m'; // 5 minutes for cookies
const COOKIE_NAME = 'auth_token';

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



export const verifyJWT = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
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




export const setAuthCookie = (res, user) => {
    const token = generateJWT(user);
    
    // Set HTTP-only cookie with 5-minute expiration
    res.cookie(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure in production
        sameSite: 'strict',
        maxAge: 5 * 60 * 1000, // 5 minutes in milliseconds
        path: '/'
    });
    
    return token;
};

export const clearAuthCookie = (res) => {
    res.clearCookie(COOKIE_NAME, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });
};




export const getTokenFromCookie = (req) => {
    return req.cookies[COOKIE_NAME];
};

export const getTokenFromHeader = (req) => {
    const authHeader = req.headers['authorization'];
    return authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
}; 