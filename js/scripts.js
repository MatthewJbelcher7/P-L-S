function addAnswers() {
  let score1 = 0;
  let score3 = 0;
  let score3 = 0;
  let score4 = 0;

  let scores = document.getElementById("input");
}

var selection = document.getElementsByClassName('input');

for (i=0; i<selection.length; i++) {
  if (selection[i].checked) {
    if (selection[i].value == 'one') {
      s1selection = s1selection + 1;
    }
    if (selection[i].value == 'two') {
      s2selection = s2selection + 1;
    }
    if (selection[i].value == 'three') {
      s3selection = s3selection + 1;
    }
    if (selection[i].value == 'four') {
      s4selection = s4selection + 1;
    }
  }
}



fuction clearAwnser() {
  var answerbox = document.getElementById("answer");
  awnserbox.innerHTML = "Awaiting Awnsers";
}