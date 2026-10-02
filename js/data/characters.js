const characters = [
    {
        id: "yudhishthira",
        name: "Yudhishthira",
        group: "pandava",
        role: "Eldest Pandava",
        description:
            "Yudhishthira is the eldest of the five Pandava brothers and is associated with a strong commitment to truth, duty and righteous conduct.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["bhima", "arjuna", "nakula", "sahadeva", "draupadi", "kunti", "krishna"],
        events: [
            "kuru-lineage",
            "pandava-kaurava-youth",
            "indraprastha",
            "rajasuya",
            "dice-game",
            "exile",
            "peace-mission",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "bhima",
        name: "Bhima",
        group: "pandava",
        role: "Pandava warrior",
        description:
            "Bhima is the second Pandava brother, known in the epic for his great physical strength, courage and fierce determination.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["yudhishthira", "arjuna", "nakula", "sahadeva", "draupadi", "kunti"],
        events: [
            "pandava-kaurava-youth",
            "draupadi-swayamvara",
            "indraprastha",
            "rajasuya",
            "dice-game",
            "exile",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "arjuna",
        name: "Arjuna",
        group: "pandava",
        role: "Archer and warrior",
        description:
            "Arjuna is one of the central Pandava warriors and is renowned for his skill with the bow and his close association with Krishna.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["krishna", "draupadi", "yudhishthira", "bhima"],
        events: [
            "pandava-kaurava-youth",
            "draupadi-swayamvara",
            "indraprastha",
            "exile",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "nakula",
        name: "Nakula",
        group: "pandava",
        role: "Pandava brother",
        description:
            "Nakula is one of the younger Pandava brothers and is associated with skill, discipline and knowledge of horses.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["yudhishthira", "bhima", "arjuna", "sahadeva", "kunti", "draupadi"],
        events: [
            "pandava-kaurava-youth",
            "indraprastha",
            "dice-game",
            "exile",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "sahadeva",
        name: "Sahadeva",
        group: "pandava",
        role: "Pandava brother",
        description:
            "Sahadeva is the youngest of the Pandava brothers and is portrayed as thoughtful, observant and knowledgeable.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["yudhishthira", "bhima", "arjuna", "nakula", "kunti", "draupadi"],
        events: [
            "pandava-kaurava-youth",
            "indraprastha",
            "dice-game",
            "exile",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "draupadi",
        name: "Draupadi",
        group: "pandava",
        role: "Queen of the Pandavas",
        description:
            "Draupadi is a central figure of the Mahabharata whose life is closely connected to the Pandavas and several major turning points in the epic.",
        locations: ["panchala", "indraprastha", "hastinapura", "kurukshetra"],
        relationships: ["arjuna", "yudhishthira", "bhima", "nakula", "sahadeva", "drupada"],
        events: [
            "draupadi-swayamvara",
            "indraprastha",
            "rajasuya",
            "dice-game",
            "exile",
            "kurukshetra"
        ]
    },

    {
        id: "kunti",
        name: "Kunti",
        group: "pandava",
        role: "Mother of the Pandavas",
        description:
            "Kunti is the mother of the Pandavas and an important figure in the Kuru family story.",
        locations: ["hastinapura", "indraprastha"],
        relationships: ["yudhishthira", "bhima", "arjuna", "nakula", "sahadeva"],
        events: [
            "kuru-lineage",
            "pandava-kaurava-youth",
            "indraprastha",
            "aftermath"
        ]
    },

    {
        id: "duryodhana",
        name: "Duryodhana",
        group: "kaurava",
        role: "Kaurava prince",
        description:
            "Duryodhana is the eldest of the Kaurava brothers and a major political figure in the conflict between the Kauravas and Pandavas.",
        locations: ["hastinapura", "indraprastha", "kurukshetra"],
        relationships: ["dushasana", "shakuni", "dhritarashtra", "gandhari", "karna"],
        events: [
            "pandava-kaurava-youth",
            "rajasuya",
            "dice-game",
            "peace-mission",
            "kurukshetra"
        ]
    },

    {
        id: "dushasana",
        name: "Dushasana",
        group: "kaurava",
        role: "Kaurava prince",
        description:
            "Dushasana is one of Duryodhana's brothers and a prominent Kaurava figure during the events leading to the war.",
        locations: ["hastinapura", "kurukshetra"],
        relationships: ["duryodhana", "dhritarashtra", "gandhari", "draupadi"],
        events: [
            "pandava-kaurava-youth",
            "dice-game",
            "kurukshetra"
        ]
    },

    {
        id: "dhritarashtra",
        name: "Dhritarashtra",
        group: "kaurava",
        role: "King of Hastinapura",
        description:
            "Dhritarashtra is the Kuru king and father of the Kauravas, whose decisions and family relationships are central to the political story.",
        locations: ["hastinapura"],
        relationships: ["gandhari", "duryodhana", "dushasana", "vidura", "bhishma"],
        events: [
            "kuru-lineage",
            "dice-game",
            "peace-mission",
            "aftermath"
        ]
    },

    {
        id: "gandhari",
        name: "Gandhari",
        group: "kaurava",
        role: "Queen of Hastinapura",
        description:
            "Gandhari is the wife of Dhritarashtra and mother of the Kaurava brothers.",
        locations: ["hastinapura"],
        relationships: ["dhritarashtra", "duryodhana", "dushasana", "bhishma"],
        events: [
            "kuru-lineage",
            "pandava-kaurava-youth",
            "aftermath"
        ]
    },

    {
        id: "shakuni",
        name: "Shakuni",
        group: "kaurava",
        role: "Gandhara prince",
        description:
            "Shakuni is associated with Gandhara and plays an important role in the dice game involving Yudhishthira and the Kuru court.",
        locations: ["gandhara", "hastinapura"],
        relationships: ["duryodhana", "dhritarashtra"],
        events: [
            "rajasuya",
            "dice-game",
            "kurukshetra"
        ]
    },

    {
        id: "bhishma",
        name: "Bhishma",
        group: "kuru",
        role: "Kuru elder and warrior",
        description:
            "Bhishma is one of the great elders of the Kuru dynasty and serves as a major figure in the political and military history of the epic.",
        locations: ["hastinapura", "kurukshetra"],
        relationships: ["dhritarashtra", "vidura", "drona", "yudhishthira"],
        events: [
            "kuru-lineage",
            "pandava-kaurava-youth",
            "dice-game",
            "peace-mission",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "drona",
        name: "Drona",
        group: "kuru",
        role: "Teacher and warrior",
        description:
            "Drona is the martial teacher of the Kuru princes and later becomes a major commander during the war.",
        locations: ["hastinapura", "kurukshetra"],
        relationships: ["ashwatthama", "arjuna", "bhishma"],
        events: [
            "pandava-kaurava-youth",
            "kurukshetra"
        ]
    },

    {
        id: "ashwatthama",
        name: "Ashwatthama",
        group: "kuru",
        role: "Warrior",
        description:
            "Ashwatthama is the son of Drona and a warrior associated with the events surrounding the Kurukshetra War and its aftermath.",
        locations: ["kurukshetra", "hastinapura"],
        relationships: ["drona", "krishna", "arjuna"],
        events: [
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "krishna",
        name: "Krishna",
        group: "ally",
        role: "Guide and ally of the Pandavas",
        description:
            "Krishna is a central figure in the Mahabharata and an important guide and ally to the Pandavas, especially Arjuna.",
        locations: ["dwaraka", "indraprastha", "hastinapura", "kurukshetra"],
        relationships: ["arjuna", "yudhishthira", "draupadi", "bhima"],
        events: [
            "pandava-kaurava-youth",
            "draupadi-swayamvara",
            "indraprastha",
            "rajasuya",
            "exile",
            "peace-mission",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "karna",
        name: "Karna",
        group: "kaurava",
        role: "Warrior and ally of Duryodhana",
        description:
            "Karna is a major warrior of the Mahabharata whose loyalty to Duryodhana places him among the principal figures of the Kuru conflict.",
        locations: ["hastinapura", "kurukshetra"],
        relationships: ["duryodhana", "arjuna", "krishna"],
        events: [
            "pandava-kaurava-youth",
            "kurukshetra",
            "aftermath"
        ]
    },

    {
        id: "vidura",
        name: "Vidura",
        group: "kuru",
        role: "Counsellor of Hastinapura",
        description:
            "Vidura is a respected counsellor of the Kuru court and is associated with advice, diplomacy and concern for the welfare of the kingdom.",
        locations: ["hastinapura"],
        relationships: ["dhritarashtra", "bhishma", "yudhishthira"],
        events: [
            "kuru-lineage",
            "dice-game",
            "peace-mission",
            "aftermath"
        ]
    },

    {
        id: "drupada",
        name: "Drupada",
        group: "panchala",
        role: "King of Panchala",
        description:
            "Drupada is the king of Panchala and the father of Draupadi, whose swayamvara becomes an important event in the story.",
        locations: ["panchala"],
        relationships: ["draupadi", "arjuna"],
        events: [
            "draupadi-swayamvara",
            "kurukshetra"
        ]
    },

    {
        id: "abhimanyu",
        name: "Abhimanyu",
        group: "pandava",
        role: "Pandava warrior",
        description:
            "Abhimanyu is a young warrior of the Pandava side and an important figure in the events of the Kurukshetra War.",
        locations: ["indraprastha", "kurukshetra"],
        relationships: ["arjuna", "krishna"],
        events: [
            "kurukshetra",
            "aftermath"
        ]
    }
];