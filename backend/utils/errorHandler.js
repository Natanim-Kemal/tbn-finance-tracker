
const handleErrors = (err, req, res, next) => {

    if (err.name === 'ValidationError' || err.name === 'ValidatorError') {
        return res.status(400).json({ error: 'Validation error'});
    }
    if (err.name === 'UnauthorizedError' && err.code === 'credentials_required') {
        return res.status(401).json({ error: 'Unauthorized', details: 'Proper Credentials required' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
    if (err.message === 'incorrect email') {
        errors.email = 'invalid email';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'invalid password';
    }

    if (err.code === 11000) {
        errors.email = 'that email is already registered';
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports = handleErrors;
