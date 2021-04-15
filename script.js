// alert("hi");

// var ul = document.getElementById("ul");
// var nextButton = document.getElementById("btnNext");
// var quizbox = document.getElementById("questionBox");
// var opt1 = document.getElementById("opt1");
// var opt2 = document.getElementById("opt2");
// var opt3 = document.getElementById("opt3");
// var opt4 = document.getElementById("opt4");
// var score = Number(document.getElementById("scoreCard").innerText);

// document.getElementById("btnNext").addEventListener("click", displayAnswer);


var button = function (e) {
  //get clicked value
  var str = e.innerText;

  //check if right answer
  if (str == "purple") {
    console.log("correct");
    //get score and change string to Number
    var score = Number(document.getElementById("scoreCard").innerText);
    console.log(score);
    //add 1
    score = score + 1;
    //change score on screen
    document.getElementById("scoreCard").innerText = score;
  } else {
    //wrong answers
    console.log("wrong");
    //don't forget to add the html element if you're using this LOL
    document.getElementById("wrong").style.display = "block";
  }
};

