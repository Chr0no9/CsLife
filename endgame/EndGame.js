export const careers = [
    {
        title : "Google Software Engineer",
        req_GPA : 3.8,
        req_Int : 88,
        req_Cod : 89,
        description : "Congratulations, your working at Google after college!"
    },

    {
        title : "PayPal Software Engineer",
        req_GPA : 3.3,
        req_Int : 80,
        req_Cod : 82,
        description : "Congratulations, you're working at PayPal after college!"
    },

    {
        title : "Startup Software Engineer",
        req_GPA : 2.9,
        req_Int : 70,
        req_Cod : 70,
        description : "Congratulations, you're working at a Startup after college!"
    },

    {
        title : "Data Analyst",
        req_GPA : 2.6,
        req_Int : 65,
        req_Cod : 50,
        description : "Congratulations, you're working as a Data Analyst after college!"
    },

    {
        title : "IT Specialist",
        req_GPA : 2.3,
        req_Int : 60,
        req_Cod : 45,
        description : "Congratulations, you're working as a IT Specialist after college!"
    },

    {
        title : "Unemployed",
        req_GPA : 0,
        req_Int : 0,
        req_Cod : 0,
        description : "Unfortunately you are Unemployed :("
    }
]

// Returns the highest career whose GPA, intellect, and coding requirements the player meets.
export function endCareers(player) {
    for (const career of careers) {
        if (player.gpa >= career.req_GPA && player.intellect >= career.req_Int && player.coding >= career.req_Cod) {
            return career;
        }
    }

    return careers[careers.length - 1];
}
