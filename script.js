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

var point = 0;
console.log('point on page load: ' + point);

var next = function(i) {

  // console.log(i);

  //get parent div
  var parent = i.parentElement.parentElement.parentElement;

  //add class show to next div
  parent.nextElementSibling.className = 'show';

  //change class from show to hide
  parent.attributes[0].value = 'hide';

}

var button = function(e) {
  //get clicked get element
  // console.log(e.attributes);

  var attr = e.attributes;
  // console.log(attr);

  //get data attributes
  var data = attr[2];
  if (data !== undefined) {
    data = data.value;
  }
  // console.log(data);

  //if data attribute exist then it is the right answers
  if (data == "correct") {
    // console.log('it worked');
    point = point + 1;
    // console.log(point);

    var scoreCard = document.getElementsByClassName('scoreCard');
    // console.log(typeof scoreCard);
    for (i = 0; i < scoreCard.length; i++) {
      // console.log(scoreCard[i]);
      scoreCard[i].innerText = point;
    }

    //change score by adding +1

    //else then it is the wrong answers
  } else {
    console.log('wrong answer');
  }
  //show incorrect message

};