"use strict";

const quizData = [
  {
      question: "You receive an email claiming to be from your bank, asking you to click on a link to verify your account details due to a security breach. What should you do?",
      a: "Click on the link and provide the requested information",
      b: "Forward the email to your friends for advice",
      c: "Forward the email to your personal email account so you can open it at home",
      d: "Call your bank to verify the authenticity of the email",
      correct: "d"
     },
     {
      question: "While using an ATM, you notice an unusual device attached to the card slot. What should you do?",
      a: "Ignore it and proceed with your transaction",
      b: "Report it to the bank staff immediately",
      c: "Take a picture and post it on social media for awareness",
      d: "Attempt to remove the device yourself",
      correct: "b"
     },
     {
      question: "What is the best way to create a strong and secure password?",

      a:"Use simple words or phrases",
      b:"Using look-alike substitutions of numbers or symbols",
      c:"Utilize a combination of uppercase and lowercase letters, numbers, and symbols",
      d:"Use your birthdate or name as the password",

      correct: "c"
      },
     {
      question: "You notice unauthorized transactions on your online banking statement. What should be your immediate action?",
      a: "Ignore them, assuming it's a mistake",
      b: "Contact the bank to report the fraudulent activity",
      c: "Share your account details on social media for assistance",
      d: "Wait for the next statement to confirm the transactions",
      correct: "b"
     },
     {
      question: "While accessing your mobile banking app in a crowded area, you realize someone is closely observing your screen. What should you do?",
      a: "Continue with your transaction, ignoring the observer",
      b: "Engage in a conversation with the observer to distract them",
      c: "Move to a more private location before continuing",
      d: "Share your login credentials with the observer for assistance",
      correct: "c"
     },
     {
      question: "You receive a text message claiming your account has been suspended and requesting immediate action to unlock it. What should you do?",
      a: "Follow the instructions provided in the text message",
      b: "Ignore the message, assuming it's a scam",
      c: "Reply to the message with your account details for verification",
      d: "Call your bank using the official number to inquire about the message",
      correct: "d"
     },
     {
      question: "While accessing your online banking account from a public computer, you forget to log out. What should you do?",
      a: "Leave the computer without logging out",
      b: "Return to the computer later to log out",
      c: "Change your password immediately from another device  ",
      d: "Inform the next user about your oversight",
      correct: "c"
     },
     {
      question: "Someone posing as the tax department calls, alleging tax filings issues and demanding immediate payment by phone to avoid legal consequences. What's your next step?",

      a: "Make the payment as instructed to resolve the issue",
      b: "Hang up and call the tax department's official helpline to verify",
      c: "Provide your personal information for verification purposes",
      d: "Agree to a payment plan with the caller without verifying their identity",
      correct: "b"
    },
    {
      question: "You receive a knock on your door from someone claiming to be a utility worker who needs to enter your home to check your electrical meter. What should you do?",
      a: "Allow the person to enter your home to conduct the check",
      b: "Request to see the person's official identification badge before allowing them entry",
      c: "Share the news with your neighbours about the worker's visit",
      d: "Provide electric meter information to the person without verifying their identity",
      correct: "b"
    },
    {
      question: "A caller posing as your internet service provider claims your account is compromised and asks for remote computer access to resolve the issue. What action should you take?",

      a: "Grant remote access to allow them to resolve the issue",
      b: "Hang up the call and contact your internet service provider directly using their official contact information",
      c: "Share your login credentials with the caller to expedite the process",
      d: "Ask the caller for more details about the alleged compromise",
      
      correct: "b"
    
    },
    {
      question:"You're browsing and on a random site a pop-up to get free access to Netflix appears. What's the most secure action?",

      a: "Follow the pop-up instructions to get the free access",
      b: "Immediately close the pop-up and do not proceed",
      c: "Share the pop-up link with your friends",
      d: "Click on any links provided within the Pop-up",

      correct: "b"
    },
    {
      question: "While using a public Wi-Fi network at a coffee shop, you receive a prompt on your device asking you to update your software. What should you do?",

      a: "Immediately proceed with the software update",
      b: "Delay the update until you're on a secure network",
      c: "Ignore the update prompt and continue using the Wi-Fi",
      d: "Disconnect from the Wi-Fi network to avoid potential risks",
      correct: "b"
    },
    {
     question: "You receive an email with a link to a survey promising a gift card reward upon completion. What should you do?",
    a: "Click on the link and complete the survey to claim your reward",
    b: "Delete the email and mark it as spam",
    c: "Forward the email to your contacts to spread the opportunity",
    d: "Contact the company for more information regarding the gift card",

   correct: "b"
    },
    {
     question:"While installing a new application on your smartphone, you're prompted to grant extensive permissions to access your personal data. What should you do?",

     a: "Grant all permissions to install the application",
     b: "Review the permissions requested and only grant those necessary for the app's function",
     c: "Deny all permissions and refrain from installing the application",
     d: "Grant permissions and monitor the app's behavior afterward",
    correct: "b"
    },
    {
      question: "You’re being texted that your parcel delivery will be delayed. In order to expedite it you need to?",

         a: "Click on the link to track your package",
         b: "Call the delivery service using their official contact information to verify the message",
         c: "Forward the message to your contacts for advice",
         d: "Ignore the message and delete it",
         correct: "b"    
},
    {
      question: "You receive a message on your computer screen claiming that your files have been encrypted and you must pay a ransom to regain access. What should you do?",
      a: "Pay the ransom to unlock your files",
      b: "Ignore the message and restart your computer",
      c: "Immediately contact a cybersecurity professional for assistance",
      d: "Follow the instructions in the message to decrypt your files",
      correct: "c"
    },
    {
      question: "You receive a phone call from someone claiming to be a government official requesting personal information like your social security number for verification purposes. What should you do?",

      a: "Provide the requested information to avoid any legal issues",
      b: "Politely decline and hang up",
      c: "Ask for the caller's credentials and verify their identity",
      d: "Give false information to test the caller's legitimacy",
      
      correct: "b"
    },
    {
      question: "You're at a public event and need to charge your phone. You notice a charging station with multiple USB cables available. What should you do?",
      a: "Use the USB cables from the charging station to charge your phone",
      b: "Avoid using the charging station to prevent potential data theft",
      c: "Share the charging station with other attendees to ensure everyone's devices are charged",
      d: "Plug your phone into the charging station and leave it unattended while you attend to other activities",
      correct : "b"
    },
    {
      "question": "You receive a letter in the mail claiming to be from your bank, asking you to update your account information by filling out a form and mailing it back. What should you do?",
      "a": "Fill out the form and mail it back as instructed",
      "b": "Ignore the letter, assuming it's a scam",
      "c": "Contact your bank using the official number to verify the authenticity of the letter",
      "d": "Share the letter with friends and family for advice",
      correct: "c"
    },
    {
      question: "Your business email account has been compromised and leaked in a data breach. What is the best course of action(s)??",
a: "Change your password immediately",
b: "Inform the security team of your organization",
c: "Change the Password on all sites where you use the same password",
d: "All of above",

 correct: "d"
    }
    
        
];

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
nextBtn.disabled = true;
backBtn.addEventListener("click", previousQuestion);
function startQuiz() {
  console.log('Quiz started');
  const employeeID = employeeIDInput.value.trim();
  console.log('Employee ID:', employeeID);
  nextBtn.disabled = false;
  // backBtn.disabled=false;

  startTimer(20 * 60);
  document.getElementById('popupContainer').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  
}

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveAnswer);
nextBtn.addEventListener("click", nextQuestion);




let userAnswers = []; 

// function saveAnswer() {
//   const answer = getSelected();
//   const correctAnswer = quizData[currentQuiz].correct;
  

//   answerEl.forEach((answerEl) => {
//     const id = answerEl.id;
//     if (id === correctAnswer) {
//       answerEl.parentElement.classList.add("correct");
//     } else {
//       if (id === answer) {
//         answerEl.parentElement.classList.add("wrong");
//       }
//     }
//   });


//   const isCorrect = answer === correctAnswer;
//   const feedback = document.createElement("p");
//   //feedback.textContent = isCorrect ? "Correct" : "Incorrect";
//   feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
//   footerEl.appendChild(feedback);

//   saveBtn.disabled = true; 
// }


const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deselectAnswers();
  markSavedAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_txt.innerText = currentQuizData.a;
  b_txt.innerText = currentQuizData.b;
  c_txt.innerText = currentQuizData.c;
  d_txt.innerText = currentQuizData.d;
  quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
  answerEl.forEach((answerEl) => {
    answerEl.disabled = false;
  });
}


function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
    answerEl.parentElement.classList.remove("correct", "wrong");
  });

  const feedbackElements = footerEl.querySelectorAll(".correct-feedback, .incorrect-feedback");
  feedbackElements.forEach((element) => {
    element.remove();
  });
}


function getSelected() {
  let answer;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}


function nextQuestion() {
  saveBtn.disabled = false;
  
  
  let unansweredQuestions = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === undefined) {
      unansweredQuestions++;
    }
  }
  

  if (unansweredQuestions > 0 && currentQuiz === quizData.length - 1) {
    const confirmation = confirm(`You have ${unansweredQuestions} unanswered question(s). Are you sure you want to view results?`);
    if (!confirmation) {
      return; 
    }
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    
    const headerTxt = document.querySelector(".header-txt");
    headerTxt.textContent = "Results";
    headerTxt.style.fontSize = "30px";
    const scorePercentage = (score / quizData.length) * 100;
    quiz.innerHTML = `<h1>You answered ${score}/${quizData.length} questions correctly</h1>
    <div style="text-align: justify; padding-bottom:20px">
    <h1>Your Score Percentage is ${scorePercentage}%</h1>
    </div>
    <button type="button" onclick="location.reload()">Reload</button>`;
    footerEl.style.display = "none";
    document.getElementById('timer').style.display = 'none';
    handleQuizCompletion(employeeIDInput.value.trim(), score, quizData.length);
  }

  if (currentQuiz === quizData.length - 1) {
    const btnSubmit = document.getElementById("nextBtn");
    btnSubmit.innerText = "View Results";
    btnSubmit.addEventListener("click", function () {
      console.log("Submit button clicked");
      stopTimer();
      const answers = getSelected();
    
      if (answers) {
        const currentQuizData = quizData[currentQuiz];
        const correctAnswer = currentQuizData.correct;
    
        if (answers === correctAnswer) {
          score++; 
        }
    
        nextQuestion(); 
      }
    });
  }

  backBtn.disabled = false; 
}





function saveAnswer() {
  const answer = getSelected();
  const correctAnswer = quizData[currentQuiz].correct;
  if (!answer) {
    return; 
  }
  if (userAnswers[currentQuiz] !== undefined) {
    return; 
  }
  answerEl.forEach((answerEl) => {
    const id = answerEl.id;
    if (id === correctAnswer) {
      answerEl.parentElement.classList.add("correct");
    } else {
      if (id === answer) {
        answerEl.parentElement.classList.add("wrong");
      }
    }
  });


  const isCorrect = answer === correctAnswer;
  const feedback = document.createElement("p");
  feedback.classList.add(isCorrect ? "correct-feedback" : "incorrect-feedback");
  footerEl.appendChild(feedback);
  
  
  nextBtn.disabled = false;
  // saveBtn.disabled = true; 
  if (userAnswers[currentQuiz] === undefined) {
    userAnswers[currentQuiz] = answer;
  }

  console.log("User Answer:", answer);
  console.log("Correct Answer:", correctAnswer);
  console.log("Is Correct?", isCorrect);

  if (isCorrect) {
    score++; 
    console.log("Score:", score);
  }
}

let timerRunning = true;


function startTimer(duration) {
  let timer = duration, minutes, seconds;
  const timerDisplay = document.getElementById('timer');

  const intervalID = setInterval(function () {
    console.log("Interval Running..."); 
    if (!timerRunning){
      clearInterval(intervalID);
      console.log("Timer Stopped");
      
      return;
    }
    console.log("Timer Running..."); 
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    if (timer < 300) { 
      timerDisplay.style.color = 'red'; 
    }
  
    timerDisplay.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      timerDisplay.textContent = 'Time\'s up!';
      timerDisplay.style.fontSize = '28px';
      timerDisplay.style.fontWeight="bold";
      timerDisplay.style.color="black";
      timerDisplay.style.PaddingBottom="11  px";
      displayResults();
      clearInterval(intervalID);
    }
  }, 1000);
}



function stopTimer() {
  console.log("Stopping Timer...");
  timerRunning = false;
}


function displayResults() {
  const headerTxt = document.querySelector(".header-txt");
  headerTxt.textContent = "Results";
  headerTxt.style.fontSize = "30px";
  const scorePercentage = (score / quizData.length) * 100;
  quiz.innerHTML = `<h1>You answered ${score}/${quizData.length} questions correctly</h1>
  <div style="text-align: justify; padding-bottom:20px">
  <h1>Your Score Percentage is ${scorePercentage}%</h1>
  </div>
  <button type="button" onclick="location.reload()">Reload</button>`;
  footerEl.style.display = "none";
  handleQuizCompletion(employeeID, score, quizLength);
}

function markSavedAnswer() {
  const savedAnswer = userAnswers[currentQuiz];

  if (!savedAnswer) {
    return; 
  }
  
  answerEl.forEach((answerEl) => {
    if (answerEl.id === savedAnswer) {
      answerEl.checked = true;
      answerEl.disabled = true;
      const correctAnswer = quizData[currentQuiz].correct;
      if (savedAnswer === correctAnswer) {
        answerEl.parentElement.classList.add("correct");
      } else {
        answerEl.parentElement.classList.add("wrong");
        
      }
    }
  });
}


function previousQuestion() {
  console.log("Navigating to previous question...");
  saveAnswer();
  currentQuiz--;

  if (currentQuiz >= 0) {
    loadQuiz();
    markSavedAnswer(); 
    
    
    answerEl.forEach((answerEl) => {
      answerEl.disabled = false;
    });

  
    if (currentQuiz === quizData.length - 2) {
      const btnSubmit = document.getElementById("nextBtn");
      btnSubmit.innerText = "Next";
    }

    nextBtn.disabled = false;
  } else {
    currentQuiz = 0;
    backBtn.disabled = true;
  }
}



const firebaseConfig = {
  apiKey: "AIzaSyAyh0KTPXxQRQHroqUaG_zQB4PJKMsB_qQ",
  authDomain: "quiz-94195.firebaseapp.com",
  databaseURL: "https://quiz-94195-default-rtdb.firebaseio.com",
  projectId: "quiz-94195",
  storageBucket: "quiz-94195.appspot.com",
  messagingSenderId: "838358419225",
  appId: "1:838358419225:web:cedfd35163dbe209822788"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// DOM elements

const scoreForm = document.getElementById('scoreForm');
const employeeIDInput = document.getElementById('employeeID');
const startAssessmentBtn = document.getElementById('startAssessmentBtn');

//const backBtn = document.getElementById('backBtn');
const employeeIDDisplay = document.getElementById('employeeIDDisplay');

// Hide quiz container and popup initially
// popupContainer.style.display = 'none';

// Start assessment button click handler
startAssessmentBtn.addEventListener('click', function() {
    const employeeID = employeeIDInput.value.trim();

    // Validate employee ID (optional, add your own validation logic)
    if (employeeID === '') {
        alert('Please enter Employee ID.');
        return;
    }

    // // Display employee ID in quiz footer
    // // employeeIDDisplay.textContent = `Employee ID: ${employeeID}`;
  
    // // Hide the popup and show the quiz container
    // popupContainer.style.display = 'none';
    // // quizContainer.style.display = 'block';

    // // Enable next button (and back button if needed)
    // nextBtn.disabled = false;

    // Start the quiz
    startQuiz();
    // startTimer();
});


function saveQuizResults(employeeID, score, percentage) {
  // Add a new document with a generated ID to the "quizResults" collection
  
    console.log("Saving quiz results:", employeeID, score, percentage);
    // Add document to Firestore
    db.collection("quizResults").add({
      employeeID: employeeID,
      score: score,
      percentage: percentage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
      console.log("Quiz results saved successfully with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding quiz results: ", error);
    });
  }


// Example function to handle saving quiz results when quiz is completed
function handleQuizCompletion(employeeID, score, quizLength) {
  // Calculate percentage
  const percentage = (score / quizLength) * 100;

  // Save quiz results to Firestore
  saveQuizResults(employeeID, score, percentage);
}

// Example: Assume you have a function to display final results and call this when quiz is completed
// function displayResultsAndSave(employeeID, score, quizLength) {
//   const scorePercentage = (score / quizLength) * 100;
//   console.log(`Employee ID: ${employeeID}, Score: ${score}/${quizLength}, Percentage: ${scorePercentage}%`);

//   // Display or do other actions as needed
//   // For example, update UI to show quiz results

//   // Save quiz results to Firestore
//   handleQuizCompletion(employeeID, score, quizLength);
// }

// Example usage: Call this function when quiz is completed
// Replace with your actual logic to determine when the quiz is completed
function quizCompleted() {
  const employeeID = employeeIDInput.value.trim(); // Assuming you capture employee ID
  const quizLength = quizData.length; // Assuming quizData is available
  
}



