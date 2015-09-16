var saunabot = require(__dirname + '/telebot.js');
var sauna    = require(__dirname + '/recipes/sauna.recipe.js');
var kenneth  = require(__dirname + '/recipes/kenneth.recipe.js');
var simon    = require(__dirname + '/recipes/simon.recipe.js');
var beer     = require(__dirname + '/recipes/beer.recipe.js');
var burger	 = require(__dirname + '/recipes/burger.recipes.js');

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

saunabot.when('/:hamburger:', function(message) {
	burger.run(message, saunabot.reply);
});