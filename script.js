const compounds = [
    // Oxidation State 1-
    { name: "Dihydrogen phosphite", formula: "H2PO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Dihydrogen phosphate", formula: "H2PO4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hydrogen sulfite", formula: "HSO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hydrogen sulfate", formula: "HSO4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hydrogen oxalate", formula: "HC2O4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Thiocyanate", formula: "SCN", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Cyanide", formula: "CN", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Acetate", formula: "C2H3O2", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Permanganate", formula: "MnO4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hydrogen carbonate", formula: "HCO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hydroxide", formula: "OH", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Nitrite", formula: "NO2", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Nitrate", formula: "NO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hypochlorite", formula: "ClO", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Chlorite", formula: "ClO2", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Chlorate", formula: "ClO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Perchlorate", formula: "ClO4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hypoiodite", formula: "IO", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Iodite", formula: "IO2", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Iodate", formula: "IO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Periodate", formula: "IO4", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Hypobromite", formula: "BrO", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Bromite", formula: "BrO2", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Bromate", formula: "BrO3", charge: "1-", category: "Oxidation State 1⁻" },
    { name: "Perbromate", formula: "BrO4", charge: "1-", category: "Oxidation State 1⁻" },
    // Oxidation State 2-
    { name: "Hydrogen phosphite", formula: "HPO3", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Hydrogen phosphate", formula: "HPO4", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Sulfite", formula: "SO3", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Sulfate", formula: "SO4", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Oxalate", formula: "C2O4", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Thiosulfate", formula: "S2O3", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Silicate", formula: "SiO3", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Chromate", formula: "CrO4", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Dichromate", formula: "Cr2O7", charge: "2-", category: "Oxidation State 2⁻" },
    { name: "Carbonate", formula: "CO3", charge: "2-", category: "Oxidation State 2⁻" },
    // Oxidation State 3-
    { name: "Phosphite", formula: "PO3", charge: "3-", category: "Oxidation State 3⁻" },
    { name: "Phosphate", formula: "PO4", charge: "3-", category: "Oxidation State 3⁻" },
    { name: "Arsenate", formula: "AsO4", charge: "3-", category: "Oxidation State 3⁻" },
    { name: "Borate", formula: "BO3", charge: "3-", category: "Oxidation State 3⁻" },
    // Oxidation State 1+
    { name: "Ammonium", formula: "NH4", charge: "1+", category: "Oxidation State 1⁺" },
    // Organic (Alkanes)
    { name: "Methane", formula: "CH4", charge: null, category: "Organic (Alkanes)" },
    { name: "Ethane", formula: "C2H6", charge: null, category: "Organic (Alkanes)" },
    { name: "Propane", formula: "C3H8", charge: null, category: "Organic (Alkanes)" },
    { name: "Butane", formula: "C4H10", charge: null, category: "Organic (Alkanes)" },
    { name: "Pentane", formula: "C5H12", charge: null, category: "Organic (Alkanes)" },
    { name: "Hexane", formula: "C6H14", charge: null, category: "Organic (Alkanes)" },
    { name: "Heptane", formula: "C7H16", charge: null, category: "Organic (Alkanes)" },
    { name: "Octane", formula: "C8H18", charge: null, category: "Organic (Alkanes)" },
    { name: "Nonane", formula: "C9H20", charge: null, category: "Organic (Alkanes)" },
    { name: "Decane", formula: "C10H22", charge: null, category: "Organic (Alkanes)" }
];

const selectionContainer = document.getElementById('selection-container'), startQuizForm = document.getElementById('start-quiz-form'), startQuizButton = document.getElementById('start-quiz-button'), studySetCheckboxes = document.querySelectorAll('input[name="study-set"]'), selectAllCheckbox = document.getElementById('select-all-checkbox'), quizBox = document.getElementById('quiz-box'), completionScreen = document.getElementById('completion-screen'), progressCounter = document.getElementById('progress-counter'), questionPrompt = document.getElementById('question-prompt'), questionItem = document.getElementById('question-item'), answerForm = document.getElementById('answer-form'), answerInput = document.getElementById('answer-input'), checkButton = document.getElementById('check-button'), hintButton = document.getElementById('hint-button'), feedbackMessage = document.getElementById('feedback-message'), continuePrompt = document.getElementById('continue-prompt'), restartButton = document.getElementById('restart-button'), finalScore = document.getElementById('final-score'), reviewSection = document.getElementById('review-section'), wrongAnswersList = document.getElementById('wrong-answers-list');
const helpButton = document.getElementById('help-button'), helpModal = document.getElementById('help-modal'), helpModalOverlay = document.getElementById('help-modal-overlay'), closeHelpModal = document.getElementById('close-help-modal');
let quizItems = [], currentItem = null, questionType = 'name', totalItemsInQuiz = 0, quizDirection = 'random', quizWithCharge = true, isWaitingForContinue = false, wronglyAnswered = [], lastWronglyAnswered = [];

const subscriptMap = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
const unsubscriptMap = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };

function handleInputFormatting(event) {
    const input = event.target;
    let value = input.value;
    let cursorPos = input.selectionStart;
    const parts = value.split(/ (.*)/s);
    const formulaPart = parts[0];
    const chargePart = parts[1] || '';
    const formattedFormula = formulaPart.replace(/[0-9]/g, char => subscriptMap[char]);
    const newValue = formattedFormula + (parts.length > 1 ? ' ' + chargePart : '');
    if (value !== newValue) {
        const diff = newValue.length - value.length;
        input.value = newValue;
        input.setSelectionRange(cursorPos + diff, cursorPos + diff);
    }
}

function normalizeAnswer(str) { return str.replace(/[₀-₉]/g, char => unsubscriptMap[char] || char); }
function formatFormula(formula, charge) {
    const formattedFormula = formula.replace(/(\d+)/g, '<sub>$1</sub>');
    if (!charge) return formattedFormula;
    const chargeSymbol = charge.slice(-1);
    const chargeValue = charge.slice(0, -1);
    const formattedCharge = (chargeValue === "1" ? "" : chargeValue) + chargeSymbol;
    return `${formattedFormula}<sup>${formattedCharge}</sup>`;
}

function updateStartButtonState() { const anyChecked = Array.from(document.querySelectorAll('input[name="study-set"]')).some(cb => cb.checked); startQuizButton.disabled = !anyChecked; }
selectAllCheckbox.addEventListener('change', () => { studySetCheckboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked); updateStartButtonState(); });
studySetCheckboxes.forEach(checkbox => { checkbox.addEventListener('change', () => { if (!checkbox.checked) { selectAllCheckbox.checked = false; } updateStartButtonState(); }); });
startQuizForm.addEventListener('submit', handleQuizStart);
answerForm.addEventListener('submit', checkAnswer);
hintButton.addEventListener('click', showHint);
restartButton.addEventListener('click', resetToSelection);
answerInput.addEventListener('input', handleInputFormatting);
helpButton.addEventListener('click', () => { helpModal.classList.add('visible'); helpModalOverlay.classList.add('visible'); });
const closeModal = () => { helpModal.classList.remove('visible'); helpModalOverlay.classList.remove('visible'); };
closeHelpModal.addEventListener('click', closeModal);
helpModalOverlay.addEventListener('click', closeModal);

function handleQuizStart(event) {
    event.preventDefault();
    const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="study-set"]:checked'));
    const selectedCategories = selectedCheckboxes.map(cb => cb.value);
    quizDirection = document.querySelector('input[name="quiz-direction"]:checked').value;
    const chargeMode = document.querySelector('input[name="charge-mode"]:checked').value;
    quizWithCharge = (chargeMode === 'with-charge');
    const itemsForQuiz = new Set();
    compounds.forEach(item => { if (selectedCategories.includes(item.category)) { itemsForQuiz.add(item); } });
    if (selectedCategories.includes('review-wrong')) { lastWronglyAnswered.forEach(item => itemsForQuiz.add(item)); }
    
    let selectedItems = Array.from(itemsForQuiz);

    // --- THIS IS THE FIX ---
    // The block that filtered out Alkanes when quizWithCharge was true has been REMOVED.
    
    if (selectedItems.length === 0) {
        alert("Please select at least one study set to begin.");
        return;
    }
    startGame(selectedItems);
}

function startGame(selectedItems) {
    quizItems = [...selectedItems];
    totalItemsInQuiz = selectedItems.length;
    wronglyAnswered = [];
    selectionContainer.style.display = 'none';
    completionScreen.style.display = 'none';
    quizBox.style.display = 'block';
    nextQuestion();
}

function nextQuestion() {
    if (quizItems.length === 0) { endGame(); return; }
    isWaitingForContinue = false;
    feedbackMessage.innerHTML = '';
    continuePrompt.style.display = 'none';
    checkButton.textContent = 'Check';
    answerInput.disabled = false;
    hintButton.disabled = false;
    answerInput.value = '';
    progressCounter.textContent = `${totalItemsInQuiz - quizItems.length + 1} / ${totalItemsInQuiz}`;
    const randomIndex = Math.floor(Math.random() * quizItems.length);
    currentItem = quizItems[randomIndex];
    if (quizDirection === 'random') { questionType = Math.random() < 0.5 ? 'name' : 'formula'; } else if (quizDirection === 'name-to-formula') { questionType = 'name'; } else { questionType = 'formula'; }
    if (questionType === 'formula' && !currentItem.charge && quizWithCharge) { questionType = 'name'; }
    questionPrompt.textContent = questionType === 'name' ? 'What is the formula for...' : 'What is the name for...';
    questionItem.innerHTML = questionType === 'name' ? currentItem.name : formatFormula(currentItem.formula, currentItem.charge);
    answerInput.focus();
}

function checkAnswer(event) {
    event.preventDefault();
    if (isWaitingForContinue) { nextQuestion(); return; }
    const rawUserAnswer = answerInput.value.trim();
    if (!rawUserAnswer) return;
    const userAnswer = normalizeAnswer(rawUserAnswer);
    let isCorrect = false;
    if (questionType === 'name') {
        if (quizWithCharge && currentItem.charge) { // This condition correctly handles items without a charge (like alkanes)
            const parts = userAnswer.split(' ');
            if (parts.length < 2) { isCorrect = false; } else {
                const userFormula = parts[0];
                const userCharge = parts.slice(1).join(' ');
                const normalizedUserCharge = userCharge === '+' ? '1+' : (userCharge === '-' ? '1-' : userCharge);
                isCorrect = userFormula === currentItem.formula && normalizedUserCharge === currentItem.charge;
            }
        } else { isCorrect = userAnswer === currentItem.formula; }
    } else { isCorrect = userAnswer === currentItem.name; }
    if (isCorrect) {
        feedbackMessage.innerHTML = `<span class="correct">Correct!</span>`;
        const index = quizItems.findIndex(item => item.name === currentItem.name && item.formula === currentItem.formula);
        if (index > -1) quizItems.splice(index, 1);
        answerInput.disabled = true; hintButton.disabled = true;
        setTimeout(nextQuestion, 700);
    } else {
        const correctAnswerDisplay = `${currentItem.name} (${formatFormula(currentItem.formula, currentItem.charge)})`;
        feedbackMessage.innerHTML = `<span class="incorrect">Incorrect. The answer is ${correctAnswerDisplay}.</span>`;
        if (!wronglyAnswered.includes(currentItem)) { wronglyAnswered.push(currentItem); }
        isWaitingForContinue = true;
        answerInput.disabled = true; hintButton.disabled = true;
        checkButton.textContent = 'Continue';
        continuePrompt.style.display = 'block';
        checkButton.focus();
    }
}

function showHint() {
    if (currentItem && !isWaitingForContinue) {
        let hintText = '';
        if (questionType === 'name') {
            const elements = [...new Set(currentItem.formula.match(/[A-Z][a-z]?/g))].join(', ');
            hintText = `Hint: The formula contains the elements: ${elements}.`;
            if (quizWithCharge && currentItem.charge) {
                const chargeDisplay = currentItem.charge === '1+' ? '+' : currentItem.charge === '1-' ? '-' : currentItem.charge;
                hintText += ` The charge is ${chargeDisplay}.`;
            }
        } else {
            const hintPrefix = currentItem.name.substring(0, 3);
            hintText = `Hint: The name starts with "${hintPrefix}...".`;
        }
        feedbackMessage.innerHTML = `<span class="hint-message">${hintText}</span>`;
        hintButton.disabled = true;
        answerInput.focus();
    }
}

function endGame() {
    quizBox.style.display = 'none';
    lastWronglyAnswered = [...wronglyAnswered];
    finalScore.textContent = wronglyAnswered.length === 0 ? `Perfect score! You got all ${totalItemsInQuiz} correct.` : `You missed ${wronglyAnswered.length} out of ${totalItemsInQuiz} items.`;
    if (wronglyAnswered.length > 0) {
        wrongAnswersList.innerHTML = '';
        wronglyAnswered.forEach(item => { const listItem = document.createElement('li'); const formulaHTML = formatFormula(item.formula, item.charge); listItem.innerHTML = `${item.name} (${formulaHTML})`; wrongAnswersList.appendChild(listItem); });
        reviewSection.style.display = 'block';
    } else {
        reviewSection.style.display = 'none';
    }
    completionScreen.style.display = 'flex';
}

function resetToSelection() {
    completionScreen.style.display = 'none';
    selectionContainer.style.display = 'block';
    const existingReviewOption = document.getElementById('review-option');
    if (existingReviewOption) { existingReviewOption.remove(); }
    if (lastWronglyAnswered.length > 0) {
        const reviewOptionHTML = `<label class="select-all" id="review-option"><input type="checkbox" name="study-set" value="review-wrong">Review My ${lastWronglyAnswered.length} Wrong Answers</label>`;
        const studySetContainer = document.querySelector('.study-set-options');
        studySetContainer.insertAdjacentHTML('afterbegin', reviewOptionHTML);
        document.querySelectorAll('input[name="study-set"]').forEach(cb => cb.checked = false);
        document.querySelector('input[value="review-wrong"]').checked = true;
    } else {
        studySetCheckboxes.forEach(cb => cb.checked = false);
    }
    selectAllCheckbox.checked = false;
    updateStartButtonState();
}