const timelineContainer =
    document.getElementById("timeline-container");


function createEventCard(event) {

    const card =
        document.createElement("article");

    card.className =
        "timeline-event";


    card.innerHTML = `
        <div class="event-number">
            ${event.order}
        </div>

        <div class="event-content">

            <p class="event-location">
                📍 ${formatLocation(event.location)}
            </p>

            <h3>
                ${event.title}
            </h3>

            <p class="event-description">
                ${event.description}
            </p>

            <div class="event-characters">

                ${event.characters
                    .slice(0, 4)
                    .map(
                        character =>
                            `<span>${character}</span>`
                    )
                    .join("")}

            </div>

            <button
                class="event-button"
                data-event-id="${event.id}"
                ${!event.unlocked ? "disabled" : ""}
            >
                ${
                    event.unlocked
                        ? "Explore Event"
                        : "🔒 Locked"
                }
            </button>

        </div>
    `;


    return card;
}


function formatLocation(location) {

    return location
        .replaceAll("-", " ")
        .replace(
            /\b\w/g,
            letter => letter.toUpperCase()
        );
}


function displayTimeline() {

    timelineContainer.innerHTML = "";


    const sortedEvents =
        [...events].sort(
            (a, b) => a.order - b.order
        );


    sortedEvents.forEach(event => {

        const card =
            createEventCard(event);

        timelineContainer.appendChild(card);

    });

}


timelineContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".event-button"
            );


        if (!button) {
            return;
        }


        if (button.disabled) {
            return;
        }


        const eventId =
            button.dataset.eventId;


        window.location.href =
            `event.html?id=${eventId}`;

    }
);


displayTimeline();