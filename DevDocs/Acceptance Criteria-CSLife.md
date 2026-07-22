# **Acceptance Criteria \- CsLife** 

# Team Name: BitByte 

### Members: Marco Nasirpour, Nima Jamshidi, 

Adrian Lopez, Ethan Zarella,   
Saniha Sreedhara 

### Release 1.0, Release Date: 7/9/2026, 

### 

### **User Story 1**

As a user, I want to create a character so that I can begin playing the game.

### Acceptance Criteria:

* The user can enter a character name.  
* The user can select one character trait.  
* The user can choose an avatar.  
* Selecting Start Game creates a player object.  
* Player information is saved to local storage.  
* The game transitions to the Main Game screen.  
* The player's name, avatar, and starting quarter are displayed correctly.

### **User Story 2**

As a player, I want to allocate my time each quarter so that I can improve different aspects of my character.

### Acceptance Criteria:

* The player is given five allocation points at the beginning of each quarter.  
* Points can be assigned to Study, Coding, Social, Work, and Rest.  
* Players cannot confirm their allocation until all five points have been assigned.  
* The allocation window closes after confirmation.  
* The selected allocation is stored.  
* A mini-game queue is created based on the player's selected activities.

### **User Story 3**

As a player, I want to work to earn money and rest to improve my well-being.

### Acceptance Criteria:

* Allocating points to Work increases the player's money.  
* Allocating points to Work decreases the player's health.  
* Allocating points to Work decreases the player's happiness.  
* Allocating points to Rest increases the player's health.  
* Allocating points to Rest increases the player's happiness.  
* Updated player statistics are saved after the quarter effects are applied.  
* Health and happiness values remain within valid limits.


### **User Story 4**

As a player, I want random life events so that every playthrough is different.

### Acceptance Criteria:

* A random event is generated after all mini-games are completed.  
* The event title and description are displayed.  
* Multiple player choices are presented.  
* Selecting a choice applies the corresponding stat changes.  
* The event closes after a selection is made.  
* The game proceeds to the end of the current quarter.

### **User Story 5**

As a player, I want my progress to advance through college until graduation.

### Acceptance Criteria:

* Completing a quarter advances the player to the next academic quarter.  
* Quarters progress in the correct order:  
  * Fall → Winter  
  * Winter → Spring  
  * Spring → Summer  
  * Summer → Fall (next academic year)  
* The player's current year and quarter are updated after each completed quarter.  
* The game ends after completing the final quarter of Year 4\.  
* The End Game screen is displayed upon graduation.

### **User Story 6**

As a player, I want to view my character statistics at any time.

### Acceptance Criteria:

* Selecting View Stats opens the statistics window.  
* The statistics window displays:  
  * Player Name  
  * Trait  
  * Health  
  * Happiness  
  * Money  
  * Intellect  
  * Coding Skill  
  * Social Skill  
  * GPA  
  * Relationship Status  
* Closing the statistics window returns the player to the main game screen.  
* Displayed statistics always reflect the player's current values.

