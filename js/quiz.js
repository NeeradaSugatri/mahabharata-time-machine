/* =========================
   QUIZ ELEMENTS
========================= */

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const feedbackElement =
    document.getElementById("feedback");

const nextButton =
    document.getElementById("next-button");

const questionNumberElement =
    document.getElementById("question-number");

const quizContainer =
    document.getElementById("quiz-container");

const quizResult =
    document.getElementById("quiz-result");

const resultTitle =
    document.getElementById("result-title");

const scoreText =
    document.getElementById("score-text");

const xpEarned =
    document.getElementById("xp-earned");

const tryAgainButton =
    document.getElementById("try-again-button");

const consequencesButton =
    document.getElementById("consequences-button");


/* =========================
   QUIZ STATE
========================= */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* =========================
   DISPLAY QUESTION
========================= */

function displayQuestion() {

    answered = false;

    nextButton.disabled = true;

    feedbackElement.textContent = "";

    feedbackElement.className =
        "feedback";


    const question =
        quizQuestions[currentQuestion];


    questionNumberElement.textContent =
        `Question ${
            currentQuestion + 1
        } of ${
            quizQuestions.length
        }`;


    questionElement.textContent =
        question.question;


    answersElement.innerHTML = "";


    question.answers.forEach(
        function (answer) {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        button,
                        answer
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    if (
        currentQuestion ===
        quizQuestions.length - 1
    ) {

        nextButton.textContent =
            "Finish Quiz";

    } else {

        nextButton.textContent =
            "Next →";

    }
}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(
    selectedButton,
    selectedAnswer
) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        quizQuestions[currentQuestion];


    const answerButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    answerButtons.forEach(
        function (button) {

            button.disabled =
                true;

        }
    );


    /* =========================
       CORRECT ANSWER
    ========================== */

    if (
        selectedAnswer ===
        question.correctAnswer
    ) {

        score += 1;


        selectedButton.classList.add(
            "correct"
        );


        selectedButton.innerHTML =
            `✓ ${selectedAnswer}`;


        feedbackElement.textContent =
            "Correct!";


        feedbackElement.classList.add(
            "correct-feedback"
        );

    }


    /* =========================
       WRONG ANSWER
    ========================== */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        selectedButton.innerHTML =
            `✕ ${selectedAnswer}`;


        answerButtons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    question.correctAnswer
                ) {

                    button.classList.add(
                        "correct"
                    );


                    button.innerHTML =
                        `✓ ${
                            question.correctAnswer
                        }`;

                }

            }
        );


        feedbackElement.textContent =
            `Incorrect. The correct answer is ${
                question.correctAnswer
            }.`;

        feedbackElement.classList.add(
            "wrong-feedback"
        );

    }


    nextButton.disabled =
        false;
}


/* =========================
   NEXT BUTTON
========================= */

nextButton.addEventListener(
    "click",
    function () {

        if (!answered) {
            return;
        }


        if (
            currentQuestion <
            quizQuestions.length - 1
        ) {

            currentQuestion += 1;

            displayQuestion();

        } else {

            finishQuiz();

        }

    }
);


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

    const total =
        quizQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    /*
     * XP:
     * 20 XP per correct answer
     * Maximum = 100 XP
     */

    const earnedXP =
        score * 20;


    /*
     * Save quiz progress
     */

    localStorage.setItem(
        "diceGameQuizCompleted",
        "true"
    );


    localStorage.setItem(
        "diceGameQuizScore",
        score
    );


    localStorage.setItem(
        "diceGameQuizTotal",
        total
    );


    localStorage.setItem(
        "diceGameQuizXP",
        earnedXP
    );


    /*
     * Hide quiz
     */

    quizContainer.hidden =
        true;


    /*
     * Show result
     */

    quizResult.hidden =
        false;


    scoreText.textContent =
        `You scored ${
            score
        } out of ${
            total
        } (${
            percentage
        }%).`;


    xpEarned.textContent =
        `+${earnedXP} XP`;


    if (
        percentage >= 60
    ) {

        resultTitle.textContent =
            "Well Done!";

    } else {

        resultTitle.textContent =
            "Quiz Complete";

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   TRY AGAIN
========================= */

tryAgainButton.addEventListener(
    "click",
    function () {

        currentQuestion = 0;

        score = 0;

        answered = false;


        quizResult.hidden =
            true;


        quizContainer.hidden =
            false;


        localStorage.removeItem(
            "diceGameQuizCompleted"
        );


        localStorage.removeItem(
            "diceGameQuizScore"
        );


        localStorage.removeItem(
            "diceGameQuizTotal"
        );


        localStorage.removeItem(
            "diceGameQuizXP"
        );


        displayQuestion();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   VIEW CONSEQUENCES
========================= */

consequencesButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "event.html?id=dice-game#consequences";

    }
);


/* =========================
   START QUIZ
========================= */

displayQuestion();