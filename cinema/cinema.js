
function Movie(title, genre, star, showtimes) {
	this.title = title;
	this.genre = genre;
	this.star = star;
	this.showtimes = showtimes;
	this.getNextShowing = function() {
	var now = new Date().getTime();
	for (var i = 0; i < this.showtimes.length; i++) {
		var showtime = getTimeFromString(this.showtimes[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + this.title + " is " + this.showtimes[i];
		}
	}
	return null;
	};
}

var movie1 = {
    title:      "Plan 9 from Out Space",
    genre:      "dracula",
    star:       2,
    showtimes:  ["3:00pm", "7:00pm", "11:00pm"],
    getNextShowing: function () {
	var now = new Date().getTime();
	for (var i = 0; i < this.showtimes.length; i++) {
		var showtime = getTimeFromString(this.showtimes[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + this.title + " is " + this.showtimes[i];
		}
	}
	return null;
    }
};

var movie2 = {
    title:      "Forbidden Planet",
    genre:      "sci-fi",
    star:       5,
    showtimes:  ["3:00pm", "9:00pm", "11:00pm"],
    getNextShowing: function () {
	var now = new Date().getTime();
	for (var i = 0; i < this.showtimes.length; i++) {
		var showtime = getTimeFromString(this.showtimes[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + this.title + " is " + this.showtimes[i];
		}
	}
	return null;
    }
};
var movie3 = new Movie("捉妖记", "comedy",  5, ["12.00am", "3:00pm", "7:00pm", "11:00pm"]);
var movie4 = new Movie("爱乐之城", "musical", 5, ["3:00pm", "9:00pm", "11:00pm"]);

function getNextShowing(movie) {
	var now = new Date().getTime();
	for (var i = 0; i < movie.showtimes.length; i++) {
		var showtime = getTimeFromString(movie.showtimes[i]);
		if ((showtime - now) > 0) {
			return "Next showing of " + movie.title + " is " + movie.showtimes[i];
		}
	}
	return null;
}

function getTimeFromString(str) {
	var theTime = new Date();
	var time = str.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}

//alert(1);
var nextShowing = movie1.getNextShowing();
alert(nextShowing);
nextShowing = movie2.getNextShowing();
alert(nextShowing);
alert(movie3.getNextShowing());
alert(movie4.getNextShowing());
