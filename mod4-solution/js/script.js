(function () {


	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


	var first_letters = [];

		for (var i=0 ; i < names.length; i++) {

			var first_letter  = names[i].charAt(0);
				
				if(first_letter.toLowerCase() === 'j'){
					byeSpeaker.speak(names[i]);
				} else{
				    helloSpeaker.speak(names[i]);
				}

		}



})();





