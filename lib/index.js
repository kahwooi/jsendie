"use strict";

const success = require('./success'),
fail = require('./fail'),
error = require('./error');

const index = () => {
    return (req, res, next) => {
        res.success = success(res);
        res.fail = fail(res);
        res.error = error(res);
        next();
    }
}

module.exports = index;