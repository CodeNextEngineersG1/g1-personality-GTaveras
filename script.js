/* remove this comment and place your JavaScript here */
/* Questions:
  Which word best describes you?
  A: Steamy (+3)
  B: Dreamy (+0)
  C: Nasty (+4)
  D: Hotty (+1)
  E: Lovely (+2)
  F: Sexy (+3)

  What do you do at a party?
  A: Dance in a circle (+)
  B: Drink shots (+4)
  C: Sit on a chair with your phone (+1)
  D: Constantly eat food and talk to no one (+2)
  E: Try to hook up with anyone (+0)
  F: Lean against the wall and siltently judge everyone (+2)

  Choose a specialty for surgey?
  A: General(+4)
  B: Cardio (+2)
  C; Ortho (+)
  D: Neuro (+4)
  E: Trauma(+1)
  F: Dermatology()

  How's your love life?
  A: As messy as my life (+4)
  B: I get all the ladies/guys (+2)
  C: I get friendzoned, but I don't care (2)
  D: I don't know, okay i guess? (+0)
  E: I'm staying single for now, my choice (+1)
  F: I friendzone everyone, but I secretly want a relationship (+3)

  Possible results:
    13 to 16 = "You are Meridith Grey"
    9 to 12 = "You are Mark Sloan"
    5 to 8 = "You are Alex Karev"
    0 to 4 = " You are Christina Yang"
*/

var personality = null;
var party-life = null;
var specialty = null;
var love = null;

var pageTitle = document.getElementById("page-title");
var pageTitleText = pageTitle.innerHTML;
var tryAgain = document.getElementById("try-again");
var quizWrapper = document.getElementById("quiz-wrapper")
var result = document.getElementById("result");
var formSubmit = document.getElementById("form-submit");

tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function processResults() {

}

function getPersonality() {
  var score = 0;
  if(personality.id === "steamy") {
    score += 3;
  } else if(personality.id === "dreamy") {
    score += 0;
  } else if(personality.id === "nasty") {
    score += 4;
  } else if(personality.id === "hotty") {
    score += 1;
  } else if(personality.id === "lovely") {
    score += 2;
  } else if(personality.id === "sexy") {
    score += 3;
  }
}

function resetQuiz() {

}
