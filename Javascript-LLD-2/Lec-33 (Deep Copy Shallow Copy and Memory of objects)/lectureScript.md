---
title: Agenda
description:
duration: 600
card_type: cue_card
---

**Agenda of this Lecture:**
- Memory of JS Datatypes (Primitive and reference)
- Shallow Copy and Deep Copy
- Type Conversion and Type Coercion
- Truthy and Falsy Values


---
title: Memory of JS DataTypes
description:
duration: 600
card_type: cue_card
---


1. Data types can be a bit of a mind boggling concept. But as programmers, we use data types everyday – so they're something we should understand.

2. Question is, how does the computer store these data types? It can't possibly treat every data type the same.

3. In JavaScript, data types are split in two categories, and the computer treats each one differently. We have primitive data types and reference data types. 

4. But what are these? And why is it important to know the difference? That's what we'll learn in this Section of the Class

## Primitive Data types in JS

These data types are pretty simple, and are sometimes treated as the lowest level of implementation of a programming language. They are not objects, and do not have methods.

Examples of such data types are numbers, strings, booleans, null, and undefined.

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--1-.png'>


**Fun Fact Incominggg..->**
 you might be wondering about strings, because they do have methods. The fact is, JavaScript converts primitive strings to string objects, so that it is possible to use string object methods.


 #### How are Primitive Datatypes Stored in Memory

 1. When you declare a primitive data type in JavaScript, it is stored on a stack. A stack is a simple data structure that the computer uses to store and retrieve data quickly.

2. A primitive data type on the stack is identified by the variable name you used for declaration in your program. With each primitive data type you create, data is added to the stack.

3. To implement this, say we declare a variable, numOne, and give it a value of 50. We go on to create another variable, numTwo, and assign it the same value of 50. So both variables have the same value.

4. What happens on the stack is that, the computer creates room for numOne and stores its assigned value on the stack. When numTwo is created, the computer again creates room, and stores 50 on the stack. It does not matter that both variables are assigned the same value.

```js
let numOne = 50;
let numTwo = 50; //numTwo=numOne=50
console.log(numOne); //outputs 50
console.log(numTwo); //outputs 50

```

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--3-.png'>



5. What if during the coding process, we decided to update the value of numOne to say, 100? Does it mean numTwo will change too? The answer is no.

6. Since numOne and numTwo were stored differently on the stack, updating one of them will not affect the other. And we can experiment with that by actually trying it out in our code editor.

7. Logging numOne to the console will output 100, and logging numTwo will output 50. So, in effect, the two variables have no relationship to each other.


```js
let numOne = 50;
let numTwo = numOne; //numTwo=numOne=50
numOne = 100;
console.log(numOne); //outputs 100
console.log(numTwo); //outputs 50

```

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--4-.png'>

Now that we've seen how easy it is to handle primitive data types, let's see how similarly reference data types work.


### Reference Datatypes

Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.


<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--2-.png'>


Let's see How Reference Datatypes are stored in the Memory

The difference comes in when the computer has to store a reference data type. When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types).

What you have assigned to that variable is a pointer that points to the location of that data type in memory. Confusing? I know , Let me Simplify this


Let's take a similar code as we did for primitive but this time we will try it with and Object


```js
let object1 = {
name:'Bingeh',
age:18
};
let object2 = object1;

//updating object1,
object1.age = 20;

console.log(object2); //we see that object2 also updates the age attribute
```


How is this happening?

<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--5-.png'>


1. As you can see in the image above, we have two data structures now. A stack, and a heap. 

2. Say we declared an object, for example. The object itself is stored on a heap, and its pointer is stored on a stack. The pointer is identified by the object's variable name, and points to that object.

3. Now, we could create a variable, object1, and assign an object to it. What if like before, we create another variable object2, and assign it to object1. Does that mean another object will be created on the heap? The answer is no.

4. Since the object already exists on the heap, object2 and object1 will both point to the same object.

5. Another difference comes in when we update object1. If we log both variables to the console, we see that the change affected them both. 

6. This is because they are pointing to the same object on the heap – and updating one variable of course affects the other.


<img src='https://www.freecodecamp.org/news/content/images/2022/01/Purple-Minimal-We-Are-Hiring-Twitter-Post--6-.png'>

Now you know the difference between primitive and reference data types.

---
title: Promise.all
description:
duration: 600
card_type: cue_card
---
