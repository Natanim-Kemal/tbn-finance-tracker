const i18n = require('i18n');

i18n.configure({
    locales: ['en', 'am'],
    defaultLocale: 'en',
    directory: '../../locales',
    queryParameter: 'lang',
    cookie: 'lang',
});

const i18nMiddleware = (req, res, next) => {
    i18n.init(req, res);
    res.locals.__ = res.__;

    const currentLang = req.query.lang || req.cookies.lang || 'en';
    i18n.setLocale(currentLang);

    next();
};

module.exports = i18nMiddleware;
