const request = require('supertest');

module.exports.request = _request;

function _request(endpoint) {
    let req = request(endpoint);
    return req;
};

// Voir https://github.com/visionmedia/superagent/issues/926
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

request.Test.prototype.responseWhenError = function(done) {
    this.end(function (err, res) {
        if (err) {
            let error = {
                status: res.status,
                statusMessage: res.res.statusMessage,
                text: res.res.text.substring(0, 2500)
            };

            throw Error(JSON.stringify(error, null, 2));
        }

        done();
    });

    return this;
};

