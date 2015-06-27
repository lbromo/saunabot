var request = require('request');

var saunabot = {
    token: '121725983:AAGJCGKpU6ni2zqLzMjlVjF2w-p5z7Q3a6U',
    endpoint: 'https://api.telegram.org/bot',
    offset: '0',

    init: function() {
        setInterval(function() {
            saunabot.update();
        }, 250);
    },

    update: function() {
        request(
            {
                url: saunabot.endpoint + saunabot.token + '/getUpdates',
                qs: {'limit': '1', 'offset': saunabot.offset + 1}
            },

            function (err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    console.log(body);
                    var updates = JSON.parse(body).result;
                    if (updates.length > 0) {
                        saunabot.offset = updates[0].update_id;
                        saunabot.handle(updates[0].message);
                    }
                }
            }
        );
    },

    handle: function(message) {
        if (message.text === '/sauna') {
            saunabot.reply(message.chat.id, 'NO SAUNA FOR YOU!');
        }

        if (message.text == '/kenneth') {
            request('http://kennethapi.roevhat.dk', function(err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    if (JSON.parse(body).status == 0) {
                        saunabot.reply(message.chat.id, 'Kenneth er der ikke!');
                    } else {
                        saunabot.reply(message.chat.id, 'Kenneth er der!');
                    }
                }
            });
        }
    },

    reply: function(chatID, text) {
        request(
            {
                url: saunabot.endpoint + saunabot.token + '/sendMessage',
                qs: {'chat_id': chatID, 'text': text}
            },

            function (err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    console.log(body);
                }
            }
        );
    }
}

saunabot.init();