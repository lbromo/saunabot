// Burger Script
// Tjekker hvor mange der er tilbage til burger dag!
(function() {
	var date = new Date();
	var weekday = new Array(7);
	weekday[0] = "Søndag";
	weekday[1] = "Mandag";
	weekday[2] = "Tirsdag";
	weekday[3] = "Onsdag";
	weekday[4] = "Torsdag";
	weekday[5] = "Fredag";
	weekday[6] = "Lørdag";
	var burgerday = weekday[5]; 
	var today = weekday[date.getDay()];

    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback){
    	if (today === burgerday) {
    		callback(message, 'Ja forfanden! Der er burger i dag!');
    	} else {
    		var daysLeft = 5-date.getDay();
    		var daysLeftString = ' dage';
    		if (daysLeft === -1) {
    			daysLeft = 6;
    		} else if (daysLeft === 1) {
    			daysLeftString = ' dag';
    		}
    		var answer = callback(message, 'Der er ingen burger i dag! Men det er der om ';
    			answer += daysLeft;
    			answer += daysLeftString;
    			);
    	}
    };

    module.exports.run = run;
}());