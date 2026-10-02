const mapMarkers = document.querySelectorAll(".map-marker");

const locationPanel = document.getElementById("locationPanel");
const locationEmpty = document.getElementById("locationEmpty");
const locationDetails = document.getElementById("locationDetails");

const locationName = document.getElementById("locationName");
const locationDescription = document.getElementById("locationDescription");
const locationEvents = document.getElementById("locationEvents");


const eventNames = {
    "kuru-lineage": "The Kuru Lineage",
    "pandava-kaurava-youth": "Pandavas and Kauravas",
    "draupadi-swayamvara": "Draupadi's Swayamvara",
    "indraprastha": "Rise of Indraprastha",
    "rajasuya": "The Rajasuya",
    "dice-game": "The Dice Game",
    "exile": "The Exile",
    "peace-mission": "The Peace Effort",
    "kurukshetra": "The Kurukshetra War",
    "aftermath": "After the War"
};


/* =========================================
   FIND LOCATION
   ========================================= */

function findLocation(locationId) {
    return locations.find(
        location => location.id === locationId
    );
}


/* =========================================
   DISPLAY LOCATION
   ========================================= */

function showLocation(locationId) {

    const location = findLocation(locationId);

    if (!location) {
        return;
    }

    /* Remove selected state from all markers */

    mapMarkers.forEach(marker => {
        marker.classList.remove("selected");
    });


    /* Highlight selected marker */

    const selectedMarker =
        document.querySelector(
            `.map-marker[data-location="${locationId}"]`
        );

    if (selectedMarker) {
        selectedMarker.classList.add("selected");
    }


    /* Hide empty panel */

    locationEmpty.hidden = true;

    locationDetails.hidden = false;


    /* Insert location information */

    locationName.textContent = location.name;

    locationDescription.textContent =
        location.description;


    /* Clear old events */

    locationEvents.innerHTML = "";


    /* Add connected events */

    location.events.forEach(eventId => {

        const eventButton =
            document.createElement("button");

        eventButton.className = "event-link";

        eventButton.type = "button";

        eventButton.textContent =
            eventNames[eventId] || eventId;

        eventButton.addEventListener(
            "click",
            () => openEvent(eventId)
        );

        locationEvents.appendChild(eventButton);

    });
}


/* =========================================
   EVENT NAVIGATION
   ========================================= */

function openEvent(eventId) {

    /*
     * The timeline page will eventually receive
     * these event IDs and open the correct event.
     */

    window.location.href =
        `timeline.html?event=${encodeURIComponent(eventId)}`;
}


/* =========================================
   MARKER EVENTS
   ========================================= */

mapMarkers.forEach(marker => {

    marker.addEventListener("click", () => {

        const locationId =
            marker.dataset.location;

        showLocation(locationId);

    });

});


/* =========================================
   KEYBOARD ACCESSIBILITY
   ========================================= */

mapMarkers.forEach(marker => {

    marker.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            marker.click();

        }

    });

});


/* =========================================
   INITIAL LOCATION
   ========================================= */

showLocation("hastinapura");