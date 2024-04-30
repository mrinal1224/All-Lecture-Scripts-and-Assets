### Problem Statement:

You are tasked with developing a RESTful API for managing an online library system. This system will use the Express framework, MongoDB Atlas for storage, and will involve comprehensive data modeling for books and authors. The solution should cover the following requirements:

1. **Data Models:**
   - **Book:** Define a `Book` model with fields `title` (String), `author` (ObjectId, referencing `Author`), `year` (Number), and `genre` (String).
   - **Author:** Define an `Author` model with fields `name` (String), `birthdate` (Date), and `bio` (String).
   - **Relationships:** Each `Book` should reference an `Author` via an `ObjectId`.

2. **Routes and Endpoints:**
   - `GET /books`: Fetch a list of all books, optionally filtering by `genre`.
   - `POST /books`: Add a new book to the database. The request body should contain `title`, `author` (ID), `year`, and `genre`.
   - `GET /books/:id`: Fetch a single book by its ID, including its author's details.
   - `PUT /books/:id`: Update a book by its ID. The request body can contain any combination of `title`, `author`, `year`, or `genre`.
   - `DELETE /books/:id`: Delete a book by its ID.
   - `GET /authors`: Fetch a list of all authors.
   - `POST /authors`: Add a new author to the database. The request body should contain `name`, `birthdate`, and `bio`.
   - `GET /authors/:id`: Fetch a single author by their ID, including all books they've authored.

3. **Middleware:**
   - **Authentication:** Implement an authentication middleware that verifies an API key passed in the `Authorization` header. If the key is invalid or missing, respond with a `401 Unauthorized` status. The key can be hardcoded for simplicity (e.g., `"mysecretkey"`).
   - **Error Handling:** Implement a global error handler to catch any errors and respond with a `500 Internal Server Error` status, along with a descriptive message.

4. **Database:**
   - **MongoDB Atlas:** Use MongoDB Atlas for storing the books and authors.

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

// Define the Author schema and model
const authorSchema = new mongoose.Schema({
    name: String,
    birthdate: Date,
    bio: String,
});

const Author = mongoose.model('Author', authorSchema);

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    year: Number,
    genre: String,
});

const Book = mongoose.model('Book', bookSchema);

// Middleware for authentication
function authenticate(req, res, next) {
    // Implement authentication logic
    next();
}

// Routes for CRUD operations

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
    // Implement logic to fetch a single book by ID, including its author's details
});

// PUT /books/:id
app.put('/books/:id', authenticate, async (req, res, next) => {
    // Implement logic to update a book by ID
});

// DELETE /books/:id
app.delete('/books/:id', authenticate, async (req, res, next) => {
    // Implement logic to delete a book by ID
});

// GET /authors
app.get('/authors', authenticate, async (req, res, next) => {
    // Implement logic to fetch all authors
});

// POST /authors
app.post('/authors', authenticate, async (req, res, next) => {
    // Implement logic to add a new author
});

// GET /authors/:id
app.get('/authors/:id', authenticate, async (req, res, next) => {
    // Implement logic to fetch a single author by ID, including all books they've authored
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

2. **Data Modeling:**
   - **Book Schema:** Defines a book with `title`, `author`, `year`, and `genre`.
   - **Author Schema:** Defines an author with `name`, `birthdate`, and `bio`.
   - **Relationships:** `Book` schema references `Author` via an `ObjectId`.

3. **Authentication Middleware:** Check the API key in the request headers. If valid, allow the request to proceed; otherwise, respond with a `401 Unauthorized`.

4. **CRUD Routes:** Define CRUD routes:
   - **`GET /books`:** Fetches all books, optionally filtering by `genre`.
   - **`POST /books`:** Adds a new book to the database.
   - **`GET /books/:id`:** Fetches a specific book by its ID, including its author's details.
   - **`PUT /books/:id`:** Updates a book by its ID.
   - **`DELETE /books/:id`:** Deletes a book by its ID.
   - **`GET /authors`:** Fetches all authors.
   - **`POST /authors`:** Adds a new author to the database.
   - **`GET /authors/:id`:** Fetches a specific author by their ID, including all books they've authored.

5. **Error Handling:** Implement a global error handler to handle exceptions gracefully, returning a `500 Internal Server Error` status along with an error message.

### Hints:

1. **Relationships:** Ensure that `Book` references `Author` correctly.

2. **Author Information:** Populate the author field when fetching a book by its ID.

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

// Routes Implementation

// GET /books Implementation
app.get('/books', authenticate, async (req, res, next) => {
    try {
        const { genre } = req.query;
        const query = genre ? { genre } : {};
        const books = await Book.find(query).populate('author');
        res.json(books);
    } catch (error) {
        next(error);
    }
});

// POST /books Implementation
app.post('/books', authenticate, async (req, res, next) => {
    try {
        const { title, author, year, genre } = req.body;
        const book = new Book({ title, author, year, genre });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
});

// GET /books/:id Implementation
app.get('/books/:id', authenticate, async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id).populate('author');
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
        const { title, author, year, genre } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, year, genre }, { new: true });
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

// GET /authors Implementation
app.get('/authors', authenticate, async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        next(error);
    }
});

// POST /authors Implementation
app.post('/authors', authenticate, async (req, res, next) => {
    try {
        const { name, birthdate, bio } = req

.body;
        const author = new Author({ name, birthdate, bio });
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        next(error);
    }
});

// GET /authors/:id Implementation
app.get('/authors/:id', authenticate, async (req, res, next) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        const books = await Book.find({ author: req.params.id });
        res.json({ author, books });
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
   - **Expected Output:** A JSON array of all books, optionally filtered by `genre`.

2. **Add New Book:**
   - **Input:** `POST /books` with body `{"title": "1984", "author": "author_id", "year": 1949, "genre": "Dystopian"}`
   - **Expected Output:** JSON object of the newly added book.

3. **Fetch Single Book:**
   - **Input:** `GET /books/1` (assuming ID 1 exists)
   - **Expected Output:** JSON object of the book with ID 1, including its author's details, or `404` status if not found.

4. **Update Book:**
   - **Input:** `PUT /books/1` with body `{"title": "Animal Farm"}`
   - **Expected Output:** JSON object of the updated book with ID 1, or `404` status if not found.

5. **Delete Book:**
   - **Input:** `DELETE /books/1`
   - **Expected Output:** JSON object with a success message, or `404` status if not found.

6. **Fetch All Authors:**
   - **Input:** `GET /authors`
   - **Expected Output:** A JSON array of all authors.

7. **Add New Author:**
   - **Input:** `POST /authors` with body `{"name": "George Orwell", "birthdate": "1903-06-25", "bio": "British writer and journalist"}`
   - **Expected Output:** JSON object of the newly added author.

8. **Fetch Single Author:**
   - **Input:** `GET /authors/1`
   - **Expected Output:** JSON object of the author with ID 1, including all books they've authored.