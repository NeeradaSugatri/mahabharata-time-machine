const params =
    new URLSearchParams(
        window.location.search
    );


const eventId =
    params.get("event") || "dice-game";


const selectedMission =
    missions.find(
        mission =>
            mission.eventId === eventId
    );


/* =========================
   ELEMENTS
========================= */

const missionTitle =
    document.getElementById(
        "mission-title"
    );


const missionSubtitle =
    document.getElementById(
        "mission-subtitle"
    );


const sceneVisual =
    document.getElementById(
        "scene-visual"
    );


const characterStage =
    document.getElementById(
        "character-stage"
    );


const characterDialogue =
    document.getElementById(
        "character-dialogue"
    );


const dialogueSpeaker =
    document.getElementById(
        "dialogue-speaker"
    );


const dialogueText =
    document.getElementById(
        "dialogue-text"
    );


const narratorPanel =
    document.getElementById(
        "narrator-panel"
    );


const narratorText =
    document.getElementById(
        "narrator-text"
    );


const sceneCounter =
    document.getElementById(
        "scene-counter"
    );


const nextButton =
    document.getElementById(
        "next-button"
    );


const previousButton =
    document.getElementById(
        "previous-button"
    );


const storyComplete =
    document.getElementById(
        "story-complete"
    );


const completionText =
    document.getElementById(
        "completion-text"
    );


const quizButton =
    document.getElementById(
        "quiz-button"
    );


/* =========================
   STORY STATE
========================= */

let currentSceneIndex = 0;

let typingTimer = null;

let isTyping = false;

let currentText = "";

let currentCharacterIndex = 0;

let isTransitioning = false;


/*
 * Time between story scenes.
 * 5000 milliseconds = 5 seconds.
 */
const SCENE_TRANSITION_DELAY = 1000;


/* =========================
   TYPEWRITER
========================= */

function startTyping(
    element,
    text
) {

    clearInterval(
        typingTimer
    );


    currentText =
        text;


    currentCharacterIndex =
        0;


    isTyping =
        true;


    element.textContent =
        "";


    typingTimer =
        setInterval(
            function () {

                element.textContent +=
                    currentText[
                        currentCharacterIndex
                    ];


                currentCharacterIndex +=
                    1;


                if (
                    currentCharacterIndex >=
                    currentText.length
                ) {

                    finishTyping(
                        element
                    );

                }

            },
            25
        );
}


/* =========================
   FINISH TYPING
========================= */

function finishTyping(
    element
) {

    clearInterval(
        typingTimer
    );


    typingTimer =
        null;


    element.textContent =
        currentText;


    currentCharacterIndex =
        currentText.length;


    isTyping =
        false;
}


/* =========================
   DISPLAY CHARACTER
========================= */

function displayCharacter(
    character
) {

    characterStage.innerHTML =
        "";


    if (!character) {
        return;
    }


    const imagePath =
        `/assets/interaction/characters/${character}.png`;


    const characterImage =
        document.createElement(
            "img"
        );


    characterImage.className =
        "story-character-image";


    characterImage.src =
        imagePath;


    characterImage.alt =
        character
            .replaceAll(
                "-",
                " "
            )
            .replace(
                /\b\w/g,
                letter =>
                    letter.toUpperCase()
            );


    characterImage.onerror =
        function () {

            characterStage.innerHTML =
                "";


            const fallback =
                document.createElement(
                    "div"
                );


            fallback.className =
                "character-placeholder";


            fallback.textContent =
                character
                    .replaceAll(
                        "-",
                        " "
                    )
                    .replace(
                        /\b\w/g,
                        letter =>
                            letter.toUpperCase()
                    );


            characterStage.appendChild(
                fallback
            );
        };


    characterStage.appendChild(
        characterImage
    );
}


/* =========================
   DISPLAY BACKGROUND
========================= */

function displayBackground(
    scene
) {

    if (
        scene.background
    ) {

        const backgroundPath =
            `/assets/interaction/backgrounds/${scene.background}.png`;


        sceneVisual.style.backgroundImage =
            `url("${backgroundPath}")`;


        sceneVisual.style.backgroundSize =
            "cover";


        sceneVisual.style.backgroundPosition =
            "center";


        sceneVisual.style.backgroundRepeat =
            "no-repeat";


        sceneVisual.classList.add(
            "has-background"
        );

    } else {

        sceneVisual.style.backgroundImage =
            "";


        sceneVisual.classList.remove(
            "has-background"
        );
    }
}


/* =========================
   CHARACTER DIALOGUE SCENE
========================= */

function displayCharacterScene(
    scene
) {

    sceneVisual.dataset.character =
        scene.character;


    characterStage.style.display =
        "flex";


    characterDialogue.style.display =
        "block";


    narratorPanel.style.display =
        "none";


    displayCharacter(
        scene.character
    );


    dialogueSpeaker.textContent =
        scene.speaker;


    startTyping(
        dialogueText,
        scene.text
    );
}


/* =========================
   NARRATOR SCENE
========================= */

function displayNarratorScene(
    scene
) {

    delete sceneVisual.dataset.character;


    characterStage.style.display =
        "none";


    characterDialogue.style.display =
        "none";


    narratorPanel.style.display =
        "block";


    startTyping(
        narratorText,
        scene.text
    );
}


/* =========================
   DISPLAY SCENE
========================= */

function displayScene() {

    if (!selectedMission) {

        missionTitle.textContent =
            "Story Not Found";


        missionSubtitle.textContent =
            "We could not find this story.";


        characterStage.style.display =
            "none";


        characterDialogue.style.display =
            "none";


        narratorPanel.style.display =
            "block";


        narratorText.textContent =
            "Please return to the event page and try again.";


        nextButton.style.display =
            "none";


        previousButton.style.display =
            "none";


        return;
    }


    const scenes =
        selectedMission.scenes;


    const currentScene =
        scenes[
            currentSceneIndex
        ];


    /*
     * Background
     */

    displayBackground(
        currentScene
    );


    /*
     * Scene counter
     */

    sceneCounter.textContent =
        `Scene ${
            currentSceneIndex + 1
        } / ${
            scenes.length
        }`;


    /*
     * Next button text
     */

    if (
        currentSceneIndex ===
        scenes.length - 1
    ) {

        nextButton.textContent =
            "Complete Story →";

    } else {

        nextButton.textContent =
            "Next →";
    }


    /*
     * Previous button
     *
     * Disabled on Scene 1.
     */

    if (
        currentSceneIndex === 0
    ) {

        previousButton.disabled =
            true;

    } else {

        previousButton.disabled =
            false;
    }


    /*
     * Choose between
     * narrator and character.
     */

    if (
        currentScene.type ===
        "dialogue"
    ) {

        displayCharacterScene(
            currentScene
        );

    } else {

        displayNarratorScene(
            currentScene
        );
    }
}


/* =========================
   COMPLETE STORY
========================= */

function completeStory() {

    clearInterval(
        typingTimer
    );


    typingTimer =
        null;


    isTyping =
        false;


    storyComplete.hidden =
        false;


    completionText.textContent =
        selectedMission.completionText;


    nextButton.disabled =
        true;


    nextButton.style.display =
        "none";


    previousButton.style.display =
        "none";


    sceneCounter.textContent =
        `${selectedMission.scenes.length} / ${selectedMission.scenes.length}`;


    storyComplete.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =========================
   SCENE TRANSITION
========================= */

function moveToNextScene() {

    if (
        isTransitioning ||
        !selectedMission
    ) {

        return;
    }


    const lastScene =
        currentSceneIndex >=
        selectedMission.scenes.length - 1;


    if (lastScene) {

        completeStory();

        return;
    }


    isTransitioning =
        true;


    /*
     * Disable navigation while
     * the story pauses.
     */

    nextButton.disabled =
        true;


    previousButton.disabled =
        true;


    nextButton.textContent =
        "Entering next scene…";


    /*
     * Give the user a 5-second
     * story transition.
     */

    setTimeout(
        function () {

            currentSceneIndex +=
                1;


            isTransitioning =
                false;


            nextButton.disabled =
                false;


            displayScene();

        },
        SCENE_TRANSITION_DELAY
    );
}


/* =========================
   NEXT BUTTON
========================= */

nextButton.addEventListener(
    "click",
    function () {

        if (
            !selectedMission ||
            isTransitioning
        ) {

            return;
        }


        /*
         * If text is still typing,
         * finish it first.
         */

        if (isTyping) {

            const currentScene =
                selectedMission.scenes[
                    currentSceneIndex
                ];


            if (
                currentScene.type ===
                "dialogue"
            ) {

                finishTyping(
                    dialogueText
                );

            } else {

                finishTyping(
                    narratorText
                );
            }


            return;
        }


        /*
         * Move to the next scene
         * with the 5-second pause.
         */

        moveToNextScene();
    }
);


/* =========================
   PREVIOUS BUTTON
========================= */

previousButton.addEventListener(
    "click",
    function () {

        if (
            !selectedMission ||
            isTransitioning
        ) {

            return;
        }


        /*
         * If text is still typing,
         * finish it first.
         */

        if (isTyping) {

            const currentScene =
                selectedMission.scenes[
                    currentSceneIndex
                ];


            if (
                currentScene.type ===
                "dialogue"
            ) {

                finishTyping(
                    dialogueText
                );

            } else {

                finishTyping(
                    narratorText
                );
            }


            return;
        }


        /*
         * Do not go before Scene 1.
         */

        if (
            currentSceneIndex <= 0
        ) {

            return;
        }


        /*
         * Move backward immediately.
         */

        currentSceneIndex -=
            1;


        displayScene();
    }
);


/* =========================
   QUIZ BUTTON
========================= */

quizButton.addEventListener(
    "click",
    function () {

        if (!selectedMission) {
            return;
        }


        window.location.href =
            `quiz.html?event=${
                selectedMission.eventId
            }`;
    }
);


/* =========================
   INITIALIZE
========================= */

if (selectedMission) {

    missionTitle.textContent =
        selectedMission.title;


    missionSubtitle.textContent =
        selectedMission.subtitle;


    displayScene();

} else {

    displayScene();
}