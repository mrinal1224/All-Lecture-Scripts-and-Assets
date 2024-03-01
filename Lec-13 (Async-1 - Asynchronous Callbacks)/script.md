# Full Stack LLD & Projects: JavaScript-14: Asynchronous Programming 1

---
title: Agenda
description: 
duration: 900
card_type: cue_card
---

- Synchronous and asynchronous programming
- Callbacks (setTimeout)
- Event loop Mechanisam
- Async function using inbuilt modules
- parallel and Serial Operations


---
title: Synchronous and asynchronous programming
description: 
duration: 900
card_type: cue_card
---

### Synchronous and Asynchronous Programming

Before directly jumping into the code , let's first understand what these two terms mean and let's relate it to real life


## Synchronous way of doing a task

Let's suppose I am teaching and we have around 2.5 hrs of this class and there are 100 students , Now as I am Teaching I encounter some doubts 
consider this thread as the whole timeline of my class

<img src='./thread.png'/>

Now I encounter some doubts in these time slots as shown below


<img src='./thread2.png'/>


Now if you see I only have time of 2.5 hrs to finish the content and now if I start taking doubts in between the class timeline I am actually making 97 other students wait to move forward as I am blocked at certain times with these doubts and in real I have wasted 20 mins of the alloted time

Do you think I should teach in this way?
It will ruin the experinene of most of the learners

Similary now Imagine the class timeline as a single theard and when your program runs , there is only one thread that will manage all the opertaions , so suppose your program has heavy operations to do like read a large file calling some external api to get data and stuff like these which can take a while , So what will happen is that when this heavy operations will come to execute in the thread they will block all the operations until their purpose is finished , Similary as a doubt can stop me from moving forward with the actual class content

<img src='./thread3.png'>

So, Now you get the idea that JS is single threaded everything executes here in just one thread and heavier operations can block the thread and will not let other services or functions execute until they have finished.

How to solve for this then? Let's try to solve this in such a way that whenever a doubt comes I will make the student wait until the whole class content of the class is finished and then at the end I can call the student back with his/her doubt and resolve it 

<img src='./thread4.png'>

Simple isn't it? That whenerver there are some heavy operations that will take time just address it and push it at the end and when all the other code has executed call them back and get the results at the end! So now the thread execution will not be blocked for any heavier opertions because we are saying that this will take time let's process it at the end and get done with all the code that are not heavy.


What If I tell you this is the whole Principle of Asynchronous Programming 

Asynchronous programming is a programming paradigm that allows tasks to be executed independently of the main program flow and at the end we call the tasks get the results and Voila!


Now as we have a very Basic Idea of the behaviour of these two programming techniques.

let's understand this with the help of writing some code


---
title: Synchronous and Asynchronous Code Examples
description: 
duration: 900
card_type: cue_card
---


Look at this code Snippet and tell me the output?

**Synchronous Code:**

```javascript
console.log("Start");

function syncFunction() {
  console.log("Hello");
}

syncFunction();

console.log("End");
```

**output**

Start
Hello
End

Perfect!

In synchronous code, each statement executes one after the other in a sequential manner. So, "Start" is logged, then "Hello" is logged, and finally "End" is logged.


**Note to Instructor** 

Explain in brief about the setTimeout method as most students aren't aware of what it does.

`setTimeout` is a JavaScript function used to execute a piece of code after a specified delay, measured in milliseconds. It allows you to schedule the execution of a function once, after the specified number of milliseconds have passed.

Here's how `setTimeout` works with a code example:

```javascript
// Define a function to be executed after a delay
function sayHello() {
  console.log("Hello!");
}

// Call setTimeout to schedule the execution of sayHello function after 2000 milliseconds (2 seconds)
setTimeout(sayHello, 2000);


// Output:
// (after 2 seconds)
// Hello!
```

In this example, the `sayHello` function is scheduled to be executed after a delay of 2000 milliseconds (2 seconds) using `setTimeout`. After the specified delay, the `sayHello` function is executed, printing "Hello!" to the console.


That's how the setTimeout works takes a callback executes it after a time period provided , Easy Peezy!

But this setTimeout is not only there to make delays , it's much more than that ,let's write some code and use setTimeout and see what it does

Now let's look this code Snippet

**Asynchronous Code:**

```javascript
console.log("Start");

setTimeout(function() {
  console.log("Hello");
}, 2000);

console.log("End");
```

In place of the syncFunction I have replaced it with a setTimeout 


Ask the learners to guess the output


and the output will be

Start
End
Hello (after 2 seconds)


What just Happened? 

In asynchronous code, `setTimeout` is a non-blocking function. It schedules a function to be executed after a specified delay and it will not block the main thread, As it will not block the same thread the program will continue to the next instruction . So, "Start" is logged, then "End" is logged, and after approximately 2 seconds, "Hello" is logged.

In synchronous code, execution happens in a predictable, blocking manner. Asynchronous code, on the other hand, allows non-blocking execution, where certain tasks can be delayed or executed independently of the main program flow.



But now , the main question is that how JS is managing all of these things? How was JS able to identify that setTimeout will run Asynchronusly? 


The answer is through it's Event Loop Mechanism

---
title: The Event Loop
description: 
duration: 900
card_type: cue_card
---


To understand the complete event loop mechanism we need to know 4 things as of now

- Call Stack
- Callback Queue
- Web/Node Apis
- Event Loop


<img src='./eventLoop1.png'>

Look at this diagram These are all the things that work togther to perform an asynchronous or non-blocking operation.

```javascript
console.log("Start");

setTimeout(function() {
  console.log("Hello");
}, 2000);

console.log("End");
```

We will take this code example only and let's do a dry run on how this code will work

Let's break the whole process step by step

**The Call Stack** - 

The code snippet you've provided is a simple JavaScript example demonstrating asynchronous execution using `setTimeout`. Here's how it operates, diagrammatically:

1. **Start of Execution**: The JavaScript engine starts running the script. The call stack and Web API environment are the primary areas of focus here.

2. **`console.log("Start")` Execution**: This line is executed immediately, printing "Start" to the console. It's placed on the call stack and then executed right away.

<img src='./first.png'>

<img src='./second.png'>



3. **`setTimeout` Function Call**: The `setTimeout` function is called with a callback function to be executed after 2 seconds. This call is placed on the call stack, and since `setTimeout` is a Web API, it's handed off to the browser environment to wait for the specified delay time (2000ms). The callback function is moved to the Web API environment, waiting for the timer to expire.

<img src='./third.png'>
<img src='./fourth.png'>



4. **`console.log("End")` Execution**: While the `setTimeout` callback is waiting, the execution continues, and `console.log("End")` is placed on the call stack and executed, printing "End" to the console.

<img src='./fifth.png'>



5. **Callback Execution**: After the 2-second delay, the callback function from `setTimeout` is moved to the Callback Queue.

<img src='./sixth.png'>



6. **Event Loop**: The Event Loop checks the Call Stack to see if it's empty (excluding the global execution context). Once it finds the Call Stack empty, it moves the callback function from the Callback Queue to the Call Stack.

<img src='./seventh.png'>



7. **`console.log("Hello")` Execution**: Finally, the callback function is executed, printing "Hello" to the console.


<img src='./eighth.png'>

Thus the Final Output becomes- 

Start
End
Hello


Below is a simplified diagrammatic representation of this process:

```
Call Stack                     Web APIs/NodeApis                 Callback Queue             Console
---------                      ---------                 --------------             -------
 |                              |                        |                           |
 | console.log("Start")         |                        |                        "Start"
 | -------------------------> Output                     |                           |
 |                              |                        |                           |
 | setTimeout(callback, 2000)  |                        |                           |
 |                              |---------------------->|                           |
 |                              |     (waits 2s)         |                           |
 | console.log("End")           |                        |                           |
 | -------------------------> Output                     |                        "End"
 |                              |                        |                           |
 |                              |                        | <-callback-               |
 |                              |                        |                           |
 | (empty, event loop checks)   |                        |                           |
 | <-------------------------- |                        |                        "Hello"
 |                              |                        |                           |
```

This represents the event-driven, non-blocking nature of JavaScript execution, where asynchronous callbacks are managed outside the main call stack to ensure the application doesn't block



---
title: Asynchronous Function using in-built modules
description: 
duration: 900
card_type: cue_card
---


### Explanation

Lets consider an example:

```javascript 
// Import the 'fs' module
const fs = require("fs");

console.log('Before'); // This will be printed first

// Read file synchronously (blocking)
let data1 = fs.readFileSync('f1.txt'); // The execution is blocked until the file is read

console.log('This is File 1 data -> ' + data1); // This is printed after the file is read

// Note: Since this code is synchronous, it blocks the execution until the file is read completely.
```

In this code:

* The `fs` module is imported using require("fs").
* `console.log('Before')` is executed first and printed to the console.
* `fs.readFileSync('f1.txt')` reads the contents of `f1.txt` synchronously (blocking). This means the code execution waits until the file is read completely before moving to the next line.
* Once the file is read, `console.log('This is File 1 data -> ' + data1)` is executed and printed to the console.

 Here's how you can complete the asynchronous file reading:
 
```javascript 
// Import the 'fs' module
const fs = require("fs");

console.log('Before'); // This will be printed first

// Read file asynchronously (non-blocking)
fs.readFile('f1.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  
  console.log('This is File 1 data -> ' + data); // This is printed when the file is read
});

console.log('After'); // This will be printed before the file is read
```

In this code:

* `console.log('Before')` is executed first and printed to the console.
* `fs.readFile('f1.txt', (err, data2) => {...}` reads the contents of f1.txt asynchronously. The callback function `(err, data2) => {...}` will be executed once the file is read or if an error occurs during reading.
* Inside the callback, there's error handling `(if (err) {...})` to handle any errors that might occur during file reading.
* If no errors occur, `console.log('This is File 2 data -> ' + data2)` is executed when the file is read, and the file contents are printed to the console.
* Finally, `console.log('After')` is executed, which is printed before the file reading is complete.


---
title: Event Loop and Concurrent asynchronous operations 
description: 
duration: 900
card_type: cue_card
---

Now lets take three files and let's see some interesting things

```javascript 
// Import the 'fs' module
const fs = require("fs");

console.log('Before'); // This will be printed first

// Read file asynchronously (non-blocking)
fs.readFile('f1.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  
  console.log('This is File 1 data -> ' + data); // This is printed when the file is read
});

fs.readFile('f2.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  
  console.log('This is File 2 data -> ' + data); // This is printed when the file is read
})


fs.readFile('f3.txt', (err, data) => {
  if (err) {
    console.error('An error occurred:', err);
    return;
  }
  
  console.log('This is File 3 data -> ' + data); // This is printed when the file is read
})

console.log('After'); // This will be printed before the file is read
```


You will see the output as


- Before
- After

but the files will be read in random order
sometimes you will see F1 F2 F3 , sometimes it will be F3 F1 F2 and the order here can be anything!

Give learners time to run this code and see the behaviour

Now why is this happeining?

Again the Event Loop Comes into the Picture
Event Loop and the Callback Queue: Once the asynchronous operation is initiated, Node.js registers a callback function to be called when the operation is complete (i.e., when the file has been read). This callback function is not executed immediately but is placed in the callback queue. The event loop continuously checks this queue to see if there are any callbacks that are ready to be executed.

Execution of Callbacks: The event loop follows the "first in, first out" (FIFO) principle for the callback queue. However, the order in which callbacks are added to the queue depends on several factors, including the time it takes for the asynchronous operation to complete. This timing can vary due to differences in file sizes, disk speed, system load, etc. As a result, even if you initiate file read operations in a specific order, their callbacks might be placed in the queue in a different order, depending on how quickly each operation completes.

Callback Execution and Apparent "Disorder": The event loop takes callbacks from the queue and executes them as soon as the call stack is clear and they are ready to run. Because the completion time of each read operation can vary, the callbacks may not execute in the order you initiated the read operations. This is why you might observe what seems to be a lack of order in the way files are processed when using asynchronous fs functions.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/453/original/Screenshot_2023-09-20_151611.png?1695203184)

and this is what we call as Concurrent Operations in Node js , Some People may call it parallel but the correct word to describe this is concurrent behaviour

Explain a little about parallel and concurrent Behaviour

**Concurrent Execution**
Concurrency refers to the ability of an application to make progress on multiple tasks at the same time without necessarily completing any single task before moving on to the next one. It's about dealing with lots of things at once. In the context of Node.js, concurrency is achieved through its event-driven, non-blocking I/O model. The system can handle multiple I/O operations by starting an operation and then moving on to another operation before the first one finishes. The actual I/O operations (like file reads) might be handled by the system's I/O mechanisms outside of the Node.js process, and Node.js can register callbacks to be executed when these operations complete. However, the JavaScript code in a Node.js application runs on a single thread, and the event loop handles callbacks one at a time, in an ordered queue.

Imagine a restaurant kitchen with a single chef. This chef is responsible for preparing multiple dishes for various tables. The chef starts by preparing the first dish, but while waiting for the water to boil, they begin to chop vegetables for the second dish. Then, while the first dish is simmering and the vegetables for the second dish are chopped, the chef starts marinating the meat for the third dish.

In this scenario, the chef is working on multiple dishes concurrently. They are not working on more than one dish at the exact same moment but are making progress on several tasks by switching between them during waiting times. The chef efficiently manages their time and resources (the kitchen space and utensils), ensuring that all dishes move forward towards completion, even though at any given moment, they are actively working on only one task.

So this is the behaviour that node.js follows 

**Parallel Execution**
Parallelism, on the other hand, involves performing multiple operations at the exact same time, which usually requires multiple CPU cores. Parallel execution can significantly reduce the total time needed to complete multiple tasks because the tasks are literally running simultaneously.

Now, imagine a larger restaurant kitchen staffed by multiple chefs, each assigned to different tasks simultaneously. One chef is boiling water and cooking pasta, another is grilling chicken, and a third is preparing a salad. All these tasks are happening at the same time, parallel to each other.

This setup represents parallelism, where multiple processes (in this case, dish preparations) are truly happening simultaneously. The presence of multiple chefs allows the kitchen to significantly increase its output since many dishes can be fully prepared at the same time, reducing the total time needed to serve all tables.


Fewh!! 

Now we know How this thing is working


Now suppose there are certain task where order is important but node js is not caring about the order here 

For an example suppose I want to do sequntial file processing such as reading a configuration file before application startup or processing a series of data files where each file's output depends on the previous one.

So here the order is important and we need to think of a way that we can mainatin the order ad still keep the asynchronous behaviour alive!!

Sounds Like a Task no?

It's Super Simple , We just need to make each file reading call depenedent on the previous file's call and the problem will be solved


Let's see How can we achieve this

```javascript 
const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File data ->" + data);
  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File 2 data ->" + data);
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("The File 3 data ->" + data);
}

console.log("after");

```

You see in this code I am calling the cb of the first file for the first time and after it has been read then I am executing the second callback and after the second is read after that I am executing the third one!

and there you have it!

The output will be the data from 
F1 , F2 , and F3 and now this seqeunce will never change

So with this Now you know What is Synchronous and Asynchronous Programming How Asunchrnous Progamming works , How Event loop and the whole mechanism works and also how you can do concurrent and serial executions!









### Explanation

The event loop is a core concept in asynchronous programming, particularly in JavaScript. It manages the execution flow by processing tasks from the callback queue and placing them on the call stack for execution. This ensures that non-blocking operations, like I/O tasks, can be handled while allowing the program to continue running other tasks, effectively preventing the main execution thread from being blocked.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/454/original/Screenshot_2023-09-20_151701.png?1695203231)

**Note:** In an asynchronous environment, the order in which callbacks are executed depends on the completion of tasks and their placement in the callback queue, resulting in no fixed sequence of execution.

Parallel asynchronous operations involve executing multiple asynchronous tasks simultaneously, allowing for more efficient use of resources and reduced overall execution time. This is typically achieved using techniques like asynchronous functions, promises, or async/await in languages like JavaScript.

---





