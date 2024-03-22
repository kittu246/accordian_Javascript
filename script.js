import { questionWithAns } from "./utils.js";

let accordianContainer = document.querySelector("#questions");
console.log(accordianContainer);

// toggle answer

function toggleAnswer(e) {
  let button = e.target.parentElement;

  let answerContainer = button.parentElement.nextElementSibling;

  answerContainer.classList.toggle("active");

  if (answerContainer.classList.contains("active")) {
    button.innerHTML = ` <i class="fa-solid fa-circle-minus style="color: #aa3cc8;"></i>`;
  } else {
    button.innerHTML = ` <i class="fa-solid fa-circle-plus style="color: #aa3cc8"></i>`;
  }
}

function displayAccordian() {
  questionWithAns.forEach((data) => {
    const singleQuestion = document.createElement("div");
    const questionContainer = document.createElement("div");
    questionContainer.className = "question";

    const question = document.createElement("div");
    question.innerText = `${data.ques}`;
    const toggleButton = document.createElement("button");
    toggleButton.addEventListener("click", toggleAnswer);
    toggleButton.className="toggleButton";
    toggleButton.innerHTML = `
    <i class="fa-solid fa-circle-plus style="color: #aa3cc8 "></i>


    `;

    questionContainer.append(question);
    questionContainer.append(toggleButton);

    const answer = document.createElement("div");
    answer.className = "answer";

    answer.innerHTML = `
        <p>${data.answer}</p>
                    

        `;

    singleQuestion.append(questionContainer);
    singleQuestion.append(answer);

    accordianContainer.append(singleQuestion);
  });
}

window.addEventListener("load", displayAccordian);
