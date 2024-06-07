### Question 5: Deep Clone an Object
**Concept: Objects**

#### Problem Statement
Write a function that creates a deep clone of a given object.

#### Problem Description
You need to complete the function `deepClone(obj)` which receives an object `obj` and returns a deep clone of it.

#### Hint
You can use recursion to clone nested objects.

#### Solution Approach
1. Create a new object to store the clone.
2. Iterate over the properties of the original object.
3. If a property is an object, recursively clone it; otherwise, copy the value.

#### Boilerplate Code
```javascript
function deepClone(obj) {
    // Write your solution here
}

// Example usage:
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned); // Output should be { a: 1, b: { c: 2 } }
console.log(cloned !== original); // Output should be true
console.log(cloned.b !== original.b); // Output should be true
```

#### Complete Solution
```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    const clone = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Example usage:
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned); // Output should be { a: 1, b: { c: 2 } }
console.log(cloned !== original); // Output should be true
console.log(cloned.b !== original.b); // Output should be true
```

### Question 6: Implement a Closure
**Concept: Closures**

#### Problem Statement
Write a function that returns another function which increments a counter each time it is called.

#### Problem Description
You need to complete the function `createCounter()` which returns a function that increments and returns a counter each time it is called.

#### Hint
Use a closure to keep track of the counter value.

#### Solution Approach
1. Define a variable to keep track of the counter value.
2. Return a function that increments and returns the counter value.

#### Boilerplate Code
```javascript
function createCounter() {
    // Write your solution here
}

// Example usage:
const counter = createCounter();
console.log(counter()); // Output should be 1
console.log(counter()); // Output should be 2
console.log(counter()); // Output should be 3
```

#### Complete Solution
```javascript
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

// Example usage:
const counter = createCounter();
console.log(counter()); // Output should be 1
console.log(counter()); // Output should be 2
console.log(counter()); // Output should be 3
```