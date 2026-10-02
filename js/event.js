/* =========================
   GET EVENT
========================= */

const params =
    new URLSearchParams(
        window.location.search
    );


/*
 * Support both:
 * ?id=dice-game
 * ?event=dice-game
 */

const eventId =
    params.get("id") ||
    params.get("event");


/* =========================
   FIND EVENT
========================= */

const selectedEvent =
    events.find(
        event =>
            event.id === eventId
    );


/* =========================
   PAGE ELEMENTS
========================= */

const eventImage =
    document.getElementById(
        "event-image"
    );


const eventTitle =
    document.getElementById(
        "event-title"
    );


const eventHeading =
    document.getElementById(
        "event-heading"
    );


const eventDescription =
    document.getElementById(
        "event-description"
    );


const eventLocation =
    document.getElementById(
        "event-location"
    );


const characterContainer =
    document.getElementById(
        "event-characters"
    );


const missionButton =
    document.getElementById(
        "start-mission"
    );


/* =========================
   CONSEQUENCES ELEMENTS
========================= */

const consequencesSection =
    document.getElementById(
        "consequences"
    );


const consequencesLocked =
    document.getElementById(
        "consequences-locked"
    );


const consequencesContent =
    document.getElementById(
        "consequences-content"
    );


/* =========================
   CHARACTER NAMES
========================= */

const characterNames = {

    bhishma: "Bhishma",

    dhritarashtra:
        "Dhritarashtra",

    pandu: "Pandu",

    kunti: "Kunti",

    vidura: "Vidura",

    yudhishthira:
        "Yudhishthira",

    bhima: "Bhima",

    arjuna: "Arjuna",

    nakula: "Nakula",

    sahadeva: "Sahadeva",

    duryodhana:
        "Duryodhana",

    dushasana:
        "Dushasana",

    drona: "Drona",

    draupadi: "Draupadi",

    krishna: "Krishna",

    drupada: "Drupada",

    shakuni: "Shakuni",

    karna: "Karna",

    abhimanyu: "Abhimanyu",

    ashwatthama:
        "Ashwatthama"

};


/* =========================
   FORMAT LOCATION
========================= */

function formatLocation(
    location
) {

    return location
        .replaceAll(
            "-",
            " "
        )
        .replace(
            /\b\w/g,
            letter =>
                letter.toUpperCase()
        );

}


/* =========================
   CHECK QUIZ COMPLETION
========================= */

function isQuizCompleted() {

    /*
     * Consequences are currently
     * connected to the Dice Game quiz.
     */

    if (
        selectedEvent &&
        selectedEvent.id ===
            "dice-game"
    ) {

        return (
            localStorage.getItem(
                "diceGameQuizCompleted"
            ) === "true"
        );

    }


    return false;
}


/* =========================
   UPDATE CONSEQUENCES
========================= */

function updateConsequences() {

    /*
     * If the consequences section
     * does not exist, do nothing.
     */

    if (
        !consequencesLocked ||
        !consequencesContent
    ) {

        return;

    }


    if (
        isQuizCompleted()
    ) {

        /*
         * Unlock consequences.
         */

        consequencesLocked.hidden =
            true;

        consequencesContent.hidden =
            false;

    } else {

        /*
         * Keep consequences locked.
         */

        consequencesLocked.hidden =
            false;

        consequencesContent.hidden =
            true;

    }

}


/* =========================
   DISPLAY EVENT
========================= */

function displayEvent() {

    /*
     * Event not found
     */

    if (!selectedEvent) {

        eventTitle.textContent =
            "Event Not Found";


        eventHeading.textContent =
            "We could not find this event.";


        eventDescription.textContent =
            "Please return to the timeline and select a valid event.";


        missionButton.style.display =
            "none";


        if (consequencesSection) {

            consequencesSection.style.display =
                "none";

        }


        return;

    }


    /* =========================
       EVENT IMAGE
    ========================== */

    if (eventImage) {

        eventImage.src =
            `assets/events/${selectedEvent.id}.png`;


        eventImage.alt =
            selectedEvent.title;

    }


    /* =========================
       EVENT TITLE
    ========================== */

    eventTitle.textContent =
        selectedEvent.title;


    eventHeading.textContent =
        selectedEvent.title;


    /* =========================
       DESCRIPTION
    ========================== */

    eventDescription.textContent =
        selectedEvent.description;


    /* =========================
       LOCATION
    ========================== */

    eventLocation.textContent =
        `📍 ${formatLocation(
            selectedEvent.location
        )}`;


    /* =========================
       CHARACTERS
    ========================== */

    characterContainer.innerHTML =
        "";


    selectedEvent.characters.forEach(
        character => {

            const characterElement =
                document.createElement(
                    "span"
                );


            characterElement.className =
                "character-tag";


            characterElement.textContent =
                characterNames[
                    character
                ] ||
                character;


            characterContainer.appendChild(
                characterElement
            );

        }
    );


    /* =========================
       MISSION BUTTON
    ========================== */

    missionButton.onclick =
        function () {

            window.location.href =
                `missions.html?event=${
                    selectedEvent.id
                }`;

        };


    /* =========================
       CONSEQUENCES
    ========================== */

    updateConsequences();

}


/* =========================
   SCROLL TO CONSEQUENCES
========================= */

function scrollToConsequences() {

    if (
        !consequencesSection
    ) {

        return;

    }


    /*
     * Wait until the page has
     * finished rendering.
     */

    setTimeout(
        function () {

            consequencesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        300
    );

}


/* =========================
   START
========================= */

displayEvent();


/* =========================
   HANDLE #consequences
========================= */

if (
    window.location.hash ===
    "#consequences"
) {

    /*
     * Only scroll if the quiz
     * has actually been completed.
     */

    if (
        isQuizCompleted()
    ) {

        scrollToConsequences();

    }

}