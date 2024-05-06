
1. What is the purpose of Node.js streams?
   A) To handle data one chunk at a time
   B) To execute synchronous code efficiently
   C) To manage browser-side events
   D) To interact with the DOM directly

   Correct Answer: A) To handle data one chunk at a time. Streams in Node.js provide an interface for reading from and writing to data sources in a continuous fashion, often used for handling large datasets or network communication.

2. Which component of Node.js handles asynchronous I/O operations?
   A) V8 engine
   B) Event loop
   C) Express framework
   D) MongoDB driver

   Correct Answer: B) Event loop. The event loop in Node.js is responsible for managing asynchronous operations, ensuring that I/O operations do not block the execution of other code.

3. What is libuv in Node.js?
   A) A JavaScript library for front-end development
   B) A module for creating custom events
   C) A C library responsible for asynchronous I/O operations
   D) A templating engine for server-side rendering

   Correct Answer: C) A C library responsible for asynchronous I/O operations. libuv is a multi-platform support library with a focus on asynchronous I/O. It provides core functionality for Node.js to achieve non-blocking I/O operations.

4. Which of the following statements best describes non-blocking I/O in Node.js?
   A) It allows I/O operations to block the event loop
   B) It ensures that I/O operations do not delay other operations
   C) It only supports synchronous I/O operations
   D) It forces the program to wait for I/O operations to complete before proceeding

   Correct Answer: B) It ensures that I/O operations do not delay other operations. Non-blocking I/O in Node.js allows the program to continue executing other tasks while waiting for I/O operations to complete.

5. What is the event loop in Node.js?
   A) A loop that iterates through an array of events
   B) A mechanism for handling CPU-intensive tasks
   C) A component that schedules asynchronous operations
   D) A data structure for storing event listeners

   Correct Answer: C) A component that schedules asynchronous operations. The event loop in Node.js is responsible for handling asynchronous operations by continuously monitoring the call stack and the callback queue.

6. How does the event loop handle I/O operations in Node.js?
   A) By executing them synchronously
   B) By delegating them to the operating system's thread pool
   C) By using worker threads for parallel execution
   D) By queuing them and executing when resources are available

   Correct Answer: D) By queuing them and executing when resources are available. The event loop queues I/O operations and executes them asynchronously when the resources become available, ensuring non-blocking behavior.

7. Which of the following is NOT a phase of the event loop in Node.js?
   A) Timers
   B) Callbacks
   C) I/O polling
   D) Blocking

   Correct Answer: D) Blocking. The event loop in Node.js consists of several phases such as timers, callbacks, and I/O polling, but "Blocking" is not one of them.

8. In Node.js streams, what is piping used for?
   A) Redirecting error messages
   B) Sending data between streams
   C) Modifying the behavior of streams
   D) Blocking the event loop

   Correct Answer: B) Sending data between streams. Piping in Node.js streams is a mechanism for transferring data from one stream to another, often used to simplify the process of consuming or transforming data.

9. Which of the following is an advantage of using streams in Node.js?
   A) Increased memory consumption
   B) Limited scalability
   C) Better performance with large datasets
   D) Incompatibility with external libraries

   Correct Answer: C) Better performance with large datasets. Streams in Node.js allow for efficient processing of large datasets by handling data in smaller, manageable chunks, leading to improved performance and reduced memory consumption.

10. What is the architecture of the event loop in Node.js?
    A) Single-threaded, event-driven architecture
    B) Multi-threaded, synchronous architecture
    C) Sequential, blocking architecture
    D) Hierarchical, parallel architecture

    Correct Answer: A) Single-threaded, event-driven architecture. Node.js follows a single-threaded, event-driven architecture where the event loop continuously monitors for events and executes callback functions asynchronously, making it efficient for handling concurrent I/O operations.

These questions cover various aspects of Node.js streams, libuv, non-blocking I/O, and event loop, along with explanations for the correct answers.