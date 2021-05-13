const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometers == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let numberOfCorrectAnswer = 0;
let status; 
let grade; 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  canidateName = input.question("what is your name ? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question("Who was the first American woman in space? ");
  for (let i = 0; i < questions.length; i++){
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 

for (let i = 0; i < candidateAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numberOfCorrectAnswer += 1;
    }  
  }
  grade = (numberOfCorrectAnswer / 5) * 100;
  
  if (grade >= 80){
    status = "PASS";
  }else{
    status = "FAILED";
  }
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcoome ${canidateName} !`)
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log("\n");
  console.log(
`Candidate Name : ${canidateName}\n
1) ${questions[0]} 
Your Answer: ${candidateAnswers[0]}
Correct Answer : ${correctAnswers[0]} \n 
2) ${questions[1]}
Your Answer : ${candidateAnswers[1]}
Correct Answer : ${correctAnswers[1]}\n  
3) ${questions[2]}
Your Answer : ${candidateAnswers[2]}
Correct Answer : ${correctAnswers[2]}\n 
4) ${questions[3]}
Your Answer : ${candidateAnswers[3]} 
Correct Answer : ${correctAnswers[3]}\n 
5) ${questions[4]}
Your Answer : ${candidateAnswers[4]}
Correct Answer : ${correctAnswers[4]}\n
>>> Overall Grade: ${grade}% (${numberOfCorrectAnswer} of 5 responses correct) <<<
>>> Status: ${status} <<<
  `);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};