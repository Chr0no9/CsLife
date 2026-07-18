

export const events = [
    {
        // life related events
        id : "car_breakdown",
        title : "Car Breakdown",
        description : "Your car breaks down before midterms.",
        choices : [
            {
                text : "Pay $300",
                effects : {money : -300, happiness : -5}
            },
            {
                text : "Ignore it",
                effects : {happiness : -10, social : -5}
            }
        ]
    },
    {
        id : "laptop_die",
        title : "Laptop Failure",
        description : "Your Laptop won't turn on again before a projects due date.",
        choices : [
            {
                text : "Buy a new one",
                effects : {money : -1200, happiness : -5}
            },
            {
                text : "Have no Laptop",
                effects : {happiness : -5, intellect : -5}
            }
        ]
    },
    { // school related events
        id : "failed_midterm",
        title : "Failed Midterm",
        description : "You scored a 41% on your midterm.",
        choices : [
            {
                text : "Study extra hard",
                effects : {happiness : -10, intellect : 10, social : -5}
            },
            {
                text : "Accept your fate",
                effects : {happiness : -10}
            }
        ]

    },
    {
        id : "pass_final",
        title : "Final Exam Passed",
        description : "You passed your finals!",
        choices : [
            {
                text : "Celebrate",
                effects : {happiness : 20}
            }
        ]
    },
    { // career events
        id : "hackathan_win",
        title : "Hackathon Winner",
        description : "Your team won 1st at the Hackathon!",
        choices : [
            {
                text : "Accept",
                effects : {money : 1000, happiness : 10}
            }
        ]
    },
    {
        id : "internship_offer",
        title : "Internship Offer",
        description : "A company offers you a summer internship.",
        choices : [
            {
                text : "Accept",
                effects : {money : 5000, career : 20, happiness : 10}
            },
            {
                text : "Decline",
                effects : {intellect : 10, money : -5}
            }
        ]
    }
];

export function getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
}

export function applyEventEffects(player, effects) {
    for (const stat in effects) {
        if (player[stat] !== undefined) {
            player[stat] += effects[stat];
        }
    }
}