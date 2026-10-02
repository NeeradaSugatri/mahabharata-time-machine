/* ========================================
   CHARACTER EXPLORER
   ======================================== */

const characterGrid = document.getElementById("character-grid");

const characterDetails =
    document.getElementById("character-details");

const closeCharacterButton =
    document.getElementById("close-character");

const filterButtons =
    document.querySelectorAll(".filter-btn");


/* ========================================
   CHARACTER IMAGE
   ======================================== */

function getCharacterImage(character) {

    const imageExtensions = {
        arjuna: "png",
        yudhishthira: "png",
        bhima: "png",
        nakula: "png"
    };

    const extension =
        imageExtensions[character.id] || "webp";

    return `assets/characters/${character.id}.${extension}`;
}


/* ========================================
   DISPLAY CHARACTER CARDS
   ======================================== */

function displayCharacters(group = "all") {

    characterGrid.innerHTML = "";

    const filteredCharacters =
        group === "all"
            ? characters
            : characters.filter(
                character => character.group === group
            );


    filteredCharacters.forEach(character => {

        const card =
            document.createElement("article");

        card.className = "character-card";

        card.dataset.characterId =
            character.id;


        card.innerHTML = `

            <div class="character-card-image">

                <img
                    src="${getCharacterImage(character)}"
                    alt="${character.name} portrait"
                >

                <div class="portrait-placeholder">
                    ${character.name.charAt(0)}
                </div>

            </div>


            <div class="character-card-content">

                <p class="character-group">
                    ${formatGroup(character.group)}
                </p>

                <h3>
                    ${character.name}
                </h3>

                <p>
                    ${character.role}
                </p>

                <button
                    class="view-character"
                    type="button">

                    View Character →

                </button>

            </div>
        `;


        /* ====================================
           IMAGE HANDLING
           ==================================== */

        const image =
            card.querySelector(".character-card-image img");

        const placeholder =
            card.querySelector(".portrait-placeholder");


        image.addEventListener("load", () => {

            image.style.display = "block";

            placeholder.style.display = "none";

        });


        image.addEventListener("error", () => {

            image.style.display = "none";

            placeholder.style.display = "flex";

        });


        /* ====================================
           CARD CLICK
           ==================================== */

        card.addEventListener(
            "click",
            () => showCharacter(character.id)
        );


        characterGrid.appendChild(card);

    });

}


/* ========================================
   FORMAT GROUP NAME
   ======================================== */

function formatGroup(group) {

    const groupNames = {

        pandava: "Pandava",

        kaurava: "Kaurava",

        kuru: "Kuru",

        ally: "Ally",

        panchala: "Panchala"

    };

    return groupNames[group] || group;

}


/* ========================================
   SHOW CHARACTER DETAILS
   ======================================== */

function showCharacter(characterId) {

    const character =
        characters.find(
            item => item.id === characterId
        );


    if (!character) {
        return;
    }


    document.getElementById(
        "character-name"
    ).textContent =
        character.name;


    document.getElementById(
        "character-group"
    ).textContent =
        formatGroup(character.group);


    document.getElementById(
        "character-role"
    ).textContent =
        character.role;


    document.getElementById(
        "character-description"
    ).textContent =
        character.description;


    /* ====================================
       CHARACTER IMAGE
       ==================================== */

    const image =
        document.getElementById(
            "character-image"
        );


    image.src =
        getCharacterImage(character);


    image.alt =
        `${character.name} portrait`;


    image.onerror = function () {

        this.style.display = "none";

    };


    image.onload = function () {

        this.style.display = "block";

    };


    /* ====================================
       RELATIONSHIPS
       ==================================== */

    const relationshipContainer =
        document.getElementById(
            "character-relationships"
        );


    relationshipContainer.innerHTML = "";


    character.relationships.forEach(
        relationshipId => {

            const relatedCharacter =
                characters.find(
                    item =>
                        item.id === relationshipId
                );


            if (!relatedCharacter) {
                return;
            }


            const relationship =
                document.createElement("button");


            relationship.type =
                "button";


            relationship.className =
                "relationship-tag";


            relationship.textContent =
                relatedCharacter.name;


            relationship.addEventListener(
                "click",
                () =>
                    showCharacter(
                        relatedCharacter.id
                    )
            );


            relationshipContainer.appendChild(
                relationship
            );

        }
    );


    /* ====================================
       IMPORTANT EVENTS
       ==================================== */

    const eventContainer =
        document.getElementById(
            "character-events"
        );


    eventContainer.innerHTML = "";


    character.events.forEach(eventId => {

        const event =
            document.createElement("div");


        event.className =
            "event-tag";


        event.textContent =
            formatEventName(eventId);


        eventContainer.appendChild(event);

    });


    /* ====================================
       SHOW DETAILS
       ==================================== */

    characterDetails.classList.remove(
        "hidden"
    );


    characterDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ========================================
   EVENT NAME FORMATTER
   ======================================== */

function formatEventName(eventId) {

    const eventNames = {

        "kuru-lineage":
            "The Kuru Lineage",

        "pandava-kaurava-youth":
            "Pandavas and Kauravas",

        "draupadi-swayamvara":
            "Draupadi's Swayamvara",

        "indraprastha":
            "Rise of Indraprastha",

        "rajasuya":
            "The Rajasuya",

        "dice-game":
            "The Dice Game",

        "exile":
            "The Exile",

        "peace-mission":
            "The Peace Effort",

        "kurukshetra":
            "The Kurukshetra War",

        "aftermath":
            "After the War"

    };

    return eventNames[eventId] || eventId;

}


/* ========================================
   FILTER BUTTONS
   ======================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add("active");


            const group =
                button.dataset.group;


            displayCharacters(group);

        }
    );

});


/* ========================================
   CLOSE DETAILS
   ======================================== */

closeCharacterButton.addEventListener(
    "click",
    () => {

        characterDetails.classList.add(
            "hidden"
        );

    }
);


/* ========================================
   INITIAL DISPLAY
   ======================================== */

displayCharacters();