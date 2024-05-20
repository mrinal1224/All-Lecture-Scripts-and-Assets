## 1. How does react Work?

React is a JavaScript library for building user interfaces using a component-based architecture. It divides the UI into reusable components, each managing its own state and lifecycle. React uses a virtual DOM to efficiently update the real DOM, minimizing performance costs. It follows a declarative approach, where developers describe how the UI should look for different states, and React handles the updates. Data flows unidirectionally from parent to child components, making state management more predictable.

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

This code defines a simple counter component using the useState hook to manage its state.

## 2. Why don't we update the state directly?

In React, we avoid updating the state directly to ensure predictable and efficient updates. Direct state manipulation can lead to unexpected behavior and bugs because React relies on state management functions, like setState or hooks such as useState, to know when to re-render components. These functions trigger the reconciliation process, where React compares the current state with the new state and updates the virtual DOM accordingly. Direct state updates bypass this mechanism, leading to inconsistencies between the UI and the underlying state.

Here's an example to illustrate this:

```javascript
// Incorrect way - directly modifying the state
this.state.count = this.state.count + 1;

// Correct way with useState hook
const [count, setCount] = useState(0);
setCount(count + 1);
```

Using these methods ensures React is aware of the changes and can properly manage re-rendering.

## 3. Compare functional components with class components in React.

Functional components are simpler and are written as JavaScript functions. They receive props as an argument and return JSX. They were initially stateless, but with the introduction of hooks (e.g., useState, useEffect), functional components can now manage state and side effects.

```javascript
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Class components are ES6 classes that extend React.Component. They have more boilerplate code and use this.state to manage state and lifecycle methods like componentDidMount for side effects. They can access props via this.props.

```javascript
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

## 4. Describe the main advantages of using React hooks over class components and the useState and useEffect hooks.

React hooks offer several advantages over class components:

1. Simpler Syntax: Hooks simplify state and lifecycle management in functional components.
2. Enhanced Reusability: Custom hooks make it easy to reuse stateful logic.
3. Better Separation of Concerns: Group related logic together, improving code organization.
4. No this Binding: Avoids confusion with this keyword in classes.

## 5. Compare the usage of inline styles in React with inline styles in regular HTML.

## Q Describe the concept of React component lifecycles and how they work in different phases

## Q Explain the difference between the real DOM and the virtual DOM in the context of React

## Que71 What role does the render method play in React?

## Que34 Explain JSX in react.

## Que35 Explain controlled and uncontrolled components in react.

## Que36 Why do we use key in react?

## Q How will you pass data from one component to the other in React?

`Answer` : The real DOM is the actual tree-like structure of HTML elements in the document, while the virtual DOM is a lightweight copy of the real DOM, used for efficient updates in React.

## Q How does React works ?(react lead)

## Q If React.createElement() is not available, how would you create a polyfill for it, and what would be its basic implementation?(react lead)

## Q Compare and contrast Webpack and Rollup in terms of their usage, features, and how they optimize and bundle JavaScript code.(react lead)

## Q Suppose we have a child component with 3 input fields namely "Firstname", "middlename" and "lastname". There is a parent component with a submit button. On clicking the submit button data in the child component should be validated. Explain how you will achieve this scenario?

## Q What are hooks and its types?

## Q Write a normal useState and useEffect hook?

## Q Define dependency array?

## Que Explain lifecycle methods?

## Que How do you handle all lifecycle methods in functional components??

## Que Define Fragments?

## Que What is redux?

## Que Explain core principles of Redux?

## Que Why we use redux over local storage?

## Que21 Explain about Mounting in Detail in React?

## Que22 Explain about Updating in Detail in React?

## Que24 Difference between componentdidMount, componentDidUpdate and UseEffect?

## Que25 Pass the data from Parent component to child component in React using an example.

## Que27 Explain closures in react.

## Que28 How do you implement authorization in React?

## Que29 Why do we need Redux if we just declare states globally?

## Que30 Create a web application in React Similar to Myntra page. You are given APIs to get the records

## Que31 If we have data of 1 lakh people and backend is sending the data without pagination, how will you optimise the rendering in frontend?

## Que32 Explain lazy loading.

## Que33 How do you implement infinite scrolling?

## Que37 Explain context API in react.

## Que38 What are the different methods to optimise an application in react.

**Answer** : The learner told the following methods

1. Memoization
2. Virtualization
3. Lazy Loading
4. Debouncing/Throttling

## Que39 Design a tab component which when clicked present the information about the particular tab. Only the active tab information should be visible.

## Que40 How will you handle errors in React?

## Que41 : In a React application utilizing Redux for state management, please describe how you would accomplish the following two tasks:

1. Fetching data from an API and integrating it into a component using Redux.
2. Implementing a feature where clicking on a row of data opens that specific row in a new browser tab.

## Que How will you implement caching in React?

## Que43 What is higher order components in react with examples?

## Que44 Describe the purpose of state and props in React components.

## Que45 : How does Webpack facilitate the conversion of HTML files, and what is its role in a modern web development workflow?

## Que46 : Describe the different methods for transferring data from a parent component to a child component in React.

## Que47 : What is Server-Side Rendering (SSR) in React, and why might you choose to use it in your application?

## Que48 : What is Next.js, and how does it simplify server-side rendering in React applications?

## Que49 : How can you perform unit testing in a React application?

## Que50 : Error boundaries in React

## Que51 : What are CSS preprocessors like SASS or LESS, and how can they be integrated with a React project?

.

#### Que : Explain the concept of memoization and how it can be used to optimize functional components in React.

## Que53 : How can you handle routing in a React application?

## Que54 : What are the key differences between React and React Native?

## Que55 : Describe the concept of component composition in React. How can you use it to create complex user interfaces from smaller, reusable components?

## Que56 :Create a React component for a counter that displays a number and allows users to increment or decrement it with two buttons.

Requirements:

- The counter should start at 0 when the component is first rendered.
- Display the current count on the screen.
- Implement two buttons, one for incrementing the count and one for decrementing it.
- Clicking the "Increment" button should increase the count by 1.
- Clicking the "Decrement" button should decrease the count by 1.
- The count should not go below 0.

## Que57 When and why would you use the useCallback hook in a React component ?

## Que58 What are React hooks, and why were they introduced in React?

## Que59 Explain strategies for optimising the search functionality on a web page.

## Que60 : Discuss the lifecycle of a React component. Describe the different phases in a component's lifecycle and explain when lifecycle methods like componentDidMount and componentWillUnmount are called ?

## Que61 Create a React-based book library application with CRUD (Create, Read, Update, Delete) operations. You should implement the following features:

1. Display a list of books with their titles, authors, and genres.
2. Add a new book to the library with details.
3. Edit the details of an existing book.
4. Delete a book from the library.
5. Search for books by title, author, or genre.

You can provide a basic structure or framework for the React app and ask candidates to implement the CRUD operations and user interface. This question assesses a candidate's ability to work with React components, state management, and handling user input.

## Que62 You have access to an API that provides data about products. Design and implement a React component that fetches this data and displays it in a tabular format. Your component should allow users to sort and filter the data. Describe how you would structure and code this component, and what considerations you would take into account when dealing with data fetching and rendering in a web application

## Que63 You have an API that provides a large dataset of information. Your task is to design a web page that displays this data in a table format, with a constraint of showing only 100 entries per page.How would you approach this task, and what technologies or techniques would you use to achieve this user-friendly presentation of the data?

## Que64 Explain the fundamental differences between client-side rendering (CSR) and server-side rendering (SSR) in web applications. How do these two approaches impact aspects such as initial page load, search engine optimization (SEO), and user experience? Provide specific use cases where one approach might be more advantageous than the other.

## Que65 Design a React component with five buttons.Implement a feature that changes the color of a button when clicked. Ensure the color change is visually appealing and intuitive. Allow users to reset all button colors.

## Que66 Create a React component for a shopping cart. Design a mechanism to add and remove products dynamically. Display the total quantity and price of items in the cart. Ensure a smooth user experience with real-time updates.

## Que67 Discuss best practices for optimizing change detection when working with complex component hierarchies

## Que68 Detail your approach to testing applications, covering unit tests, integration tests, and end-to-end testing. Discuss tools and methodologies employed.

## Que69 Describe how you ensure the security of your react applications, covering topics like data protection, authentication, and securing against common web vulnerabilities.

## Que70 : Could you define and explain the concept of progressive rendering?

## Que72 What is the significance of “Concurrent Rendering” in React, and how does it function?

## Q73 Make a form and write validation in reactJs?

## Que -1 : Interview Question: Design a chessboard application using React with the following milestones:

1. Milestone 1: Design a Chessboard Implement a React component to render a chessboard. The chessboard should have an 8x8 grid with alternating black and white squares, following the standard chessboard pattern.
2. Milestone 2: Place a Pawn Anywhere on the Board Allow users to place a single pawn anywhere on the chessboard by clicking on a square. When a square is clicked, a pawn should appear on that square.
3. Milestone 3: Place Multiple Pawns Extend the application to support placing multiple pawns on the chessboard. Users should be able to place additional pawns on different squares as desired.
4. Milestone 4: Move Multiple Pawns with Drag and Drop Enhance the application to enable users to move multiple pawns using drag and drop. Users should be able to click and drag a pawn from one square to another, effectively moving the pawn to the new position on the chessboard.
   Follow-up Question: Explain the usage of useEffect and useState() in React and how they are beneficial in this chessboard application.
   Note: - The interviewer requested to create the chessboard without using loops. - The chessboard is limited to an 8x8 grid for simplicity, but the implementation can be extended to a larger board if needed.

**Follow-up Question: Explain the usage of useEffect and useState() in React and how they are beneficial in this chessboard application.**

- **Answer:**

- `useState()`: It is a React hook used for state management within functional components. By using useState(), I was able to create and maintain the state of the chessboard, such as keeping track of pawn positions, board changes, etc.
- `useEffect()`: This hook enables performing side effects in functional components, like updating the state after a component has rendered. In the chessboard application, useEffect() helped me update the board whenever there was a change in the state (e.g., pawn placement or movement).

Exact code given by learner

```jsx
import React, { useState,useEffect } from 'react'
import "./Board.css"

function Board() {
const n=8;
const m=8;
// const [chessBoard,setChessBoard]=useState([])
// let chessBoard=[]
// const res=[]
const res=new Array(n).fill(0).map((item)=>new Array(m).fill(1))
const data=[{'colidx':2,'rowidx':2,'text':"P"},{'colidx':3,'rowidx':3,'text':"K"}]
// for(let i=0;i<n;i++){
// const row=Array.from({length:m})
// res.push(row)
// }
// chessBoard.push(res)
// useEffect(()=>{

// },[])
console.log(res)
const handleClick=(colidx,rowidx)=>{
console.log(colidx,rowidx)
}

return (
<>

{res.length &&
res.map((row,rowidx)=>{
// console.log(rowidx)
return(
<div className='row' key={rowidx}>
{row.map((col,colidx)=>{
console.log(col,colidx)
return(
<div key={colidx} onClick={()=>handleClick(colidx,rowidx)} className={`${(rowidx+colidx)%2?"black":"white"}`}>
{/* {(rowidx+colidx)%2?"black":"white"} */}
{/* {(rowidx==3 && colidx==3)?"P":""} */}
{data.map((item)=>(colidx==item.colidx && rowidx==item.rowidx)?item.text:'')}
</div>
)
})}
</div>
)
})
}
</>
)
}

export default Board .black{
background-color: black;
height:30px;
width:30px;
}

.white{
background-color: white;
height:30px;
width:30px;
}
.row{
display: flex;
}
```

Overall, the application uses React's inbuilt functionalities like useState(), useEffect(), and the drag and drop feature to create a dynamic and interactive chessboard, allowing users to place and move pawns with ease. Additionally, the design avoids explicit loops for board creation as per the interviewer's request.

## Q Student Registration

Test 1:  
Create a student registration page.

Fields are : first name, last name, dob, email, phone number, state, city, pincode, password, confirm password, profile image.

state city value are master driven, city master must have the reference of State master.

Apply all the necessary validation on input at front-end & server side both.

Entry with same phone number or email not allowed.

Create a list page for admin to check the details by various filter like date range, phone number , email, name.

Allow admin to edit/delete the student entry.

## Que26 Design an increment counter.
