var saunabot = require(__dirname + '/telebot.js');
var sauna    = require(__dirname + '/recipes/sauna.recipe.js');
var kenneth  = require(__dirname + '/recipes/kenneth.recipe.js');
var simon    = require(__dirname + '/recipes/simon.recipe.js');
var beer     = require(__dirname + '/recipes/beer.recipe.js');
var burger   = require(__dirname + '/recipes/burger.recipe.js');
var mate     = require(__dirname + '/recipes/mate.recipe.js');
var cake     = require(__dirname + '/recipes/cake.recipe.js');

saunabot.init('121725983:AAGJCGKpU6ni2zqLzMjlVjF2w-p5z7Q3a6U', 250);

saunabot.when('/sauna', function(message) {
    sauna.run(message, saunabot.reply);
});

saunabot.when('/kenneth', function(message) {
    kenneth.run(message, saunabot.reply);
});

saunabot.when('/simon', function(message) {
    simon.run(message, saunabot.reply);
});

saunabot.when('/bajer', function(message) {
    beer.run(message, saunabot.reply);
});

saunabot.when('/burger', function(message) {
	burger.run(message, saunabot.reply);
});

saunabot.when('/\ud83c\udf54', function(message) {
    burger.run(message, saunabot.reply);
});

saunabot.when('/mate', function(message) {
    mate.run(message, saunabot.reply);
});

saunabot.when('/cake', function(message) {
    cake.run(message, saunabot.reply);
});

saunabot.when('/🍰', function(message) {
    cake.run(message, saunabot.reply);
});

