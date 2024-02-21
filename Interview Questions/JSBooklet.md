 ## 1.Compare the differences between let, var, and const when declaring variables in JavaScript.

In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have some differences in terms of scoping, hoisting, and mutability. Let's explore each one separately:

### 1. `var`:

```javascript
// Example 1
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // Outputs 20
}
console.log(x); // Outputs 20

// Example 2
console.log(y); // Outputs undefined
var y = 5;
console.log(y); // Outputs 5
```

- **Scope:** `var` is function-scoped. It means that the variable is visible throughout the entire function in which it is declared.

- **Hoisting:** Variables declared with `var` are hoisted to the top of their scope. This means you can use the variable before it's declared, but it will have an initial value of `undefined`.

- **Reassignment:** Variables declared with `var` can be redeclared and reassigned.

### 2. `let`:

```javascript
// Example 1
let a = 10;
if (true) {
  let a = 20;
  console.log(a); // Outputs 20
}
console.log(a); // Outputs 10

// Example 2
// ReferenceError: Cannot access 'b' before initialization
console.log(b);
let b = 5;
console.log(b); // Outputs 5
```

- **Scope:** `let` is block-scoped. It means that the variable is only visible within the block, statement, or expression where it is defined.

- **Hoisting:** Variables declared with `let` are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a `ReferenceError` as they get in an area called Temporal Dead Zone

- **Reassignment:** Variables declared with `let` can be reassigned, but not redeclared in the same scope.

### 3. `const`:

```javascript
// Example 1
const PI = 3.14;
// SyntaxError: Assignment to constant variable
PI = 3.14159;
```



- **Scope:** `const` is also block-scoped.

- **Hoisting:** Like `let`, variables declared with `const` are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a `ReferenceError` as they get in an area called Temporal Dead Zone

- **Reassignment:** Variables declared with `const` cannot be reassigned. They are constants. However, if the variable is an object or an array, the properties or elements of the object/array can be modified.

In summary:
- Use `var` when you need function-scoping (though it's less common nowadays).
- Use `let` when you need block-scoping and plan to reassign the variable.
- Use `const` when you need block-scoping and the variable should not be reassigned.



## 2.What is Hoisting in JS?

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or a function before it's declared in your code. However, it's important to note that only the declarations are hoisted, not the initializations.

Let's go through some examples to illustrate hoisting in JavaScript:

### Example 1: Variable Hoisting

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

In this example, the variable `x` is hoisted to the top of its scope during the compilation phase. The first `console.log` outputs `undefined` because the declaration is hoisted, but the initialization (`x = 5`) is not hoisted. The second `console.log` outputs `5` after the variable has been initialized.

### Example 2: Function Hoisting

```javascript
sayHello(); // Output: "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

In this example, the function `sayHello` is hoisted to the top of its scope. That's why we can call the function before its declaration. The output is "Hello, World!" as expected.

### Example 3: Hoisting with Function Expressions

```javascript
greet(); // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};
```

In this case, the variable `greet` is hoisted, but since it's assigned a function expression (not a function declaration), the assignment is not hoisted. Therefore, when we try to call `greet()` before the assignment, we get a `TypeError` because `greet` is `undefined` at that point.

### Example 4: Hoisting Inside Functions

```javascript
function example() {
  console.log(a); // Output: undefined
  var a = 10;
  console.log(a); // Output: 10
}

example();
```

Even within functions, variables are hoisted to the top of their scope. In this example, the variable `a` is hoisted within the function `example`.

It's important to understand hoisting in JavaScript, but it's generally considered good practice to declare and initialize variables at the beginning of their scope to avoid confusion and potential issues.


## 3.What is Temporal dead zone in JS?

The "temporal dead zone" in JavaScript refers to the period between entering scope and the actual declaration of a variable with `let` or `const`, during which accessing the variable results in a `ReferenceError`. Let me break it down with some code examples:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

In this example, even though `x` is declared later in the code, trying to access it before the declaration causes a `ReferenceError`. This is because `x` is in the temporal dead zone until the `let` initialization is encountered.

Same thing Happens with const as well!



## 4.What is a lexical Scope and Scope Chain in JS?

Let's illustrate lexical scoping and the scope chain with an example:

```javascript
function outerFunction() {
  var outerVar = "I'm outer";

  function innerFunction() {
    var innerVar = "I'm inner";
    console.log(outerVar); // Output: I'm outer
  }

  innerFunction();
}

outerFunction();
```

In this example, `innerFunction` has access to the variable `outerVar` declared in its outer scope (`outerFunction`), but not vice versa. This is because of lexical scoping. The inner function has access to variables declared in its parent functions due to the lexical environment in which it is defined.

The scope chain in this example can be visualized as follows:

1. Global Scope
   - Contains built-in objects and functions like `console`.
2. `outerFunction` Scope
   - Contains `outerVar`.
   - Outer scope of `innerFunction`.
3. `innerFunction` Scope
   - Contains `innerVar`.
   - Inner scope of `outerFunction`.

When `innerFunction` tries to access `outerVar`, JavaScript first looks for `outerVar` in its local scope. If it doesn't find it there, it looks in the scope of its parent function, which is `outerFunction`'s scope. If `outerVar` is still not found there, it continues up the scope chain until it reaches the global scope. So basically a chain is formed to search for the value from innermost function to the outer functions that are up in the hierarchy but the vice versa is not possible , and this chain is known as Scope Chaining.

So, in this case, `outerVar` is found in `outerFunction`'s scope, and that's where the value is retrieved from , if the value is not found anywhere up in the hierrarchy then an error is returned.

## 5 What are Closures in JS and how they are formed?

 In JavaScript, closure is a fundamental concept that arises from the combination of lexical scope and function definitions. 

Lexical scope refers to the idea that a function's scope is determined by its surrounding code at the time of its definition, not at the time of its execution. This means that a function "remembers" the variables that were in scope at the time it was defined, even if it is executed in a different scope.

The scope chain is the mechanism by which JavaScript resolves variable names. When a variable is referenced inside a function, JavaScript first looks for that variable within the function's own scope. If it's not found there, it looks in the next outer scope, and so on, until it reaches the global scope.

Now, when a function is defined within another function, it forms a closure. This means that the inner function has access to the outer function's variables, even after the outer function has finished executing. This is possible because the inner function maintains a reference to the variables in the outer function's scope, creating a closure over those variables.

Here's an example to illustrate:

```javascript
function outer() {
  var outerVar = "I'm in the outer function";
  
  function inner() {
    console.log(outerVar); // inner function has access to outerVar
  }
  
  return inner;
}

var closureFunc = outer(); // outer function has finished executing, but inner function maintains a reference to outerVar
closureFunc(); // Outputs: "I'm in the outer function"
```

In this example, `inner()` forms a closure over the variable `outerVar`, even though `outer()` has already finished executing. This is possible because `inner()` maintains a reference to `outerVar` through the closure, allowing it to access the variable's value when it's called later on.

So, in summary, closure in JavaScript is the combination of lexical scope and function definitions, allowing inner functions to maintain access to variables in their outer scope even after the outer function has finished executing.

## 6 What are Higher Order Functions and what are the advantages of using Higher order functions?

In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result, or both. Essentially, it treats functions as first-class citizens, allowing them to be manipulated and passed around as data. Here's a simple example:

```javascript
// Higher-order function example
function applyOperation(operation, x, y) {
  return operation(x, y);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(applyOperation(add, 5, 3)); // Output: 8
console.log(applyOperation(subtract, 5, 3)); // Output: 2
```

In this example, `applyOperation` is a higher-order function because it takes another function (`operation`) as an argument.

Advantages of using higher-order functions:

1. **Code Reusability**: Higher-order functions promote code reuse by allowing you to abstract common functionality into separate functions. This can lead to more concise and maintainable code.

2. **Abstraction**: They allow you to abstract over actions, promoting a more declarative and expressive coding style.

3. **Encapsulation**: Higher-order functions can encapsulate complex behavior, making it easier to understand and reason about the code.

4. **Functional Composition**: They facilitate functional composition, enabling you to build complex functions by composing simpler ones together.

5. **Flexibility and Extensibility**: Higher-order functions make your code more flexible and extensible by enabling you to pass behavior as arguments or return it as a result.

Overall, higher-order functions are a powerful feature of JavaScript that can lead to more modular, flexible, and expressive code.


## 6 Explain Map , Filter and Reduce in JS?

 In JavaScript, `map`, `filter`, and `reduce` are powerful array methods used for manipulating arrays and performing operations on their elements.

1. **Map**: The `map` method creates a new array by applying a function to each element of the original array. It does not modify the original array.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Example 1: Doubling each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting each number to a string
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers); // Output: ['1', '2', '3', '4', '5']
```

2. **Filter**: The `filter` method creates a new array with all elements that pass the test implemented by the provided function basically on a condition

```javascript
const numbers = [1, 2, 3, 4, 5];

// Example 1: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example 2: Filtering numbers greater than 3
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // Output: [4, 5]
```

3. **Reduce**: The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Example 1: Summing all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Example 2: Concatenating all numbers as a string
const concatenatedString = numbers.reduce((accumulator, currentValue) => accumulator + currentValue.toString(), '');
console.log(concatenatedString); // Output: '12345'
```

In each example:

- `map` transforms each element of the array according to the function provided.
- `filter` selectively includes elements from the original array based on a condition defined by the provided function.
- `reduce` iterates over each element of the array, accumulating a final result based on the logic defined in the provided function.


## 6 Write a Polyfill for Array.map() method?


```javascript
// Polyfill for Array.map()
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        newArray[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return newArray;
  };
}
```

Now let's break down how this polyfill works:

1. It checks if `Array.prototype.map` does not exist. If it doesn't, it means the browser doesn't support the `map()` method, so we need to provide our own implementation.

2. Inside the polyfill function, it first checks if the `this` value is `null` or `undefined`, as using `map()` on `null` or `undefined` would throw an error in a native implementation. 

3. It checks if the `callback` provided is actually a function. If not, it throws a `TypeError`.

4. It creates a new array `newArray` to store the results of applying the callback to each element of the original array.

5. It iterates over each element of the array using a for loop, checking if the current index `i` is present in the array using `if (i in this)` to skip over holes in sparse arrays.

6. For each element, it calls the `callback` function with three arguments: the current element, the current index, and the original array. It uses `call()` to ensure that the `this` value within the callback function is set to `thisArg`, if provided.

7. It stores the result of the callback in the corresponding index of the `newArray`.

8. Finally, it returns the `newArray` containing the results of applying the callback to each element of the original array.

This polyfill provides a basic implementation of `Array.map()` that should work in older browsers or environments lacking support for it.


## 7 Write a Polyfill for Array.filter() method?

It is extremely common question in JavaScript interviews where it is asked to implement polyfill for the filter() method.

Array.filter polyfill should have these three functionalities.

- The filter() function should take an callback function as an argument.
- Current element, its index, and the context should be passed as an argument to the callback function.
- All the elements which pass text implemented in this callback function should be returned in a new array.

```js
Array.prototype.filter = function (callback) {
  //Store the new array
  const result = [];
  for (let i = 0; i < this.length; i++) {
    //call the callback with the current element, index, and context.
    //if it passes the text then add the element in the new array.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  
  //return the array
  return result
}
```

## 8 Write a Polyfill for Array.reduce() method?


























