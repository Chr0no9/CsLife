// Coding practice
// Social Events
// Rest
// Studying
// Getting a Job

// import { hasSaveData } from "./DataStorage";

/* Time Allocation determines how many mini-games appears
They lose minus coding stats if they get it incorrectly --> Potentially adding a penalty
for skipping a mini-game (give an option to skip it <-- Later implementation)

The player will lose points when they get (i.e. a coding problem wrong)
Maybe a way I can implement it is by doing +5 Coding skills if its correct and then
-3 coding skills

*/
// the only one that needs to be exported is nextQuarter

// Studying (Exam), coding, social, work and rest ( wouldnΓÇÖt have minigames)
// Social: Friday night do you decide to go out
// Social: Diagloig selection your talking to someone you have a crush on
// sociai: Diagolog type questions

// Studying: Multiple Choice Questions, Matching,
// maybe in like 5 minutes match as many concepts together
// True or False type questions

// Social: Text Message Replies from your friend or family member, Dialogue Choice

/*
 * What stats need to change in mini-games:
 * Studying: intellect and gpa
 * Coding: intellect and coding
 * Social: Social and Happiness | MAYBE Coding, Money and relationshipStatus <-- Haven't decided
 * IMPORTANT *****: For money activities might need to check if the player has enough to do these
 */

// Dialog Tree, Timed Decisions (multiple choice but the player gets 5 seconds to answer)
// Text message simulator
// Party Decisions
/*
 * For the Coding This is my idea:
 * 15 minigames in total:
 * 9 for programming type questions
 * - For the programming type questions I want to do Python, C and C++
 * - For each type of programming questions I want fill in the blank, output predictor and debugging
 * 6 for computer principles, computer architecture and Data Structure
 * - Two for
 * - These will be multiple choice
 */

/*
I want to use parent class and child class structure style

https://www.w3schools.com/js/js_class_inheritance.asp <-- used as reference
*/

class MiniGame {
    constructor(category, title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        this.category = category;
        this.title = title;
        this.prompt = prompt;
        this.type = type;
        this.choices = choices;
        this.CorrectAnswer = CorrectAnswer;
        this.IncreaseStat = IncreaseStat;
        this.DecreaseStat = DecreaseStat;
    }

    CheckAnswer(PlayerAnswer) {

        if (this.type !== "multipleChoice") {
            return false;
        }

        if (PlayerAnswer === this.CorrectAnswer) {
            return true;
        }

        return false;
    }

    AnswerResult(PlayerAnswer) {
        const Correct = this.CheckAnswer(PlayerAnswer);
        let effects;

        if (Correct) {
            effects = this.IncreaseStat;
        }

        else {
            effects = this.DecreaseStat;
        }

        return {
            correct : Correct,
            effects : effects
        };
    }
}

class StudyMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("study", title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat);
    }
}

class CodingMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("coding", title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat);
    }
}

class SocialMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, choiceEffects) {
        super("social", title, prompt, type, choices, null, null, null);
        this.choiceEffects = choiceEffects;
    }

    ChoiceEffects(choicesIndex) {
        return this.choiceEffects[choicesIndex];
    }
}

/*
############################### STUDYING MINI-GAMES ####################################
*/

const studyMiniGames = [

    // Study Number 1
    new StudyMiniGame(
        "Midterm Review",
        "You have a midterm coming up next week! What's the best way to study for it?",
        "multipleChoice",
        [
            "Cram everything the night before",
            "Review notes and textbook over time",
            "Skip sleep so you can study more",
            "Just go over the lecture notes once"
        ],
        "Review notes and textbook over time",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 2
    new StudyMiniGame(
        "Confusing Lecture",
        "You're in your Data Structure Class, but you don't understand the material the professor is teaching. What's the best way to not fall behind?",
        "multipleChoice",
        [
            "Who cares? I'm just going to text my friends",
            "Look at the lecture notes without trying to understamd them",
            "Just wait until there is an exam coming up",
            "Review the lecture notes and ask questions during class"
        ],
        "Review the lecture notes and ask questions during class",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 3
    new StudyMiniGame(
        "Bad Quiz Grade",
        "You just got a low grade on your first quiz. What should you do next?",
        "multipleChoice",
        [
            "Review mistakes and practice the topics you struggled with",
            "Ignore the quiz, let's go get boba",
            "Drop the class",
            "Blame the professor for making a hard quiz"
        ],
        "Review mistakes and practice the topics you struggled with",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 4
    new StudyMiniGame(
        "Time Management",
        "You have two long assignments due for two different classes this week. What should you do?",
        "multipleChoice",
        [
            "Only work on the easier problems and just ignore the harder",
            "Wait until the night before everything is due",
            "Make a schedule and do assignments over time rather than all at once",
            "Ignore your coursework"
        ],
        "Make a schedule and do assignments over time rather than all at once",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 5
    new StudyMiniGame(
        "Sleep or Cram",
        "You have your final exam in the morning, but its already 11pm. What should you do?",
        "multipleChoice",
        [
            "Skip the exam, you'll be fine",
            "Play video games and just hope that the exam will be easy",
            "Review the most important concepts for a bit and get enough sleep for tomorrow",
            "Stay awake all night. You have get every question correct"
        ],

        "Review the most important concepts for a bit and get enough sleep for tomorrow",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 6
    new StudyMiniGame(
        "Office Hours",
        "You're stuck on a programming assignment for hours and don't have a clue how to fix a bug. What should you do?",
        "multipleChoice",
        [
            "Copy another student's code",
            "Attend TA office hours and ask questions",
            "Just submit the incomplete code",
            "Wait until the assignment is due and then ask for help"
        ],

        "Attend TA office hours and ask questions",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 7
    new StudyMiniGame(
        "Final Exams Week",
        "You have three final exams during the same week. How should you prepare for them?",
        "multipleChoice",
        [
            "Make a study plan and spread your workload",
            "Study until your eyes are burning",
            "Just wing the exams",
            "Study for the hardest one and forget about the other ones"
        ],

        "Make a study plan and spread your workload",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 8
    new StudyMiniGame(
        "Group Project",
        "You were assigned with random classmates to work on a group project. What is a good way to organize?",
        "multipleChoice",
        [
            "Ignore the group chat",
            "Do everything yourself because you don't trust anyone",
            "Wait until the project is due to work",
            "Introduce yourself and divide the work equally"
        ],

        "Introduce yourself and divide the work equally",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 9
    new StudyMiniGame(
        "Study Place",
        "Where is the best place to study for an exam?",
        "multipleChoice",
        [
            "At a loud party",
            "The library",
            "While you're playing video games",
            "While you're watching Love Island"

        ],

        "The library",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 10
    new StudyMiniGame(
        "Distracted",
        "You keep getting notifications of cute monkey videos on your phone when you're studying. What should you do?",
        "multipleChoice",
        [
            "Look at your phone and just forget you're studying",
            "Keep checking those notifications",
            "Put it away until you're finished or feel like you need a break",
            "Forget about the monkey videos, I'm texting my friend"
        ],

        "Put it away until you're finished or feel like you need a break",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 11
    new StudyMiniGame(
        "Debugging",
        "Your program doesn't work after doing some changes. What is the first thing you should do before continuing?",
        "multipleChoice",
        [
            "Give up altogether",
            "Delete your entire program and start all over",
            "Restart your computer",
            "Read the error messages and make a test case"
        ],

        "Read the error messages and make a test case",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 12
    new StudyMiniGame(
        "Cheating?",
        "You're struggling on an assignment and your classmate offers to send you their entire assignment. What should you do?",
        "multipleChoice",
        [
            "Free assignment! Copy it",
            "Decline and do it yourself",
            "Submit their code but change some small things",
            "Give up on the assignment"
        ],

        "Decline and do it yourself",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 13
    new StudyMiniGame(
        "Burnout",
        "You have been studying for five hours continuously and can't focus anymore. What should you do?",
        "multipleChoice",
        [
            "Take a short break and start again when you're ready",
            "Quit studying",
            "No stopping, you're on work mode",
            "Study another five hours to prove to yourself that you're goated like that"
        ],

        "Take a short break and start again when you're ready",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 14
    new StudyMiniGame(
        "Questions",
        "You have a question about a concept that your professor just explained. What should you do?",
        "multipleChoice",
        [
            "Interrupt him when he's talking to ask your question",
            "Ask your question either when he's done talking OR during office hours",
            "Forget it, just stay quiet",
            "Give a little prayer that you'll understand it later"
        ],

        "Ask your question either when he's done talking OR during office hours",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),

    // Study Number 15
    new StudyMiniGame(
        "Missed Lecture!",
        "You had to go to the dentist office so you missed a lecture. What should you do?",
        "multipleChoice",
        [
            "Ask a classmate for notes and review the posted lecture slides",
            "Ignore that lecture, it was probably useless information",
            "Wait until an exam comes up to review it",
            "Drop the class altogether"
        ],

        "Ask a classmate for notes and review the posted lecture slides",
        // Correct Answer
        {
            intellect : 2,
            gpa : 0.2
        },
        // Incorrect Answer
        {
            intellect : -1,
            gpa : -0.2
        }),
]

    /*
    ############################### CODING MINI-GAMES ####################################
    */

    const codingMiniGames = [

        /*
        ############################### PYTHON ####################################
        */

        // Python 1: Fill in Blank
        new CodingMiniGame(
            "Python: Fill in the Blank",
            `What should replace the blank?:
        for __ in range(5):
            print(i)`,
            "multipleChoice",
            [
                "i",
                "number",
                "range",
                "char"
            ],
            "i",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // Python 2: Debugging
        new CodingMiniGame(
            "Python: Debugging",
            `Which line has the error in this code?
        1. numbers = [0, 5, 10]
        2. for i in range(3):
        3.      print (numbers[3])
        4. print("All Done!")`,
            "multipleChoice",
            [
                "line 1",
                "line 2",
                "line 3",
                "line 4"
            ],
            "line 3",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // Python 3: output predictor
        new CodingMiniGame(
            "Python: Output Prediction",
            `What is the output?
            x = 4 
            y = 3
            print (x * y)`,
            "multipleChoice",
            [
                "7",
                "12",
                "4",
                "43"
            ],
            "12",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        /*
        ############################### C ####################################
        */

        // C 1: Fill in the blank
        new CodingMiniGame(
            "C: Fill in the Blank",
            `What data type should replace the blank?:
        ___ gpa = 3.64;`,
            "multipleChoice",
            [
                "int",
                "float",
                "char",
                "string"
            ],
            "float",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // C 2: Debugging
        new CodingMiniGame(
            "C: Debugging",
            `Which line has the error in this code?
        1. int age = 20;
        2. printf("%d", agee);
        3. return 0;`,
            "multipleChoice",
            [
                "line 1",
                "line 2",
                "line 3",
                "No errors"
            ],
            "line 2",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // C 3: output predictor
        new CodingMiniGame(
            "C: Output Prediction",
            `What is the output?
        int i = 1;
        while (i <= 10)
        {
            if (i == 6)
            {
                printf("found");
            }

            i++;
        }`,
            "multipleChoice",
            [
                "found",
                "6",
                "1",
                "i"
            ],
            "found",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        /*
        ############################### C++ ####################################
        */

        // C++ 1: Fill in the blank
        new CodingMiniGame(
            "C++: Fill in the Blank",
            `What keyword should replace the blank?:
        class student
        {
            ___:
                string name;
                int StudentID;
            
            public:
                void setName(string new_name)
                {
                    name = new_name;
                }
        };`,
            "multipleChoice",
            [
                "public",
                "const",
                "static",
                "private"
            ],
            "private",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // C++ 2: Debugging
        new CodingMiniGame(
            "C++: Debugging",
            `Which line has the error in this code?
        1. int numbers[3] = {10, 20, 30};
        2. int total = 0;
        3. for (int i = 0; i < 3; i++)
        4.      total += numbers[i];
        5. coutt << total;
        6. return 0;`,
            "multipleChoice",
            [
                "line 1",
                "line 3",
                "line 5",
                "line 6"
            ],
            "line 5",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        // C++ 3: output predictor
        new CodingMiniGame(
            "C++: Output Prediction",
            `What is the output?
        int value = 3;
        int result = 1;
        
        for (int i = 0; i < value; i++)
        {
            result *= 2;
        }
            
        cout << result + value;`,
            "multipleChoice",
            [
                "6",
                "11",
                "16",
                "8"
            ],
            "11",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1
            }),

        /*
        ############################### Computer Principles ####################################
        */

        // Computer Principle 1: Pipelining
        new CodingMiniGame(
            "Computer Principles: Pipelining",
            "What is the main purpose of pipelining in a CPU?",
            "multipleChoice",
            [
                "Increase instruction throughput",
                "Allows the CPU to have more storage",
                "Increase the amount of RAM",
                "Cool down the CPU"
            ],
            "Increase instruction throughput",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),

        // Computer Principle 2: Caches
        new CodingMiniGame(
            "Computer Principles: Caches",
            "What is cache memory mainly used for?",
            "multipleChoice",
            [
                "Saves files forever",
                "Power the Computer",
                "Store data that the CPU will use soon",
                "Connect the computer to the internet"
            ],
            "Store data that the CPU will use soon",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),

        /*
        ############################### Computer Architecture ####################################
        */

        // Computer Architecture 1: Memory
        new CodingMiniGame(
            "Computer Architecture: Memory",
            "Which type of memory is the fastest",
            "multipleChoice",
            [
                "Registers",
                "RAM",
                "Cache Memory",
                "SSD"
            ],
            "Registers",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),

        // Computer Architecture 2: RAM
        new CodingMiniGame(
            "Computer Architecture: RAM",
            "What happens to the data in the RAM when you turn off the computer?",
            "multipleChoice",
            [
                "It moves to the hard drive",
                "It gets sent to the CPU",
                "The data is lost",
                "It stays until the computer is turned on"
            ],
            "The data is lost",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),

        /*
        ############################### Data Structures ####################################
        */

        // Data Structures 1: Binary Search Tree
        new CodingMiniGame(
            "Data Structures: Binary Search Tree",
            "In a Binary Search Tree, where are the values larger than the current node stored?",
            "multipleChoice",
            [
                "Left subtree",
                "Right subtree",
                "At the root",
                "Randomly"
            ],
            "Right subtree",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),

        // Data Structures 2: Linked List
        new CodingMiniGame(
            "Data Structures: Linked List",
            "What does the last node in a singly linked list point to?",
            "multipleChoice",
            [
                "The first node",
                "The previous node",
                "It points to itself",
                "NULL"
            ],
            "NULL",

            // Correct Answer
            {
                coding : 2,
                intellect : 1
            },

            // Incorrect Answer
            {
                coding : -1,
            }),
    ]

    /*
    ############################### SOCIAL MINI-GAMES ####################################
    */

    const socialMiniGames = [

        // Social Number 1
        new SocialMiniGame(
            "Weekend Party",
            "Your friends invite you to go to a party, but you have an important assignment due Sunday. What do you do?",
            "multipleChoice",
            [
                "Go to that party and party all night", // Option 1
                "Go for a little and then go home", // Option 2
                "Stay home and work on your assignment", // Option 3
                "Just stay home and relax" // Option 4
            ],
            [
                // Option 1
                {
                    social : 2,
                    happiness : 2,
                },

                // Option 2
                {
                    social : 1,
                    happiness : 1,
                },

                // Option 3
                {
                    intellect : 2,
                    coding : 1,
                    social : -1
                },

                // Option 4
                {
                    health : 2,
                    happiness : 1,
                    social : -4,
                },
            ]),

        // Social Number 2
        new SocialMiniGame(
            "Boba After Class",
            "Your friends ask you if you want to get some boba after class. A Boba costs $5. What do you want to do?",
            "multipleChoice",
            [
                "Let's get boba and hang out after!", // Option 1
                "Only get boba, you're busy later", // Option 2
                "Decline and study instead", // Option 3
                "Stay on campus and get dining hall food" // Option 4
            ],
            [
                // Option 1
                {
                    social : 2,
                    happiness : 2,
                    money : -5
                },

                // Option 2
                {
                    social : 1,
                    happiness : 1,
                    money : -5,
                },

                // Option 3
                {
                    social : -2,
                    happiness : -2,
                    intellect : 2,
                    coding : 2
                },

                // Option 4
                {
                    social : -4,
                    happiness : -3,
                    intellect : 1,
                    coding : 1
                },
            ]),

        // Social Number 3
        new SocialMiniGame(
            "Text Message: Friend 1",
            "Your friend texts: Let's go Surfing near the beach and then the beach. The cost of renting a Surfboard for a whole day $50. How would you respond?",
            "multipleChoice",
            [
                "Absolutely! Let's go", // Option 1
                "I'll just stay by the beach", // Option 2
                "No, I hate the beach. I'm staying home", // Option 3
                "Let's do something else?" // Option 4
            ],
            [
                // Option 1
                {
                    social : 3,
                    happiness : 3,
                    money : -50,
                    health : 1

                },

                // Option 2
                {
                    social : 2,
                    happiness : 2,
                    health : 1
                },

                // Option 3
                {
                    happiness : -2,
                    health : -1,
                    social : -2

                },

                // Option 4
                {
                    social : -1,
                    health : 1,
                    happiness : -1
                },
            ]),

        // Social Number 4
        new SocialMiniGame(
            "Text Message: Friend 2",
            "Your friend texts: Do you want to see the new Moana Movie together? The price of each movie ticket is $15.",
            "multipleChoice",
            [
                "Say no and stay home", // Option 1
                "Tell her you're busy with schoolwork", // Option 2
                "Let's go!", // Option 3
                "Let's watch another movie?" // Option 4
            ],
            [
                // Option 1
                {
                    social : -3,
                    happiness : -3,
                    health : -1,
                },

                // Option 2
                {
                    social : -1,
                    happiness : -1,
                    intellect : 1,
                    coding : 1,
                },

                // Option 3
                {
                    health : 1,
                    happiness : 2,
                    social : 2,
                    money : -15,
                },

                // Option 4
                {
                    health : 1,
                    happiness : 1,
                    social : 1,
                },
            ]),

        // Social Number 5
        new SocialMiniGame(
            "Board Game Night",
            "Your friend are hosting a board game night at their dorm.",
            "multipleChoice",
            [
                "Stay the entire night", // Option 1
                "Play one game and then go home", // Option 2
                "Stay home and study", // Option 3
                "Just stay home and relax" // Option 4
            ],
            [
                // Option 1
                {
                    social : 2,
                    happiness : 2
                },

                // Option 2
                {
                    social : 1,
                    happiness : 1,

                },

                // Option 3
                {
                    coding : 1,
                    intellect : 1,
                    social : -1
                },

                // Option 4
                {
                    health : 2,
                    happiness : 1
                },
            ]),

        // Social Number 6
        new SocialMiniGame(
            "Escape Room",
            "Your friends booked an escape room on a Friday night. The tickets are $45 per person. What do you want to do?",
            "multipleChoice",
            [
                "Go just for gun", // Option 1
                "Go for a little and then go home", // Option 2
                "Stay home and work on your assignment", // Option 3
                "Just stay home and relax" // Option 4
            ],
            [
                // Option 1
                {
                    social : 2,
                    happiness : 2,
                    money : -45
                },

                // Option 2
                {
                    social : 2,
                    happiness : 2,
                    money : -45,
                    intellect : 1
                },

                // Option 3
                {
                    intellect : 2,
                    happiness : -1,
                    coding : 1,
                    social : -1
                },

                // Option 4
                {
                    health : -1,
                    happiness : 1,
                    social : -4,
                    coding : -2,
                },
            ]),

        // Social Number 7
        new SocialMiniGame(
            "Help a Stranger!",
            "A new student is lost trying to find their class and asks you for help.",
            "multipleChoice",
            [
                "Ignore them, they'll survive", // Option 1
                "Give Directions", // Option 2
                "Walk them to the building", // Option 3
                "Say you're late for your class." // Option 4
            ],
            [
                // Option 1
                {
                    social : -1,
                    happiness : -1
                },

                // Option 2
                {
                    social : 1
                },

                // Option 3
                {
                    social : 2,
                    happiness : 2
                },

                // Option 4
                {
                    happiness : -1
                },
            ]),

        // Social Number 8
        new SocialMiniGame(
            "Hiking",
            "Your friend invites you on a hiking trip.",
            "multipleChoice",
            [
                "Stay home and Watch Game of Thrones", // Option 1
                "Say no and then stare at your room's walls for eight hours", // Option 2
                "Go hiking with them", // Option 3
                "Agree to go but after half a mile go back home" // Option 4
            ],
            [
                // Option 1
                {
                    social : -1,
                    happiness : 1,
                    health : 1
                },

                // Option 2
                {
                    social : -2,
                    happiness : -3,
                    health : -1
                },

                // Option 3
                {
                    social : 2,
                    happiness : 2,
                    health : 3
                },

                // Option 4
                {
                    social : 1,
                    happiness : 1,
                    health : 1
                },
            ]),

        // Social Number 9
        new SocialMiniGame(
            "Ride to Airport",
            "Your friend asked if you can drive them 45 minutes through the 405 Freeway during rush hour. What do you do?",
            "multipleChoice",
            [
                "Tell him, he's walking to the airport", // Option 1
                "Agree to take him but demand $30 for gas money", // Option 2
                "Take him to the airport", // Option 3
                "Drive him to a bus line that takes him to the airport" // Option 4
            ],
            [
                // Option 1
                {
                    social : -2
                },

                // Option 2
                {
                    social : 1,
                    happiness : -1,
                    money : 30,
                },

                // Option 3
                {
                    social : 2,
                    happiness : 2
                },

                // Option 4
                {
                    social : 1
                },
            ]),

        // Social Number 10
        new SocialMiniGame(
            "Last-Minute Invitation",
            "Your roommates invite you to go out in 20 minutes. Do you want to go?",
            "multipleChoice",
            [
                "Tell them yes but take 45 minutes to get ready", // Option 1
                "No, I'm watching Love Island right now", // Option 2
                "Quickly get ready and go", // Option 3
                "Tell them no, you're playing GTA-6" // Option 4
            ],
            [
                // Option 1
                {
                    social : 1,
                    happiness : 1
                },

                // Option 2
                {
                    social : -1,
                    happiness : 2
                },

                // Option 3
                {
                    social : 3,
                    happiness : 2
                },

                // Option 4
                {
                    social : -1,
                    happiness : 2
                },
            ]),

        // Social Number 11
        new SocialMiniGame(
            "Clean Your Room!",
            "After coming back from your programming class, you realized your room is messy. What do you want to do?",
            "multipleChoice",
            [
                "Clean your room, do laundry, and vaccum the carpet", // Option 1
                "Only do laundry", // Option 2
                "Eh, just do it later", // Option 3
                "Clean your room fully, BUT to reward yourself get food after (Costs $25)" // Option 4
            ],
            [
                // Option 1
                {
                    happiness : 1,
                    health : 1
                },

                // Option 2
                {
                    happiness : 1
                },

                // Option 3
                {
                    health : -2
                },

                // Option 4
                {
                    happiness : 1,
                    health : 1,
                    money : -25

                },
            ]),

        // Social Number 12
        new SocialMiniGame(
            "Play Pickle Ball",
            "Your friend needs one more player to make a full team",
            "multipleChoice",
            [
                "Eh, Let's go get pizza instead (Costs $5)", // Option 1
                "Play the entire day", // Option 2
                "Play for 30 minutes", // Option 3
                "Learn how to play a guitar" // Option 4
            ],
            [
                // Option 1
                {
                    social : -1,
                    money : -5
                },

                // Option 2
                {
                    social : 2,
                    happiness : 2,
                    health : 2
                },

                // Option 3
                {
                    social : 1,
                    happiness : 1,
                    health : 1
                },

                // Option 4
                {
                    intellect : 1,
                    social : -1,
                    happiness : 1
                },
            ]),

        // Social Number 13
        new SocialMiniGame(
            "Volunteering",
            "The local park is looking for volunteers to clean up a park",
            "multipleChoice",
            [
                "Go to the park but watch others clean up", // Option 1
                "Volunteer and bring a friend too", // Option 2
                "Sorry, I want to sleep", // Option 3
                "I don't like the sunlight, I want to practice my coding" // Option 4
            ],
            [
                // Option 1
                {
                    social : -1,
                    happiness : 1,
                    health : -1
                },

                // Option 2
                {
                    social : 2,
                    happiness : 4,
                    health : 2,
                    money : 10
                },

                // Option 3
                {
                    health : 4
                },

                // Option 4
                {
                    coding : 2,
                    intellect : 2
                },
            ]),

        // Social Number 14
        new SocialMiniGame(
            "Swimming",
            "It's a hot day out and your cousins invites you to go swimming at their pool",
            "multipleChoice",
            [
                "I'm not going, I can't swim", // Option 1
                "Go to the pool and tan instead", // Option 2
                "Don't go and watch funny cat vidoes", // Option 3
                "Let's go swimming" // Option 4
            ],
            [
                // Option 1
                {
                    social : -1
                },

                // Option 2
                {
                    social : 1,
                    happiness : 1,
                    health : 1
                },

                // Option 3
                {
                    happiness : 1,
                    social : -1
                },

                // Option 4
                {
                    social : 2,
                    happiness : 2,
                    health : 2,

                },
            ]),

        // Social Number 15
        new SocialMiniGame(
            "Poker Night",
            "Your friends invited you to play poker. Everyone agreed on a $20 bet. How do you want play?",
            "multipleChoice",
            [
                "I don't have time, ALL IN!", // Option 1
                "Play passively", // Option 2
                "Watch other people without playing", // Option 3
                "Stay home and work on an assignment" // Option 4
            ],
            [
                // Option 1
                {
                    happiness : 2,
                    social : 2,
                    money : 200
                },

                // Option 2
                {
                    happiness : 2,
                    social : 2,
                    intellect : 1,
                    money : -20
                },

                // Option 3
                {
                    social : 1,
                    happiness : 1
                },

                // Option 4
                {
                    coding : 2,
                    intellect : 2,
                    social : -2
                },
            ]),
    ]

    export {
    studyMiniGames,
        codingMiniGames,
        socialMiniGames
}
