(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function')
            callback(message, 'MATE RUN!!!!!!');
    };

    module.exports.run = run;
}());
