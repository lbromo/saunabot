(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function') {
            var saunaDate = new Date("08/04/2015");
            var todaysDate = new Date();

            if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                callback(message, 'Ja forhelvede! Vi skal i sauna!');
            }
            callback(message, 'Røvhul! Ingen sauna i dag!!!');
        }
    };
    module.exports.run = run;
}());