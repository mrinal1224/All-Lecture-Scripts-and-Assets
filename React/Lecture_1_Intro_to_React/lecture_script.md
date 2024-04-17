# Full Stack LLD: React-1: Introduction to React: JSX, Props, lists
---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---
## Agenda


**Prerequistes Required before Starting with React**

* Set up all the tools in your laptop
* VS Code (recommended)
* Chrome Browser (recommended)
* Proper revision of HTML/CSS and Javascript is a must

So Let's see What we are going to Look at in this LLD-3 module , Yes! `React`

Everyone Who is doing even a little work in Javascript  have heard about this tool called `React`.

`React` has become the most capable tool in today's era in frontend Development for creating beautiful looking smooth and fast UI hence enhaning the UX as well 


React has been Built and mainatined by Facebook and Big Tech giants like Netflix , Uber and many more are using it in their Org


Now , why `React` got so Popular , Why it is this  big thing in the industry that everyone want's a React developer in their Team


In this whole module we Will be Finding Answers to all of these questions and by the end you will have a solid foundation of How to use React and work with it!

But to get to the end You will have start from the basics

*As the Saying goes-*

`To reach the summit's grace, one must embrace the roots' embrace.`

Yeah OK! I could have said something better.

but you get the idea that we will be starting from the very Basics


**Agenda of The Lecture**

* Build your first Hello World program using just HTML and JS
* Ingesting React with CDN to build the same Hello World
* Create an Element
* Create nested React Elements
* Use root.render
* Functional Component
* JSX -> Javascript and XML
* How JSX is read (Babel Transpiler)
* Advantages of JSX


---
title:
Build your first Hello World program using just HTML and JS
description:
duration: 2100
card_type: cue_card
---

Before Moving to react ,Let's just do a simple exercise of Creating a heading element with the Text 'Hello from JS' We will be using plain HTML and JS for now


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
  </body>

  <script>
    const headingElement = document.createElement("h1");
    headingElement.innerHTML = "Hello from JS";

    const root = document.getElementById("root");
    root.appendChild(headingElement);
  </script>
</html>
```

The JavaScript code in the provided HTML document does the following:

1. **Create an HTML Element**: It creates a new `<h1>` element and assigns it to the variable `headingElement`.

2. **Set Element Content**: It sets the inner HTML of the `headingElement` to the text "Hello from JS". This means the `<h1>` element will display "Hello from JS" as its content when rendered on the webpage.

3. **Access an Existing Element**: It retrieves the `<div>` element with the ID "root" from the HTML document and assigns it to the variable `root`.

4. **Append Element to DOM**: It appends the newly created `headingElement` as a child to the `root` `<div>` element. This effectively inserts the `<h1>` element within the `<div>` element in the HTML structure.



As a result, when the HTML document is loaded in a browser, it will display a heading that says "Hello from JS" inside the `<div>` element with the ID "root".

Very Simple Right? Now Let's try to do this with `React` , 

Yes! Let's not go into the technical details as of now of what react? why react? how it works? and all , let's just start using it and slowy everything will be covered


---
title: Hello World in React with CDN 
description: Discussion of basic application in react in detail.
duration: 2100
card_type: cue_card
---


Now the First thing that we will do is Get `REACT` in our Codebase , Now there are various ways of setting up a React app,

* We can use CDN Links
* We can use Build tools like (CRA  , Parcel , Vite) (this we will cover Later)


Let's see How to ingest React in our codebase using the CDN

Follow this link - https://legacy.reactjs.org/docs/cdn-links.html

Yes! this is the old React Documentation , but as I said `Basics`!

You wil see Something like this when you follow the Link

<img src='https://i.ibb.co/YdKGVHC/Screenshot-2024-04-18-at-3-48-13-AM.png'>


Now create a Fresh Html file or you can continue in the one you wrote your Hello World program Only!

What you have to do is get these CDN links ingested inside the html files  like this

```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>
</html>

```


Now as You have ingested them , Now all the Powers of `React` are with you!

Let's see Something Interesting now


Go to the Console and Type React

You will see now  `React` is available to you and you can even open this and see what React Offers , In the future all the `methods ` and `properties` that you see we will be using them







<img src='https://i.ibb.co/NmvFxDf/Screenshot-2024-04-18-at-3-53-42-AM.png'>

<img src='https://i.ibb.co/tHzJsxb/Screenshot-2024-04-18-at-3-54-18-AM.png'>


You can even Open this CDN link in the Browser , if I just copy the CDN link and paste it in the Browser you will see That `React` is nothimng but plain Written Javascript code , This is the Source Code of React! and all React Stuff that we are going to use is coming from Here Only!



Similarly , We have got another CDN link ingested that is for `react-dom`

Now you must be thinking that why there are Two CDN links , one is React and one is React-DOM!

So the Catch is that 

React and ReactDOM are used together because each library serves a specific purpose in building web applications:

1. **React**: Provides the framework for creating components manage Them and  It defines the structure and behavior of the components.
   
2. **ReactDOM**: Handles rendering of the React components to the DOM (Document Object Model), making them visible on the web browser. It also manages updates to the DOM when React makes some  changes.

Essentially, while React creates and manages the components and their internal logic, ReactDOM takes care of rendering these components in the web environment. 


This separation of concerns allows React to be used not just for web applications but also for other platforms like mobile (through React Native), while ReactDOM specifically deals with web-specific interaction with the DOM.


You can even check ReactDOM in the same way and it will show you whatever you will use to handle DOM operations with React

<img src='https://i.ibb.co/Vtp4D6V/Screenshot-2024-04-18-at-3-55-32-AM.png'>




<img src='https://i.ibb.co/X4r7hvY/Screenshot-2024-04-18-at-4-07-41-AM.png'>

<img src='https://i.ibb.co/5cBjwrR/Screenshot-2024-04-18-at-3-54-10-AM.png'>








---
title: Bare bone React example 
description: Discussion of basic application in react in detail.
duration: 2100
card_type: cue_card
---
### What is JSX
JSX: JSX, short for JavaScript XML, is like HTML on steroids. It allows you to write JavaScript logic directly inside HTML code.



### Context for instructor : In this exercise, we'll recreate the "hello" component we built earlier using plain JavaScript. We'll focus on understanding while establishing following facts
* JSX is inspired from javascripts's template string
* components are nothing javascript function that always returns HTML code 
* code execution always starts from ReactDOM.render

Now let's talk how the experiement's setup. 
1. We will be having->  `reactDOM.js` (this files resposble to emulate ReactDOM cdn link )
```javascript
let ReactDOM = {};
function render(component, root) {
    let OptimizedDOM = react(component);
    console.log("Rendering to DOM");
    // it puts into the root element
    root.innerHTML = OptimizedDOM;
}
ReactDOM.render = render;
```

2. `react.js`->(it will be used emulate react cdn link)

```javascript
function react(component) {
    // calling that fn
    let dom = component();
    console.log("....optimizing changes");
    return dom;
}
```

3. Now these above two files should be added to the file that will be used emulate the whole HELLO component
```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <script src = "./lib/react.js"></script>
    <script src = "./lib/reactDOM.js"></script>
</head>

<body>
    <div id = "root"></div>
    <script>

        function HELLO() {
            let name = "React";
            let age = 30
            return `<h1>Hello  ${name} Thanks Babel and you are ${age<18 ?"underage":"eligble"}</h1>`;
        }

ReactDOM.render(HELLO, document.getElementById("root"));
    </script>
</body>

</html> 
```
4. Now if you compare the above code with this HELLO component you can clearly see relation b/w jsx and template strings
```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
        // -> component : a function that returns HTML
        function HELLO() {
            let age=30;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel and you are {age<18 ?"underage":"eligble"} </h1>;
        }
        // a method in REACTDOM -> puts the returned  HTML from componente in root element
        ReactDOM.render(<HELLO ></HELLO>, document.getElementById("root"));
    </script>
</body>

</html>
```

### Bare Bone React Example[to be covered in the live class]
Now to understand JSX and react  better let's implement a very basic version of react.

`Instructor cue`: these are two files that we will be using emulate react and reactDOM(just copy it and not reveal to learners first)


`reactDom.js`
```javascript
let ReactDOM = {};
function render(component, root) {
    let OptimizedDOM = react(component);
    console.log("Rendering to DOM");
    // it puts into the root element
    root.innerHTML = OptimizedDOM;
}
ReactDOM.render = render;
```
`react.js`
```javascript
function react(component) {
    // calling that fn
    let dom = component();
    console.log("....optimizing changes");
    return dom;
}
```


`Instructor cue`: Keeping HELLO component code on right side of vscode screen 
```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
        // -> component : a function that returns HTML
        function HELLO() {
            let age=30;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel and you are {age<18 ?"underage":"eligble"} </h1>;
        }
        // a method in REACTDOM -> puts the returned  HTML from componente in root element
        ReactDOM.render(<HELLO ></HELLO>, document.getElementById("root"));
    </script>
</body>

</html>
```

write this below code  for them

```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <script src = "./lib/react.js"></script>
    <script src = "./lib/reactDOM.js"></script>
</head>

<body>
    <div id = "root"></div>
    <script>

        function HELLO() {
            let name = "React";
            let age = 30
            return `<h1>Hello  ${name} Thanks Babel and you are ${age<18 ?"underage":"eligble"}</h1>`;
        }

ReactDOM.render(HELLO, document.getElementById("root"));
    </script>

</body>

</html>
```


### Explain these three Take Aways
* **Components:** In React, components are like special functions written in JavaScript. They return HTML-like code, which is what you see on a webpage.
* **JSX**: JSX is a cool feature in React that's a lot like using template strings. You can mix JavaScript logic with HTML-like code, and it all gets turned into regular HTML.
* **Starting the Code**: When you run your React app, it all begins with ReactDOM.render(). This function puts your main component onto the actual webpage for everyone to see. In other words, it's like placing your "Hello" component onto the screen and the content of Hello component is decided by it's reruned HTML


title: Props
description: Discussion of basic detail about Props.
duration: 2100
card_type: cue_card
---

## Props

In React, we use it to make websites interactive. Now, let's learn how we can make components act differently by giving them information.

Here's how it works:
We give components something called "props". Props are like properties that we give to components. We pass these props as objects, kind of like passing parameters

```javascript
<script type = "text/babel">
        function HELLO(obj) {
            let {age,occupation} = obj;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation} </h1>;
        }
        ReactDOM.render(<HELLO age = {35} occupation = {"mentor and SDE "}></HELLO>, document.getElementById("root"));
</script>
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/514/original/upload_3a5c83aa759fedde3fa4ddb2fa3ce43e.png?1699635530)

---
title: Component Composition
description: Discussion of basic details about the component composition in detail.
duration: 2100
card_type: cue_card
---
## Component Composition

In this section we will talk about concept of `component composition`.

### Anology :
In the LinkedIn example below, think of creating a comment list as similar to how LinkedIn organizes information on its comments page. You can break down the comment into smaller parts, just like LinkedIn has multiple components within a comment. For example, a comment could contain components for a profile picture, options menu (like three dots), and user information

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/516/original/upload_42b7a589753bea34470b27f115f6835a.png?1699635748)


**Question to learner:  Imagine you want to display the "HELLO" component five times and the "BYE" component once.**  

**Answer**: 
We will use `component composition`, which is a fancy way of saying we can combine smaller components to make bigger ones.

Imagine you have two parts of your app: a "HELLO" part and a "BYE" part. If you want to show "HELLO" five times and "BYE" once, you can combine them together to make a bigger component.

For example, we can create a new component called HELLO PARENT. This component will include five instances of the "HELLO" component and one instance of the "BYE" component. This idea of putting smaller components together to make a larger one is what we call component composition.


```jsx
<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
        // -> component : a function that returns HTML
        function HELLO(prop) {
            let {name,age} = prop
            return <h1>Hello {name} Thanks Babel is {age} old </h1>;
        }
        function BYE(){
            return <p>BYE Component</p>
        }

        function HELLOPARENT() {
            return <div>
                <HELLO name = {"Rohan"} age = {10}></HELLO>
                <HELLO name = {"Rajneesh"} age = {30}></HELLO>
                <HELLO name = "Krishna" age = {40}></HELLO>
                <HELLO ></HELLO>
                <BYE></BYE>
                </div>

        }
        ReactDOM.render(<HELLOPARENT></HELLOPARENT>, document.getElementById("root"));
    </script>
</body>
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/515/original/upload_4c0071f1727e30cb02ea4e927d07de0c.png?1699635619)


---
title: React rendering process
description: How react takes in JSX and convert that to UI.
duration: 2100
card_type: cue_card
---

`Instructor cue: In this section you have to only explain the steps of rendering  in react . You don't need to write the steps manually. Simply copy and paste the provided definitions and code snippets from the below  explaination

## How react render your application on dom 

**JSX Transpilation**:
Before React code can run in the browser, JSX (JavaScript XML) needs to be converted into plain JavaScript. This process is called JSX transpilation and is handled by a tool called `Babel`.

`Input`:

```js
 function HELLO() {
            let age=30;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel and you are {age<18 ?"underage":"eligble"} </h1>;
        }
```

`Ouput`

```js
function HELLO() {
  let age = 30;
  let name = "Jasbir";
  return /*#__PURE__*/React.createElement("h1", null, "Hello ", name, " Thanks Babel and you are ", age < 18 ? "underage" : "eligble", " ");
}
```

**Virtual DOM Creation**:
eact creates a virtual representation of the actual Document Object Model (DOM) in memory. This virtual DOM is a lightweight copy of the real DOM. React uses the React.createElement function to create elements, which are then used to construct the virtual DOM.

```js
const vdom ={
    type: 'div',

    props: {
        class: "container",
        children: [
            {
                type: 'h1', 
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
```

**Component Mounting**:
When React elements represent components, React initializes these components by instantiating their classes or functional components. This initialization process sets up the component's state, props, and other internal data in preparation for rendering.

```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: "button",
                            children : "1 Clicks"
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
```

**Render Step**:
React takes the created React elements and renders them into the actual browser DOM. It traverses the virtual element tree and generates corresponding DOM nodes, thereby creating the visual representation of the user interface on the webpage.
    
**DOM Update**:
After rendering the components, React updates the browser DOM to reflect the changes made. It adds the generated DOM nodes to the appropriate places in the document structure, establishing the initial layout of the user interface.
    
**Event Handling**:
React sets up event listeners on relevant DOM elements to handle user interactions, such as clicks or input changes. These event listeners ensure that specified event handlers are executed when triggered, allowing for interactive features within the user interface.


---
title: Rendering list from Data
description: Discussion of basic introduction of using the list in the react in detail.
duration: 2100
card_type: cue_card
---

## Rendering List from Data

Intially the list items are fetched using the simple for loop from the list and gets rendered on the browser.

```jsx
<div id = "root"></div>
    <script type = "text/babel">
        let statinoary = ["Pen", "Pencil", "Eraser", "Ruler"];
        
        // console.log(liItemsArr)
        
        function List() {
            return<div>
                <h2>List Items</h2>
                <ul>{statinoary.map((item) => {
                    return <li>{item}</li>
                })}</ul>
            </div>
        }

        ReactDOM.render(<List></List>, document.getElementById("root"));
    </script>
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/517/original/upload_0b90af9c88d82aaa1b7535a2cb1650cd.png?1699635846)

When you want to print a list it expects an array of string and that string code should be valid html, so when you map you get the valid html in the form of an array and then react internally spread that and then put it as li element.

---
title: Key Prop
description: Key Props help identify each item uniquely.
duration: 2378
card_type: cue_card
---

## Key Prop

**[Ask the learners]**
Do you see any mistake here?

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/518/original/upload_93a7ee3cb2e710a3513898f5e5c65fb1.png?1699635897)

`Instrcutor Queue`: Please mention these to below points 
-> Every child in a list should have a key prop. A unique value for each list item..
-> It also helps react to identify each item uniquely among sibbling in VDOM so it can effciently find the keys 


```jsx
<div id = "root"></div>
    <script type = "text/babel">
        let statinoary = ["Pen", "Pencil", "Eraser", "Ruler"];
        
        // console.log(liItemsArr)
        
        function List() {
            return<div>
                <h2>List Items</h2>
                <ul>{statinoary.map((item,idx) => {
                    return <li key = {idx}>{item}</li>
                })}</ul>
            </div>
        }
        ReactDOM.render(<List></List>, document.getElementById("root"));
    </script>
```
