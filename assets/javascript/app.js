//////////// 4 questions //////////////

var questions = [
	{
		question:'Which of these is NOT the subtitle of a Haydn symphony?',
		answer:[' Lamentatione ', ' Horn Signal  ', ' Tragic  ', ' Mercury  '],
		correctAnswer: ' Tragic ',
	}, 


	{		
		question:"Which of Elgar's Enigma Variations was partially inspired by a bulldog?",
		answer:[' Variation 1 ', ' Variation 9 ', ' Variation 11 ', ' Variation 12 '],
		correctAnswer: ' Variation 11 ',
		
	},


	{		
		question:"Which of these vehicles did Herbert Von Karajan NOT appear with on the cover of one of his recordings?",
		answer:[' Airplane ', ' Boat ', ' Car ', ' Hovercraft '],
		correctAnswer: ' Hovercraft ',
		
	},


	{		
		question:"How many Ballades did Chopin write?",
		answer:[' 4 ', ' 12 ', ' 24 ', ' 48 '],
		correctAnswer: ' 4 ',
		
	},
];

var correct = 0;
var wrong = 0;
var timing; 


//begin with the start page 
//HIDE DIV function
$( "#endGame" ).hide();

//starts the function with unhiding the master div and starts the clock 
$(function(){
	    $("#master").hide();
	    $("#start").on("click", function(){
	        $("#master, #start").toggle();
	});
});	



$('#start').on('click', function() { 
//Once the user clicks 'start', the game begins 
			startGame();

//timer starts counting down 
			function startTimer(duration, display) {
	    	var timer = duration, minutes, seconds;	
	    	timing = setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.text(minutes + ":" + seconds);

	        if (--timer === 0) {
	            check();
	        }
   		    }, 1000);
}

		jQuery(function ($) {
	    var twoMinute = 60 * 1.5,
	        display = $('#time');
	    startTimer(twoMinute, display);
});
})



//once start is clicked, this funciton will cycle through each question and append it to the div on the html page 
function startGame() {
var j = 0;
var questionString = '';
		  for(var i=0; i < questions.length; i++) {
		  j++;

		  var answerString = '';
		  
		  questionString = '<div>' + j + '. ' + questions[i].question + '</div>';

		  for(var a=0; a < questions[i].answer.length; a++) {	
		    answerString += '<input id="answers" class="answer" type="radio"  value='+questions[i].answer[a]+' name="question'+i+'">' + questions[i].answer[a] + '</input>';
		  }
		  $('#questions').append('<div class="question">' + questionString + answerString + '</div>');	
	
}}



//checks if the answer is correct on click and when timer goes down 

function check () { 

//this stops the timer once the user clicks submit, otherwise it will add the results twice 	
    		clearInterval(timing);

//for(var i=0; i < questions.length; i++) 	
			var q1 = ($('input[name="question0"]:checked').val()); 
			var q2 = ($('input[name="question1"]:checked').val()); 
			var q3 = ($('input[name="question2"]:checked').val()); 
			var q4 = ($('input[name="question3"]:checked').val()); 


			console.log(q1);
			console.log(q2);
			console.log(q3);
			console.log(q4);


if (q1 === questions[0].correctAnswer) 
										{ 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q2 === questions[1].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q3 === questions[2].correctAnswer) { 
	correct += 1; 
}
else {
	wrong += 1; 
}

if (q4 === questions[3].correctAnswer) { 
	correct += 1; 
}

else {
	wrong += 1; 
}



		console.log(correct);
		console.log(wrong);

			document.getElementById("correct").innerHTML=correct;
			document.getElementById("wrong").innerHTML=wrong;	


//hides the master div with the questions and shows the end game div with the results 
$( "#master" ).hide();
$( "#endGame" ).show();


	
}


		console.log(questions[0].correctAnswer);
		console.log(questions[1].correctAnswer);
		console.log(questions[2].correctAnswer);
		console.log(questions[3].correctAnswer);
		console.log(questions[4].correctAnswer);
		console.log(correct);
