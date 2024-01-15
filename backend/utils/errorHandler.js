
const handleErrors = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError' || err.name === 'ValidatorError') {
        return res.status(400).json({ error: 'Validation error', details: err.errors });
    }
    if (err.name === 'UnauthorizedError' && err.code === 'credentials_required') {
        return res.status(401).json({ error: 'Unauthorized', details: 'Proper Credentials required' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = handleErrors;
