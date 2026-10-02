const params =
    new URLSearchParams(
        window.location.search
    );

const eventId =
    params.get("event");


const selectedMission =
    missions.find(
        mission => mission.eventId === eventId
    );


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

const dialogueSpeaker =
    document.getElementById(
        "dialogue-speaker"
    );

const dialogueText =
    document.getElementById(
        "dialogue-text"
    );

const sceneCounter =
    document.getElementById(
        "scene-counter"
    );

const nextButton =
    document.getElementById(
        "next-button"
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


let currentSceneIndex = 0;


function displayScene() {

    if (!selectedMission) {

        missionTitle.textContent =
            "Story Not Found";

        missionSubtitle.textContent =
            "We could not find this story.";

        dialogueSpeaker.textContent =
            "Narrator";

        dialogueText.textContent =
            "Please return to the event page and try again.";

        nextButton.style.display =
            "none";

        return;
    }


    const scenes =
        selectedMission.scenes;


    const currentScene =
        scenes[currentSceneIndex];


    sceneVisual.textContent =
        currentScene.visual;


    dialogueSpeaker.textContent =
        currentScene.speaker;


    dialogueText.textContent =
        currentScene.text;


    sceneCounter.textContent =
        `Scene ${currentSceneIndex + 1} / ${scenes.length}`;


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

}


function completeStory() {

    const scenes =
        selectedMission.scenes;


    storyComplete.hidden =
        false;


    completionText.textContent =
        selectedMission.completionText;


    nextButton.disabled =
        true;


    nextButton.style.display =
        "none";


    sceneCounter.textContent =
        `${scenes.length} / ${scenes.length}`;


    storyComplete.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


nextButton.addEventListener(
    "click",
    function () {

        if (!selectedMission) {
            return;
        }


        const lastScene =
            currentSceneIndex >=
            selectedMission.scenes.length - 1;


        if (lastScene) {

            completeStory();

            return;

        }


        currentSceneIndex += 1;


        displayScene();

    }
);


quizButton.addEventListener(
    "click",
    function () {

        if (!selectedMission) {
            return;
        }


        window.location.href =
            `quiz.html?event=${selectedMission.eventId}`;

    }
);


if (selectedMission) {

    missionTitle.textContent =
        selectedMission.title;

    missionSubtitle.textContent =
        selectedMission.subtitle;

    displayScene();

} else {

    displayScene();

}