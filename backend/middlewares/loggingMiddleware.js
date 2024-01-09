const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    if (req.method === 'POST' || req.method === 'PUT') {
        console.log('Request Body:', req.body);
    }

    next();
};

module.exports = loggingMiddleware;
