1. Compare the differences between let, var, and const when declaring variables in JavaScript.

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



- **Scope:** `const` is also block-scoped.

- **Hoisting:** Like `let`, variables declared with `const` are hoisted to the top of their block, but they are not initialized. Accessing the variable before its declaration results in a `ReferenceError` as they get in an area called Temporal Dead Zone

- **Reassignment:** Variables declared with `const` cannot be reassigned. They are constants. However, if the variable is an object or an array, the properties or elements of the object/array can be modified.

In summary:
- Use `var` when you need function-scoping (though it's less common nowadays).
- Use `let` when you need block-scoping and plan to reassign the variable.
- Use `const` when you need block-scoping and the variable should not be reassigned.


