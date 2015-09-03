(function() {
    var request = require('request');

    var endpoint = "https://spreadsheets.google.com/feeds/list/1Ru5StWZMspbxAIYz4G7d6MD7QAdwvnD6EVs5_IjhB8c/od6/public/basic?alt=json";

    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback) {
        if (typeof callback !== 'function') return;
        
        request(endpoint, function(err, resp, body) {
            if (!err && resp.statusCode == 200) {
                
                var lastCellIndex = JSON.parse(body).feed.entry.length;
                var saunaDate = new Date(JSON.parse(body).feed.entry[lastCellIndex - 1].title.$t);

                var todaysDate = new Date();

                console.log("09/03/2015");
                console.log(JSON.parse(body).feed.entry[1].title.$t);

                console.log(saunaDate);
                console.log(todaysDate);

                if(saunaDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
                    callback(message, 'Ja forhelvede! Vi skal i sauna!');
                } else {
                    callback(message, 'Røvhul! Ingen sauna i dag!!!');
                }
            }
        });
    };

    module.exports.run = run;
}());