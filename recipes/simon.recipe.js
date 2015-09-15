(function() {
    var request = require('request');

    var endpoint = 'http://simonapi.roevhat.dk';

    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback) {
        if (typeof callback !== 'function') return;
        
        request({'uri': endpoint, 'method': 'GET', 'timeout': 500}, function(err, resp, body) {
            if (!err && resp.statusCode == 200) {
                if (JSON.parse(body).status == 0) {
                    callback(message, 'Simon er der ikke!');
                } else {
                    callback(message, 'Simon er der!');
                }
            } else {
                callback(message, 'Det ved jeg fandme ikke!');
            }
        });
    };

    //Expose (public)
    module.exports.run = run;
}());