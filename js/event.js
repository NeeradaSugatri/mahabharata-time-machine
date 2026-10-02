const params =
    new URLSearchParams(
        window.location.search
    );


const eventId =
    params.get("id");


const selectedEvent =
    events.find(
        event => event.id === eventId
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


function formatLocation(location) {

    return location
        .replaceAll("-", " ")
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );
}


function displayEvent() {


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


    eventTitle.textContent =
        selectedEvent.title;


    eventHeading.textContent =
        selectedEvent.title;


    eventDescription.textContent =
        selectedEvent.description;


    eventLocation.textContent =
        `📍 ${formatLocation(
            selectedEvent.location
        )}`;


    selectedEvent.characters.forEach(
        character => {

            const characterElement =
                document.createElement(
                    "span"
                );


            characterElement.className =
                "character-tag";


            characterElement.textContent =
                character;


            characterContainer.appendChild(
                characterElement
            );

        }
    );


    missionButton.addEventListener(
        "click",
        () => {

            window.location.href =
                `missions.html?event=${selectedEvent.id}`;

        }
    );

}


displayEvent();