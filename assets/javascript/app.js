

$(document).ready(function(){

 


   //an array of questions

   var questionnaire = [
  {
    "question" : "UCF is in the state of Florida.",
    "response" : "UCF is in the state of Florida!",  
    "correct"  : 1    // 0=False, 1=True
  },
  {
    "question" : "Lake Okeechobee is the largest freshwater lake in the world.",
    "response" : "The largest freshwater lake is Lake Superior!",
    "correct"  : 0
  },
  {
    "question" : "Hawaii is the only US state that grows coffee",
    "response" : "True, Hawaii.",
    "correct"  : 0
  } // Add comma and more objects.
];

//tweeking code layout

start: function() {
      $("#time").html("<p>Time Remaining: " + game.time + " Seconds</p>");
      game.countdown = setInterval(game.count, 1000);
 }

    
<div id="show-number"></div>

<button id="stop">Stop</button>
<button id="resume">Resume</button>

  <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.js"></script>
  
    var number = 30;
    $('#stop').on('click', stop);
    $('#resume').on('click', run);

    function run(){
      counter = setInterval(decrement, 1000);
    }
    function decrement(){
      number--;
      $('#show-number').html('<h2>' + number + '</h2>');
      if (number === 0){
        stop();
        alert('Time Up!')
      }
    

    function stop(){
      clearInterval(counter);
    }

  run();
  

    var $qDIV = $('#qDIV'),
    $rDIV     = $('#response'),
    $qH2      = $("h2",     $qDIV),
    $answer   = $("button", $qDIV),
    $response = $("p",      $rDIV),
    tot       = questionnaire.length,
    c         = 0; // Current Q array counter 

function QandA( idx ){  
   $qDIV.fadeTo(600,1); 
   $rDIV.hide();  
   var currQ = questionnaire[c];   // The Object literal from Array
   var isCorrect = currQ.correct;  // 0 or 1?
   var answerIsCorrect = idx==isCorrect; // (compare values) Returns boolean 
   var resp = answerIsCorrect ? "Really?!" : "Maybe Next Time";
   currQ.answer = idx;             // Put user answer into object (0 or 1)
   $qH2.text( (c+1) +'. '+ currQ.question );
   $response.text( resp +' '+ currQ.response );
}
QandA();

$answer.click(function(){   
    var idx = $answer.index(this); // 0 or 1  (get button index)
    QandA( idx );
    $rDIV.fadeTo(600,1);
    $qDIV.hide();
    console.log( JSON.stringify(questionnaire, null, 2) ); // TEST ONLY
});

$('#prev, #next').click(function(){
    c = this.id=='next' ? ++c : c ; // advance or repeat Question
    QandA();
   
    $('#score').toggle(c>=tot-1);
});

$('#score').click(function(){
  $('pre').text( JSON.stringify(questionnaire, null, 2) ); // TEST
  c = 0; 
  QandA();
});


 } 