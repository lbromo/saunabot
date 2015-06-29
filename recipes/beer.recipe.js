(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function')
            callback(message, 'Vi skal ha 100 bajere!');
    };

    module.exports.run = run;
}());