const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");


function Faq1(){
    const answer = document.getElementById("answer1");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

function Faq2(){
    const answer = document.getElementById("answer2");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

function Faq3(){
    const answer = document.getElementById("answer3");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

function Faq4(){
    const answer = document.getElementById("answer4");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

question1.addEventListener('click', Faq1);
question2.addEventListener('click', Faq2);
question3.addEventListener('click', Faq3);
question4.addEventListener('click', Faq4);