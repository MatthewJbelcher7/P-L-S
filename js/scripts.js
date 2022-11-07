function addAnswers() {
  var score1 = 0;
  var score2 = 0;
  var score3 = 0;
  var score4 = 0;

  var selection = document.getElementsByTagName('input');

  for (i=0; i<selection.length; i++) {
    if (selection[i].checked) {
      if (selection[i].value == "one") {
        score1 = score1 + 1;
      }
      if (selection[i].value == "two") {
        score2 = score2 + 1;
      }
      if (selection[i].value == "three") {
        score3 = score3 + 1;
      }
      if (selection[i].value == "four") {
        score4 = score4 + 1;
      }
    }
  }

  var highestscore = Math.max(score1, score2, score3, score4);

  var results = document.getElementById('result');

  if (score1 == highestscore) {
    results.innerHTML = "You should learn Python!"
  }
  if (score2 == highestscore) {
    results.innerHTML = "You should learn C#!"
  }
  if (score3 == highestscore) {
    results.innerHTML = "You should learn Javascript!"
  }
  if (score4 == highestscore) {
    results.innerHTML = "You should learn Rust!"
  }
}