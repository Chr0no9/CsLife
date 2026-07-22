# **Test Plan and Report \- CsLife** 

# Team Name: BitByte 

### Members: Marco Nasirpour, Nima Jamshidi, 

Adrian Lopez, Ethan Zarella,   
Saniha Sreedhara 

### Release 1.0, Release Date: 7/21/2026, 

### 

### **User Story 1(Tests: Passed)**

As a user, I want to create a character so that I can begin playing the game.

1. Launch the game.  
2. Click Start Game.  
3. Enter the name “Marco”.  
4. Select the Studious trait.  
5. Select an avatar.  
6. Press Start Game.

Expected Result

* A player object is created.  
* Character information is stored in local storage.  
* The user is redirected to the Main Game screen displaying the correct name, avatar, and current quarter.

### **User Story 2(Tests: Passed)**

As a player, I want to allocate my time each quarter so that I can improve different aspects of my character.

1. Click Continue.  
2. Allocate all five available points.  
3. Press Confirm Allocation.

Expected Result

* Allocation is accepted only after all five points are assigned.  
* Time allocation window closes.  
* Quarter plan is saved.  
* Mini-game queue is created.

### **User Story 3(Tests: Passed)**

As a player, I want to work to earn money and rest to improve my well-being.

1. Allocate three points to Work and two points to Rest.  
2. Confirm the allocation.

Expected Result

* Player money increases according to work points.  
* Player health increases from rest and decreases from work.  
* Player happiness increases from rest and decreases from work.  
* Updated player data is saved.


### **User Story 4(Tests: Passed)**

As a player, I want random life events so that every playthrough is different.

1. Complete the quarter.  
2. Wait for a random event.  
3. Select one of the event choices.

Expected Result

* A random event is displayed.  
* Event choices appear.  
* Selecting a choice updates player statistics.  
* Quarter continues normally.

### **User Story 5(Tests: Passed)**

As a player, I want my progress to advance through college until graduation.

1. Complete a quarter.  
2. Finish all required actions.  
3. Repeat until Year 4\.

Expected Result

* Quarter advances correctly:  
  * Fall → Winter  
  * Winter → Spring  
  * Spring → Summer  
  * Summer → Fall (year 2\)  
* Game enters End Game screen after the final quarter.


### **User Story 6(Tests: Passed)**

As a player, I want to view my character statistics at any time.

1. Click View Stats.

Expected Result

* Player name  
* Trait  
* Health  
* Happiness  
* Money  
* Intellect  
* Coding  
* Social  
* GPA  
* Relationship status

are displayed correctly.

# **Unit Tests**

The project primarily used manual system testing rather than an automated testing framework.

Failed Tests for Release: None observed during release testing.

