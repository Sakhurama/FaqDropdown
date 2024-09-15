const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");


function Faq1(){
    const answer = document.getElementById("answer");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
    } else {
        answer.classList.add("hidden");
    }
}

question1.addEventListener('click', Faq1);