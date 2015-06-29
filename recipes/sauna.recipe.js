(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function')
            callback(message, 'Det ved jeg fandme ikke!');
    };

    module.exports.run = run;
}());