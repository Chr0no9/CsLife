# **Sprint Plan 4 \- CsLife** 

# Team Name: BitByte

### Members: Marco Nasirpour, Nima Jamshidi, 

Adrian Lopez, Ethan Zarella,   
Saniha Sreedhara 

### Release 1.0, Release Date: 7/15/2026

### Revision: N/A, Revision Date: N/A


**Goal:** The goal of sprint 4 is to finalize the game’s logic and user interface of the gameplay. To do this, the team needs to finish creating the interactive mini-games, event system, an end game where users are able to have multiple different outcomes, as well as a way to earn money in the game. 

**User Story 1 (High Priority):**

As a player, I want the ability to dedicate how much time I work and make some money.

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Job System | Create job game flow and implementation |  3 |
| Main Game bug fixes | Fix progression bugs | 2 |
|  |  | **Total Time Estimate: 5** |

**User Story 2 (High Priority):**

As a player, I want the ability to choose how I dedicate my time each quarter and those choices affect my statistics 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Create frontend UI | Design user interface for graduation and event systems | 8 |
|  |  | **Total Time Estimate: 8** |

 

**User Story 3 (High Priority):**

As a player, I want to play random mini-games in between the quarter

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Design Mini-Game System | Create a system where it randomly chooses different mini-games for each quarter, what type of challenges will be given to the players and how each mini-game will affect player statistics |  4 |
| Mini-Game Selector System | Implement Logic that will randomly selects and starts a mini-game between the quarters  (**Note**: Ensure it is integrated in quarter system and doesn’t interfere with Events) |  4 |
| Mini-Game Logic | Using the design ideas, implement the mini-game logic, evaluate player performances, and update the player’s statistics based on the results of each mini-game |  6 |
| Design Mini-Game Interface  | Create the front-end display for the mini-game, also includes game instruction  |  4 |
|  |  | **Total Time Estimate: 18**  |

 **User Story 4 (High Priority):**  
 As a player, I want random life events to occur in between the quarters 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Design Random Event System | Make different types of events that could occur between quarters for things like: academic, social, financial, happiness, and career \- related |  4 |
| Implement Event Selection Logic | Create the logic to randomly select an event from the available event pool | 2 |
| Update Player Statistics | Update the players statistics and game state based on the outcome of the selected event | 2 |
| Integrate and Test Event System  | Display events during gameplay and verify effects are applied correctly | 2 |
|  |  | **Total Time Estimate: 10** |

 **User Story 5 (High Priority):**  
 As a player, I want an end game that has different graduation outcomes based on the choices and statistics gathered throughout college.   
 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Design Graduation System | Brainstorm graduation requirements, design multiple possible endings, determine the threshold of how each statistic will affect each ending  |  4 |
| Implement Graduation Logic | Create the graduation system that will check the statistics of the player at the end of the game and decide on a suitable graduation outcome depending on the requirements and conditions  |  5 |
| Design the Graduation Result Interface | Implement the graduation result screen that shows the player’s graduation status, employment, final statistics  |  6 |
|  |  | **Total Time Estimate: 15** |

**Team Roles:**

| Team Member | Role 1  | Role 2 |
| :---: | :---: | :---: |
| Marco Nasirpour | Product Owner | Developer |
| Nima Jamshidi | Developer | \- |
| Adrian Lopez | Scrum Master | Developer |
| Ethan Zarella | Developer | \- |
| Saniha Sreedhara | Developer | \- |

**Initial Task Assignment:**

| Team Member | User Story  | Initial Task  |
| :---: | :---: | :---: |
| Marco Nasirpour | 1 | Job System & bugfix |
| Nima Jamshidi | 3 | Design Mini-Game System |
| Adrian Lopez | 5 | Design Graduation System |
| Ethan Zarella | 4 | Integrate saving after character creation. |
| Saniha Sreedhara | 2 | Create frontend UI |

**Initial Burnup Chart:**

![][image1]

**Initial Scrum Board:**

Link to the Github Repository to see the Scrum Board: ([Link](https://github.com/users/Chr0no9/projects/1/views/2))

**Scrum Times:**

| Day of Week | Time | TA/Tutor |
| :---: | :---: | :---: |
| Sunday | 6:00pm | No |
| Tuesday | 11:30 am | Yes |
| Thursday | 11:00 am | Yes |

[image1]: <data:image/png;base64,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>