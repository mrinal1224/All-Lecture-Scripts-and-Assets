### Question 3: Implement a Function Using `call`
**Concept: Call, Apply, Bind**

#### Problem Statement
Write a function `greet` that uses the `call` method to print a greeting message using a given context.

#### Problem Description
You need to complete the function `greet.call(context, name)` where `context` is an object with a `greeting` property and `name` is a string. The function should print a greeting message using the `greeting` property of the context object.

#### Hint
Use the `call` method to invoke the function with the specified context.

#### Solution Approach
1. Define a function that takes a `name` parameter.
2. Use the `call` method to invoke the function with the given context.

#### Boilerplate Code
```javascript
function greet(name) {
    // Write your solution here
}

// Example usage:
const context = { greeting: 'Hello' };
greet.call(context, 'John'); // Output should be 'Hello, John!'
```

#### Complete Solution
```javascript
function greet(name) {
    console.log(`${this.greeting}, ${name}!`);
}

// Example usage:
const context = { greeting: 'Hello' };
greet.call(context, 'John'); // Output should be 'Hello, John!'
```


### Question 4: Filter Even Numbers
**Concept: Arrays, Higher Order Functions**

#### Problem Statement
Write a function that filters out even numbers from an array of numbers.

#### Problem Description
You need to complete the function `filterEvenNumbers(arr)` which receives an array `arr` of numbers and returns a new array containing only the even numbers.

#### Hint
You can use the `filter` method to filter out the even numbers.

#### Solution Approach
1. Use the `filter` method to iterate over the array.
2. Return a new array containing only the even numbers.

#### Boilerplate Code
```javascript
function filterEvenNumbers(arr) {
    // Write your solution here
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output should be [2, 4, 6]
```

#### Complete Solution
```javascript
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output should be [2, 4, 6]
```
