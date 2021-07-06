
console.log("TANAY PRATAP CLI APP-2")
var readlineSync= require ('readline-sync');

const chalk = require('chalk');
var currentScore=0;

var userName= readlineSync.question(chalk.bold.yellowBright
("welcome to the game.Please enter your good name?"));
console.log("     ");
var welcomeMsg= ("Welcome "+userName);
console.log(chalk.bold.cyanBright(welcomeMsg));
console.log("    ");

console.log(chalk.bold.magentaBright("Commands need to be followed to access the game\n=> enter the options given if you are sure about the answer.\n=> lets figure the knowledge about computers\n"));
console.log("     ");

var game='" |Do you really know about computer,To test join and play|"';
console.log(chalk.bold.yellowBright("START==>  "+game));
console.log("    ");


console.log(chalk.bold.cyanBright("GOOD LUCK!!!\n"));

console.log("     ");

//function
function play(ques,answer)
{
var  userAnswer=readlineSync.question(chalk.bold.blueBright(ques));
if(userAnswer.toLowerCase()===answer)
{
  console.log(chalk.bold.green("You Are Right!"));
  currentScore+=1
  console.log(chalk.bold.magentaBright("Your score is: "+currentScore));
}
else
{
  console.log(chalk.bold.red("You Are Wrong!"));
  console.log(chalk.bold.magentaBright("Your score is: "+currentScore));
}
console.log("(*_*) (*_*) (*_*) (*_*) (*_*) (*_*)");
}

//array of questions and answers
var ques=[
  {
   question:"Which among following first generation of computers had ?"+chalk.gray("\nA:Vaccum Tubes and Magnetic Drum\nB:Integrated Circuits\nC:Magnetic Tape and Transistors\nD:All of above")+chalk.bold.white("Ans: "),
   answer:"a",
  },

 {
   question:"2.Which of the following are components of Central Processing Unit (CPU) ?"+chalk.gray("\nA:Arithmetic logic unit Mouse \n B:Arithmetic logic unit, Control unit\n C:Arithmetic logic unit Integrated Circuits \n D:Control Unit, Monitor")+chalk.bold.white("Ans: "),
   answer:"b",
 },
 {
   question:"3.Where is RAM located ?"+chalk.gray("\nA:Expansion Board\nB:External Drive\nC:Mother Board\nD:All of above")+chalk.bold.white("Ans: "),
   answer:"c",
 },
 {
   question:"4.If a computer has more than one processor then it is known as ?"+chalk.gray("\nA:Uniprocess\nB:Multiprocessor\nC:Multithreaded\nD:Multiprogramming ")+chalk.bold.white("Ans: "),
   answer:"b",
 },
 {question:"5. If a computer provides database services to other, then it will be known as ?"+chalk.gray("\nA:Web server\nB:Application server\nC:Database server\nD:FTP server")+chalk.bold.white("Ans: "),
 answer:"c",
 },
  {question:"6.Full form of URL is ?"+chalk.gray("\nA:Uniform Resource Locator\nB:Uniform Resource Link\nC:Uniform Registered Link\nD:Unified Resource Link")+chalk.bold.white("Ans: "),
 answer:"a",
 },
  {question:"7.  In which of the following form, data is stored in computer ?"+chalk.gray("\nA:Decimal\nB:Binary\nC:HexaDecimal\nD:Octal")+chalk.bold.white("Ans: "),
 answer:"b",
 },
  {question:"8. Technology used to provide internet by transmitting data over wires of telephone network is ?"+chalk.gray("\nA:Transmitter\nB:Diodes\nC:HHL\nD:DSL")+chalk.bold.white("Ans: "),
 answer:"d",
 },
 
]

for (i=0;i<ques.length;i++)
{
  play(ques[i].question,ques[i].answer);
}

console.log(chalk.bold.yellowBright("Your Total Score Is "+currentScore));




var userscore=[{name:"Ashay",score:"8",},{name:"Manish",score:"8",},]
userscore.push({name:userName,score:currentScore})

for(i=0;i<userscore.length;i++)
{
  console.log(chalk.bold.gray(""+userscore[i].name,""+userscore[i].score));
}
console.log("      ");

for(i=0;i<userscore.length;i++)
{
if (currentScore>userscore[i].score)
{
console.log(chalk.bold.yellowBright(userName+" You Have Beaten Player One"));

break;
}
else{
  console.log(chalk.bold.cyanBright("Be the best NEXT TIME!!"));
}break;
}
console.log("     ");

console.log (chalk.bold.blue("come again for next try"));