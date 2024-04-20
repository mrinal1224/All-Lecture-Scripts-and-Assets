### Coding Question: Secure User Registration System Using bcrypt and Express

#### Problem Statement:
In this coding challenge, you will create a secure user registration backend using Express.js and bcrypt. The goal is to safely store user passwords in a database by hashing them before storage. This ensures that even if the data is compromised, the actual passwords remain protected.

#### Requirements:
1. Set up an Express server.
2. Create an endpoint `/register` to handle POST requests for user registration.
3. Use `express.json()` middleware to parse the JSON body of requests.
4. Use bcrypt to hash passwords before saving them.
5. Store user data in a simple in-memory array (no actual database required for this exercise).
6. Return appropriate responses to the client based on the success or failure of the registration process.

#### Code Stub (Boilerplate):
```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json()); // Middleware for parsing application/json

const users = []; // In-memory storage for users

app.post('/register', async (req, res) => {
    // Your code goes here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

#### Hints:
1. Use `bcrypt.hash()` to hash the password. The function is asynchronous and returns a promise.
2. Make sure to catch and handle any errors during the hashing process.
3. Validate the incoming data to ensure that the username and password fields are not empty before proceeding with hashing and storage.

#### Solution Approach:
1. Set up the Express server with the necessary middleware.
2. Implement the `/register` endpoint to accept username and password from the request body.
3. Validate the received data.
4. Use bcrypt to hash the received password.
5. Store the username and hashed password in the `users` array.
6. Send a success response to the client if all steps are successful.
7. Handle possible errors and send appropriate error responses.

#### Complete Solution:
```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json()); // Middleware for parsing application/json

const users = []; // In-memory storage for users

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ message: 'Username and password are required' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = { username, password: hashedPassword };
        users.push(user);
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

#### Test Cases:
- **Test Case 1:** Send a POST request to `/register` with both username and password.
  - Expected: HTTP 201 status code and message "User registered successfully".
- **Test Case 2:** Send a POST request with an empty username or password.
  - Expected: HTTP 400 status code and error message indicating missing fields.
- **Test Case 3:** Send a POST request with extremely long username or password.
  - Expected: Successful registration or appropriate handling of data limits.

