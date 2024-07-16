### JavaScript Fundamentals MCQs

#### Question 1: Hoisting
```javascript
console.log(x);
var x = 5;
function foo() {
  console.log(x);
  var x = 10;
  console.log(x);
}
foo();
```
What will be the output of the above code?
A) `undefined, 5, 10`  
B) `5, 10, 10`  
C) `undefined, undefined, 10`  
D) `undefined, 10, 10`

**Correct Answer: D) `undefined, 10, 10`**  
**Explanation:** 
- The variable `x` is hoisted and initialized with `undefined` before any code is executed.
- The first `console.log(x)` outputs `undefined` because `x` is declared but not yet assigned.
- Inside the function `foo`, `x` is hoisted again and initialized with `undefined`, so the second `console.log(x)` outputs `undefined`.
- After assigning `x = 10`, the third `console.log(x)` outputs `10`.

#### Question 2: Lexical Scope
```javascript
var x = 10;
function foo() {
  var y = 20;
  function bar() {
    console.log(x + y);
  }
  bar();
}
foo();
```
What will be the output of the above code?
A) `30`  
B) `undefined`  
C) `ReferenceError`  
D) `NaN`

**Correct Answer: A) `30`**  
**Explanation:** 
- Lexical scope means that `bar` has access to the variables of its parent scope `foo` and the global scope.
- `x` and `y` are accessible inside `bar`, so `x + y` results in `30`.

#### Question 3: Closures
```javascript
function outer() {
  var x = 10;
  return function inner(y) {
    return x + y;
  }
}
var closure = outer();
console.log(closure(5));
```
What will be the output of the above code?
A) `15`  
B) `10`  
C) `5`  
D) `undefined`

**Correct Answer: A) `15`**  
**Explanation:** 
- `inner` function forms a closure and retains access to `x` from the `outer` function's scope even after `outer` has finished executing.
- `closure(5)` returns `10 + 5`, which is `15`.

#### Question 4: Callbacks
```javascript
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'Alice';
  callback(name);
}

processUserInput(greeting);
```
What will be the output of the above code?
A) `Hello Alice`  
B) `Alice Hello`  
C) `undefined`  
D) `ReferenceError`

**Correct Answer: A) `Hello Alice`**  
**Explanation:** 
- `processUserInput` function takes `greeting` as a callback and executes it with the argument `name` which is `'Alice'`.
- The `greeting` function then prints `Hello Alice`.

#### Question 5: Higher Order Functions
```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

const double = multiplyBy(2);
console.log(double(5));
```
What will be the output of the above code?
A) `10`  
B) `25`  
C) `5`  
D) `2`

**Correct Answer: A) `10`**  
**Explanation:** 
- `multiplyBy` returns a function that multiplies its argument by `factor`.
- `double` is a function that multiplies its argument by `2`.
- `double(5)` returns `5 * 2`, which is `10`.

#### Question 6: Promises
```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve("Done!"); }, 1000);
});

promise.then(function(result) { console.log(result); });
```
What will be the output after 1 second?
A) `Done!`  
B) `undefined`  
C) `Error`  
D) `Promise { <state>: "fulfilled" }`

**Correct Answer: A) `Done!`**  
**Explanation:** 
- The promise is resolved after 1 second with the value `"Done!"`.
- The `.then` method logs the resolved value, which is `Done!`.

#### Question 7: Async/Await
```javascript
async function fetchData() {
  let response = await new Promise(function(resolve) {
    setTimeout(function() { resolve("Data fetched"); }, 1000);
  });
  console.log(response);
}

fetchData();
```
What will be the output after 1 second?
A) `Data fetched`  
B) `undefined`  
C) `Promise { <state>: "fulfilled" }`  
D) `Error`

**Correct Answer: A) `Data fetched`**  
**Explanation:** 
- The `fetchData` function is asynchronous and waits for the promise to resolve.
- After 1 second, the promise resolves with `"Data fetched"`, which is then logged.

#### Question 8: Hoisting with Functions
```javascript
console.log(foo());
function foo() {
  return "bar";
}
```
What will be the output of the above code?
A) `bar`  
B) `undefined`  
C) `ReferenceError`  
D) `TypeError`

**Correct Answer: A) `bar`**  
**Explanation:** 
- Function declarations are hoisted with their definitions.
- `foo` is available and returns `"bar"` when called.

#### Question 9: Lexical Scope and Closures
```javascript
let x = 1;

function outer() {
  let x = 2;
  function inner() {
    console.log(x);
  }
  return inner;
}

let fn = outer();
fn();
```
What will be the output of the above code?
A) `1`  
B) `2`  
C) `undefined`  
D) `ReferenceError`

**Correct Answer: B) `2`**  
**Explanation:** 
- `inner` function forms a closure and retains access to `x` from `outer` function's scope.
- `fn()` logs the `x` from the `outer` function, which is `2`.

#### Question 10: Async/Await with Error Handling
```javascript
async function fetchData() {
  try {
    let response = await new Promise(function(resolve, reject) {
      setTimeout(function() { reject("Error fetching data"); }, 1000);
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
```
What will be the output after 1 second?
A) `Error fetching data`  
B) `undefined`  
C) `Promise { <state>: "rejected" }`  
D) `Data fetched`

**Correct Answer: A) `Error fetching data`**  
**Explanation:** 
- The promise is rejected after 1 second with the value `"Error fetching data"`.
- The `catch` block catches the error and logs it.



11. **Question 1:**
   ```javascript
   <div id="parent">
     <button class="child">Button 1</button>
     <button class="child">Button 2</button>
   </div>
   ```
   What does the following JavaScript code do?
   ```javascript
   const parent = document.getElementById('parent');
   parent.addEventListener('click', function(event) {
     if (event.target.classList.contains('child')) {
       console.log(event.target.textContent);
     }
   });
   ```
   A. Logs "Button 1" or "Button 2" when respective buttons are clicked.  
   B. Logs "parent" when any part of the parent div is clicked.  
   C. Logs nothing because event delegation is not correctly implemented.  
   D. Throws an error because event.target is not defined.

   **Correct Answer:** A  
   **Explanation:** Event delegation is used to handle events from child elements by delegating the event listener to a parent element. The `event.target` identifies the child element clicked.

12. **Question 2:**
   ```javascript
   function throttle(func, limit) {
     let inThrottle;
     return function() {
       const context = this;
       const args = arguments;
       if (!inThrottle) {
         func.apply(context, args);
         inThrottle = true;
         setTimeout(() => inThrottle = false, limit);
       }
     }
   }
   
   const throttledFunc = throttle(() => console.log('Throttled'), 1000);
   ```
   What does `throttle` do in the above code?
   
   A. Limits the number of times `throttledFunc` can be called within 1 second.  
   B. Ensures `throttledFunc` is called every 1 second.  
   C. Executes `throttledFunc` immediately without any delay.  
   D. Delays the execution of `throttledFunc` indefinitely.

   **Correct Answer:** A  
   **Explanation:** The `throttle` function limits the rate at which `func` can be called by ensuring it's not called more than once every `limit` milliseconds.

13. **Question 3:**
   ```javascript
   localStorage.setItem('username', 'Alice');
   ```
   How can you retrieve the value of `username` from `localStorage`?
   
   A. `localStorage.get('username');`  
   B. `localStorage.username;`  
   C. `localStorage.getItem('username');`  
   D. `localStorage.fetch('username');`

   **Correct Answer:** C  
   **Explanation:** `localStorage.getItem('username')` retrieves the value associated with the key `'username'` from `localStorage`.

14. **Question 4:**
   ```javascript
   const container = document.getElementById('container');
   container.addEventListener('click', function(event) {
     event.stopPropagation();
     console.log('Clicked');
   });
   ```
   What happens when you click inside the `container` element multiple times?
   
   A. The console logs "Clicked" once.  
   B. The console logs "Clicked" for each click.  
   C. The event listener stops after the first click.  
   D. The event bubbles up to the parent elements.

   **Correct Answer:** A  
   **Explanation:** `event.stopPropagation()` stops the event from propagating up the DOM tree, so the event handler only logs "Clicked" once per click inside `container`.

15. **Question 5:**
   ```javascript
   const inputField = document.getElementById('searchInput');
   inputField.addEventListener('input', function(event) {
     debounceSearch(event.target.value);
   });
   
   function debounceSearch(query) {
     // Implementation of debounce logic
     console.log('Searching for:', query);
   }
   ```
   What does `debounceSearch` function do?
   
   A. Executes a search immediately on each input change.  
   B. Delays the search until a pause in input typing.  
   C. Prevents any input in the `searchInput` field.  
   D. Clears the input field after each search.

   **Correct Answer:** B  
   **Explanation:** The `debounceSearch` function delays the execution of the search until a pause in typing, improving performance by reducing the number of search executions.

16. **Question 6:**
   ```javascript
   const link = document.getElementById('myLink');
   link.addEventListener('click', function(event) {
     event.preventDefault();
     console.log('Link clicked');
   });
   ```
   What does `event.preventDefault()` do in this context?
   
   A. Stops the event from bubbling up to parent elements.  
   B. Prevents the link from being clicked.  
   C. Logs "Link clicked" to the console.  
   D. Reloads the page when the link is clicked.

   **Correct Answer:** B  
   **Explanation:** `event.preventDefault()` stops the default action of the event, in this case, preventing the link from navigating to another page.

17. **Question 7:**
   ```javascript
   const button = document.getElementById('myButton');
   button.addEventListener('click', function(event) {
     console.log('Button clicked');
   }, true);
   ```
   What does `true` as the third argument in `addEventListener` signify?
   
   A. Captures the event during the bubbling phase.  
   B. Uses event delegation.  
   C. Adds multiple event listeners.  
   D. Disables event propagation.

   **Correct Answer:** A  
   **Explanation:** The `true` parameter in `addEventListener` specifies that the event handler should be executed during the capturing phase of event propagation.

18. **Question 8:**
   ```javascript
   const container = document.getElementById('container');
   container.addEventListener('click', function(event) {
     console.log('Container clicked');
   });
   ```
   What happens when you click on a child element inside `container`?
   
   A. The child element's event handler executes first.  
   B. The container's event handler executes first.  
   C. The child element's event bubbles up to the container.  
   D. The container's event bubbles down to the child element.

   **Correct Answer:** A  
   **Explanation:** By default, events bubble up from the target element to its ancestors, so the child element's event handler executes first before bubbling up to the container.

19. **Question 9:**
   ```javascript
   const items = document.getElementsByClassName('item');
   for (let item of items) {
     item.addEventListener('click', function(event) {
       console.log('Item clicked');
     });
   }
   ```
   What does `getElementsByClassName` return?
   
   A. An array of elements with class 'item'.  
   B. A NodeList of elements with class 'item'.  
   C. The first element with class 'item'.  
   D. An object containing elements with class 'item'.

   **Correct Answer:** B  
   **Explanation:** `getElementsByClassName` returns a live NodeList of elements that have the specified class name 'item'.

20. **Question 10:**
    ```javascript
    const button = document.getElementById('myButton');
    button.onclick = function() {
      console.log('Button clicked');
    }
    ```
    What happens if you assign another function to `button.onclick` later in the code?
    
    A. Overwrites the existing click event handler.  
    B. Executes both event handlers sequentially.  
    C. Throws an error due to conflicting event handlers.  
    D. Appends the new event handler to the existing one.

    **Correct Answer:** A  
    **Explanation:** Assigning a new function to `button.onclick` overwrites the existing click event handler with the new one.

