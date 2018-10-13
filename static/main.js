var currDay = 0;

let mainTweet = document.getElementById("tweetsComponent__text");
let tweetDate = document.getElementById("tweetsComponent__date");
let logDate = document.getElementById("logs__counter--text");
let instaStory = document.getElementById("logs__social__insta--story");
let logsCode = document.getElementById("logs__code");

var changeDay = function() {
	mainTweet.innerText = myTweets[99 - currDay].tweet;
	tweetDate.innerText = myTweets[99 - currDay].createdDate;
	logDate.innerText = `Day ${currDay}`;
	instaStory.src = `images/insta/d${currDay}.jpg`;
	logsCode.innerHTML = myCode[currDay].data;
};
var nextDay = function() {
	if (currDay < 101) {
		currDay++;
		changeDay();
	}
};

var prevDay = function() {
	if (currDay > 0) {
		currDay--;
		changeDay();
	}
};

$(document).ready(function() {
	$(".support__carousal").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true
	});
});
