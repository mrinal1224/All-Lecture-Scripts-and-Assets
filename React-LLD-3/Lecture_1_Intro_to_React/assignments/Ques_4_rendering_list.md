# Title: Rendering List of Items in React
## Problem Statment 

You are provided with a React code snippet that aims to render a list of stationary items. Your task is to complete the code by implementing the component responsible for rendering the list of stationary items.
Instructions:

1. Write a React component named `ItemList` that renders a list of stationary items provided in the `stationary` array.
2. Ensure that each item in the list is enclosed within an <li> element and has a unique key attribute assigned.
3. Use the map function to iterate over the stationary array and generate the list items dynamically.

## code stub 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';


function List() {
    let stationary = ["Pen", "Pencil", "Eraser", "Ruler"];
    let list2=["Hello" ,"Hi", "bi"]
    return (
        <div>
            <h2>List Items</h2>
            {/* Render the ItemList component here */}
            <ItemList list={stationary}/>
            <ItemList list={list2}/>
        </div>
    );
}

ReactDOM.render(<List />, document.getElementById("root"));

```


### solution
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
function ItemList({list}) {
    // Implement the ItemList component to render the list of stationary items here
    return (
        <ul>
            {list.map((item) => (
                <li >{item}</li>
            ))}
        </ul>
    );
}

function List() {
    let stationary = ["Pen", "Pencil", "Eraser", "Ruler"];
    let list2=["Hello Hi, bi]
    return (
        <div>
            <h2>List Items</h2>
            {/* Render the ItemList component here */}
            <ItemList list={stationary}/>
            <ItemList list={list2}/>
        </div>
    );
}

ReactDOM.render(<List />, document.getElementById("root"));

```


