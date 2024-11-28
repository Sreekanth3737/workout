const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [{ q: "What is your name?" }, { q: "What is your age?" }];

function askQuestion(index) {
  if (index < questions.length) {
    rl.question(questions[index].q + " ", (answer) => {
      console.log(answer);
      askQuestion(index + 1);
    });
  } else {
    rl.close();
  }
}

askQuestion(0);
