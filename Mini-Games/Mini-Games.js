// Coding practice 
// Social Events
// Rest
// Studying
// Getting a Job

import { hasSaveData } from "./DataStorage";

/* Time Allocation determines how many mini-games appears
They lose minus coding stats if they get it incorrectly --> Potentially adding a penalty
for skipping a mini-game (give an option to skip it <-- Later implementation)

The player will lose points when they get (i.e. a coding problem wrong)
Maybe a way I can implement it is by doing +5 Coding skills if its correct and then 
-3 coding skills 

*/
// the only one that needs to be exported is nextQuarter 

// Studying (Exam), coding, social, work and rest ( wouldn’t have minigames)
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

        return PlayerAnswer === this.CorrectAnswer;
    }

    // Have some sort of stat changing here
}

class StudyMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("study", title, prompt, IncreaseStat, DecreaseStat);
        this.choices = choices;
        this.CorrectAnswer = CorrectAnswer;
    }

    CheckAnswer(PlayerAnswer) {
        if (this.type === "multipleChoice") {
            return PlayerAnswer === this.CorrectAnswer;
        }

        // Have some sort of checking system for matching

        return false;
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
}

/*
############################### STUDYING MINI-GAMES ####################################
*/ 

const StudyMiniGame = [
    
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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),

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
            intellect: 2,
            gpa: 0.2
        },
        //Incorrect Answer 
        {
            intellect: -1,
            gpa: -0.2
        }
    ),
]