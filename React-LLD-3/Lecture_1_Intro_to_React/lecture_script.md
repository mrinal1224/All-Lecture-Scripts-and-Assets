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
title: Ingesting react with CDN
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


<img src='https://i.ibb.co/X4r7hvY/Screenshot-2024-04-18-at-4-07-41-AM.png'>



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



---
title: Creating Hello World with React
description: Discussion of basic application in react in detail.
duration: 2100
card_type: cue_card
---

So Now as We have `React` Support , Now lets try to create the same `Hello World` program with React!


 We will use the React and ReactDOM libraries and achieve the Result

### HTML Template with React CDN (Without JSX or Components)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <!-- Adding React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>
<body>
    <!-- Very Important to create a root as all the things you will build will go inside the root -->
    <div id="root"></div>
    <script>
        // Get the root element where the React app will be mounted
        const rootElement = document.getElementById('root');

        // Create an element using React.createElement
        // React.createElement takes at least three arguments:
        // 1. The tag name of the HTML element to create
        // 2. The properties of the element (or null if none) Adding null here for now we will discuss props later
        // 3. The children of this element (or text content)
        const headingElement = React.createElement('h1', null, 'Hello from React');

        // Render the element to the DOM using ReactDOM
        // ReactDOM.render takes two arguments:
        // 1. The React element to render
        // 2. The DOM element where the React element should be mounted
        ReactDOM.render(headingElement, rootElement);
    </script>
</body>
</html>
```


You can see the Definitions of these methos here 

<img src='https://i.ibb.co/0jW1xmT/Screenshot-2024-04-18-at-4-33-19-AM.png'>

<img src='https://i.ibb.co/q1qPjg5/Screenshot-2024-04-18-at-4-35-29-AM.png'>



### Step-by-Step Explanation

1. **HTML Setup**:
   - The HTML structure includes loading React and ReactDOM from CDN. These are necessary for using React's APIs without local installations or build tools.
   - The `<div id="root"></div>` acts as the mounting point for the React application.

2. **Creating the Element**:
   - `React.createElement` is used to create a React element. This method creates an element which can be rendered into the DOM. Here, it is used to create an `<h1>` element with the text "Hello from JS".
   - you manually specify the tag name, properties (if any), and children directly.

3. **Rendering the Element**:
   - `ReactDOM.render` is used to render the React element into the DOM. It takes two arguments: the React element and the DOM container where the element should be mounted.
   - This call places the `<h1>` element within the `<div id="root"></div>` in the HTML.

This is How to can use Pure `React` and `ReactDOM` code to achieve the desired result

---
title: Props
description: Discussion of basic detail about Props.
duration: 2100
card_type: cue_card
---

Now at One Place we have given `null` in the code , as you pass any attribute in html you cannot directly do that over here in this form of code , so react Provides something known as props , You can make use of props to pass any attribute that you want


let's see this in the same code


To add a  `prop` to the `createElement` method in your existing code, let's introduce a `style` property that changes the text color of the `<h1>` element. Properties in React are similar to attributes in HTML but are more powerful due to their dynamic nature, You will witness theri power as we will move forward!

Here's the modified HTML document with the addition of the `style` property:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <!-- Adding React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        const rootElement = document.getElementById('root');

        // Creating the h1 element with a style property
        // The properties object now includes a 'style' key with a CSS object
        const headingElement = React.createElement('h1', { 
            style: { color: 'blue' } // This style object sets the text color to blue
        }, 'Hello from React');

        ReactDOM.render(headingElement, rootElement);
    </script>
</body>
</html>
```

### Explanation of the Changes:

1. **Adding the `style` Property**:
   - Inside the `React.createElement` call, the second argument is used for properties (props). Here, we've added a `style` prop.
   - The `style` prop expects an object where the keys are camelCased CSS property names and the values are the corresponding CSS values. In this case, `{ color: 'blue' }` changes the text color of the `<h1>` element to blue.

2. **Effect on Rendering**:
   - When the element is rendered to the DOM, the `style` property applies the CSS directly to the `<h1>` element, affecting its appearance on the webpage.


 **Output**


 The Output now has a style attribute which sets the color to Blue

 <img src='https://i.ibb.co/bssSfp6/Screenshot-2024-04-18-at-4-44-02-AM.png'>



---
title: JSX and Components
description: Discussion of basic details about the component composition in detail.
duration: 2100
card_type: cue_card
---


We are able to achieve the result what we wanted , but If you look at the code right now , you will feel there could have been a better way of doing all this , 
atleast I feel so! , 

I won't like to write React code like this 


There are several problems with this way of writing code and the List is endless - 

1. **Verbosity and Readability**:
   - Using `React.createElement` directly makes the code verbose and harder to read, especially as the application grows.

2. **Lack of Componentization**:
   - One of the core features of React is its component-based architecture, which allows developers to break down the UI into reusable, isolated, and manageable pieces called components. By not using components, you lose out on the benefits of modularity and reusability , We will see the compoenent Architecture in this class only that How it will improve the whole React Experience

3. **Maintenance and Scalability**:
   - Applications written without components are harder to maintain and scale. As the application grows, the complexity of managing state and interactions between UI elements increases. Components help manage this complexity by encapsulating functionality and separating concerns.

5. **Integration Challenges**:
   - you might find it difficult in this way to integrate third-party libraries or follow community best practices, which could slow down development and integration processes.


### Conclusion

While it's useful to understand how React works under the hood with `React.createElement`, for practical application development


Adopting JSX and a component-based architecture is highly recommended.

Let's see What is this `JSX` and React's Component Based Architechture


---
title: Component and JSX
description: Discussion of basic details about the component composition in detail.
duration: 2100
card_type: cue_card
---


To create a React program using JSX and functional components, let's first understand what a component and JSX are

### What is a Component?

To understand a React component using a real-life analogy, consider a **house** as an example. A house is built using various smaller components such as rooms, doors, and windows. Each of these components serves a specific purpose and can be designed individually yet function together as part of the larger structure.

### Breaking Down the Analogy:

1. **House (The Entire Application)**:
   - Think of the complete React application as a house. This house is made up of different parts—rooms, doors, windows, etc.—which together make the house functional and livable.

2. **Rooms (React Components)**:
   - Each room in a house can be thought of as a React component. Just like rooms, components are self-contained. A kitchen has all the appliances and space to cook meals, 
   
   A living room might have sofas and a TV for relaxation, and a bedroom provides furniture for sleeping and personal space.

   Similary You have a WashRoom for your hygiene needs

   A Game Room can be there to have fun as well , I am definetely Going to make one for me

   


So , In React, a **component** is independent piece of UI. It's like a JavaScript function that returns elements describing what should appear on the screen. Components can be simple and display static content (like a header or button), or complex and maintain internal state and lifecycle events (like a form or interactive dashboard). Components help in building encapsulated units of functionality that manage their own state, leading to organized and manageable code. They can be classified mainly into two types:

- **Functional Components**: These are simple JavaScript functions that return JSX.
- **Class Components**: These are ES6 classes that extend `React.Component` and can include more complex logic, lifecycle methods, and state management.


Class Components are now nearly deprecated beacuse of their complexity we will be using `Functional Components`

### What is JSX?

**JSX** is a syntax extension for JavaScript that looks similar to XML or HTML. JSX is used with React to describe what the UI should look like. It lets you write HTML-like code in your JavaScript files. 

Under the hood, JSX is transformed into `React.createElement` calls by preprocessors like Babel. This makes it easier to write and understand the UI code.

### Creating React Application Without Babel (JSX won't be recognized)

First, let's write the code without using Babel, where JSX will not be recognized:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        // Functional Component using JSX
        function App() {
            return <h1>Hello from React</h1>;
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
```

### Step-by-Step Explanation

1. **Creating a Functional Component**:
   - `function App() { ... }`
     - **App** is defined as a function, which makes it a functional component in React terms. In React, a functional component is simply a JavaScript function that returns React elements.
     - Components can be named using any valid JavaScript identifier but typically use PascalCase (where each word starts with a capital letter).

2. **Returning JSX from the Component**:
   - `return <h1>Hello from React</h1>;`
     - Inside the `App` function, JSX is returned. JSX allows you to write HTML-like syntax directly within JavaScript, which makes the structure of the component’s UI clear and readable.
     - **JSX Element**: The `<h1>Hello from React</h1>` is a JSX element. JSX compiles into `React.createElement()` calls behind the scenes, but it’s written like HTML for better readability and familiarity.

3. **Rendering the Component**:
   - `ReactDOM.render(<App />, document.getElementById('root'));`
     - This line of code is where React starts interacting with the DOM.
     - **ReactDOM.render**: This function is used to render a React element into the DOM in the supplied `container` and returns a reference to the component (or returns `null` for stateless components).
       - **First Argument `<App />`**: Here, the `App` component is instantiated. The JSX tag `<App />` translates to a React element representing the `App` component. This is similar to creating an instance of a class or calling a function.
       - **Second Argument `document.getElementById('root')`**: This specifies where the React application should be mounted in the DOM. In this case, it targets a DOM element with the ID `root`, typically a `<div>` element in your HTML.
     - This method tells React to wipe out any existing content inside the `<div id="root">` and replace it with the JSX returned by the `App` component, which in this case, is `<h1>Hello from React</h1>`.

### What is JSX Here?

- **JSX**: In this script, `<h1>Hello from React</h1>` and `<App />` are examples of JSX. JSX lets you expressively layout the component’s HTML structure within JavaScript with a syntax that resembles HTML. The JSX expression `<h1>Hello from React</h1>` represents an HTML `h1` element with text content "Hello from React".


Now you will notice that this code will not run and will not provide the expected Output!


It Gives a Blank page

<img src='https://i.ibb.co/x1CwMw0/Screenshot-2024-04-18-at-5-23-35-AM.png'>


Why is this Happeing?

Your Browser can Only understand HTML , CSS and JS code , but if you see JSX is a differnent format altoghther , So Your Browser is not able to understand what this code means and hence not able to understand and render the output.



---
title: Adding Babel to parse JSX
description: Discussion of basic details about the component composition in detail.
duration: 2100
card_type: cue_card
---


### Adding Babel and Using JSX

To use JSX, we need Babel to convert JSX into `React` calls. Here's how you can include Babel:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <!-- // Babel -->
    <script type="text/babel">
        // Functional Component using JSX
        function App() {
            return <h1>Hello from React</h1>;
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
```

### How Babel Reads JSX

Babel is a JavaScript compiler that transforms syntax. With the React preset, Babel converts JSX into `React.createElement` calls. For example, `<h1>Hello from React</h1>` in JSX is transformed by Babel into `React.createElement("h1", null, "Hello from React")`. This transformation makes the JSX syntax usable in browsers that only understand standard JavaScript.

### Explanation:

- Babel's inclusion as a script that processes all `<script type="text/babel">` tags allows us to write modern JavaScript and JSX directly in our HTML files.
- The `App` function is a simple React functional component that returns JSX. This function is then used within `ReactDOM.render` to mount our component to the DOM.
- The JSX inside `App()` looks like HTML and is more intuitive and easier to maintain than `React.createElement` calls.


So Now you have Idea about React , React DOM , Component , JSX and Babel

But this setup is ideal  for learning purposes. For production or larger projects, more sophisticated build setups is needed 

So in the Next class , We will be talking about Build Tools and will see how to set up react with Build Tools.


Start the Doubt Session.


