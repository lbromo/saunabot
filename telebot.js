(function() {
    var request = require('request');

    var endpoint = 'https://api.telegram.org/bot';
    var token    = '';
    var offset   = '0';
    var commands = [];

    var init = function(tok, Ts) {
        token = tok;
        setInterval(function() {
            update();
        }, Ts);
    };

    var update = function() {
        request(
            {
                url: endpoint + token + '/getUpdates',
                qs: {'limit': '1', 'offset': offset + 1}
            },

            function (err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    console.log(body);
                    var updates = JSON.parse(body).result;
                    if (updates.length > 0) {
                        offset = updates[0].update_id;
                        handle(updates[0].message);
                    }
                }
            }
        );
    };

    var handle = function(message) {
        if (commands.length > 0) {
            for (var i = 0; i < commands.length; i++) {
                if (commands[i].command[0] == '/') {
                    if (commands[i].command == message.text) {
                        return commands[i].callback(message);
                    }
                } else {
                    if (message.text.toLowerCase().indexOf(commands[i].command) > -1) {
                        return commands[i].callback(message);
                    }
                }
            }
        }
    };

    var when = function(cmd, callback) {
        commands.push({
            command: cmd,
            callback: callback
        });
    };

    var reply = function(message, reply) {
        request(
            {
                url: endpoint + token + '/sendMessage',
                qs: {'chat_id': message.chat.id, 'text': reply}
            },

            function (err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    console.log(body);
                }
            }
        );
    };

    module.exports.init  = init;
    module.exports.when  = when;
    module.exports.reply = reply;
}());