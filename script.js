// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');
const resultsContainer = document.getElementById('results-container');
const retryBtn = document.getElementById('retry-btn');

// App state
let currentQuestionIndex = 0;
let randomizedQuestions = [];
let userAnswers = [];
const totalQuestions = questions.length;
const pointsPerQuestion = 100 / totalQuestions; // Each question is worth the same amount

// Event listeners
startBtn.addEventListener('click', startExam);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
retryBtn.addEventListener('click', restartExam);

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array]; // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
}

// Functions
function startExam() {
    // Randomize questions
    randomizedQuestions = shuffleArray(questions);
    
    // Initialize userAnswers array with empty arrays for each question
    userAnswers = new Array(randomizedQuestions.length).fill([]);
    
    startScreen.classList.add('hide');
    questionScreen.classList.remove('hide');
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

function restartExam() {
    resultsScreen.classList.add('hide');
    startScreen.classList.remove('hide');
}

function showQuestion(index) {
    const question = randomizedQuestions[index];
    questionTitle.textContent = `Question ${index + 1}`;
    
    // Display question text with note if exists
    if (question.note) {
        questionText.innerHTML = `${question.text} <br><em>${question.note}</em>`;
    } else {
        questionText.innerHTML = question.text;
    }
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Display options
    question.options.forEach(option => {
        const optionElement = document.createElement('label');
        optionElement.className = 'option';
        
        const input = document.createElement('input');
        
        // Determine if we need checkboxes (multiple answers) or radio buttons (single answer)
        if (question.correctAnswers.length > 1) {
            input.type = 'checkbox';
            input.name = `question-${index}`;
            input.value = option.id;
            
            // Check if this option was previously selected
            if (userAnswers[index] && userAnswers[index].includes(option.id)) {
                input.checked = true;
                optionElement.classList.add('selected');
            }
            
            // Add event listener for checkbox selection
            input.addEventListener('change', function() {
                // Get all selected options for this question
                const checkboxes = document.querySelectorAll(`input[name=question-${index}]:checked`);
                const selectedOptions = Array.from(checkboxes).map(cb => cb.value);
                userAnswers[index] = selectedOptions;
                
                // Update visual for selected option
                if (this.checked) {
                    optionElement.classList.add('selected');
                } else {
                    optionElement.classList.remove('selected');
                }
            });
        } else {
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = option.id;
            
            // Check if this option was previously selected
            if (userAnswers[index] && userAnswers[index].includes(option.id)) {
                input.checked = true;
                optionElement.classList.add('selected');
            }
            
            // Add event listener for radio selection
            input.addEventListener('change', function() {
                // For radio buttons, we only have one selected option
                userAnswers[index] = [this.value];
                
                // Update visual for all options
                const allOptions = document.querySelectorAll(`.option`);
                allOptions.forEach(opt => opt.classList.remove('selected'));
                optionElement.classList.add('selected');
            });
        }
        
        optionElement.appendChild(input);
        optionElement.appendChild(document.createTextNode(` ${option.id}. ${option.text}`));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update the question counter
    questionCounter.textContent = `Question ${index + 1} of ${totalQuestions}`;
    
    // Update navigation buttons
    updateNavButtons();
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function updateNavButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === randomizedQuestions.length - 1) {
        nextBtn.textContent = 'Finish';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function calculateScore() {
    let totalScore = 0;
    
    const results = randomizedQuestions.map((question, index) => {
        const correctAnswers = question.correctAnswers;
        const userSelectedAnswers = userAnswers[index] || [];
        
        let score = 0;
        let status = 'incorrect';
        
        // Check if answers are completely correct
        if (arraysEqual(correctAnswers.sort(), userSelectedAnswers.sort())) {
            score = pointsPerQuestion;
            status = 'correct';
        } 
        // Check if answers are partially correct (for multiple answer questions)
        else if (correctAnswers.length > 1 && userSelectedAnswers.length > 0) {
            const correctCount = userSelectedAnswers.filter(answer => correctAnswers.includes(answer)).length;
            const wrongCount = userSelectedAnswers.filter(answer => !correctAnswers.includes(answer)).length;
            
            if (correctCount > 0 && wrongCount === 0) {
                // Only partial answers, all right but incomplete
                score = (correctCount / correctAnswers.length) * pointsPerQuestion;
                status = 'partial';
            }
        }
        
        totalScore += score;
        
        return {
            question: question,
            userAnswers: userSelectedAnswers,
            score: score,
            status: status
        };
    });
    
    return {
        totalScore: totalScore.toFixed(2),
        results: results
    };
}

function showResults() {
    questionScreen.classList.add('hide');
    resultsScreen.classList.remove('hide');
    
    const scoreData = calculateScore();
    scoreElement.textContent = scoreData.totalScore;
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Generate result items
    scoreData.results.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `results-item ${result.status}`;
        
        const questionHeading = document.createElement('p');
        questionHeading.className = 'result-question';
        questionHeading.textContent = `Question ${index + 1}: ${result.question.text}`;
        resultItem.appendChild(questionHeading);
        
        const optionsList = document.createElement('div');
        optionsList.className = 'result-options';
        
        result.question.options.forEach(option => {
            const optionItem = document.createElement('p');
            
            const isUserSelected = result.userAnswers.includes(option.id);
            const isCorrect = result.question.correctAnswers.includes(option.id);
            
            let optionPrefix = '';
            
            if (isUserSelected && isCorrect) {
                optionPrefix = '✓ ';
                optionItem.style.color = 'green';
            } else if (isUserSelected && !isCorrect) {
                optionPrefix = '✗ ';
                optionItem.style.color = 'red';
            } else if (!isUserSelected && isCorrect) {
                optionPrefix = '• ';
                optionItem.style.color = 'green';
                optionItem.style.fontWeight = 'bold';
            } else {
                optionPrefix = '• ';
            }
            
            optionItem.textContent = `${optionPrefix}${option.id}. ${option.text}`;
            optionsList.appendChild(optionItem);
        });
        
        resultItem.appendChild(optionsList);
        
        // Add score information
        const scoreInfo = document.createElement('p');
        scoreInfo.style.fontWeight = 'bold';
        scoreInfo.textContent = `Score: ${result.score.toFixed(1)} / ${pointsPerQuestion.toFixed(1)}`;
        resultItem.appendChild(scoreInfo);
        
        resultsContainer.appendChild(resultItem);
    });
}

// Helper function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}