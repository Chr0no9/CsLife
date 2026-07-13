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

    // Have some sort of stat changing here
}

class StudyMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("study", title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat);
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

    CheckAnswer(PlayerAnswer) {
        if (this.type === "multipleChoice") {
            return PlayerAnswer === this.CorrectAnswer;
        }

        // Have some sort of checking system for matching

        return false;
    }
}

class SocialMiniGame extends MiniGame {
    constructor(title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat) {
        super("social", title, prompt, type, choices, CorrectAnswer, IncreaseStat, DecreaseStat);
    }

    ChoiceResult(SelectedAnswer) {
       return this.choices[SelectedAnswer];
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
            "Stay awake all night and study. You have get every single question correct"
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
        "You're stuck on a programming assignment for hours and don't have clue how to fix a bug. What should you do?",
        "multipleChoice",
        [
            "Copy another student's code",
            "Attend TA office hours and ask questions",
            "Just submit the incomplete code",
            "wait until the assignment is due and then ask for help"
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
        "You are assigned with randoms on a group project. What should you do?",
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
        "Out of these options, What is the best place to study for an exam?",
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
        "Your program doesn't work after doing some changes. What is the first thing you should do before continueing?",
        "multipleChoice",
        [
            "Give up alltogether",
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
        "Your struggling on an assignment and your classmate offers to send you their entire assignment. What should you do?",
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
        "You have been studying for five hours continously and can't focus anymore. What should you do?",
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
        "You have a question about a concept that your professor just talked about. What should you do?",
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
            "Drop the class alltogether"
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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

    /*
    ############################### C ####################################
    */

    // C 1: Fill in the blank
    new CodingMiniGame(
        "C: Fill in the Blank",
        `What data type should replace the blank?: 
        ___ gpa = 3.64`,
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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
        }`,
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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),

    // Computer Architecture 2: RAM 
    new CodingMiniGame(
        "Computer Architecture: RAM",
        "What happens to the data in the RAM when you turn off the computer?",
        "multipleChoice",
        [
            "It moves to the hard drive",
            "It gets sent to the CPU",
            "It disappears",
            "It stays until the computer is turned on"
        ],
        "It disappears",

        // Correct Answer
        {
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),

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
            coding: 2,
            intellect: 1
        },

        // Incorrect Answer
        {
            coding: -1,
        }
    ),







]