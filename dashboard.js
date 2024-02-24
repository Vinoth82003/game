console.log("dashboard.js");

let imageUrl =[
    {
     url:""
    }
]

let answeredQuestions = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];

(localStorage.setItem("answeredQuestions",JSON.stringify(answeredQuestions)))
answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions"))
localStorage.setItem("imagesfound",0)
localStorage.setItem("attempts",0)
localStorage.setItem("score",0)
document.querySelector(".attempts").innerHTML = localStorage.getItem("attempts");

let questions = [
    {
        qn:"question 1 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
    {
        qn:"question 2 (answer is 2)",
        options:['option 1','option 2','option 3'],
        answer:"option 2",
    },
    {
        qn:"question 3 (answer is 3)",
        options:['option 1','option 2','option 3'],
        answer:"option 3",
    },
    {
        qn:"question 4 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
    {
        qn:"question 5 (answer is 2)",
        options:['option 1','option 2','option 3'],
        answer:"option 2",
    },
    {
        qn:"question 6 (answer is 3)",
        options:['option 1','option 2','option 3'],
        answer:"option 3",
    },
    {
        qn:"question 7 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
    {
        qn:"question 8 (answer is 2)",
        options:['option 1','option 2','option 3'],
        answer:"option 2",
    },
    {
        qn:"question 9 (answer is 3)",
        options:['option 1','option 2','option 3'],
        answer:"option 3",
    },
    {
        qn:"question 10 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
    {
        qn:"question 11 (answer is 2)",
        options:['option 1','option 2','option 3'],
        answer:"option 2",
    },
    {
        qn:"question 12 (answer is 3)",
        options:['option 1','option 2','option 3'],
        answer:"option 3",
    },
    {
        qn:"question 13 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
    {
        qn:"question 14 (answer is 2)",
        options:['option 1','option 2','option 3'],
        answer:"option 2",
    },
    {
        qn:"question 15 (answer is 3)",
        options:['option 1','option 2','option 3'],
        answer:"option 3",
    },
    {
        qn:"question 16 (answer is 1)",
        options:['option 1','option 2','option 3'],
        answer:"option 1",
    },
];

let profile = document.querySelector(".profile");
let submitBtn = document.querySelector(".submit");
let all_mask = document.querySelectorAll(".mask");
let hiddenInput = document.querySelector("#hiddenInput");

profile.addEventListener("click", ()=>{
    document.querySelector(".menu_options").classList.toggle("active");
});

let side_button = document.querySelector(".side_button");
let side_bar = document.querySelector(".side_bar");
let main = document.querySelector(".main");

side_button.addEventListener("click",()=>{
    side_button.classList.toggle("active");
    side_bar.classList.toggle("active");
    main.classList.toggle("active");
});

let questionDiv = document.querySelector(".question");
let question_options = document.querySelector(".question_options");


function checkAllAnswered(){
    let countOfTrue = answeredQuestions.filter(value => value === true).length;
    let countOfFalse = answeredQuestions.filter(value => value === false).length;
    if(countOfTrue == 16){
        alert("congratulations");
        let imagefound = parseInt(localStorage.getItem("imagesfound")) + 1;
        localStorage.setItem("imagesfound",imagefound)
        let audio = new Audio("asset/audio/victory1.mp3");
        audio.play();
    }

    document.querySelector(".score").innerHTML = (parseInt(countOfTrue)*10);
    document.querySelector(".imagefound").innerHTML = parseInt(localStorage.getItem("imagesfound"));
    document.querySelector(".attempts").innerHTML = parseInt(localStorage.getItem("attempts"));

}

function displayQuestion(index){
    if (index < 16) {
        let question = questions[index].qn;
        let options = questions[index].options;
        hiddenInput.value = index;
        questionDiv.innerHTML = question;
        question_options.innerHTML = "";
        options.forEach(opt => {
            let label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="option" class="radioBtn" value="${opt}"> ${opt}`;
            question_options.appendChild(label);
        });
        submitBtn.disabled = false;
    }
}


function removeButtons(){
    all_mask.forEach(mask => {
        let buttonIndex = mask.getAttribute("index");
        if (answeredQuestions[buttonIndex] == true) {
            mask.classList.add("active");
        }else{
            mask.classList.remove("active");
        }
    });
    checkAllAnswered();
}

removeButtons();

function submitAnswer(index, answer) {
    let correctAnswer = questions[index].answer;
    if (correctAnswer == answer) {
        answeredQuestions[index] = true;
        let score = parseInt(localStorage.getItem("score")); // Parse the score as integer
        score++;
        localStorage.setItem("score", score);
        document.querySelector(".score").innerHTML = score;
        let newIndex = answeredQuestions.indexOf(false);
        if (newIndex != -1) {
            displayQuestion(newIndex);
        }
        // Play correct answer audio
        let audio = new Audio("asset/audio/points.mp3");
        audio.play();
    } else {
        answeredQuestions[index] = false;
        alert("wrong answer");
        let attempts = parseInt(localStorage.getItem("attempts")); // Parse attempts as integer
        attempts++;
        localStorage.setItem("attempts", attempts);
        document.querySelector(".attempts").innerHTML = attempts;
        // Play wrong answer audio
        let audio = new Audio("asset/audio/loss.mp3");
        audio.play();
    }
    localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions))
    removeButtons();
}



all_mask.forEach(mask => {
    mask.addEventListener("click",()=>{
        let index = mask.getAttribute("index");
        if (answeredQuestions[index] == false) {
            displayQuestion(index);
        }else{
            alert("you have already answered this questions");
        }
    });
});

submitBtn.addEventListener("click",()=>{
    let input = document.querySelector("input[type='hidden']").value;
    let radio = document.querySelector("input[type='radio']:checked");
    if (radio) {
        submitAnswer(input,radio.value);
    }else{
        alert("Select atleast one option to submit");
    }
})