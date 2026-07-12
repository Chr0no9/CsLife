// Coding practice 
// Social Events
// Rest
// Studying
// Getting a Job

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

// Dialog Tree, Timed Decisions (multiple choice but the player gets 5 seconds to answer)
// Text message simulator 
// Party Decisions 
// Coding: Fill in the blank, scrammbler, debugging, output predictor 

/*
I want to use parent class and child class structure style 

https://www.w3schools.com/js/js_class_inheritance.asp <-- used as reference 
*/ 

class MiniGame {
    constructor(category, title, prompt, IncreaseStat, DecreaseStat) {
        this.category = category;
        this.title = title;
        this.prompt = prompt;
        this.IncreaseStat = IncreaseStat;
        this.DecreaseStat = DecreaseStat;
    }

    // Have some sort of stat changing here
}

class StudyMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("study", title, prompt, IncreaseStat, DecreaseStat);
        this.type = type;
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
    constructor(title, prompt, type, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("coding", title, prompt, IncreaseStat, DecreaseStat);
        this.type = type;
        this.CorrectAnswer = CorrectAnswer;
    }

    CheckAnswer(UserAnswer) {
        const lowerAnswer = UserAnswer.trim().toLowerCase();
        const lowerCorrectAnswer = this.CorrectAnswer.trim().toLowerCase();

        return lowerAnswer === lowerCorrectAnswer
    }

}

class SocialMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, IncreaseStat, DecreaseStat) {
        super("social", title, prompt, IncreaseStat, DecreaseStat);
        this.type = type;
        this.choices = choices;
    }

    ChoiceResult(SelectedAnswer) {
       return this.choices[SelectedAnswer];
    }
}

/*
############################### STUDYING MINI-GAMES ####################################
*/ 

export const studyMiniGame = [
    
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
        "Lecture",
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
        "Study Group",
        "Your classmates invited you to a study group before an exam ",
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

    // Study Number 4
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

    // Study Number 5
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
];

export const codingMiniGames = [
    // Coding placeholder
];

export const socialMiniGames = [
    // Social placeholder
];