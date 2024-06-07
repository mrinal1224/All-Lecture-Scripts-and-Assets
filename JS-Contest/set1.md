### Question 1: Sum of Array Elements
**Concept: Arrays**

#### Problem Statement
Write a function that takes an array of numbers and returns the sum of all elements in the array.

#### Problem Description
You need to complete the function `sumArray(arr)` which receives an array `arr` of numbers and returns the sum of its elements. 

#### Hint
You can use the `reduce` method of arrays to accumulate the sum of elements.

#### Solution Approach
1. Use the `reduce` method to iterate over the array.
2. Accumulate the sum of the elements.

#### Boilerplate Code
```javascript
function sumArray(arr) {
    // Write your solution here
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output should be 15
```

#### Complete Solution
```javascript
function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output should be 15
```

### Question 2: Create a Polyfill for `Array.prototype.map`
**Concept: Higher Order Functions, Polyfills**

#### Problem Statement
Write a polyfill for the `Array.prototype.map` method.

#### Problem Description
You need to complete the function `mapPolyfill(callback)` which mimics the behavior of the native `Array.prototype.map` method. The function should apply the `callback` function to each element of the array and return a new array with the results.

#### Hint
You can use a `for` loop to iterate over the array and apply the `callback` function to each element.

#### Solution Approach
1. Create an empty array to store the results.
2. Iterate over the original array using a `for` loop.
3. Apply the `callback` function to each element and store the result in the new array.
4. Return the new array.

#### Boilerplate Code
```javascript
Array.prototype.mapPolyfill = function(callback) {
    // Write your solution here
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.mapPolyfill(num => num * 2);
console.log(doubled); // Output should be [2, 4, 6, 8, 10]
```

#### Complete Solution
```javascript
Array.prototype.mapPolyfill = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.mapPolyfill(num => num * 2);
console.log(doubled); // Output should be [2, 4, 6, 8, 10]
```