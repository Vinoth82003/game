let all_mask = document.querySelectorAll(".mask");

let correctAnswers = [false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,]

let questions = [
    {qn:"question1",
     options:["option1","option2","option3"],
     answer: "option1",
    },
    {qn:"question2",
     options:["option1","option2","option3"],
     answer: "option2",
    },
    {qn:"question3",
     options:["option1","option2","option3"],
     answer: "option3",
    },
    {qn:"question4",
     options:["option1","option2","option3"],
     answer: "option1",
    },
    {qn:"question5",
     options:["option1","option2","option3"],
     answer: "option2",
    },
    {qn:"question6",
     options:["option1","option2","option3"],
     answer: "option3",
    },
    {qn:"question7",
     options:["option1","option2","option3"],
     answer: "option1",
    },
    {qn:"question8",
     options:["option1","option2","option3"],
     answer: "option2",
    },
    {qn:"question9",
     options:["option1","option2","option3"],
     answer: "option3",
    },
    {qn:"question10",
     options:["option1","option2","option3"],
     answer: "option1",
    },
    {qn:"question11",
     options:["option1","option2","option3"],
     answer: "option2",
    },
    {qn:"question12",
     options:["option1","option2","option3"],
     answer: "option3",
    },
    {qn:"question13",
     options:["option1","option2","option3"],
     answer: "option1",
    },
    {qn:"question14",
     options:["option1","option2","option3"],
     answer: "option2",
    },
    {qn:"question15",
     options:["option1","option2","option3"],
     answer: "option3",
    },
    {qn:"question16",
     options:["option1","option2","option3"],
     answer: "option1",
    },
]

let questionDiv = document.querySelector(".question");
let optionsDiv = document.querySelector(".options");
let inputHidden = document.querySelector("#index");

function displayQuestion(index){
    console.log(index);

    let question = questions[index].qn;
    let options = questions[index].options;
    inputHidden.value = index;
    questionDiv.innerHTML = question;
    optionsDiv.innerHTML = ''
    for(let i = 0; i< options.length; i++){
        let label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" class="option" value="${options[i]}"> ${options[i]} `;
        optionsDiv.appendChild(label);
    }

}

all_mask.forEach(mask => {
    mask.addEventListener('click',()=>{
        let index = (mask.getAttribute("index"))
        if (correctAnswers[index] !== true) {
            displayQuestion(index);
        }else{
            mask.classList.add("active");
            console.log("already answered");
        }
    })
});

function checkActive(){
    all_mask.forEach(e => {
        let ind = e.getAttribute("index");
        if (correctAnswers[ind] == true) {
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    });
}

function allSet(){
    let count = correctAnswers.filter((ans,innercount)=>{
        ans == true;
        return ans
    });
    
    if (count.length == 16) {
        document.querySelector(".image_mask").classList.add("active")
    }else{
        document.querySelector(".image_mask").classList.add("active")
    }
}

function checkAnswer(index, answer){
    let CorrectAnswer = questions[index].answer;
    if (CorrectAnswer == answer) {
        correctAnswers[index] = true;
    }else{
        correctAnswers[index] = false;
    }
    questions[index].userAnswer = answer;
    console.log(questions[index]);
    checkActive();
}

let button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let index = document.getElementById("index").value;
    let answer = document.querySelector('.options input[type="radio"]:checked').value;
    checkAnswer(index,answer);
})