## Asynchronous Programming 3

### Agenda

---
title: Agenda 
description:
Learn the essentials of `async/await` in JavaScript for cleaner and more readable asynchronous code.
duration: 900
card_type: cue_card
---

- Introduction to Async/Await
- The Basics of Async/Await
- Error Handling with Async/Await
- Practical Examples of Async/Await
- Best Practices and Common Pitfalls


---
title: Introduction to Async/Await
description:
Understanding the async/await syntax and its place in asynchronous JavaScript programming.
duration: 900
card_type: cue_card
---
#### What is Async/Await?

`async/await` is a modern JavaScript syntax feature that simplifies writing asynchronous code, making it more readable and easier to debug. Introduced in ES2017, it builds upon promises, providing a cleaner, more elegant syntax for working with asynchronous operations.

#### Why Async/Await?

Asynchronous operations are fundamental in JavaScript for non-blocking operations, such as fetching data from a server or reading files. While promises significantly improved asynchronous code readability, `async/await` further simplifies the syntax, allowing developers to write code that looks synchronous while executing asynchronously.

Look Synchronous? Didn't make sense right , let's understand


---
title: The Basics of Async/Await
description:
Learn how to declare async functions and use the await keyword to pause function execution until a promise settles.
duration: 900
card_type: cue_card
---

#### Declaring an Async Function

An `async` function returns a promise, automatically wrapping non-promise values in a promise. Here in this function we have initalized it with using the async keyword ,Whenever a function is initialized with a async keyword it always returns a Promise , although you can see we are just returing a simple data value but it will be returned with a promise

let's see the output 

```javascript
async function fetchData() {
  return 'data';
}

const dataPromise = fetchData()
console.log(dataPromise)
```

**Output**

Promise { 'data' }

Calling `fetchData()` returns a promise that can be resolved with 'data'.

Now how to resolve this promise?

You already know that to resolve a promise you can use the then method

So you can resolve it like 
```javascript
async function fetchData() {
  return 'data';
}

const dataPromise = fetchData()
console.log(dataPromise)

dataPromise.then((res)=> console.log(res))
```

This will resolve the promise for you and will give you the exact resolved value

**quick recap**

Whenever you use the async keyword with a function the function will always start returning a promise with it's value.

Now here I have retured a value that is getting wrapped inside a promise and being returned.

What if I instead of a value now I return a promise itself?

Suppose I create a very basic promise and I return it from the async function

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


async function fetchData() {
  return p;
}

const dataPromise = fetchData()
console.log(dataPromise)

// dataPromise.then((res)=> console.log(res))
```


This promise p is a very basic promise which just get resolved with a value 'Promise Resolved'  but now if I return this from the function fetchData try to guess what will be returned?

will this promise be wrapped inside another promise?
let's find out

**output**
Promise {<pending>}

So if the returned value is already a promise then it will be returned as it is and if it's a normal value it will be wrapped inside a promise and then it will be returned

So no matter what if the function is async it will always return a promise!

Now you can resolve this simply by again using the then method


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


async function fetchData() {
  return p;
}

const dataPromise = fetchData()
console.log(dataPromise)

dataPromise.then((res)=> console.log(res))
```

**output**
- Promise {<pending>}
- Promise Resolved


So this is how the async keyword works!



#### Using Await

OK! async keyword is clear that how it works , now let's move to understand what is this await keyword , The combination of async and await is used to handle promises , but before directly jumping to await keyword, let's understand how Promises were handled before async/await and then we will handle the promises with async/await so you will get a clear idea on what is happening


See the code snippet

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


function fetchData() {
  
}

```


Over here I have cleaned up the code and I have a very basic Promise which just resolves and a simple function fetchData , this time the function is not async , it's a normal function

So you will you handle the promise from the fetchData function?

Exactly! by using the then method

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


function fetchData() {
  p.then((res)=> console.log(res))
}

fetchData()

```

**output**
- Promise Resolved

Perfect!


Now let's suppose I want to handle this promise within an async function


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  
}



function fetchData() {
  p.then((res)=> console.log(res))
}

fetchData()

```

So Now I have a async function and I want to handle the Promise with this function , to do this you can simply use the await keyword inside the async function and it will automatically resole the promise for you , let's see


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  const val = await p
  console.log(val)
}

handlePromise()



function fetchData() {
  p.then((res)=> console.log(res))
}

// fetchData()

```

Over here you see you just used the await keyword inside the async function and as soon as you call the function the await keyword resolves the promise and provides you the resolved value un the variable val

**output**
- Promise Resolved



**important things to note**

- Await can only be used inside an async function
- You write the await keyword infornt of a Promise and it handles it


Great! Now we know how to handle promises with normal function and how an async function can handle promise with using the await keyword!

but still there is no proper difference that you see the Syntax is diffrent of course but if we can handle promise with the then method then why we even need async/await to handle promises?

Let's find out!


Now I will change my Promise a Little bit

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  const val = await p
  console.log(val)
}

handlePromise()



function fetchData() {
  p.then((res)=> console.log(res))
}

// fetchData()

```

In this snippet the promise is getting executed(resolved) immediately but Promises are meant to take some time because we do heavy operations with them like reading a big file , fetching data from an api and all , So let's make the promise act like a real promise for that we will resolve the promise after some delay with setting a little delay

so Now the code snippet looks like

```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

// async function handlePromise() {
//   const val = await p
//   console.log(val)
// }

// handlePromise() // This code to be used later



function fetchData() {
  // JS engine will not wait for the promise 
  p.then((res)=> console.log(res))
  console.log("Create Impact")
}

 fetchData()

```

Now focus on the Promise and the fetchData function

What will be the output and in what  order this will be executed?

Create Impact then promise Resolved , or Promise Resolved then  Create Impact?


**output**
- Create Impact
- Promise Resolved // after 10 sec

Exactly right? The console.log statement will be executed first as the promise will now wait in the event loop and after 10 seconds it will be resolved , The event loop will do it's job perfectly

This is how promises work!


Now , lets try to resolve this promise with async/await and let's see what will happen

```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward
  const val = await p
  console.log('Create Impact')
  console.log(val)
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

Now what will be the output here? give time to students to guess their answers and then run the code


**output**

- Create Impact // after 10 sec
- Promise Resolved // after 10 sec



Here the whole code inside the async function will now wait for the promise to get resolved and when it resolves after 10 seconds then only it will move forward to execute the next lines

This is the major diffrence between handling promises with .then() method and handling it with async/await 

Now Imagine if I put a console.log() statement at the top


```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") // this line will be excuted immediateley

  const val = await p 
  // this will wait for the promise to be resolved and then only it will move forward (excutionn pauses here)

  console.log('Create Impact') // Delayed Execution
  console.log(val) // Prints the value of resolved promise
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

**output**
- Scaler // then and there
- Create Impact // after 10 sec
- Promise Resolved // after 10 sec

This is how async/ await works

Here, await pauses handlePromise until p is resolved. This approach simplifies asynchronous control flow, making it more akin to synchronous code in appearance and readability.


Now as you understand how async/await works , let's play around with it more for better clarity


Let me do something with the above code-


```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") 

  const val = await p 

  console.log('Create Impact 1')
  console.log(val) 

  const val2 = await p 

  console.log('Create Impact 2')
  console.log(val2) 
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```


how do you expect this code will work? These are the kind of questions you can also get in your interviews , interviewer can ask these kinf of questions to judge if you understand the whole thing deeplhy or not

So try to figure out the output of the above code

**Explanation**

 Let's break down how the code works step-by-step:

1. **Creating a Promise (`p`):**
   - A new `Promise` object is instantiated with an executor function that takes two arguments: `resolve` and `reject`.
   - Inside the executor function, `setTimeout` is used to simulate an asynchronous operation that takes 10 seconds (10000 milliseconds) to complete. After 10 seconds, the `resolve` function is called with the string `'Promise Resolved'` as its argument. This marks the promise (`p`) as fulfilled.

2. **Defining an asynchronous function (`handlePromise`):**
   - An asynchronous function `handlePromise` is defined. This function will use the `await` keyword to wait for Promises to resolve before continuing with the next lines of code.

3. **Execution within `handlePromise`:**
   - When `handlePromise` is called, it first executes `console.log("Scaler")`, immediately printing `"Scaler"` to the console.
   - Next, the code encounters the `await` keyword before `p`, causing the JavaScript engine to pause execution within `handlePromise` until the promise `p` is resolved (i.e., 10 seconds later). No further code within `handlePromise` is executed during this waiting period.
   - Once `p` is resolved (after 10 seconds), its resolved value (`'Promise Resolved'`) is assigned to `val`. Then, `"Create Impact"` is printed to the console followed by the resolved value of `p` (`"Promise Resolved"`).
   - The next line also awaits the resolution of `p`. However, since `p` has already been resolved, JavaScript does not wait another 10 seconds. The resolved value of `p` is immediately assigned to `val2`, and then `"Create Impact"` and `"Promise Resolved"` are printed to the console again.

4. **Calling `handlePromise` function:**
   - Finally, `handlePromise` is called, initiating the sequence described above.

In summary, the output of the program will be as follows, with a 10-second pause after printing `"Scaler"` and before the first `"Create Impact"`:

```
Scaler
// 10-second pause
Create Impact 1
Promise Resolved
Create Impact 2
Promise Resolved
```

Superb!

Now if I create a diffrent promise and I try to resolve it so now my code will have two promises with different delays , So now I have two promises suppose p1 and p2 


```javascript

const p1 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

const p2 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 5000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") 

  const val = await p1 

  console.log('Create Impact 1')
  console.log(val) 

  const val2 = await p2 

  console.log('Create Impact 2')
  console.log(val2) 
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

How will this code work now? there is a promise which resolves in 5 sec (p1) and there is promise which resolves in 10 sec (p2) , So will the 5 sec promise excute first and it will be printed will the 10 sec promise execute first and then the 5 sec promise will start doing it's job , will the total time be 15 sec to execute the whole function or will it be 10 sec where both the promise will resolve in a 10 sec timeframe? 

Ugh!!!!!!

Trust me Folks! You will have to answer all of these things

Dont Worry! It's super simple , let's break it down

This code snippet demonstrates the use of multiple Promises and the `async/await` syntax in JavaScript to handle asynchronous operations with different completion timings. Let's examine how this code works step-by-step:

1. **Creating Promises (`p1` and `p2`):**
   - Two `Promise` objects, `p1` and `p2`, are instantiated with executor functions. Both executor functions use `setTimeout` to simulate asynchronous operations, but with different durations: `p1` is set to resolve after 10 seconds (10000 milliseconds) with the string `'Promise Resolved'`, while `p2` resolves after 5 seconds (5000 milliseconds) with the same string.

2. **Defining an asynchronous function (`handlePromise`):**
   - An asynchronous function, `handlePromise`, is defined to handle the execution logic that awaits the resolution of these promises.

3. **Execution within `handlePromise`:**
   - Upon calling `handlePromise`, the first operation is a `console.log("Scaler")`, which prints `"Scaler"` to the console immediately.
   - Next, the code encounters `await p1`. This causes the JavaScript engine to pause execution within the `handlePromise` function until `p1` is resolved, which will take 10 seconds. During this wait, no other code within `handlePromise` is executed.
   - After 10 seconds, when `p1` resolves, its resolved value (`'Promise Resolved'`) is assigned to `val`. The function then continues execution, printing `"Create Impact 1"` and the resolved value of `p1` (`"Promise Resolved"`) to the console.
   - The code then proceeds to `await p2`. However, by the time `p1` resolves, `p2` has already been resolved (since it only had a 5-second timer). Therefore, there is no additional wait time; the JavaScript engine can immediately assign the resolved value of `p2` to `val2` and continue execution.
   - `"Create Impact 2"` and the resolved value of `p2` (`"Promise Resolved"`) are then printed to the console.

4. **Calling `handlePromise` function:**
   - Finally, the `handlePromise` function is called, triggering the sequence described above.

In summary, the output of the program will be as follows, with a 10-second pause after printing `"Scaler"` and before the first `"Create Impact 1"` (note that there's no additional delay before `"Create Impact 2"` because `p2` has already resolved by the time `p1`'s resolution is handled):

```
Scaler
// 10-second pause
Create Impact 1
Promise Resolved
Create Impact 2
Promise Resolved
```

This example illustrates how multiple asynchronous operations can be managed using Promises and the `async/await` syntax, allowing for sequential handling of asynchronous results even when those operations complete at different times.














































































































