### Advanced JavaScript Fundamentals MCQs


1. **Question 1:**
   
   ```javascript
   <div id="container">
       <button class="btn">Button 1</button>
       <button class="btn">Button 2</button>
       <button class="btn">Button 3</button>
   </div>
   ```
   
   What will `console.log(event.target.innerText);` output when clicking any button inside `#container`?
   
   A) "Button 1", "Button 2", or "Button 3"  
   B) Error: `event` is not defined  
   C) Undefined  
   D) Null  

   **Correct Answer:** A) "Button 1", "Button 2", or "Button 3"
   
   **Explanation:** `event.target` refers to the element that triggered the event (in this case, a button), and `innerText` retrieves its text content.

2. **Question 2:**
   
   ```javascript
   const buttons = document.querySelectorAll('.btn');
   buttons.forEach(btn => {
       btn.addEventListener('click', function(event) {
           console.log(event.currentTarget.classList);
       });
   });
   ```
   
   What does `event.currentTarget.classList` return inside the click event listener?
   
   A) Array of class names of the clicked button  
   B) List of all classes in the document  
   C) Class list of the button that triggered the event  
   D) Empty array  

   **Correct Answer:** C) Class list of the button that triggered the event
   
   **Explanation:** `event.currentTarget` refers to the element to which the event listener is attached (`btn` in this case), and `classList` returns the list of classes of that element.

3. **Question 3:**
   
   ```javascript
   function handleClick(event) {
       const target = event.target.closest('.btn');
       if (target) {
           console.log(target.innerText);
       }
   }
   document.getElementById('container').addEventListener('click', handleClick);
   ```
   
   What does `event.target.closest('.btn')` do in the `handleClick` function?
   
   A) Finds the nearest parent with class `.btn`  
   B) Selects the first element with class `.btn`  
   C) Returns the clicked button  
   D) Returns null if the clicked element is not a button  

   **Correct Answer:** A) Finds the nearest parent with class `.btn`
   
   **Explanation:** `closest('.btn')` searches up the DOM tree from `event.target` to find the nearest ancestor that matches the selector `.btn`.

4. **Question 4:**
   
   ```javascript
   const container = document.getElementById('container');
   container.addEventListener('click', function(event) {
       console.log(event.stopPropagation());
   });
   ```
   
   What does `event.stopPropagation()` return inside the click event listener?
   
   A) Stops the event from propagating  
   B) Undefined  
   C) Null  
   D) Throws an error  

   **Correct Answer:** B) Undefined
   
   **Explanation:** `event.stopPropagation()` doesn't return a value; it simply stops the event from bubbling up the DOM tree.

5. **Question 5:**
   
   ```javascript
   let timeoutId;
   function debounce(func, delay) {
       clearTimeout(timeoutId);
       timeoutId = setTimeout(func, delay);
   }
   function handleInput() {
       console.log('Handling input...');
   }
   document.getElementById('inputField').addEventListener('input', debounce(handleInput, 300));
   ```
   
   What does `debounce(handleInput, 300)` achieve in this code snippet?
   
   A) Ensures `handleInput` is called every 300 milliseconds  
   B) Delays `handleInput` execution until 300 milliseconds after the last input  
   C) Prevents multiple listeners on `inputField`  
   D) Throws an error  

   **Correct Answer:** B) Delays `handleInput` execution until 300 milliseconds after the last input
   
   **Explanation:** `debounce` delays invoking `handleInput` until 300 milliseconds have passed since the last time it was called.

6. **Question 6:**
   
   ```javascript
   localStorage.setItem('name', 'John');
   console.log(localStorage.getItem('name'));
   ```
   
   What will `console.log(localStorage.getItem('name'));` output?
   
   A) "John"  
   B) Null  
   C) Undefined  
   D) Error: localStorage is not defined  

   **Correct Answer:** A) "John"
   
   **Explanation:** `localStorage` allows you to store key-value pairs in a web browser with no expiration date.

7. **Question 7:**
   
   ```javascript
   const elements = document.querySelectorAll('.item');
   elements.forEach(element => {
       element.addEventListener('click', function(event) {
           event.stopPropagation();
           console.log('Clicked', event.target.innerText);
       });
   });
   ```
   
   What happens when a user clicks on an element with class `.item`?
   
   A) The click event does not propagate to parent elements  
   B) All elements with class `.item` are logged to the console  
   C) The event handler is not triggered  
   D) Elements are removed from the DOM  

   **Correct Answer:** A) The click event does not propagate to parent elements
   
   **Explanation:** `event.stopPropagation()` stops the event from bubbling up the DOM tree, so parent elements do not receive the click event.

8. **Question 8:**
   
   ```javascript
   const throttledFunction = throttle(function() {
       console.log('Throttled function called');
   }, 1000);
   window.addEventListener('scroll', throttledFunction);
   ```
   
   What does `throttle` do in this code snippet?
   
   A) Executes the function immediately on scroll  
   B) Limits the rate at which the function can execute  
   C) Throws an error: throttle is not defined  
   D) Stops the scroll event propagation  

   **Correct Answer:** B) Limits the rate at which the function can execute
   
   **Explanation:** `throttle` ensures that the function passed to it (`console.log('Throttled function called');`) is not called more than once every 1000 milliseconds during scrolling.

9. **Question 9:**
   
   ```javascript
   const key = 'age';
   sessionStorage.setItem(key, 30);
   console.log(sessionStorage.getItem(key));
   ```
   
   What will `console.log(sessionStorage.getItem(key));` output?
   
   A) "30"  
   B) Null  
   C) Undefined  
   D) Error: sessionStorage is not defined  

   **Correct Answer:** A) "30"
   
   **Explanation:** `sessionStorage` is similar to `localStorage` but persists only for the duration of the page session.

10. **Question 10:**
    
    ```javascript
    function fixDOMIssue() {
        const elements = document.querySelectorAll('.container > .item');
        elements.forEach(element => {
            element.style.color = 'red';
        });
    }
    fixDOMIssue();
    ```
   
   What does `fixDOMIssue()` do in this code snippet?
   
   A) Changes the color of all elements with class `.item` to red  
   B) Throws an error: fixDOMIssue is not defined  
   C) Removes all elements with class `.container`  
   D) Adds a new element with class `.item`  

   **Correct Answer:** A) Changes the color of all elements with class `.item` to red
   
   **Explanation:** `querySelectorAll('.container > .item')` selects all elements with class `.item` that are direct children of elements with class `.container`, then changes their text color to red.

#### Question 11: Advanced Hoisting
```javascript
var x = 1;

(function() {
  console.log(x); // Line A
  var x = 2;
  console.log(x); // Line B
})();

console.log(x); // Line C
```
What will be the output of the above code?
A) `undefined, 2, 1`  
B) `1, 2, 1`  
C) `undefined, 2, 2`  
D) `2, 2, 1`

**Correct Answer: A) `undefined, 2, 1`**  
**Explanation:** 
- In the IIFE, `x` is hoisted and initialized with `undefined`. Thus, `console.log(x)` at Line A prints `undefined`.
- After assigning `x = 2`, `console.log(x)` at Line B prints `2`.
- The global `x` remains `1`, so `console.log(x)` at Line C prints `1`.

#### Question 12: Complex Closures
```javascript
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
log();
```
What will be the output of the above code?
A) `Count is 0`  
B) `Count is 1`  
C) `Count is 2`  
D) `ReferenceError`

**Correct Answer: A) `Count is 0`**  
**Explanation:** 
- The `message` variable is set when `createIncrement` is called and captures the initial `count` value, which is `0`.
- The `increment` function updates `count`, but `message` remains unchanged.
- `log` outputs the unchanged `message`, which is `Count is 0`.

#### Question 13: Promises with Multiple `then` Chaining
```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});

promise.then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result) {
  console.log(result);
  return result * 2;
}).then(function(result) {
  console.log(result);
});
```
What will be the output of the above code after 3 seconds?
A) `1, 2, 4`  
B) `1, 4, 8`  
C) `2, 4, 8`  
D) `1, 2, 8`

**Correct Answer: A) `1, 2, 4`**  
**Explanation:** 
- The promise resolves with `1` after 1 second.
- Each `then` method takes the previous result, logs it, and returns the result multiplied by `2`.
- The sequence of results is `1, 2, 4`.

#### Question 14: Async/Await with Nested Promises
```javascript
async function fetchData() {
  let data = await new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("data1");
    }, 1000);
  });

  let moreData = await new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(data + " data2");
    }, 1000);
  });

  return moreData;
}

fetchData().then(function(result) {
  console.log(result);
});
```
What will be the output after 2 seconds?
A) `data1 data2`  
B) `data2 data1`  
C) `data1`  
D) `data2`

**Correct Answer: A) `data1 data2`**  
**Explanation:** 
- The first promise resolves with `data1` after 1 second.
- The second promise appends `data2` to `data1` and resolves after another 1 second.
- The final output is `data1 data2`.

#### Question 15: Higher-Order Functions and Closures
```javascript
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter1.decrement());
console.log(counter2.increment());
```
What will be the output of the above code?
A) `1, 2, 1, 1, 2`  
B) `1, 2, 2, 1, 3`  
C) `1, 2, 1, 2, 2`  
D) `1, 2, 1, 1, 1`

**Correct Answer: A) `1, 2, 1, 1, 2`**  
**Explanation:** 
- `counter1` and `counter2` are separate instances with their own `count` variables.
- `counter1.increment()` is called twice, incrementing `counter1`'s `count` to `2`.
- `counter2.increment()` is called, setting `counter2`'s `count` to `1`.
- `counter1.decrement()` decrements `counter1`'s `count` to `1`.
- `counter2.increment()` increments `counter2`'s `count` to `2`.

### Advanced JavaScript Fundamentals MCQs (Continued)

#### Question 16: Complex Scoping and Hoisting
```javascript
var x = 10;

function outer() {
  console.log(x); // Line A
  var x = 20;
  console.log(x); // Line B
  function inner() {
    x = 30;
    console.log(x); // Line C
  }
  inner();
}

outer();
console.log(x); // Line D
```
What will be the output of the above code?
A) `undefined, 20, 30, 10`  
B) `10, 20, 30, 30`  
C) `undefined, 20, 30, 20`  
D) `undefined, 10, 30, 10`

**Correct Answer: A) `undefined, 20, 30, 10`**  
**Explanation:** 
- In the `outer` function, `x` is hoisted and initialized to `undefined`, so `console.log(x)` at Line A prints `undefined`.
- The `x` inside `outer` is then assigned `20`, so `console.log(x)` at Line B prints `20`.
- The `inner` function modifies the `x` inside `outer`, so `console.log(x)` at Line C prints `30`.
- The global `x` remains `10`, so `console.log(x)` at Line D prints `10`.

#### Question 17: Promises with Catch
```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject("Error occurred");
  }, 1000);
});

promise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
    return "Handled";
  })
  .then(function(result) {
    console.log(result);
  });
```
What will be the output after 1 second?
A) `Error occurred, Handled`  
B) `Handled, Error occurred`  
C) `Error occurred, undefined`  
D) `Handled, undefined`

**Correct Answer: A) `Error occurred, Handled`**  
**Explanation:** 
- The promise is rejected after 1 second with the value `"Error occurred"`.
- The `catch` block logs the error and returns `"Handled"`.
- The next `then` method logs the result returned from the `catch` block, which is `"Handled"`.

#### Question 18: Lexical Scoping with Nested Functions
```javascript
function outer() {
  var a = 10;
  function middle() {
    var b = 20;
    function inner() {
      var c = 30;
      console.log(a + b + c); // Line A
    }
    inner();
  }
  middle();
}

outer();
```
What will be the output of the above code?
A) `30`  
B) `50`  
C) `60`  
D) `ReferenceError`

**Correct Answer: C) `60`**  
**Explanation:** 
- The `inner` function has access to `a` from `outer` and `b` from `middle` due to lexical scoping.
- `a + b + c` evaluates to `10 + 20 + 30`, which is `60`.

#### Question 19: Chaining Promises with Delay
```javascript
let promise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});

promise
  .then(function(result) {
    console.log(result);
    return result * 2;
  })
  .then(function(result) {
    console.log(result);
    return result * 2;
  })
  .then(function(result) {
    console.log(result);
  });
```
What will be the output of the above code after 3 seconds?
A) `1, 2

, 4`  
B) `1, 4, 8`  
C) `2, 4, 8`  
D) `1, 2, 8`

**Correct Answer: A) `1, 2, 4`**  
**Explanation:** 
- The promise resolves with `1` after 1 second.
- Each `then` method takes the previous result, logs it, and returns the result multiplied by `2`.
- The sequence of results is `1, 2, 4`.

#### Question 20: Promises with Finally
```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Resolved");
  }, 1000);
});

promise
  .then(function(result) {
    console.log(result);
    return result;
  })
  .finally(function() {
    console.log("Finally");
  })
  .then(function(result) {
    console.log(result);
  });
```
What will be the output of the above code after 1 second?
A) `Resolved, Finally, Resolved`  
B) `Resolved, Resolved, Finally`  
C) `Finally, Resolved, Resolved`  
D) `Resolved, Finally`

**Correct Answer: A) `Resolved, Finally, Resolved`**  
**Explanation:** 
- The promise resolves with `"Resolved"` after 1 second.
- The first `then` logs `"Resolved"` and returns the result.
- The `finally` block logs `"Finally"`.
- The second `then` logs the result returned by the first `then`, which is `"Resolved"`.

