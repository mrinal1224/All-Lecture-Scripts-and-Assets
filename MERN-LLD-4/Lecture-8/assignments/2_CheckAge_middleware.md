### Problem Statement:
You need to develop a middleware for an Express.js application that validates the query parameter `age` for a specific route. The route `/check-age` should only process requests where the `age` parameter is a number between 18 and 65. If the age is not within this range, or if it's not provided, the middleware should respond with an appropriate error message.

### Requirements:
1. Set up a basic Express.js server.
2. Implement middleware that checks the `age` query parameter for the `/check-age` route.
3. The middleware should verify that:
   - The `age` is a number.
   - The `age` is between 18 and 65, inclusive.
4. If the conditions are met, respond with `{ message: "Age is within the required range." }`.
5. If the conditions are not met, respond with an error message stating `"Invalid age. Age must be a number between 18 and 65."`.

### Code Stub (Boilerplate):
```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to validate age
function validateAge(req, res, next) {
    // Your code here
}

// Route that requires age validation
app.get('/check-age', validateAge, (req, res) => {
    res.json({ message: "Age is within the required range." });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

### Hints:
1. Use `req.query` to access query parameters in Express.js.
2. Convert the `age` parameter to a number to verify it's numeric and check its range.
3. Use `isNaN()` to check if the conversion to a number fails.

### Solution Approach:
1. Create the basic Express server setup and install Express if not already installed.
2. Write the `validateAge` middleware:
   - Extract the `age` from `req.query`.
   - Convert `age` to a number and check if it's within the specified range.
   - Respond with an error message if the validation fails.
   - Use `next()` to continue to the route handler if the validation succeeds.
3. Define the `/check-age` route to use the middleware and return a success message.

### Complete Solution:
```javascript
const express = require('express');
const app = express();
const port = 3000;

function validateAge(req, res, next) {
    const age = Number(req.query.age);
    if (isNaN(age) || age < 18 || age > 65) {
        return res.status(400).json({ error: "Invalid age. Age must be a number between 18 and 65." });
    }
    next();
}

app.get('/check-age', validateAge, (req, res) => {
    res.json({ message: "Age is within the required range." });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
```

### Test Cases:
1. **Test with No Age**:
   - Request: GET `/check-age`
   - Expected: 400 `{ error: "Invalid age. Age must be a number between 18 and 65." }`

2. **Test with Invalid Age (e.g., 17 or 66)**:
   - Request: GET `/check-age?age=17`
   - Expected: 400 `{ error: "Invalid age. Age must be a number between 18 and 65." }`
   - Request: GET `/check-age?age=66`
   - Expected: 400 `{ error: "Invalid age. Age must be a number between 18 and 65." }`

3. **Test with Valid Age (e.g., 25)**:
   - Request: GET `/check-age?age=25`
   - Expected: 200 `{ message: "Age is within the required range." }`

This question provides a solid introduction to writing middleware in Express.js, focusing on basic validation logic and error handling.