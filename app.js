// create a questions arr variable to host the questions.
// have two objects, one for each question 

let questionsarr = [
    {
      Q: "Name the capital of Texas.",
      A: "Bismark",
      B: "Lincoln",
      C: "Austin",
      D: "Helena",
      Answer:'C'
    },
  
    {
      Q: "Name the capital of Colorado.",
      A: "SanteFe",
      B: "Boulder",
      C: "Denver",
      D: "Phoenix",
      Answer:'C'
    },
    
    {
      Q: "Name the capital of Louisiana.",
      A: "Baton Rouge",
      B: "Juneau",
      C: "Montgomery",
      D: "Arkansas ",
      Answer:'A'
    }
  ];
  
  
  // start with the first question 
  // start the score at 0 
  i = -1
  score = 0 
  // we have to do it here and not in buttonfunc, otherwise well set it to 0 every time, then increase it once every time, which means youll never get higher than 1 
  
  //when you click the next question button, change the question
  document.querySelector(".btn").addEventListener("click", buttonFunc);
  
  function buttonFunc(e) {
    // save the elements in a variable 
    // grabs question element and all the labels 
    let question = document.querySelector(".question");
    let answerA = document.querySelector('label[for="answer-A"]');
    let answerB = document.querySelector('label[for="answer-B"]');
    let answerC = document.querySelector('label[for="answer-C"]');
    let answerD = document.querySelector('label[for="answer-D"]');
    
  
    let answer = document.querySelector('input[name="answer"]:checked')
    // grabs the answer element that is currently checked/ gets the answer 
    
   
    // checks to see if we dont have an answer 
    // e is only present if we click the button 
    
    //IF THERE WASNT AN ANSWER AND THE BUTTON WAS CLICKED DONT DO ANYTHING 
    if(!answer && e) {
      return
    }
      // an event is passed if the button is clicked 
    //if there is no answer checked, do not proceed to the next question 
    
    //Logic checking for the correct answer 
    // if there is an event 
    if(e) {
    // get the id of the answer 
    let answerid = answer.id
    answerid = answerid.charAt(answerid.length-1);
    
     if (answerid==questionsarr[i].Answer)  {
         // the i is there because question array is an array. it has a list of objects. we want to get the specific one thats at the index that were currently at, and we stashed our index inside of i. if we have questionsarr[i] we get the current question, and then we ask our current question for the answer. 
       // if there was no [i] it would error out because we would be asking for the answer key of the question array, and the question array doesnt have an answer key. each of its questions inside of it does, but it doesnt. it just has keys 0 and 1. 
       score+=20
     }
    }
    
    i++;
    // if user reaches the end of the array, calll the getScore function else, 
    if (i >= questionsarr.length) {
      getScore();
    } else {
      // change the variable to display whats in the array and show it on the DOM 
      question.innerHTML = questionsarr[i].Q;
      answerA.innerHTML=questionsarr[i].A
      answerB.innerHTML=questionsarr[i].B
      answerC.innerHTML=questionsarr[i].C
      answerD.innerHTML=questionsarr[i].D
    }
  }
  
  function getScore() {
    document.querySelector('.quiz').style.display='none'
    let scorediv = document.querySelector('.score')
    scorediv.style.display=''
    scorediv.innerText='Your score is:' + score 
  }
  buttonFunc() 