function A() {}
function B() {}

let a = new A();
let b = new B();

// Attempting to create a circular prototype chain
A.prototype = b;
try {
    B.prototype = a;  // Throws TypeError in most JS environments
} catch (e) {
    console.log("Error:", e.message);
}