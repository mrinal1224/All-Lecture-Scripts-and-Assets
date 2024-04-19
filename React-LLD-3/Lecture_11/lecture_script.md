---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---
## Agenda
* React Perf
    * Code splitting ->
    * Lazy Loading ->
        * React.Lazy and
        * react suspense
        *  dynamic imports
* Memoization
    * useMemo
    * useCallBack
    * React.Memo
* Important concepts-> for optimization
    *  diffing /reconciler algorithm
    *  VDOM and real DOM
    * fiber architecture
---
title: Code peformance
description: Code peformance wrt to build file 
duration: 3000
card_type: cue_card
---


### Explanation

Before jumping into code splitting we will first understand the concept of **bundling** in react.

A React application can have multiple components, each spread across different JavaScript files. When you build the application, you want to bundle these separate files into a single file for optimized delivery to the browser. Webpack is a popular tool used for this purpose. It takes all your application's code, along with its dependencies, and packages them into a single bundle file, which is efficient for loading and executing in the browser.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/537/original/Screenshot_2023-09-20_183604.png?1695215370)

Webpack helps with bundling in a React application by efficiently combining multiple JavaScript files and assets into a single bundle. It optimizes resource delivery, reduces HTTP requests, and enhances the application's loading performance.

### Code splitting

Code splitting is a technique that allows a React application to break its code into smaller, separate files or "chunks." Instead of loading the entire application code upfront, only the necessary code is loaded when a specific feature or route is accessed. This improves initial loading times and resource efficiency, enhancing the overall user experience.

Code splitting is like fetching ingredients from the fridge only when you need them to make a sandwich. In React, it means loading parts of your application's code on-demand, improving performance by reducing initial load times and resource usage.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/538/original/Screenshot_2023-09-20_183611.png?1695215389)



First lets see how data is split and then we will see how react components can be split:-

**Splitting of Data:**


The `data.js` looks like this:-

```javascript 
export const moviesData = [{
    id : '1',
    name : 'Mission Impossible : Dead reckoning'
},
{
    id : '2',
    name : 'Oppenhiemer'
},
   {
    id : '3',
    name : 'Barbie'
   }
]
```

When you bundle your code, it combines all the imported modules, like data.js, into one optimized file. This makes it easier to manage and deploy your application because you only need to serve a single bundle file to the client browser.

In this the data is split using **dynamic importing** in JavaScript. Instead of loading the movie data immediately, the `getMovies` function uses the `import()` function to fetch the data from a separate file called data.js when needed. This is a form of code splitting, as it loads the data module only when required, which can help optimize performance by reducing the initial load time of your application.


### Explanation

Bundling of react components is done using **Lazy Loading**.

React components are bundled using Lazy Loading. Lazy Loading is a technique that allows you to load components only when they are needed, rather than upfront when the application initially loads.

Here's how it works:

* Each component (`Home`, `Products`, `Testimonials`, and `About`) is imported using the `lazy()` function, which dynamically imports the component files when they are required.
* This means that the code for these components is split into separate chunks and loaded on-demand, reducing the initial load time of your application.
* Lazy Loading helps optimize performance by loading only the necessary components when the user navigates to specific routes, improving the user experience and minimizing unnecessary network requests.

```javascript 
const Home = lazy(()=> import('./pages/Home'))
const Products = lazy(()=> import('./pages/Products'))
const Testimonials = lazy(()=> import('./pages/Testimonials'))
const About = lazy(()=> import('./pages/About'))
```

Now we will wrap the routes:-

The lazy loading of components is related to how routes are wrapped using React's Suspense and React Router's Routes components.

the lazy loading of components is related to how routes are wrapped using React's Suspense and React Router's Routes components.

* **Suspense:** The `<Suspense>` component is used to specify a fallback UI (in this case, `<h2>Loading...</h2>`) while waiting for dynamically imported components to load. It's a key part of lazy loading as it ensures a smooth user experience by displaying a loading indicator until the requested component is ready.
* **Routes:** Inside the `<Routes>` component, various routes are defined, and each route specifies a component to render when the corresponding URL is matched. These components, such as `<Home />`, `<About />`, `<Products />`, and `<Testimonials />`, are dynamically imported using lazy loading. This means that the components will only be loaded from the server when their respective routes are accessed by the user.

```javascript 
return (
    <div className="App">
      {/* <h1>These are the Movies</h1>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies.length>0 ? JSON.stringify(movies) : ''}</p> */}

      {/* <Suspense fallback={<h2>Loading...</h2>}>
       <BrowserRouter>

        <Navbar/>
    
       <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
       </Routes>
     
       
       </BrowserRouter>
       </Suspense> */}

       {/* <CompA/>
       <CompA dark />
       <CompA yellow/> */}


       <Controlled/>
       <Uncontrolled/>
     

      
    </div>
  );
```


---
title: Memoization in react
description: memoization of react component?
duration: 369
card_type: cue_card
---

## Memoization
* React provide different :  `Optimization techniques`

  * `component level caching` -> `React.memo` you can preventre-render of a componnet if the props are not changed.
  * `cache some solution `-> `useMemo` : you can prevent cacluclation / execution of a function if the dependency has not changes

  * `cache a reference  to a function`-> `usecallback` to cache  a function that can be used to prevent ot to be recreated on every re-render
### Disadavantages  of over-using it : 
* you will be using extra memory to store these cached thing and extra processing willl be required


###  useMemo
`cache some solution `-> `useMemo` : you can prevent cacluclation / execution of a function if the dependency has not changes
`useMemo.jsx`
```jsx
import React, { useState, useMemo } from 'react';

function CaclcMemo() {
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState('');

    /*****
     * you have lot of costly calculation  -> variable (does not change -> reuse the result )
     * 
     * */
    // some action
    const result = useMemo(() => {
        console.log("Result was calculated");
            return count ** count;
        }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Memoized Value: {result}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
        </div>
    );
}

export default CaclcMemo
```
 
### React.Memo
 `component level caching` -> `React.memo` you can preventre-render of a component if the props are not changed.

`Memo.app`
```jsx
import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <MemoGreeting name={name} />
        </>
    );
}

const MemoGreeting = React.memo(Greeting);
function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}
```
### useCallBack
 * `cache a reference  to a function`-> `usecallback` to cache  a function that can be used to prevent ot to be recreated on every re-render.

```jsx
import { useState, memo, useCallback } from "react";
const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const MemoizedHandleClick = 
        useCallback(() => {
            setCount(count + 1);
        },[count]);
    return (
        <div>
            <input type="text" value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <p>Count: {count}</p>
            <MemoChildrenComponent
                parentClick={MemoizedHandleClick}
                count={count}
            ></MemoChildrenComponent>
        </div>
    );
};

const MemoChildrenComponent = memo(ChildrenComponent);

function ChildrenComponent({ parentClick, count }) {
    console.log('ChildComponent is rerendered');
    return (
        <>
            <button onClick={parentClick}>child says Increment count from
                {count}</button>
        </>

    )
}

export default ParentComponent;
```


title: React rendering revisited
description: rendering revisited
duration: 3000
card_type: cue_card
---
## Different stages in LifeCycle of a react component
* creation -> mount 
* updation -> updation
* Deletion -> unmount

## How react render  your application on dom [mounting]

* **JSX transpilation** : JSX is converted into JS code and it is done by your `babel`.

`Input`:
```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

`Ouput`
```js
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return /*#__PURE__*/_jsx("div", {
    className: "App",
    children: /*#__PURE__*/_jsxs("header", {
      className: "App-header",
      children: [/*#__PURE__*/_jsx("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }), /*#__PURE__*/_jsxs("p", {
        children: ["Edit ", /*#__PURE__*/_jsx("code", {
          children: "src/App.js"
        }), " and save to reload."]
      }), /*#__PURE__*/_jsx("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      })]
    })
  });
}
```
*  **VDOM dom creation** : It a in memory repersentation of dom is created, `react.createElement` is used to create this virtually

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
* **Component mounting**: if the React elements represent components, React instantiates the component classes or functional components. This initializes the component's state, props, and other internal data, preparing them for rendering

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
*  **Render step occurs**: React takes the created React elements and renders them into the actual browser DOM. It traverses the virtual element tree and generates corresponding DOM nodes, creating the visual representation of the UI on the webpage.

*  **DOM Update**: React updates the browser DOM to reflect the rendered  components. It adds the generated DOM nodes to the appropriate places in the document structure, creating the initial UI layout

* **Event Handling**: React sets up event listeners on the relevant DOM elements to handle user interactions, such as clicks or input changes. This ensures that the specified event handlers are executed when triggered, allowing for interactivity within the UI.

## Take Aways 
* JSX was developed just as a syntax sugar
* VDOM -> a js object that represent the UI

## How react effciently update the UI -> 
* **State Change**:Imagine a button in your React application. When a user clicks it, the component's state changes, triggering a cascade of updates. This change could be anything from updating a counter to toggling a component's visibility.

* **New Virtual DOM** : React doesn't directly manipulate the real DOM in the browser. Instead, it creates a new VDOM. This virtual DOM is a lightweight blueprint reflecting the current state of your UI, including all the changes triggered by the state update.

* **Diffing**: React employs a clever `diffing algorithm`. This algorithm compares the old virtual DOM (before the state change) with the new virtual DOM (after the change). It meticulously analyzes each element, attribute, and text node to `identify the minimal set of changes` needed to bring the real DOM in sync with the updated state

* ***Batching**: React doesn't perform DOM updates one by one. Instead, it batches multiple changes together. This is like grouping edits into a single transaction before applying them. Batching avoids unnecessary DOM reflows and repainting, which can be expensive and slow down the browser.

* **Reconciliation**:Once the batch is ready, React performs the actual reconciliation. It takes the minimal changes identified in the diffing step and applies them to the real DOM in the browser. This involves updating text content, adding or removing elements, and modifying attributes, but only for the affected parts