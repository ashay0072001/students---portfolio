const chalk = require('chalk');
const log = console.log;

log(chalk.yellow("CLI-APP-1 By Tanay Pratap"))
log(chalk.yellow("how better you know our hostel,"))


score = 0;
var readlineSync = require('readline-sync');
 var myHostelRoom = readlineSync.question(log(chalk.blue('what is ashwarya room number')));
 console.log("your answer "+ myHostelRoom);

 if(myHostelRoom === "14"){
   console.log("right, go ahead for next question boiiis")
   score = score + 1;
   console.log( "your current score "+ score);
 }
 else{
   console.log("wrong");
    score = score - 1;
   console.log( "your current score "+ score);

 }
 var highScore =[{
  name:"Ashay",
  score: 10
},
{
  name:"Manish",
  score:5
}
]
 function roomOfDevil(question,answer){
   var readlineSync = require('readline-sync');
   var userAnswer= readlineSync.question(question)
 console.log("your answer "+ userAnswer);
   if(userAnswer === answer){
     console.log(log(chalk.blue("right")));
    score = score + 1;
     console.log('your current score' + score);
   }
   else{
     console.log(log(chalk.red("wrong")));
     score = score - 1;
     console.log('your current score' + score);
   }
    
   }
 
var questions= [{
  question:"whats is ashwarya's neighbour nick name?",
     answer:"Fluffy"
     },
 {question:"among us who is most youngest ",
    answer:"Ashay"
  },
    {question:"which senior gaurav hates the most",
    answer:"krishna"
     },
     {question:"what is our whats app group name ",
     answer:"52 gaj ka daman"
     },
     {question:"who is kaaleen bhahiya in our hostel",
     answer:"Ashay"
     }
     ,{question:"name the girl whom ashwarya loves the most",
     answer:"Bhavana"
     },
     {question:"what is our collage pincode number ?",
     answer:"562101"
     },
     {question:"do you love yourself answer in yes or no?",
     answer:"Yes"
     }];
    for(var i = 0;i < questions.length;i = i + 1){
      var currentQuestion = questions[i];
      roomOfDevil(currentQuestion.question,currentQuestion.answer);
    }
    console.log("total score:" +score);
    console.log(log(chalk.blue("YAY  boy's   keep going")))
   
   console.log(log(chalk.red("HIGH SCORE")))
   
   console.log(log(chalk.blue("ASHaY : 10")))
   