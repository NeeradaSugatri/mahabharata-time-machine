const params = new URLSearchParams(window.location.search);

// Support both ?id=dice-game and ?event=dice-game
const eventId =
    params.get("id") || params.get("event");

// Find the selected event
const selectedEvent =
    events.find(event => event.id === eventId);


// Get page elements
const eventImage =
    document.getElementById("event-image");

const eventTitle =
    document.getElementById("event-title");

const eventHeading =
    document.getElementById("event-heading");

const eventDescription =
    document.getElementById("event-description");

const eventLocation =
    document.getElementById("event-location");

const characterContainer =
    document.getElementById("event-characters");

const missionButton =
    document.getElementById("start-mission");


// Format location name
function formatLocation(location) {

    return location
        .replaceAll("-", " ")
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );

}


// Display selected event
function displayEvent() {

    // Event not found
    if (!selectedEvent) {

        eventTitle.textContent =
            "Event Not Found";

        eventHeading.textContent =
            "We could not find this event.";

        eventDescription.textContent =
            "Please return to the timeline and select a valid event.";

        missionButton.style.display =
            "none";

        return;
    }


    // Event image
    if (eventImage) {

        eventImage.src =
            `assets/events/${selectedEvent.id}.png`;

        eventImage.alt =
            selectedEvent.title;

    }


    // Event title
    eventTitle.textContent =
        selectedEvent.title;

    eventHeading.textContent =
        selectedEvent.title;


    // Description
    eventDescription.textContent =
        selectedEvent.description;


    // Location
    eventLocation.textContent =
        `📍 ${formatLocation(
            selectedEvent.location
        )}`;


    // Characters
    characterContainer.innerHTML = "";

    selectedEvent.characters.forEach(
        character => {

            const characterElement =
                document.createElement("span");

            characterElement.className =
                "character-tag";

            characterElement.textContent =
                character;

            characterContainer.appendChild(
                characterElement
            );

        }
    );


    // Mission button
    missionButton.addEventListener(
        "click",
        () => {

            window.location.href =
                `missions.html?event=${selectedEvent.id}`;

        }
    );

}


// Start
displayEvent();