# SE 575 Final Project
## Collaborators
- Fnu Alisa
- Naijia Wang
- Saffat Hasan
- Zexi Yu

To run the project, under the root directory,

Use command :
```
make run
```

This will execute both run-server and run-client commands.
To view the process in action, simply navigate to localhost:8082.

To view the status of the containers, execute
```
make status
```

### Feature 1 - Register as a voter

To register for a voter, enter all the required information including game user name, nation, first name, last name, email address and hit Register button.

### Feature 2 - User role control
Use your registered game user name for login

### Feature 3 - Vote for a candidate
Pick your favorite player and enter the correct voterID to cast the vote

### Feature 4 - Avoid double voting 
After casting his or her vote, the voter is not allowed to log in with the username anymore.

### Feature 5 - Verify the vote
The user can check the public ID and voting result by entering the game user name.

### Feature 6 - Tally the vote
In the home page, hit the get poll standings and a pie chart of the current voting result will be shown.
