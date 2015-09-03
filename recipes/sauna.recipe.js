(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function') {
            var saunaDate = new Date("08/03/2015");
            var todaysDate = new Date();

            if(saunaDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                callback(message, 'Ja forhelvede! Vi skal i sauna!');
            } else {
                callback(message, 'Røvhul! Ingen sauna i dag!!!');
            }
        }
    };
    module.exports.run = run;
}());