"use strict";

const success = (res) => {
    return (data) => {
        return res.json({
            status: 'success',
            data: (data !== null && typeof data !== 'undefined') ? data : null 
        });
    };
};

module.exports = success;