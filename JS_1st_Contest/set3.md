1. **Question 1:**
   
   ```javascript
   function greet() {
       console.log(message);
       var message = 'Hello!';
   }
   
   greet();
   ```
   
   What will be logged to the console?
   
   A. `Hello!`
   
   B. `undefined`
   
   C. `ReferenceError`
   
   D. `null`
   
   **Correct Option: B**
   
   **Explanation:** 
   JavaScript variables declared with `var` are hoisted and initialized with `undefined` before the code runs. Therefore, `message` is hoisted, but not yet initialized at the `console.log()` statement, resulting in `undefined`.

2. **Question 2:**
   
   ```javascript
   var value = 10;
   function foo() {
       var value = 20;
       function bar() {
           console.log(value);
       }
       bar();
   }
   foo();
   ```
   
   What will be logged to the console?
   
   A. `10`
   
   B. `20`
   
   C. `undefined`
   
   D. `ReferenceError`
   
   **Correct Option: B**
   
   **Explanation:**
   JavaScript functions create a scope chain where inner functions have access to variables declared in outer scopes. Here, `bar()` logs the value of `value` from its immediate outer scope, which is `20`.

3. **Question 3:**
   
   ```javascript
   function counter() {
       var count = 0;
       return function() {
           return ++count;
       };
   }
   var increment = counter();
   console.log(increment());
   console.log(increment());
   ```
   
   What will be logged to the console?
   
   A. `1` and `2`
   
   B. `0` and `1`
   
   C. `1` and `1`
   
   D. `2` and `2`
   
   **Correct Option: A**
   
   **Explanation:**
   `counter()` returns a function that increments and returns `count`. Each call to `increment()` increases `count` which retains its value across invocations due to closure.

4. **Question 4:**
   
   ```javascript
   function processData(data, callback) {
       setTimeout(function() {
           callback(data * 2);
       }, 100);
   }
   
   var result = 0;
   processData(5, function(value) {
       result = value;
   });
   console.log(result);
   ```
   
   What will be logged to the console?
   
   A. `0`
   
   B. `5`
   
   C. `10`
   
   D. `undefined`
   
   **Correct Option: A**
   
   **Explanation:**
   The `console.log(result)` executes before the callback sets `result` to `value` (which is `10`), so `result` remains `0`.

5. **Question 5:**
   
   ```javascript
   function square(number) {
       return number * number;
   }
   
   function calculate(operation, value) {
       return operation(value);
   }
   
   var result = calculate(square, 4);
   ```
   
   What will be the value of `result`?
   
   A. `16`
   
   B. `8`
   
   C. `NaN`
   
   D. `TypeError`
   
   **Correct Option: A**
   
   **Explanation:**
   `calculate(square, 4)` calls `square(4)` which returns `16`, so `result` is `16`.

6. **Question 6:**
   
   ```javascript
   function fetchData() {
       return new Promise(function(resolve, reject) {
           setTimeout(function() {
               resolve('Data fetched successfully!');
           }, 200);
       });
   }
   
   fetchData().then(function(response) {
       console.log(response);
   });
   ```
   
   What will be logged to the console?
   
   A. `Data fetched successfully!`
   
   B. `Promise { <pending> }`
   
   C. `undefined`
   
   D. `Error`
   
   **Correct Option: A**
   
   **Explanation:**
   `fetchData()` returns a promise that resolves after 200ms with the message `'Data fetched successfully!'`, so `response` logs `'Data fetched successfully!'`.

7. **Question 7:**
   
   ```javascript
   async function getData() {
       return 'Async data!';
   }
   
   console.log(getData());
   ```
   
   What will `console.log(getData())` output?
   
   A. `Promise { 'Async data!' }`
   
   B. `Async data!`
   
   C. `undefined`
   
   D. `SyntaxError`
   
   **Correct Option: A**
   
   **Explanation:**
   `getData()` returns a promise (implicitly wrapped), which when resolved, will have the value `'Async data!'`.

8. **Question 8:**
   
   ```javascript
   async function fetchUserData() {
       let response = await fetch('https://api.example.com/user');
       return await response.json();
   }
   
   fetchUserData().then(function(data) {
       console.log(data.name);
   }).catch(function(error) {
       console.error(error);
   });
   ```
   
   What does `console.log(data.name)` print?
   
   A. `undefined`
   
   B. The name of the user fetched
   
   C. `Promise { <pending> }`
   
   D. `ReferenceError`
   
   **Correct Option: B**
   
   **Explanation:**
   `fetchUserData()` fetches data asynchronously and logs the `name` property of the fetched user data.

9. **Question 9:**
   
   ```javascript
   function wait(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }
   
   async function delay() {
       console.log('Start');
       await wait(200);
       console.log('Middle');
       await wait(200);
       console.log('End');
   }
   
   delay();
   ```
   
   What is the order of log messages?
   
   A. `Start`, `Middle`, `End`
   
   B. `Start`, `End`, `Middle`
   
   C. `Middle`, `Start`, `End`
   
   D. `End`, `Middle`, `Start`
   
   **Correct Option: A**
   
   **Explanation:**
   `delay()` uses `await` to pause execution of each `console.log()` until the `wait()` promise resolves, ensuring the logs occur in the order `Start`, `Middle`, `End`.

10. **Question 10:**
    
    ```javascript
    function fetchData(url, callback) {
        setTimeout(function() {
            callback('Data from ' + url);
        }, 300);
    }
    
    function processData(data) {
        console.log('Processing data:', data);
    }
    
    fetchData('https://api.example.com', processData);
    ```
    
    What will be logged to the console?
    
    A. `Processing data: Data from https://api.example.com`
    
    B. `Data from https://api.example.com`
    
    C. `undefined`
    
    D. `ReferenceError`
    
    **Correct Option: A**
    
    **Explanation:**
    `fetchData()` asynchronously fetches data and invokes `processData()` with the fetched data, logging `'Processing data: Data from https://api.example.com'`.

    Here are 10 MCQ questions on JavaScript fundamentals as requested:

**Question 11:**
```javascript
// Question: What will be logged when the button is clicked?
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('#myButton');
  button.addEventListener('click', function(event) {
    console.log(event.target.textContent);
  });
});

// Options:
// A) Nothing will be logged
// B) Undefined
// C) Error: Cannot read property 'textContent' of null
// D) The text content of the button element
```
**Correct Answer:** D) The text content of the button element.

**Explanation:** The event listener waits for the DOMContentLoaded event before attaching a click event listener to the button. When clicked, `event.target.textContent` will log the text content of the button.

**Question 12:**
```javascript
// Question: How can you fix the following code to prevent event bubbling?
document.querySelector('#parent').addEventListener('click', function(event) {
  console.log('Parent clicked');
  event.stopPropagation();
});

document.querySelector('#child').addEventListener('click', function(event) {
  console.log('Child clicked');
});
```
**Options:**
// A) Move `event.stopPropagation()` to the child event listener
// B) Remove `event.stopPropagation()`
// C) Replace `click` with `mousedown`
// D) Use `event.preventDefault()` instead of `event.stopPropagation()`

**Correct Answer:** A) Move `event.stopPropagation()` to the child event listener.

**Explanation:** `event.stopPropagation()` prevents further propagation of the current event in the capturing and bubbling phases. Placing it in the child event listener prevents the parent event handler from executing after the child is clicked.

**Question 13:**
```javascript
// Question: What does event delegation help with?
// Options:
// A) Reducing memory usage
// B) Handling events on dynamically added elements
// C) Preventing event bubbling
// D) None of the above
```
**Correct Answer:** B) Handling events on dynamically added elements.

**Explanation:** Event delegation allows handling events on parent elements for dynamically added child elements, reducing the need to attach event listeners to each child element individually.

**Question 14:**
```javascript
// Question: How can you implement debouncing in JavaScript?
// Options:
// A) setTimeout
// B) setInterval
// C) requestAnimationFrame
// D) None of the above
```
**Correct Answer:** A) setTimeout.

**Explanation:** Debouncing delays executing a function until after a certain amount of time has passed since the last time the function was invoked. `setTimeout` is commonly used to implement debouncing.

**Question 15:**
```javascript
// Question: What does event capturing refer to in JavaScript?
// Options:
// A) Propagation of events from parent to child elements
// B) Propagation of events from child to parent elements
// C) Execution of event listeners before bubbling phase
// D) None of the above
```
**Correct Answer:** C) Execution of event listeners before bubbling phase.

**Explanation:** Event capturing occurs in the first phase of event propagation, where events are captured from the outermost element to the target element, before the bubbling phase starts.

**Question 16:**
```javascript
// Question: How can you store data persistently in the browser using JavaScript?
// Options:
// A) Cookies
// B) Local Storage
// C) Session Storage
// D) All of the above
```
**Correct Answer:** D) All of the above.

**Explanation:** Cookies, Local Storage, and Session Storage are all methods for storing data persistently in the browser using JavaScript.

**Question 17:**
```javascript
// Question: Which method can be used to add a class to an element in JavaScript?
// Options:
// A) element.classList.add()
// B) element.className += ' new-class'
// C) element.setAttribute('class', 'new-class')
// D) All of the above
```
**Correct Answer:** D) All of the above.

**Explanation:** All listed methods can add a class to an element in JavaScript, but `element.classList.add()` is preferred for managing classes.

**Question 18:**
```javascript
// Question: How can you prevent default behavior in an event handler?
// Options:
// A) event.prevent()
// B) event.preventDefault()
// C) event.stopDefault()
// D) None of the above
```
**Correct Answer:** B) event.preventDefault().

**Explanation:** `event.preventDefault()` prevents the browser's default action associated with the event, such as submitting a form or following a link.

**Question 19:**
```javascript
// Question: What does throttling help with?
// Options:
// A) Preventing multiple rapid executions of a function
// B) Delaying the execution of a function until the next animation frame
// C) Limiting the number of event listeners on an element
// D) None of the above
```
**Correct Answer:** A) Preventing multiple rapid executions of a function.

**Explanation:** Throttling limits the rate at which a function is executed, ensuring it is not called more often than a specified delay.

**Question 20:**
```javascript
// Question: Which method is used to remove an event listener added with addEventListener?
// Options:
// A) element.removeEventListener()
// B) element.removeEvent()
// C) element.off()
// D) None of the above
```
**Correct Answer:** A) element.removeEventListener().

**Explanation:** `element.removeEventListener()` is used to remove an event listener previously added with `addEventListener`, preventing memory leaks and unwanted event handling.

These questions cover various aspects of JavaScript fundamentals related to the DOM, event handling, debouncing, throttling, and local storage, providing opportunities for deeper understanding and problem-solving.

