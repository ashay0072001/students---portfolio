
// TANAY PRATAP CLI_app-2

const chalk = require('chalk');
const log = console.log;
console.log(log(chalk.yellow("Tanay Pratap CLI- APP-2 ")))
console.log(log(chalk.yellow("Baics question answers on computer")))
console.log(log(chalk.yellow("Check how much you know about the computer")))

score = 0;
var readlineSync = require('readline-sync');
var myHostelRoom = readlineSync.question(log(chalk.blue("1. WWW stands for?,\nA:World Whole Web\nB:WideWorldWeb\nC:Web World Wide \nD:World Wide Web")));

console.log("your answer " + myHostelRoom);

if (myHostelRoom === "D") {
  console.log("right, good going try next one")
  score = score + 1;
  console.log("your current score " + score);
}
else {
  console.log("wrong");
  score = score - 1;
  console.log("your current score " + score);
}
function roomOfDevil(question, answer) {
  var readlineSync = require('readline-sync');
  var userAnswer = readlineSync.question(question)
  console.log("your answer " + userAnswer);
  if (userAnswer === answer) {
    console.log(log(chalk.blue("right")));
    score = score + 1;
    console.log('your current score' + score);
  }
  else {
    console.log(log(chalk.red("wrong")));
    score = score - 1;
    console.log('your current score' + score);
  }

}

var questions = [{
  question: (log(chalk.green(" Which among following first generation of computers had ?\nA:Vaccum Tubes and Magnetic Drum\nB:Integrated Circuits\nC:Magnetic Tape and Transistors\nD:All of above"))),
  answer: "A"
},
{
  question: "Which of the following are components of Central Processing Unit (CPU) ?\nA:Arithmetic logic unit Mouse \n B:Arithmetic logic unit, Control unit\n C:Arithmetic logic unit Integrated Circuits \n D:Control Unit, Monitor",
  answer: "B"
},
{
  question: "Where is RAM located ?\nA:Expansion Board\nB:External Drive\nC:Mother Board\nD:All of above",
  answer: "C"
},
{
  question: "If a computer has more than one processor then it is known as ?\nA:Uniprocess\nB:Multiprocessor\nC:Multithreaded\nD:Multiprogramming ",
  answer: "B"
},
{
  question: "If a computer provides database services to other, then it will be known as ?\nA:Web server\nB:Application server\nC:Database server\nD:FTP server",
  answer: "C"
}
  , {
  question: "Full form of URL is ?\nA:Uniform Resource Locator\nB:Uniform Resource Link\nC:Uniform Registered Link\nD:Unified Resource Link",
  answer: "A"
},
{
  question: "8. In which of the following form, data is stored in computer ?\nA:Decimal\nB:Binary\nC:HexaDecimal\nD:Octal",
  answer: "B"
},
{
  question: "9. Technology used to provide internet by transmitting data over wires of telephone network is ?\nA:Transmitter\nB:Diodes\nC:HHL\nD:DSL",
  answer: "D"
}]
for (var i = 0; i < questions.length; i = i + 1) {
  var currentQuestion = questions[i];
  roomOfDevil(currentQuestion.question, currentQuestion.answer);
}
console.log("total score:" + score);
console.log(log(chalk.yellow("YAY students keep going Keep learning")))
console.log(log(chalk.yellow("HIGH SCORE")))
console.log(log(chalk.green("ASHaY : 10")))
