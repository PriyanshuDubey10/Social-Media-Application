const jwt = require('jsonwebtoken');
const response = require('../utils/responceHandler');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return response(res, 401, 'Authentication required. Please provide a valid token');
    }

    const authToken = authHeader.split(" ")[1];

    try {
        const decode = jwt.verify(authToken, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.error(error);
        return response(res, 401, 'Invalid or expired token. Please try again');
    }
};

module.exports = authMiddleware;
