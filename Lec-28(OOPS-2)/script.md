---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---

## Agenda
**Topics to cover in Javascript Oops** 
* Constructor functions
* Classes & Classical Inheritance
* Prototype &  Prototypal Inheritance
* Call ,Apply & Bind Methods
* Memory of objects (Reference Datatypes)

Certainly! Let's dive into JavaScript's constructor functions, covering all the aspects you've mentioned.


---
title: Constructor Functions 
description: 
duration: 120
card_type: cue_card
---



### 1. What are Constructor Functions and Why Use Them?

Constructor functions in JavaScript are a way to create multiple objects with the same structure, methods, and properties. They act like a blueprint for creating instances of a particular type of object.


**Let's See a Real-life analogy to understand this-**


1. Imagine you're opening a restaurant that serves a variety of pizzas. 

2. Each pizza has different toppings, sizes, and crust types. 

3. Instead of making each pizza from scratch every time an order comes in, you devise a recipe (a blueprint) that outlines the steps and ingredients necessary for making any pizza. 

4. This blueprint is like a constructor function in JavaScript.

### The Blueprint (Constructor Function)

The recipe for making a pizza acts as your "Pizza" constructor function. It specifies:

- **Toppings:** cheese, pepperoni, vegetables, etc.
- **Size:** small, medium, large.
- **Crust Type:** thin, thick, stuffed.

In JavaScript, this blueprint (constructor function) might look something like:

```javascript
function Pizza(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    
    this.describe = function() {
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    };
}

var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');

var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');

customerOrder1.describe(); // Output: A medium pizza with cheese, pepperoni on a thin crust.

customerOrder1.describe();// Output: A small pizza with veggies, pepperoni on a thick crust.
```

**Step by Step Breakdown of the Code -**

This piece of code defines a constructor function named `Pizza` and then uses it to create an instance representing a customer's pizza order. 

Here's a step-by-step breakdown:

1. **Define the `Pizza` Constructor Function:**
   - The `Pizza` function is designed to create pizza objects. It takes three parameters: `toppings`, `size`, and `crustType`.
   - Inside the function, `this` refers to the new object that will be created when the function is called with `new`. The new keyword will make the this keyword ppomit to newly created object
   - `this.toppings = toppings;` assigns the array of toppings passed as an argument to the `toppings` property of the new object.
   - `this.size = size;` assigns the size argument (a string) to the `size` property of the new object.
   - `this.crustType = crustType;` assigns the crust type argument (a string) to the `crustType` property of the new object.
   - `this.describe = function() {...};` defines a method named `describe` on the new object. This method, when called, will log a string describing the pizza to the console, using the object's `size`, `toppings`, and `crustType` properties.

2. **Method `describe` Inside the `Pizza` Constructor:**
   - This method constructs and logs a string to the console that describes the pizza. It accesses the pizza's properties (`this.size`, `this.toppings`, and `this.crustType`) to create a descriptive string.
   - `this.toppings.join(", ")` combines all elements in the `toppings` array into a single string, separated by commas. This makes the array of toppings into a readable list.
   - The string is logged in the format: `"A [size] pizza with [toppings] on a [crustType] crust."`, where `[size]`, `[toppings]`, and `[crustType]` are replaced with the values of the corresponding properties of the pizza object.

3. **Create an Instance of `Pizza`:**
   - `var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');` creates a new `Pizza` object with the specified toppings (`'cheese'`, `'pepperoni'`), size (`'medium'`), and crust type (`'thin'`).

   - Now with using the same constructor function you can create another object

   - `var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');` creates a new `Pizza` object with the specified toppings (`'veggies'`, `'pepperoni'`), size (`'small'`), and crust type (`'thick'`).


   - The `new` keyword is used to call the `Pizza` function, creating a new instance of a pizza object, which is then assigned to the variable `customerOrder1`.

4. **Call the `describe` Method of `customerOrder1`:**
   - You can even create methods inside constructor functions

   - `customerOrder1.describe();` calls the `describe` method on the `customerOrder1` object. This results in logging the description of the pizza to the console, specifically: `"A medium pizza with cheese, pepperoni on a thin crust."`

  - `customerOrder2.describe();` calls the `describe` method on the `customerOrder2` object. This results in logging the description of the pizza to the console, specifically: `"A small pizza with veggies, pepperoni on a thick crust."`










