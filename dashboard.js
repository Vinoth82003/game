console.log("dashboard.js");

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

let profile = document.querySelector(".profile");

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

let question = document.querySelector(".question");
let question_options = document.querySelector(".question_options");


function checkAllAnswered(){
    let countOfFalse = answeredQuestions.filter(value => value === true).length;
    if(countOfFalse == 16){
        alert("congratulations");
    }
}

checkAllAnswered();