(function (window) {
	var byeSpeaker = {};
	byeSpeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
}

    byeSpeaker.window = byeSpeaker;

})();

