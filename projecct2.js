Document.addEventListener('DOMContentLoaded', function () {
    const newQuestionBtn = document.getElementById('newQuestionBtn');
    const questionForm = document.getElementById('questionForm');
    const questionsList = document.getElementById('questionsList');

    newQuestionBtn.addEventListener('click', function () {
        questionForm.style.display = 'block';
    });
    const submit=document.querySelector("#submit");
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const subject = document.getElementById('subjectInput').value;
        const question = document.getElementById('questionInput').value;

        if (subject && question) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="question">
                    <span class="question-title">${question}</span>
                </div>
                <div class="question-subject">${subject}</div>
            `;
            questionsList.appendChild(listItem);

            document.getElementById('subjectInput').value = '';
            document.getElementById('questionInput').value = '';
            questionForm.style.display = 'none';
        }
    });
});