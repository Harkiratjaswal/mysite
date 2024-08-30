let subject = document.getElementById("input_field2");
let question = document.getElementById("questioning_area");
let array = [];

let submitBtn = document.querySelector(".submit");
let question_area = document.getElementById("collection_area");
let section2 = document.getElementsByClassName("sub_section")[0];

let paragraph3 = document.getElementsByClassName("para3")[0];
let paragraph4 = document.getElementsByClassName("para4")[0];
let response_section = document.getElementsByClassName("response_area")[0];
let subject_text = "";
let question_text = "";

let responseSubmitted = document.getElementById("solution");
let submittedResponseArea = document.getElementsByClassName("response_collection")[0];
let responseSubmitButton = document.getElementsByClassName("submit_response")[0];

let nameOfResponser = document.getElementsByClassName("name_field")[0];
let solutionOfProblem = document.getElementById("solution");


submitBtn.addEventListener("click", () =>{

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parent_div");

    const divElem = document.createElement("h3");
    divElem.classList.add("collection");
    divElem.innerText = subject.value;
    parentDiv.appendChild(divElem);

    const questionDiv = document.createElement("p");
    questionDiv.classList.add("quest");
    questionDiv.innerText = question.value;
    parentDiv.appendChild(questionDiv);

    question_area.appendChild(parentDiv);

    subject.value = "";
    question.value = "";
})

let state=0;
let newFormBtn = document.getElementsByClassName("new_form")[0];
newFormBtn.addEventListener("click",() => {
    if(state==0)
    {
        section2.style.display = "block";
        response_section.style.display = "none";
    }

    subject.value = "";
    question.value = "";
})

question_area.addEventListener("click",(e) =>{
    
    if(e.target.parentNode.tagName=="DIV" && e.target.parentNode.classList.contains("parent_div"))
    {
        section2.style.display = "none";
        response_section.style.display = "block";
    }

    paragraph3.innerText = e.target.parentNode.childNodes[0].innerText;
    paragraph4.innerText = e.target.parentNode.childNodes[1].innerText;

})

responseSubmitButton.addEventListener("click", () => {
    submittedResponseArea.style.display = "block";
    const responseDiv = document.createElement("div");
    responseDiv.classList.add("response_sub");
    // responseDiv.innerText = responseSubmitted.value; 
    submittedResponseArea.appendChild(responseDiv);

    const responserName = document.createElement("p");
    responserName.classList.add("name");
    responserName.innerText = nameOfResponser.value;
    responseDiv.appendChild(responserName);

    const solution_suggested = document.createElement("p");
    solution_suggested.classList.add("sol");
    solution_suggested.innerText = solutionOfProblem.value;
    responseDiv.appendChild(solution_suggested);

    const responseObj = {
        subject: paragraph3.innerText,
        question: paragraph4.innerText,
        response: responseSubmitted.value
    };
    array.push(responseObj);
    console.log(array);

    nameOfResponser.value = "";
    solutionOfProblem.value = "";
});

