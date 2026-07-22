# **Sprint Plan 3 \- CsLife** 

# Team Name: BitByte

### Members: Marco Nasirpour, Nima Jamshidi, 

Adrian Lopez, Ethan Zarella,   
Saniha Sreedhara 

### Release 1.0, Release Date: 7/8/2026

### Revision: N/A, Revision Date: N/A


**Goal:** The goal of sprint 3 is to shift the focus from the game’s framework to the gameplay. To do this, an event system, interactive mini games, an interface, and a stable save/load functionality of the events and mini games will be added. 

**User Story 1 (High Priority):**

As a player, I want the ability to choose clearly to progress through the game all the way until graduation.

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Implement main game architecture | Create main gameflow logic in which the game mainly follows and calls sub files and functions |  3 |
|  |  | **Total Time Estimate: 3** |

**User Story 2 (High Priority):**

As a player, I want the ability to choose how I dedicate my time each quarter and those choices affect my statistics 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Create frontend UI | Design plus/minus for the user to dedicate a certain amount of time in each quarter. | 3 |
| Implement time dedication system | Create logic in which at the beginning of each quarter the user decides how much time they want to put into the 5 categories with 5 point allocations and a maximum of 2 in one category. | 5 |
|  |  | **Total Time Estimate: 8** |

  **User Story 3 (High Priority):**  
  As a player, I want my game progress to be saved and loaded so that I can continue playing without  losing my character, statistics and quarter progression.   
 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Integrate saving after character creation. | Automatically save the player’s character and initial game state when a new game begins. | 1 |
| Implement continuous game functionality | Load saved player and game state when the continue button is selected.  | 2 |
| Save automatically for each quarter.  | Save updated player and game state whenever the player advances to the next quarter.  | 2 |
|  |  | **Total Time Estimate: 5** |

**User Story 4 (High Priority):**

As a player, I want to play random mini-games in between the quarter

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Design Mini-Game System | Create a system where it randomly chooses different mini-games for each quarter, what type of challenges will be given to the players and how each mini-game will affect player statistics |  4 |
| Mini-Game Selector System | Implement Logic that will randomly selects and starts a mini-game between the quarters  (**Note**: Ensure it is integrated in quarter system and doesn’t interfere with Events) |  4 |
| Mini-Game Logic | Using the design ideas, implement the mini-game logic, evaluate player performances, and update the player’s statistics based on the results of each mini-game |  6 |
| Design Mini-Game Interface  | Create the front-end display for the mini-game, also includes game instruction  |  4 |
|  |  | **Total Time Estimate: 18**  |

 **User Story 5 (High Priority):**  
 As a player, I want random life events to occur in between the quarters 

| Task | Short Description | Time Estimation (hours) |
| :---: | :---: | :---: |
| Design Random Event System | Make different types of events that could occur between quarters for things like: academic, social, financial, happiness, and career \- related |  4 |
| Implement Event Selection Logic | Create the logic to randomly select an event from the available event pool | 2 |
| Update Player Statistics | Update the players statistics and game state based on the outcome of the selected event | 2 |
| Integrate and Test Event System  | Display events during gameplay and verify effects are applied correctly | 2 |
|  |  | **Total Time Estimate: 10** |

 **User Story 6 (Low Priority):**  
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
| Adrian Lopez | Developer | \- |
| Ethan Zarella | Scrum Master | Developer |
| Saniha Sreedhara | Developer | \- |

**Initial Task Assignment:**

| Team Member | User Story  | Initial Task  |
| :---: | :---: | :---: |
| Marco Nasirpour | 1 | Implement main game architecture |
| Nima Jamshidi | 4 | Design Mini-Game System |
| Adrian Lopez | 6 | Design Graduation System |
| Ethan Zarella | 3 | Integrate saving after character creation. |
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

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaMAAAEECAYAAACFjFuiAAAYC0lEQVR4Xu3dD2xU5ZrHcSXSRIiGmOiqSEkqJhXUEEMxRkklym00xEhQQwyye6NxdQnqjREREURFIBGjqxEirEEvypXr1bVGugvrRVFBS0UQ2kvCLbrU1CqosEUbAXv2Pq8+x3feOTOdtjOed/p+P8nJnPO+Z/6cd2ae35wz7ZwTIgAAUnaC2wAAwG+NMAIApI4wAgCkjjACAKSOMAIApI4wAgCkjjACAKSOMAIApI4wAgCkjjACAKSOMAIApI4wAgCkjjACAKSuT2H0yCOPRPfee2/OqSffffed25TT6tWro6eeesptjnV1dWXd/08//eSuNiD1NNbd3d3R7NmzM8bmhRdecFf7zcj9y/NVqHXr1rlNBZPXjLx2AJSHPoWRTd7wDzzwgNucV09F1JYvjNavX29uq7m5OW576623enX75Szfdn7//femf+vWrRnt0rZgwYKMtt9Kb8Io3/NeCMIIKC9lHUb6ad8lbZs2bXKbB5ykbVf5xiDf9UqJMAKQS0nC6NixY3FQyCR7MMpuVx9++GFG+xNPPBH35StKDz/8cEGF9eDBgxm339nZGfe1t7dn9LW1tcV98rjl/u1DXT/++GPcLx588MG4b+7cuRl9roaGhoz7kttVso267dq/cuVK69pRRt+bb75pLnPJ12eT50oed9I2yOFUaWttbY37n376aTN+9nYo2Ybt27dn9MmykmU7jDZu3Jixrh5edW9DyCFHu80da/e2CCOgvJQkjKQYfPHFFxnLduHVAiOeeeaZjGUhy0ePHjXz+cJI2N9fPffcc253XMQ0RPTw1d69e+Pvm6QgCymGsqxhpYcBdVm2SZb37dtnluVw1+OPP27mxYsvvhjdd9998bLt0KFD5rpff/113CZjsnbtWjOvYbR7926zrI9bLoVuo3rssceyxk0dPnw4Z59L1lu0aFG8vGTJkvi50jCS+1KyPH/+/HhZrqvPj26DhopugwaQPb9r166Mx6gBp9zn3R07e6z1w4bS55EwAspH0cNoy5YtWQVZP1mrngql9OsfObhFKRcp4vYejJKi9eijj1pr/kqC5Nlnn81oe/75503ACQmjhx56KKNfblu3N2k7pG3btm1ucyLZLreQ2+xxkHk74LUtiYZIT5KeK6HX1dvRQNQ+CTslY6TjIdvgfiCQ8X3yySfNvFzXDiZ5XdjsNvt537NnT+L2aJs8XxrqSp5bwggoH0UPI1nWYq50D8QuRDY5HCVt9tTbMLLJp3X9kl4eS66iJI/bPoQo9BCR0MN0NrmO9ruPWSe3MCr7MJtOhYSRO352fy75+lTScyX0vpJCzX0cbhjZh+Xcfvu67jjopN9z2c+77qEmTXpbSffrPncA/FX0MEr6tO1+snXn3fWlrZAwkvWWLVvmNkc7duyI70P2dOzDUGLevHkmMJL2jOSTvb1nJIetbHK78j2RzhdKHqd8z2HvZcgeQyFhpPN6eNDuz0X68v0Bgxy2THqutF/0JYzcIJbxle+ZhH1dmf/444/tVTPYz7vs9bqPwybPr/sn63K/hBFQPooeRkIKR6HfGcm8/afG77//fkYRzhdGy5cvN+vahUj3IrTQHT9+3Czr90L6nZEU9lzfGcn3O0I/kWu/fM8ky1999ZVZlnCZM2eOmReffPKJ6ZfvMFyyjXaw6R95FBpGeghSSZC569u++eYb02//abd+h2N/5yPLPX1nZJPlfGFkr6/jKc+BsK8rj8te1/1+SZ53PbwnpE/+0EXpWAv9vkmDXm+LMALKR0nCKN9f0wktrPLdw+eff56xrgSLFG751C7yhZGQT/j29WWy/+9IyBffdr/9F3E9/TWd+w++9p6NsP+aLqnfZq8nQSaf+O+//37T5xZyXd/+B2HZ69Dry96Gu74raWzcPYhC/prOJsv5wkieL/v+ZHxV0nXtdVtaWuI+/dCg96/BZk/2WMt17T75fzPCCCgf/Q6jgUzDCIXRMAKA3iKM8iCMeocwAtBXhFEehFHvEEYA+oowAgCkjjACAKSOMAIApI4wAgCkjjACAKSOMAIApI4wAgCkjjACAKSOMAIApI4wQkkd/L8f3KZEZ599dtbkev31192mWNL6r732mmm3fzE+bZ91HHCb8pIfg73ooouiUaNGxb9+3l933nmnOcNyknxjbDv33HPdJqBfCCOUzMq3t0fTnvqL25zX1KlT3aZYUuAot2/z5s3R/v37zbwU9Hy3+1s6YdLvoyV/esttTnTbbbdF119/fbx8wQUXWL19ly+M3HHMhTBCsRFGKBkJov6EkRTGCy+8MJo4cWJ04MABs6znvpL5sWPHRuecc068bJMwkvNPuVasWBFVVlbG6y9cuNDsdciy9Ilbb73V3K+uI6fB0Pu7+uqr49vqCwkjmQoh93nkyBG32ZwwUrZBHreeHFHG6PzzzzfXkTG5+OKLo+rqatN31VVXxdso7DCSNrmejIOO8bhx47L6xGWXXWbaZCKMUGyEEYpOQ8idCqFhNHPmzLhNzswr3MARWhST+rZt2xYXTz3E5RZRCRg1evRoczl9+nRz+eWXX5qT+Nm3fc8998TzvaEhZE+/m/O4u1qGpG0SEkTqiiuuMJe6XRI0Sq+v2yV7iPJjthpGdrBeeumlGddJ6rOfE3ccgf4ijFASdgit+ut2tzsnDSN7D+mPf/yjOQmgFko5AaJ80n/nnXdyhtGkSZMylrW/pqYmo92+Hy3sejJH2SvZsGFD1m331T/deFe/9ox27txpziJsb4MGp7YlhdF1110Xt0m/hpGGlM0NMJt9kkvCCMVGGKEk+rJXJDQcvv322+jGG28081og9fLuu+82p36Xs8G6fUoCS/YgZG/glVdeiaZNm2ba5RCW7CXJ4T4p9LrXtHLlyqxDfnqYS66r4ebeT2+4e0Y9kW3Qx2eH8ciRI80Zc2Xb3JBNCiO5lHWnTJlibkfDaNeuXdGcOXMS183VJ9/Dbdq0iTBC0RFGKLqvD38f7fvq19Ol/2nLbqvXf3ZBL6alr6yP58/955+/6/ktuHuDgI8II8BRqjByfduZ/ccJpUAYoRwQRgCA1BFGAIDUEUYAgNQRRgCA1BFGAIDUEUYAgNQRRgCA1BFGAIDUEUYAgNQRRgCA1BUtjORcKC0tLRltJ5zw883LZWdnZ0YfAACqaGG0aNGi6OWXX44GDx5sljs6OqLGxkYzX19fH9XW1lprAwDwq6KF0fjx4+N52RNqamoyZ8gUMm+fEAwAAFvRwkjOr6IkjPqyZ6SH9QAAYSla9a+oqIjnNVTq6urMpfyEfUNDQ9yfC2EEAGEqavWXM1DKpJqbm03AyBkrC0EYAUCYvKr+hBEAhMmr6k8YAUCYvKr+hBEAhMmr6u9jGP3hxf92m5Bg9pr/cZuQ4IV3d7pNSNDU+vO/hSAcXlV/H8No2lN/cZuQgHEqDONUGMapMHeu/q9o2wAJbq+qvy9htPlv/2veDO70TvPnTM7kjhHjlDy5Y8Q4JU83P/OfWeO0bmtz1nqhT/Ne+WvWOP3Ls2+4pays+FH9f+FLGCn3yWbKNb2W0MaUNT2Z0MaUPf17QhtT3mkg8Kr6+xhGH+/7csA82aUi4/PJ5x2MUw9kfDZ+2so49eDf/mN9tPrdnYxTD97avjda8Od3B8w4eVX9fQsjoFS+OnzEbUKC1e/scJvwi793fBvPP7thm9VTnryq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAISp6NXfDpRhw4ZFw4cPj0aMGGGtkRthBABhKmr1nzdvXjRjxgwz39XVFa1Zs8bML1q0KJo1a5a9aiLCCADCVNTqX1VVFYdRS0uLmURTU1NUWVlpr5qIMAKAMBWt+sshOaFhJAHU3t4ezyeFkYRPvkmux8TExMRUXlNfFCWMPv30U/O9kEyDBw82l/Zhurlz53KYDgCQU9Grv+4ZiSFDhvAHDACAHnlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAiTV9WfMAKAMHlV/QkjAAhT0ar/vHnzor1790Y7d+6Mli9fbto0XOSys7PTXj0RYQQAYSp69e/u7o6mTZsWdXR0RI2Njaatvr4+qq2tzVwxAWEEAGEqavV/++23o0GDBkXr16+Pmpqaovb2dtMu85WVlc7a2QgjAAhTSaq/hAp7RgCAQhWt+k+ePDlqa2szU3V1tWnjOyMAQCGKWv1HjhxpJtXc3GwCRgKqEIQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAITJq+pPGAFAmLyq/oQRAISpaNX/hhtuiNra2qLDhw9Ho0aNMm0aLnLZ2dlpr56IMAKAMJWk+kuodHR0RI2NjWa5vr4+qq2tzVwpAWEEAGEqevU/dOiQ2UtqamqK2tvbTZvMV1ZWOmtmI4wAIExFrf4tLS3RmDFjzHxra6uZhIRRVVWVvaoh4ZNvkusxMTExMZXX1BdFC6NXX301Wrp0aUZbXV2duaypqYkaGhoy+pKwZwQAYSpK9e/q6sraqxHNzc1mXv6woRCEEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEyavqTxgBQJi8qv6EEQCEqejVv6KiIp5vbm42AdPW1matkRthBABhKmr1lzCxA6Wurs5c1tTURA0NDXF7LoQRAISp6NVfA6WlpcVMoqmpKaqsrLRXS0QYAUCYil79NVAkgNrb2+N5wggAkEvRq78GSldXV7RmzRozP3fu3GjWrFn2aokIIwAIU9Grvx0oQ4YMiYYPHx6NGDHCWiM3wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9SeMACBMXlV/wggAwuRV9fcxjHx8TD5inAD0R0kriBYouezs7HR6s/lY0Hx8TD5inArz6Etvuk1IsKX5724TBriSVZCOjo6osbHRzNfX10e1tbWZKyTwsaD5+Jh8xDgV5oRJv3ebkIBxKszlf3gs+vBvrW5zWSpZBWlqaora29vj+crKSmeNbD4VtJMn/6t5Q8hjMpdMydPvfrlknJiYUp1e2PCBW8bKSsmqf2trq5mEhFFVVZWzxs/hw8TExMQ0sKa+6Nu1ClRXV2cua2pqooaGBqe3PPR1YEPDOAHoj5JWkObmZlOk2tra3K6yQZEtDOMEoD+oID2gyBaGcQLQH1QQAEDqCCMAQOoIIwBA6ggjAEDqCCMAQOqCDqMlS5bk/M08/cUI+fN0eznJjBkz3KayIf+Q7P4l3PDhw017oQoZo54cPXo0/sUOX8k4HTt2LF6eNm2aeQ0VSv/FoTfXscn4yGOYPXu22+UVeYxbtmyJl2W+N6+NH374wVzKz4j1RXd3dzRo0CDvx2n8+PFmrPbs2eN2JcpXZ9w6NmTIkIx/Qi1kLHvzHJUCYZQjjJQ8qT3J9yLxnYTOmWeeGa1ZsyZuGzduXK/CqJAxykfu+8QTTyyLMJo6dWq8LOPWm2Dp75u9urraXO7duzd67733nF5/yDiddNJJ8bI8t73Z9v6+n/TDlfwCzCmnnOL0+kHGRN1111091qF85L3qXr8v78nePEelQBj940mUywkTJpg2fSHrE6NPqi5Lv3zClU9fum5/3zxp0t8N1G3ZtWtXtH//ftO+e/fuuH3EiBHmcvLkyWb7ZdK+pDE6fPiwGSN908knVe1z3zjC/i1DX+mnTCGf3vft2xeHkbZfe+21Zi9vw4YN0apVq6Ljx49njY99Hfd1p5cyXrk+EMivmch9+0q2wf5h5AULFsTbLtslY/LSSy9FmzdvNq+x+fPnmz59jen7ST/Ny/gNGzbMzNvjJK8vGT9tc5166qnR0qVL3WYvXHnllSaEbLLd+nqw3y8yXtqvbbLtEydOjLq6unoVRjpWOp76frbrWVrSvfeU2WGk9AnJFUZCio28yHXdgRBGM2fONMsVFRUmFHSP6fTTTzdFQg7dSXGQbZZlmYYOHWqu446R/aKWeTto1q9fn/XGEeUSRhIEcqjukksuMW3y2pFlGQsdF3k9yJ6BLp911lkZPxbsBpjOy7hoAZZfvU8Ko5aWlrhg+Uq2RcJa9t7Wrl1r2uzXho6LvG7kNabL+hpLCiN9bejt2GGXq4hK4OXq84W+p6Sm2HVE34P249d+HQNZR9dz31O5wsgdW/v2L7/88ng+DX4/UyXWlzCS/jFjxpg9iIEURlL8pNCNHj06foGfdtpp0Y4dOzLWT3pzJ42RcsNo48aNWW8cUS5hJJ8gV6xYEe/xyWtHPp0uW7YsY137MIzqTRgdOHAgK4x8+PRaCH2M8lqSsBG67e4PJstrzOUWzL6GkchVlNOmeyZCPszIayLtMCrkND+llPtZDEBfwkiKjBSFnTt3DqgwErJthw4dil/g27dvj7dRvkeST7uTJk0yf7Bw5MiRuM8dI7fIioFymE4v9Qt6N1jk0IscenrjjTeixYsXm9eKfOqXy57CyL4cPHhwVhjpGPpOt0GCRv7IQ+i2yzbI62jr1q1mrOQ1dscdd5g+fY25BTMpjOQ+ZEzlcJc9jnafjL+vY3beeedFCxcuNPOyTfKekO2+6aabTJv9flH5wsj9/c9Cw+j222+PPvvsMy8+6KR77wiOHfzITQqM7K2iZ2kX0WIp5w+1xTAwnkV4TwqGfCcgn/iRm4yT7EkNlAJbKnKYS15PMk7btm1zu8sSYQQAQMoIIwBA6ggjAEDqCCMAQOoIIwBA6ggjAEDqCCMAQOoIIwBA6ggjAEDqCCMAQOoIIwBA6ggjAEDqCCMAQOoII+AfzjjjDPML0HJ20FKRc9a4v8Yt5/vpzWk19FTV7u0A5Y5XNIJnF3Y9MV4pSBhNmTLFnNlTyBli5UyovQkjPbEaMNAQRgienFVz3bp1GW1yxtEJEyaYeQ0rvbTPSqtnIdWzdMr19JTj7qnH9bTiU6dONct1dXXRvn37TBgl3Z88rlWrVkXHjx+PKioqTJt7Nl25lLN8fvDBB+Z06AcPHsw4W6h7tljAV4QR8AvZK5Li/tFHHyWe6EyDIFcYuevV1tbGbULDSEOqurraXEoYSUDJSfVkGjp0qGnXE+3ZJ9tLCiMlj8G+TzlTLGGEckEYIXi33HJLxrIU/FKG0cyZM83yxo0bzaWE0TXXXGOvalRVVblNvQqjAwcOEEYoG4QRgicFffPmzWb+5ptvNt8Z2YfNdE9Gg0BCZfr06ebwmVy3t2EkdO9HSBhJ39ixY82yfZhu8eLFUXd3d9x28sknZ6zjhpF9mE5O8U4YoVwQRsAAJUEkh+qAckAYAQPI0aNH4++a7L0mwHe8WgEAqSOMAACpI4wAAKkjjAAAqSOMAACpI4wAAKkjjAAAqSOMAACpI4wAAKkjjAAAqSOMAACpI4wAAKkjjAAAqft/+RXeLearZbIAAAAASUVORK5CYII=>