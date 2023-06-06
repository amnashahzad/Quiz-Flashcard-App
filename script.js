const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "Who is the author of Harry Potter series?",
      options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George Orwell"],
      answer: 1
    },
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submitBtn');
  const resultElement = document.getElementById('result');
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
      const option = document.createElement('button');
      option.textContent = question.options[i];
      option.addEventListener('click', checkAnswer.bind(null, i));
      optionsElement.appendChild(option);
    }
  }
  
  function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultElement.style.display = 'block';
  }
  
  loadQuestion();
  