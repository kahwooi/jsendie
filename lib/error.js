"use strict";

const error = (res) => {
    return(message, code, data) => {
        if (message instanceof Error) {
            message = process.env.NODE_ENV === 'production' 
                ? message.message : message.message + '\n' + message.stack;
        } else if (typeof message === 'string') {
            message = message;
        } else {
            throw new Error('A valid error object or string is required.');
        }

        let body = {
            status: 'error',
            message: message
        };

        if(code && (typeof code === 'string' || typeof code === 'number'))
            body.code = code;

        if(data && typeof data === 'object') 
            body.data  = data;
        
        return res.status(500).json(body);
    };
};

module.exports = error;