

export const events = [
    {
        // life related events
        id: "car_breakdown",
        type: "normal",
        title: "Car Breakdown",
        description: "Your car breaks down before midterms.",
        choices: [
            {
                text: "Pay $300",
                effects: { money: -300, happiness: -5 }
            },
            {
                text: "Ignore it",
                effects: { happiness: -10, social: -5 }
            }
        ]
    },
    {
        id: "laptop_die",
        type: "normal",
        title: "Laptop Failure",
        description: "Your Laptop won't turn on again before a projects due date.",
        choices: [
            {
                text: "Buy a new one",
                effects: { money: -1200, happiness: -5 }
            },
            {
                text: "Have no Laptop",
                effects: { happiness: -5, intellect: -5 }
            }
        ]
    },
    { // school related events
        id: "failed_midterm",
        type: "normal",
        title: "Failed Midterm",
        description: "You scored a 41% on your midterm.",
        choices: [
            {
                text: "Study extra hard",
                effects: { happiness: -10, intellect: 10, social: -5 }
            },
            {
                text: "Accept your fate",
                effects: { happiness: -10 }
            }
        ]

    },
    {
        id: "pass_final",
        type: "normal",
        title: "Final Exam Passed",
        description: "You passed your finals!",
        choices: [
            {
                text: "Celebrate",
                effects: { happiness: 20 }
            }
        ]
    },
    { // career events
        id: "hackathan_win",
        type: "normal",
        title: "Hackathon Winner",
        description: "Your team won 1st at the Hackathon!",
        choices: [
            {
                text: "Continue",
                effects: { money: 1000, happiness: 10 }
            }
        ]
    },
    {
        id: "internship_offer",
        type: "normal",
        title: "Internship Offer",
        description: "A company offers you a summer internship.",
        choices: [
            {
                text: "Accept",
                effects: { money: 5000, career: 20, happiness: 10 }
            },
            {
                text: "Decline",
                effects: { intellect: 10, money: -5 }
            }
        ]
    },
    {
        id: "group_project_conflict",
        type: "normal",
        title: "Group Project Conflict",
        description: "Your group members are arguing right before the project deadline.",
        choices: [
            {
                text: "Take control of the project",
                effects: { intellect: 8, happiness: -8, social: -4 }
            },
            {
                text: "Help everyone compromise",
                effects: { social: 10, happiness: 5 }
            }
        ]
    },
    {
        id: "scholarship_opportunity",
        type: "normal",
        title: "Scholarship Opportunity",
        description: "You find a scholarship application that is due tomorrow.",
        choices: [
            {
                text: "Stay up late and apply",
                effects: { money: 1500, intellect: 5, health: -5 }
            },
            {
                text: "Skip the application",
                effects: { happiness: 3 }
            }
        ]
    },
    {
        id: "campus_festival",
        type: "normal",
        title: "Campus Festival",
        description: "Your friends invite you to spend the day at the campus festival.",
        choices: [
            {
                text: "Go with your friends",
                effects: { happiness: 12, social: 10, intellect: -3 }
            },
            {
                text: "Stay home and study",
                effects: { intellect: 8, happiness: -4 }
            }
        ]
    },
    {
        id: "part_time_job_offer",
        type: "normal",
        title: "Part-Time Job Offer",
        description: "A local business offers you a part-time job during the semester.",
        choices: [
            {
                text: "Accept the job",
                effects: { money: 800, career: 5, health: -5, happiness: -3 }
            },
            {
                text: "Decline the job",
                effects: { happiness: 3 }
            }
        ]
    },
    {
        id: "sick_week",
        type: "normal",
        title: "A Week of Illness",
        description: "You become sick during an important week of classes.",
        choices: [
            {
                text: "Rest and recover",
                effects: { health: 10, intellect: -5 }
            },
            {
                text: "Keep attending class",
                effects: { intellect: 5, health: -12 }
            }
        ]
    },
    {
        id: "coding_bug",
        type: "normal",
        title: "Impossible Bug",
        description: "You spend hours trying to solve a difficult programming bug.",
        choices: [
            {
                text: "Keep debugging",
                effects: { coding: 12, happiness: -7, health: -3 }
            },
            {
                text: "Ask a classmate for help",
                effects: { coding: 6, social: 6 }
            }
        ]
    },
    {
        id: "professor_recommendation",
        type: "normal",
        title: "Professor Recommendation",
        description: "A professor offers to recommend you for a competitive opportunity.",
        choices: [
            {
                text: "Accept the recommendation",
                effects: { career: 12, happiness: 5 }
            },
            {
                text: "Turn it down",
                effects: { happiness: -3 }
            }
        ]
    },
    {
        id: "unexpected_expense",
        type: "normal",
        title: "Unexpected Expense",
        description: "An unexpected bill arrives and must be paid this week.",
        choices: [
            {
                text: "Pay it immediately",
                effects: { money: -400, happiness: -4 }
            },
            {
                text: "Delay the payment",
                effects: { money: -100, happiness: -10 }
            }
        ]
    },
    {
        id: "new_connection",
        type: "relationship",
        requiredQuarterNumber: 2,
        title: "A New Connection",
        description: "You meet someone on campus, and the two of you quickly begin dating.",
        choices: [
            {
                text: "Continue",
                effects: {
                    relationshipStatus: "Dating",
                    happiness: 12,
                    social: 6
                }
            }
        ]
    },
    {
        id: "relationship_crossroads",
        type: "relationship",
        requiredQuarterNumber: 13,
        title: "Relationship Crossroads",
        description: "Your relationship reaches an important turning point.",
        choices: [
            {
                text: "Invest more time in the relationship",
                effects: {
                    relationshipStatus: "Committed",
                    happiness: 12,
                    social: 6,
                    intellect: -4
                }
            },
            {
                text: "Focus on yourself",
                effects: {
                    relationshipStatus: "Single",
                    happiness: -8,
                    intellect: 8
                }
            }
        ]
    }
];
export function getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
}
function getQuarterNumber(year, quarter) {
    const quarterIndexes = {
        Fall: 1,
        Winter: 2,
        Spring: 3,
        Summer: 4
    };

    return ((year - 1) * 4) + quarterIndexes[quarter];
}

export function getEventForQuarter(gameState) {
    if (!Array.isArray(gameState.seenEvents)) {
        gameState.seenEvents = [];
    }

    const quarterNumber = getQuarterNumber(
        gameState.year,
        gameState.quarter
    );

    const guaranteedEvent = events.find((event) => {
        return (
            event.requiredQuarterNumber === quarterNumber &&
            !gameState.seenEvents.includes(event.id)
        );
    });

    if (guaranteedEvent) {
        return guaranteedEvent;
    }

    const availableNormalEvents = events.filter((event) => {
        return (
            event.type === "normal" &&
            !gameState.seenEvents.includes(event.id)
        );
    });

    if (availableNormalEvents.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(
        Math.random() * availableNormalEvents.length
    );

    return availableNormalEvents[randomIndex];
}

export function applyEventEffects(player, effects) {
    for (const stat in effects) {
        if (player[stat] === undefined) {
            continue;
        }

        if (
            typeof player[stat] === "number" &&
            typeof effects[stat] === "number"
        ) {
            player[stat] += effects[stat];
        } else {
            player[stat] = effects[stat];
        }
    }
}