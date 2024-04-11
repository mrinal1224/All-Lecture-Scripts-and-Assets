# Full Stack LLD: React-1: Introduction to React: JSX, Props, lists
---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---
## Agenda

* What is React & it's advantages
* Setting up react using CDN links
* components
* JSX -> Javascript and XML
* Props
* Component composition
* Rendering Lists

---
title: Challenges in modern frontend
description: Discussion of challenges faced in the modern frontend in detail.
duration: 2100
card_type: cue_card
---

## Challenges in Modern Frontend


`Instructor cue : Explore the single-page layout of LinkedIn and its diverse UI interactions. Identify various functionalities such as Home, My Network, Jobs, Messaging, and other `

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/489/original/upload_a8b0bac0a165c827242385575fafe404.png?1699630915)


**Ask A question to learners and collate there answers**

### Que What are the Challenges faced in the modern frontend and build a webapp like linkedin

**These are the major challenges:**

**Single Page Application (SPA) Challenges**: Websites are now behaving more like applications, where they don't reload the entire page but only specific parts of the UI. 

**Code Maintainability**:  As the web app becomes more complex, keeping the code organized and easy to understand becomes challenging. Collaboration among developers becomes important to ensure everyone is on the same page. Writing clear and readable code, breaking down the code into smaller parts, and adding comments help in maintaining the code. Additionally, testing the code regularly ensures that new changes don't break existing features, making it easier to fix issues and add new features in the future..

**Handling Complexity and Performance Optimization**: Websites like Facebook, Instagram, Twitch, and Flipkart have numerous dynamic components and micro-interactions, making the UI highly interactive. Managing this complexity while ensuring performance and responsiveness poses a significant challenge. This includes optimizing DOM manipulation, minimizing re-renders, and reducing the load on the browser.



`Instructor cue : Now talk about solution of each one by one`

### Solution
* Single Page Application : to develop a single-page application (SPA), we utilize technologies like the Fetch API or AJAX requests. These technologies allow us to fetch data from the server without needing to reload the entire page. Additionally, we leverage the History API, which enables us to change routes within the application without triggering a full page reload. This helps in creating smoother and more seamless user experiences. 


* **Code Maintainability** : Previously, tools like webpack, gulp, and grunt were used to address this issue. However, now tools like create-react-app or vite help us manage code maintainability more efficiently. These tools streamline the process of splitting the application into multiple parts, components, or files, and then combining them together seamlessly. This simplifies the development process and ensures that the codebase remains organized and easy to maintain]

* **Handling Complexity and Performance Optimization** : "Previously, we relied on the DOM API to manage user interface (UI) interactions. However, with the increasing complexity of modern web applications and the need for dynamic user experiences, using just the DOM API becomes insufficient. The level of interactivity demanded by today's applications often surpasses what can be efficiently managed solely through the DOM API, presenting challenges for developers to maintain and optimize performance.

**Take away** : There were no solutions to effciently update DOM  -> **React solves this problem** 

---
title: What Actually is React
description: Discussion of react in detail.
duration: 2100
card_type: cue_card
---

In this section we will understand what is the purpose of React 

`Instructor cue :  write this question and give the answer yourself`

## What is React?

**React:** It  has the algorithm which can efficiently tell you how to manipulate the UI . This is more-or less only purpose of react 

`Instructor cue : Now ask the question ->  `

### Why did i say User intefaces not DOM any idea ??

**ans** : Because react is generic it explain you how to update the UI and UI can be anything like `Mobile, Desktop, VR`  and there should be an associating library that will actual do the changes. Let's see some examples 

**Here are  different User intefaces and the library we need to use with react to do the changes:**


|         |              |
|:-------:|:------------:|
| Mobile  | React Native |
|   Web   |  React DOM   |
|   VR    |   React VR   |

### `Instructor cue : Now summarize the whole thing`

1. React: It's like a set of instructions that tells your web application how to change what you see on the screen.
2. React DOM: This is the tool that actually makes those changes happen on the webpage you're looking at.

---

### Why react is awesome ?[only to be covered in beginner batch]
`Instructor cue: only cover it for beginner persona`
* React vs other frameworks : It is used way more than any other frontend framework out there . You can also refer this [link](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js%2Csvelte)  
(![stack_overflow](https://hackmd.io/_uploads/SJE31zqsp.png)
)

* There are always a lot of openings for react developers -> entry level , intermmediate and senior level [link](https://www.google.com/search?q=react+developer+jobs&sca_esv=598503895&rlz=1C5CHFA_enIN1022IN1022&sxsrf=ACQVn0_Ekoj7OEitiFFsdwLWATc3cWd98A%3A1705301395877&ei=k9WkZaudNYD04-EPvdek2Aw&ved=0ahUKEwjrsr7f5t6DAxUA-jgGHb0rCcsQ4dUDCBA&uact=5&oq=react+developer+jobs&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHJlYWN0IGRldmVsb3BlciBqb2JzMg0QABiABBiKBRhDGLEDMggQABiABBiSAzIFEAAYgAQyBRAAGIAEMgUQABiABDIKEAAYgAQYigUYQzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIngxQ_AFYoAtwAXgBkAEAmAG6AqABqweqAQcwLjIuMC4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAhAQABiABBiKBRhDGLEDGIMBwgIIEAAYgAQYsQPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp)
*  There is a awesome ecosystem around react [link](https://github.com/enaqx/awesome-react?tab=readme-ov-file#react-renderers) 

---

title: Hello World in react with CDN 
description: Discussion of basic application in react in detail.
duration: 2100
card_type: cue_card
---
## Hello World in React 



`Instructor cue: Now emphasis that -> Let's start by understanding all the different parts involved in creating a React app. This will help us grasp the flow of the code better without diving into various technical jargons`

### Steps
* create `hello.html` file
```jsx
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge"> 
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

*  Add cdn link of react and reactDOM  : you can choose to open  the  link and show that react is nothing but js file 
```html
<head>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
</head>
```

* Write the Hello world component 
    * Root : it is the div in which the whole react application is rendered
    * `script`: in script all the  react code is written
    * `HELLO component` :  it is the component and component starts with Uppercase and in the return it will return HTML 
    * `ReactDOM.render`: This function is responsible for generating the HTML code for the `Hello` component and inserting it into the root element. 
root element
```jsx    
<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>
    <!-- single Page applcation : JS -->
    <script>
        function HELLO() {
            return <h1>Hello React </h1>;
        }
        ReactDOM.render(<HELLO></HELLO>, document.getElementById("root"));
    </script>
</body>
```
`Instructor cue: run the code in browser. It will give  error , now ask the students why are you getting the error`.

This just prints nothing on the browser as shown below:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/497/original/upload_72f4116cfcee76aa78c5781b70fa258b.png?1699633345)

**ask to learner**

`Que`: What are the languages that are understood by Browser ?
Ans : HTML , CSS , JS  cool 

**Ask the learner** : is the above code a valid JS ??

Answer : no, if that is the case now we will need a translator that can convert this code to valid JS code 

**solution**: As in the above function Hello which is returning something which is neither html and not the javascript. Hence we use the `Bable` transpiler to convert the code of the one language to another. Bable is a javascript transpiler to one language to another here it is JSX to JS 

`Instructor cue: here for further understanding you can take the learners to babel playground and paste the above component that will convert this code into js code `

*  Adding babel

```jsx
<!DOCTYPE html>
<html lang = "en">
<head>
    
     <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
    

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>
    <!-- we are telling that it is to be converted by babel from JSX to js -->
    <script type = "text/babel">
    -------
    react code 
    -------
    </script>
</body>

</html>
```
### complete code (for instructors reference)
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
       
        function HELLO(obj) {
            return <h1>Hello React </h1>;
        }

        ReactDOM.render(<HELLO></HELLO>, document.getElementById("root"));
    </script>
</body>

</html>
```


---

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
