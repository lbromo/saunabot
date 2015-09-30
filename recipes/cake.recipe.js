// kage
(function() {
    var run = function(message, callback) {
        if (typeof callback === 'function')
            status(message, callback);
    };

    var status = function(message, callback){
        var date = new Date();
        var weekday = new Array(7);
        weekday[0] = "Søndag";
        weekday[1] = "Mandag";
        weekday[2] = "Tirsdag";
        weekday[3] = "Onsdag";
        weekday[4] = "Torsdag";
        weekday[5] = "Fredag";
        weekday[6] = "Lørdag";
        var today = weekday[date.getDay()];
	var answer;

    	if (today === weekday[3]) {
    	    answer = 'Onsdagssnelg!! FØTEX RUN!!';
	} 
	else {
    	    answer = 'Det er (næsten) altid en eller anden kage på tilbud.. FØTEX RUN';
	}
	
    callback(message, answer);
};

 module.exports.run = run;
}());
