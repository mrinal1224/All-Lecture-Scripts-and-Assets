### Problem Statement:

You are tasked with creating a RESTful API for a simple book management system using the Express framework, middleware for authentication, and MongoDB Atlas as the database backend. Your solution should cover the following requirements:

1. **Routes and Endpoints:**
   - `GET /books`: Fetch a list of all books in the database.
   - `POST /books`: Add a new book to the database. The request body should contain a JSON object with fields `title`, `author`, and `year`.
   - `GET /books/:id`: Fetch a single book by its ID.
   - `PUT /books/:id`: Update a book by its ID. The request body can contain any combination of `title`, `author`, and `year` fields.
   - `DELETE /books/:id`: Delete a book by its ID.

2. **Middleware:**
   - **Authentication:** Implement an authentication middleware that verifies an API key passed in the `Authorization` header. If the key is invalid or missing, respond with a `401 Unauthorized` status. The key can be hardcoded for simplicity (e.g., `"mysecretkey"`).
   - **Error Handling:** Implement a global error handler to catch any errors and respond with a `500 Internal Server Error` status, along with a descriptive message.

3. **Database:**
   - **MongoDB Atlas:** Use MongoDB Atlas for storing the books. Define a Mongoose schema for a `Book` with fields `title` (String), `author` (String), and `year` (Number).

### Code Stub:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Replace with your MongoDB Atlas connection string
const MONGO_URI = "your_mongodb_atlas_connection_string";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    year: Number,
});

const Book = mongoose.model('Book', bookSchema);

// Middleware for authentication
function authenticate(req, res, next) {
    // Implement authentication logic
    next();
}

// Routes for the CRUD operations

// GET /books
app.get('/books', authenticate, async (req, res, next) => {
    // Implement logic to fetch all books
});

// POST /books
app.post('/books', authenticate, async (req, res, next) => {
    // Implement logic to add a new book
});

// GET /books/:id
app.get('/books/:id', authenticate, async (req, res, next) => {
    // Implement logic to fetch a single book by ID
});

// PUT /books/:id
app.put('/books/:id', authenticate, async (req, res, next) => {
    // Implement logic to update a book by ID
});

// DELETE /books/:id
app.delete('/books/:id', authenticate, async (req, res, next) => {
    // Implement logic to delete a book by ID
});

// Global error handler
app.use((err, req, res, next) => {
    // Implement global error handling logic
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

### Solution Approach:

1. **Database Connection:** Connect to MongoDB Atlas using Mongoose.
  
2. **Mongoose Schema:** Define a `Book` schema with `title`, `author`, and `year` fields.

3. **Authentication Middleware:** Implement middleware to check the API key in the request headers. If valid, allow the request to proceed; otherwise, respond with a `401 Unauthorized`.

4. **CRUD Routes:** Define CRUD routes:
   - **`GET /books`:** Fetches all books from the database.
   - **`POST /books`:** Adds a new book to the database.
   - **`GET /books/:id`:** Fetches a specific book by its ID.
   - **`PUT /books/:id`:** Updates a book by its ID.
   - **`DELETE /books/:id`:** Deletes a book by its ID.

5. **Error Handling:** Implement a global error handler to handle exceptions gracefully, returning a `500 Internal Server Error` status along with an error message.

### Hints:

1. **Authentication:** For simplicity, you can hardcode the API key to "mysecretkey". Ensure every route checks this key.

2. **Error Handling:** Catch errors in each route's logic and pass them to the next middleware function.

3. **Testing:** Use tools like Postman or CURL to send requests to the API and check responses.

### Complete Solution:

```javascript
// Authentication Middleware Implementation
function authenticate(req, res, next) {
    const apiKey = req.headers.authorization;
    if (apiKey !== "mysecretkey") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}

// GET /books Implementation
app.get('/books', authenticate, async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        next(error);
    }
});

// POST /books Implementation
app.post('/books', authenticate, async (req, res, next) => {
    try {
        const { title, author, year } = req.body;
        const book = new Book({ title, author, year });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
});

// GET /books/:id Implementation
app.get('/books/:id', authenticate, async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (error) {
        next(error);
    }
});

// PUT /books/:id Implementation
app.put('/books/:id', authenticate, async (req, res, next) => {
    try {
        const { title, author, year } = req.body;
        const updatedBook = wait Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(updatedBook);
    } catch (error) {
        next(error);
    }
});

// DELETE /books/:id Implementation
app.delete('/books/:id', authenticate, async (req, res, next) => {
    try {
        const deletedBook = await Book.findByIdAndRemove(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        next(error);
    }
});

// Global Error Handler Implementation
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
```

### Test Cases:

1. **Fetch All Books:**
   - **Input:** `GET /books`
   - **Expected Output:** A JSON array of all books in the database.

2. **Add New Book:**
   - **Input:** `POST /books` with body `{"title": "1984", "author": "George Orwell", "year": 1949}`
   - **Expected Output:** JSON object of the newly added book.

3. **Fetch Single Book:**
   - **Input:** `GET /books/1` (assuming ID 1 exists)
   - **Expected Output:** JSON object of the book with ID 1, or `404` status if not found.

4. **Update Book:**
   - **Input:** `PUT /books/1` with body `{"title": "Animal Farm"}`
   - **Expected Output:** JSON object of the updated book with ID 1, or `404` status if not found.

5. **Delete Book:**
   - **Input:** `DELETE /books/1`
   - **Expected Output:** JSON object with a success message, or `404` status if not found.