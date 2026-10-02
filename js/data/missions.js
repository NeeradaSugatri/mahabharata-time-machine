const missions = [

    {
        id: "dice-game-story",

        eventId: "dice-game",

        title: "The Dice Game",

        subtitle: "Enter the Royal Assembly",

        scenes: [

            /* =========================
               SCENE 1
            ========================= */

            {
                id: 1,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "After the Rajasuya sacrifice, the Pandavas had established Indraprastha as a powerful kingdom. Duryodhana had seen their prosperity and returned to Hastinapura deeply troubled by what he had witnessed.",

                visual:
                    "Indraprastha and its magnificent royal court"
            },


            /* =========================
               SCENE 2
            ========================= */

            {
                id: 2,

                type: "dialogue",

                speaker: "Vidura",

                character: "vidura",

                text:
                    "Yudhishthira, the king of Hastinapura has invited you to the royal assembly. A game of dice has been proposed.",

                visual:
                    "Vidura brings the invitation to the Pandavas"
            },


            /* =========================
               SCENE 3
            ========================= */

            {
                id: 3,

                type: "dialogue",

                speaker: "Yudhishthira",

                character: "yudhishthira",

                text:
                    "I understand the danger of such a game, but an invitation from the Kuru court cannot easily be refused. We will go to Hastinapura.",

                visual:
                    "Yudhishthira prepares to travel to Hastinapura"
            },


            /* =========================
               SCENE 4
            ========================= */

            {
                id: 4,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "The Pandavas arrive at Hastinapura and enter the royal assembly. Dhritarashtra, Bhishma, Vidura and other elders are present. Duryodhana has arranged for his uncle Shakuni to play the dice on his behalf.",

                visual:
                    "The Kuru royal assembly at Hastinapura",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 5
            ========================= */

            {
                id: 5,

                type: "dialogue",

                speaker: "Shakuni",

                character: "shakuni",

                text:
                    "Let the game begin. I shall cast the dice on behalf of Duryodhana.",

                visual:
                    "Shakuni takes his place at the dice table",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 6
            ========================= */

            {
                id: 6,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "Yudhishthira begins to wager his possessions. One by one, his wealth and valuable possessions are lost in the game as Shakuni continues to cast the dice.",

                visual:
                    "The dice roll across the royal gaming board",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 7
            ========================= */

            {
                id: 7,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "The stakes become greater. Yudhishthira continues the game and eventually loses his kingdom. The assembly watches as the game moves far beyond an ordinary contest of dice.",

                visual:
                    "The royal assembly grows tense as the stakes rise",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 8
            ========================= */

            {
                id: 8,

                type: "dialogue",

                speaker: "Vidura",

                character: "vidura",

                text:
                    "This game has gone too far. The destruction of the Kuru family may follow if this continues.",

                visual:
                    "Vidura warns the elders of the assembly",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 9
            ========================= */

            {
                id: 9,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "Despite the warnings, the game continues. Yudhishthira loses his brothers and then himself. The assembly is now faced with an even more serious question about what can be claimed after a person has already lost himself.",

                visual:
                    "The assembly falls silent",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 10
            ========================= */

            {
                id: 10,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "Draupadi is summoned to the assembly. She questions the elders about the situation and asks how Yudhishthira could have staked her after he had already lost himself.",

                visual:
                    "Draupadi stands before the Kuru assembly",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 11
            ========================= */

            {
                id: 11,

                type: "dialogue",

                speaker: "Draupadi",

                character: "draupadi",

                text:
                    "If Yudhishthira had already lost himself, could he still have the right to stake me? Let the elders of this assembly answer that question.",

                visual:
                    "Draupadi challenges the assembly",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 12
            ========================= */

            {
                id: 12,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "The question creates a profound crisis in the assembly. The elders struggle to respond while the events in the court become increasingly grave.",

                visual:
                    "The elders remain troubled and silent",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 13
            ========================= */

            {
                id: 13,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "Dhritarashtra eventually intervenes and grants Draupadi boons. The immediate crisis in the assembly is brought to an end, and the Pandavas are allowed to return with their freedom and possessions restored.",

                visual:
                    "Dhritarashtra intervenes in the royal assembly",

                background:
                    "hastinapura-court"
            },


            /* =========================
               SCENE 14
            ========================= */

            {
                id: 14,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "But the conflict is not over. Another game of dice is arranged. The Pandavas lose again, and the terms require them to spend twelve years in exile followed by a thirteenth year in concealment.",

                visual:
                    "The second dice game seals the Pandavas' exile"
            },


            /* =========================
               SCENE 15
            ========================= */

            {
                id: 15,

                type: "narration",

                speaker: "Narrator",

                character: null,

                text:
                    "The Pandavas leave the court and begin their exile. The dice game has transformed the rivalry within the Kuru family into a conflict that will eventually lead toward war.",

                visual:
                    "The Pandavas leave Hastinapura for exile"
            }

        ],

        completionText:
            "You have witnessed how the dice game transformed the rivalry between the Pandavas and Kauravas into a major turning point in the Mahabharata.",

        nextStep:
            "Take the quiz to test what you learned.",

        xp: 100
    }

];