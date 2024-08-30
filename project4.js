// let submit = document.querySelector("#sub");
// const out = document.querySelector("#out");
// let question = document.getElementById('question');
// let subject = document.querySelector('#subject');
// const newq = document.querySelector("#new");
// const div2 = document.querySelector("#div2");


// const storage = window.localStorage;


// function storeQuestionAndSubject() {
//   const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
//   questions.push({ subject: subject.value, question: question.value, responses: [] });
//   storage.setItem('questions', JSON.stringify(questions));
// }


// function storeResponse(index, response) {
//   const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
//   if (questions[index]) {
//     questions[index].responses.push(response);
//     storage.setItem('questions', JSON.stringify(questions));
//   } else {
//     console.error('Invalid index:', index);
//   }
// }

// function displayQuestionsAndSubjects() {
//   const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
//   out.innerHTML = '';
//   questions.forEach((question, index) => {
//     out.innerHTML += `
//       <div class="childs" data-index="${index}">
//         <h1>${question.subject}</h1>
//         <p>${question.question}</p>
//       </div>
//     `;
//   });
// }


// function displayResponses(index) {
//   const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
//   const responsesDiv = div2.querySelector("#responses");
//   if (responsesDiv) {
//     responsesDiv.innerHTML = '';
//     if (questions[index] && questions[index].responses) {
//       questions[index].responses.forEach(response => {
//         responsesDiv.innerHTML += `
//           <div class="hell">
//             <h5>${response.name}</h5>
//             <p>${response.response}</p>
//           </div>
//         `;
//       });
//     }
//   }
// }


// function handleSubmit() {
//   storeQuestionAndSubject();
//   displayQuestionsAndSubjects();
//   question.value = '';
//   subject.value = '';
// }

// submit.addEventListener('click', handleSubmit);


// newq.addEventListener('click', () => {
//   div2.innerHTML = `
//     <h1>Welcome to Discussion Portal!</h1>
//     <p>Enter a subject and question to get started</p>
//     <div>
//       <input type="text" placeholder="Enter Subject..." required id="subject">
//     </div>
//     <div>
//       <textarea name="message" id="question" placeholder="Enter Questions" required></textarea>
//     </div>
//     <button type="submit" id="sub">Submit</button>
//   `;

//   submit = document.querySelector("#sub");
//   subject = document.querySelector("#subject");
//   question = document.querySelector("#question");
//   submit.addEventListener('click', handleSubmit);
// });


// out.addEventListener('click', (event) => {
//   const target = event.target.closest('.childs');
//   if (target) {
//     const index = parseInt(target.dataset.index, 10);
//     if (!isNaN(index)) {
//       const resdiv = document.querySelector("#div2");
//       const heading = target.querySelector('h1').innerText;
//       const para = target.querySelector('p').innerText;
//       resdiv.innerHTML = `
//         <div class="parents" id="response">
//           <h4>Question</h4>
//           <div id="res">
//             <h5>${heading}</h5>
//             <p>${para}</p>
//           </div>
//           <h4>Response</h4>
//           <div id="responses"></div>
//           <h4>Add Response</h4>
//           <input type="text" name="name" id="name" placeholder="Enter Name">
//           <textarea name="respo" id="respo" placeholder="Enter your response...."></textarea>
//           <button class="res-sub" style="margin-top: 15px;">Submit</button>
//         </div>
//       `;
//       const res = resdiv.querySelector(".res-sub");
//       res.addEventListener('click', () => {
//         const name = resdiv.querySelector("#name");
//         const respons_text = resdiv.querySelector("#respo");
//         const response = { name: name.value, response: respons_text.value };
//         storeResponse(index, response);
//         displayResponses(index);
//       });
//       displayResponses(index);
//     } else {
//       console.error('Invalid index:', index);
//     }
//   }
// });

// displayQuestionsAndSubjects();
let submit = document.querySelector("#sub");
const out = document.querySelector("#out");
let question = document.getElementById('question');
let subject = document.querySelector('#subject');
const newq = document.querySelector("#new");
const div2 = document.querySelector("#div2");

// Initialize local storage
const storage = window.localStorage;

// Store questions and subjects in local storage
function storeQuestionAndSubject() {
  const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
  questions.push({ subject: subject.value, question: question.value, responses: [] });
  storage.setItem('questions', JSON.stringify(questions));
}

// Store responses in local storage
function storeResponse(index, response) {
  const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
  console.log("Index:", index);
  console.log("Questions Array:", questions);
  if (questions[index]) {
    questions[index].responses.push(response);
    storage.setItem('questions', JSON.stringify(questions));
  } else {
    console.error('Invalid index:', index);
    alert('Error: Invalid question index. Please try again.');
  }
}

// Display questions and subjects from local storage
function displayQuestionsAndSubjects() {
  const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
  out.innerHTML = '';
  questions.forEach((question, index) => {
    out.innerHTML += `
      <div class="childs" data-index="${index}">
        <h1>${question.subject}</h1>
        <p>${question.question}</p>
      </div>
    `;
  });
}

// Display responses from local storage
function displayResponses(index) {
  const questions = storage.getItem('questions') ? JSON.parse(storage.getItem('questions')) : [];
  const responsesDiv = div2.querySelector("#responses");
  if (responsesDiv) {
    responsesDiv.innerHTML = '';
    if (questions[index] && questions[index].responses) {
      questions[index].responses.forEach(response => {
        responsesDiv.innerHTML += `
          <div class="hell">
            <h5>${response.name}</h5>
            <p>${response.response}</p>
          </div>
        `;
      });
    }
  }
}

// Handle submit event
function handleSubmit() {
  storeQuestionAndSubject();
  displayQuestionsAndSubjects();
  question.value = '';
  subject.value = '';
}

submit.addEventListener('click', handleSubmit);

// Handle new question event
newq.addEventListener('click', () => {
  div2.innerHTML = `
    <h1>Welcome to Discussion Portal!</h1>
    <p>Enter a subject and question to get started</p>
    <div>
      <input type="text" placeholder="Enter Subject..." required id="subject">
    </div>
    <div>
      <textarea name="message" id="question" placeholder="Enter Questions" required></textarea>
    </div>
    <button type="submit" id="sub">Submit</button>
  `;
  // Update references to the new elements
  submit = document.querySelector("#sub");
  subject = document.querySelector("#subject");
  question = document.querySelector("#question");
  submit.addEventListener('click', handleSubmit);
});

// Handle response event
out.addEventListener('click', (event) => {
  const target = event.target.closest('.childs');
  if (target) {
    const index = parseInt(target.dataset.index, 10);
    if (!isNaN(index)) {
      const resdiv = document.querySelector("#div2");
      const heading = target.querySelector('h1').innerText;
      const para = target.querySelector('p').innerText;
      resdiv.innerHTML = `
        <div class="parents" id="response">
          <h4>Question</h4>
          <div id="res">
            <h5>${heading}</h5>
            <p>${para}</p>
          </div>
          <h4>Response</h4>
          <div id="responses"></div>
          <h4>Add Response</h4>
          <input type="text" name="name" id="name" placeholder="Enter Name">
          <textarea name="respo" id="respo" placeholder="Enter your response...."></textarea>
          <button class="res-sub" style="margin-top: 15px;">Submit</button>
        </div>
      `;
      const res = resdiv.querySelector(".res-sub");
      res.addEventListener('click', () => {
        const name = resdiv.querySelector("#name");
        const respons_text = resdiv.querySelector("#respo");
        const response = { name: name.value, response: respons_text.value };
        storeResponse(index, response);
        displayResponses(index);
      });
      displayResponses(index);
    } else {
      console.error('Invalid index:', index);
    }
  }
});

// Display questions and subjects on page load
displayQuestionsAndSubjects();
