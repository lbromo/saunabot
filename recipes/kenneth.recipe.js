(function() {
    var request = require('request');

    var endpoint = 'http://kennethapi.roevhat.dk';

    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback) {
        if (typeof callback !== 'function') return;
        
        request(endpoint, function(err, resp, body) {
            if (!err && resp.statusCode == 200) {
                if (JSON.parse(body).status == 0) {
                    callback(message, 'Kenneth er der ikke!');
                } else {
                    callback(message, 'Kenneth er der!');
                }
            } else {
                callback(message, 'Det ved jeg fandme ikke!');
            }
        });
    };

    //Expose (public)
    module.exports.run = run;
}());