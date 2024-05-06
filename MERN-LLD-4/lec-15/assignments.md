

1. What is Node.js primarily known for?

   A) Synchronous execution
   B) Non-blocking I/O
   C) Multi-threaded processing
   D) Blocking file operations

   **Correct Answer: B) Non-blocking I/O**

   Explanation: Node.js is known for its non-blocking I/O model, which allows it to handle concurrent operations efficiently without getting blocked.

2. Which of the following is NOT a core module in Node.js for handling I/O operations?

   A) fs
   B) http
   C) net
   D) io

   **Correct Answer: D) io**

   Explanation: The core modules fs, http, and net are used for handling file system operations, HTTP requests, and network operations, respectively. There is no core module named io in Node.js.

3. How does Node.js achieve non-blocking I/O?

   A) By using synchronous functions
   B) By using multi-threaded execution
   C) By utilizing event-driven architecture
   D) By employing blocking file operations

   **Correct Answer: C) By utilizing event-driven architecture**

   Explanation: Node.js utilizes an event-driven architecture where I/O operations are performed asynchronously, and callbacks are used to handle the completion of operations without blocking the execution thread.

4. Which of the following methods is used in Node.js for handling asynchronous operations?

   A) Promises
   B) Callbacks
   C) Generators
   D) Synchronous functions

   **Correct Answer: B) Callbacks**

   Explanation: Callbacks are commonly used in Node.js to handle asynchronous operations. They allow the program to continue execution while waiting for I/O operations to complete, thus enabling non-blocking behavior.

5. In Node.js, which module is used for creating a web server?

   A) fs
   B) http
   C) url
   D) querystring

   **Correct Answer: B) http**

   Explanation: The http module in Node.js provides functionality for creating HTTP servers and handling HTTP requests and responses.

6. Which event loop implementation does Node.js use?

   A) Single-threaded event loop
   B) Multi-threaded event loop
   C) Asynchronous event loop
   D) Synchronous event loop

   **Correct Answer: A) Single-threaded event loop**

   Explanation: Node.js uses a single-threaded event loop architecture, which allows it to handle multiple concurrent operations efficiently without the need for multi-threading.

7. What is the purpose of the 'require' function in Node.js?

   A) To import external libraries
   B) To define global variables
   C) To execute asynchronous functions
   D) To block the event loop

   **Correct Answer: A) To import external libraries**

   Explanation: The 'require' function in Node.js is used to import external modules or libraries into a Node.js application, allowing access to their functionality.

8. Which module in Node.js is used for handling file system operations?

   A) fs
   B) path
   C) http
   D) url

   **Correct Answer: A) fs**

   Explanation: The fs module in Node.js provides functionality for interacting with the file system, including reading from and writing to files, creating directories, and more.

9. Which of the following is NOT a characteristic of Node.js non-blocking I/O?

   A) Improved scalability
   B) Enhanced performance
   C) Sequential execution
   D) Efficient resource utilization

   **Correct Answer: C) Sequential execution**

   Explanation: Non-blocking I/O in Node.js allows for concurrent execution of operations, which means they do not occur sequentially. This characteristic leads to improved scalability, enhanced performance, and efficient resource utilization.

10. What is the main advantage of using non-blocking I/O in Node.js?

    A) Simplicity of code
    B) Compatibility with multi-threading
    C) Avoidance of callback hell
    D) Support for synchronous execution

    **Correct Answer: C) Avoidance of callback hell**

    Explanation: Non-blocking I/O in Node.js helps avoid callback hell, a situation where deeply nested callbacks can make the code difficult to read and maintain. It enables asynchronous programming patterns that make code more manageable and maintainable.