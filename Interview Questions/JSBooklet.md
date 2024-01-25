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





