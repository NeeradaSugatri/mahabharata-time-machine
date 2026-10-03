/* =========================
   GET CURRENT EVENT
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const currentEventId =
    params.get("event") || "dice-game";


/* =========================
   FIND CURRENT EVENT
========================= */

const currentEvent =
    events.find(
        event =>
            event.id === currentEventId
    );


/* =========================
   PAGE ELEMENTS
========================= */

const completedEventTitle =
    document.getElementById(
        "completed-event-title"
    );

const completedEventDescription =
    document.getElementById(
        "completed-event-description"
    );

const quizScore =
    document.getElementById(
        "quiz-score"
    );

const quizPercentage =
    document.getElementById(
        "quiz-percentage"
    );

const quizXP =
    document.getElementById(
        "quiz-xp"
    );

const nextEventTitle =
    document.getElementById(
        "next-event-title"
    );

const nextEventDescription =
    document.getElementById(
        "next-event-description"
    );

const nextEventLocation =
    document.getElementById(
        "next-event-location"
    );

const nextEventButton =
    document.getElementById(
        "next-event-button"
    );


/* =========================
   QUIZ DATA
========================= */

const score =
    Number(
        localStorage.getItem(
            "diceGameQuizScore"
        )
    ) || 0;

const total =
    Number(
        localStorage.getItem(
            "diceGameQuizTotal"
        )
    ) || 5;

const xp =
    Number(
        localStorage.getItem(
            "diceGameQuizXP"
        )
    ) || 0;


/* =========================
   CALCULATE PERCENTAGE
========================= */

const percentage =
    total > 0
        ? Math.round(
            (score / total) * 100
        )
        : 0;


/* =========================
   DISPLAY QUIZ RESULTS
========================= */

quizScore.textContent =
    `${score} / ${total}`;

quizPercentage.textContent =
    `${percentage}%`;

quizXP.textContent =
    `${xp} XP`;


/* =========================
   DISPLAY CURRENT EVENT
========================= */

if (currentEvent) {

    completedEventTitle.textContent =
        currentEvent.title;

    completedEventDescription.textContent =
        currentEvent.description;

}


/* =========================
   FIND NEXT EVENT
========================= */

let nextEvent = null;

if (currentEvent) {

    nextEvent =
        events.find(
            event =>
                event.order ===
                currentEvent.order + 1
        );

}


/* =========================
   DISPLAY NEXT EVENT
========================= */

if (nextEvent) {

    nextEventTitle.textContent =
        nextEvent.title;

    nextEventDescription.textContent =
        nextEvent.description;

    nextEventLocation.textContent =
        `📍 ${formatLocation(nextEvent.location)}`;

    nextEventButton.href =
        `event.html?id=${nextEvent.id}`;

}


/* =========================
   FORMAT LOCATION
========================= */

function formatLocation(location) {

    return location
        .replaceAll("-", " ")
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );

}