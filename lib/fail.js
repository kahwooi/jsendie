"use strict";

const fail = (res) => {
    return (data) => {
        if (!data || typeof data !== 'object') 
            throw new Error('A valid Array/Object is required. If the reasons for failure correspond to POST values, the response object\'s keys SHOULD correspond to those POST values.');

        return res.json({
            status: 'fail',
            data: data
        });
    };
};

module.exports = fail;