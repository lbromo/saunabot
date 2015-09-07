(function() {
    var request = require('request');

    var endpoint = 'https://spreadsheets.google.com/feeds/list/1Ru5StWZMspbxAIYz4G7d6MD7QAdwvnD6EVs5_IjhB8c/od6/public/basic?alt=json';

    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback) {
        if (typeof callback !== 'function') return;
        
        request(endpoint, function(err, resp, body) {
            if (!err && resp.statusCode == 200) {
                
                var entries = JSON.parse(body).feed.entry;
                
                var saunaDate = new Date(entries[entries.length - 1].title.$t);
                var todayDate = new Date();

                saunaDate = saunaDate.setHours(0, 0, 0, 0);
                todayDate = todayDate.setHours(0, 0, 0, 0);

                if (saunaDate === todayDate) {
                    callback(message, 'Ja forhelvede! Vi skal i sauna!');
                } else if (saunaDate > todayDate) {
                    var answer = 'Ingen sauna i dag, men der er sauna d. ';
                    answer += new Date(saunaDate).toLocaleDateString("da-DK");
                    callback(message, answer);
                } else {
                    callback(message, "Ingen sauna-tur planlagt!");
                }
            }
        });
    };

    module.exports.run = run;
}());