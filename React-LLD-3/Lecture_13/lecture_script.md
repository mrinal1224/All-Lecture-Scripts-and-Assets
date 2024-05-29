---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---

- Class based Components
- Lifecycle of Components
- Functional vs Class based Components (COMPARISION)
- Higher Order Components
- Virtual Dom and all about React Rendering


---
title: Class Based Components
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---

 Let's start from scratch by explaining class-based components in React, including lifecycle methods, and then we'll compare them with functional components , So everyone will have better clarity on how these tow ways of creating components work in React

### Step 1: Introduction to Class-Based Components

Class-based components are one of the two main ways to define a React component. They are created using ES6 class syntax and extend from `React.Component`. 

#### Example Code

```jsx
import React from 'react';

// Define a class-based component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

### Explanation

This code defines a simple class-based React component that displays a greeting message. Here’s a step-by-step explanation of what each part of the code does:

### Importing React
```javascript
import React from 'react';
```
- This line imports the React library, which is necessary to define and use React components.

### Defining the Welcome Component
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
- `class Welcome extends React.Component`:
  - This defines a new class named `Welcome` that extends the `React.Component` class. By extending `React.Component`, the `Welcome` class becomes a React component.
  
- `render()`:
  - The `render` method is a required method in class-based components. It returns the JSX (JavaScript XML) that defines what the component's UI should look like.
  - In this case, the `render` method returns a JSX `<h1>` element that contains the text `Hello, {this.props.name}`. The `{this.props.name}` part is a placeholder that will be replaced with the value of the `name` prop passed to the `Welcome` component.

### Using Props
- `this.props.name`:
  - `props` are a way to pass data from a parent component to a child component. In this example, `this.props.name` refers to the `name` prop that is passed to the `Welcome` component. Whatever value is provided to the `name` prop will be inserted into the JSX and displayed inside the `<h1>` element.

### Exporting the Component
```javascript
export default Welcome;
```
- This line exports the `Welcome` component, making it available to be imported and used in other parts of the application.

### Example Usage
To see this component in action, you would need to import and use it in another file. For example:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

ReactDOM.render(<Welcome name="Alice" />, document.getElementById('root'));
```
- Here, the `Welcome` component is imported and rendered with the `name` prop set to "Alice". The output would be:
```html
<h1>Hello, Alice</h1>
```

This is a basic example of a class-based component in React, demonstrating how to define a component, use props, and render JSX.

### Step 2: Adding State to Class-Based Components

Class-based components can have state, which is a way to manage data that changes over time.

Let's take a simple counter Example and understand how state can be added with class based components.

#### Example Code

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```

### Explanation

 let's break down this code step by step with a focus on the state.

### Code Breakdown

1. **Importing React**:
   ```javascript
   import React from 'react';
   ```
   - This line imports the React library, which is necessary for creating React components.

2. **Defining the `Counter` Class Component**:
   ```javascript
   class Counter extends React.Component {
   ```
   - Here, a class called `Counter` is defined, which extends `React.Component`. This means `Counter` is a React class component.

3. **Constructor Method**:
   ```javascript
   constructor(props) {
     super(props);
     this.state = { count: 0 };
   }
   ```
   - **Constructor Function**: This is a special method used to initialize an instance of the `Counter` class.
   - **Props**: The `props` parameter allows the component to access properties passed from its parent component.
   - **Super(props)**: This line calls the constructor of the parent class (`React.Component`), enabling the component to use `this` to refer to itself.
   - **State Initialization**: `this.state` is set to an object with a single property `count`, initialized to `0`.

4. **Render Method**:
   ```javascript
   render() {
   ```
   - The `render` method is required in class components and is responsible for returning the JSX that will be displayed on the screen.

5. **JSX Return**:
   ```javascript
   return (
     <div>
       <p>Count: {this.state.count}</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Increment
       </button>
     </div>
   );
   ```
   - **JSX**: The `render` method returns a JSX structure.
   - **Displaying State**: The `<p>` element displays the current value of `count` from the component's state.
     ```html
     <p>Count: {this.state.count}</p>
     ```
   - **Button with OnClick Handler**: The `<button>` element has an `onClick` event handler.
     ```html
     <button onClick={() => this.setState({ count: this.state.count + 1 })}>
       Increment
     </button>
     ```
     - **Inline Arrow Function**: When the button is clicked, an arrow function is executed.
     - **Updating State**: The arrow function calls `this.setState` with an object that increments `count` by 1:
       ```javascript
       this.setState({ count: this.state.count + 1 })
       ```
       - `this.setState` is a React method used to update the component's state.
       - React will re-render the component whenever the state changes, causing the new `count` value to be displayed.

6. **Exporting the Component**:
   ```javascript
   export default Counter;
   ```
   - This line exports the `Counter` class, making it available for import in other files.

### How the state is working

- **State Initialization**: The state is initialized in the constructor with `{ count: 0 }`.
- **State Access**: The state is accessed in the `render` method via `this.state.count`.
- **State Update**: The state is updated when the button is clicked using `this.setState({ count: this.state.count + 1 })`.

Each time the state is updated using `this.setState`, React re-renders the component, displaying the updated count value. This is a fundamental concept in React, enabling interactive and dynamic UI updates.

### Step 3: Lifecycle Methods in Class-Based Components

 let's go through another example to understand the lifecycle methods in React class-based components using a more intuitive and real-world example of a simple `To-Do-List`

### Example Code

Imagine we are building a class-based React component for a simple to-do list application.

```javascript
import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    console.log('Constructor: Setting up initial state and bindings.');
  }

  componentDidMount() {
    console.log('Component Did Mount: Fetching initial to-do items.');
    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({
        todos: ['Learn React', 'Read a book']
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update: Checking if new to-do was added.');
    if (prevState.todos !== this.state.todos) {
      console.log('Updated To-dos:', this.state.todos);
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount: Cleaning up resources.');
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleAddTodo = () => {
    this.setState((state) => ({
      todos: [...state.todos, state.newTodo],
      newTodo: ''
    }));
  }

  render() {
    console.log('Render: Rendering the to-do list.');
    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
      </div>
    );
  }
}

export default TodoList;
```

### Detailed Explanation with Real-World Analogies

1. **Constructor**

   ```javascript
   constructor(props) {
     super(props);
     this.state = {
       todos: [],
       newTodo: ''
     };
     console.log('Constructor: Setting up initial state and bindings.');
   }
   ```

   - **Analogy**: Think of the constructor as the setup phase when you first move into a new house. You decide where the furniture goes and set up your daily routines.
   - **Purpose**: Initializes the state and binds event handlers. In this case, we set up an empty to-do list and an empty string for the new to-do item.

2. **Render**

   ```javascript
   render() {
     console.log('Render: Rendering the to-do list.');
     return (
       <div>
         <h1>My To-Do List</h1>
         <ul>
           {this.state.todos.map((todo, index) => (
             <li key={index}>{todo}</li>
           ))}
         </ul>
         <input
           type="text"
           value={this.state.newTodo}
           onChange={this.handleInputChange}
         />
         <button onClick={this.handleAddTodo}>Add To-Do</button>
       </div>
     );
   }
   ```

   - **Analogy**: This is like arranging your furniture and decorations so that your house looks nice. Every time something changes, you rearrange to keep it up-to-date.
   - **Purpose**: Defines the UI. It runs initially and any time the state or props change.

3. **Component Did Mount**

   ```javascript
   componentDidMount() {
     console.log('Component Did Mount: Fetching initial to-do items.');
     // Simulate fetching data from an API
     setTimeout(() => {
       this.setState({
         todos: ['Learn React', 'Read a book']
       });
     }, 1000);
   }
   ```

   - **Analogy**: This is like the moment after you've moved into your new house and you start receiving your mail and packages.
   - **Purpose**: Runs after the component is inserted into the DOM. It's perfect for fetching initial data. Here, it simulates fetching to-do items.

4. **Component Did Update**

   ```javascript
   componentDidUpdate(prevProps, prevState) {
     console.log('Component Did Update: Checking if new to-do was added.');
     if (prevState.todos !== this.state.todos) {
       console.log('Updated To-dos:', this.state.todos);
     }
   }
   ```

   - **Analogy**: Imagine every time you rearrange your furniture, you check if any new items have arrived and then decide where to place them.
   - **Purpose**: Runs after the component updates. It's useful for responding to changes in state or props. Here, it checks if a new to-do was added.

5. **Component Will Unmount**

   ```javascript
   componentWillUnmount() {
     console.log('Component Will Unmount: Cleaning up resources.');
   }
   ```

   - **Analogy**: This is like the process of moving out of your house. You clean up, pack your belongings, and make sure everything is in order.
   - **Purpose**: Runs just before the component is removed from the DOM. It's used for cleanup, like cancelling network requests or removing event listeners.

### Lifecycle Sequence in Action

1. **Constructor**: Initializes the state with an empty to-do list and empty new to-do item.
2. **Render**: Renders the initial UI, which shows a heading, an empty list, an input box, and a button.
3. **Component Did Mount**: Fetches initial to-do items after the component is mounted. After 1 second, it updates the state with the fetched to-dos.
4. **Render**: Runs again due to the state change and updates the UI with the fetched to-dos.
5. **Component Did Update**: Runs after the state update and logs the new to-do items.
6. **Render**: Runs whenever a new to-do is added via the input box and button.
7. **Component Will Unmount**: Would run when the component is about to be removed from the DOM, cleaning up any resources.

### Conclusion

Each lifecycle method has a specific purpose and is called at different stages of the component's existence. By understanding and using these methods appropriately, you can manage your component's behavior more effectively, just like managing the different phases of living in a house.

### Step 4: Functional Components with Hooks

Now, let's recreate the same examples using functional components and hooks and then we will draw a comparison between the two


### Example with Functional Components and Hooks

Let's rewrite the same to-do list example using functional components and hooks.

```javascript
import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    console.log('Component Did Mount: Fetching initial to-do items.');
    // Simulate fetching data from an API
    setTimeout(() => {
      setTodos(['Learn React', 'Read a book']);
    }, 1000);

    return () => {
      console.log('Component Will Unmount: Cleaning up resources.');
    };
  }, []);

  useEffect(() => {
    console.log('Component Did Update: Checking if new to-do was added.');
    console.log('Updated To-dos:', todos);
  }, [todos]); // Adding this useEffect to show component updation

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  }

  const handleAddTodo = () => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodo('');
  }

  console.log('Render: Rendering the to-do list.');
  return (
    <div>
      <h1>My To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
    </div>
  );
}

export default TodoList;
```

### Detailed Explanation

1. **useState Hook**

   ```javascript
   const [todos, setTodos] = useState([]);
   const [newTodo, setNewTodo] = useState('');
   ```

   - **Purpose**: Manages state in functional components. `useState` initializes state variables and provides a function to update them.
   - **Analogy**: Like setting up initial states and routines in a house, similar to the constructor in class components.

2. **useEffect Hook**

   ```javascript
   useEffect(() => {
     console.log('Component Did Mount: Fetching initial to-do items.');
     // Simulate fetching data from an API
     setTimeout(() => {
       setTodos(['Learn React', 'Read a book']);
     }, 1000);

     return () => {
       console.log('Component Will Unmount: Cleaning up resources.');
     };
   }, []);
   ```

   - **Purpose**: Manages side effects in functional components. `useEffect` runs after the initial render and any state or prop updates.
   - **Analogy**: Like fetching initial data when you first move into your house.
   - **Dependency Array**: `[]` ensures this effect runs only once, similar to `componentDidMount`.
   - **Cleanup Function**: `return () => { ... }` runs during the component unmount phase, similar to `componentWillUnmount`.

3. **Second useEffect Hook**
 Adding this useEffect to show component updation and compare with componentDidUpdate()

   ```javascript
   useEffect(() => {
     console.log('Component Did Update: Checking if new to-do was added.');
     console.log('Updated To-dos:', todos);
   }, [todos]);
   ```

   - **Purpose**: Runs when the `todos` state updates, similar to `componentDidUpdate`.
   - **Dependency Array**: `[todos]` ensures this effect runs whenever `todos` changes.

4. **Render**

   ```javascript
   console.log('Render: Rendering the to-do list.');
   return (
     <div>
       <h1>My To-Do List</h1>
       <ul>
         {todos.map((todo, index) => (
           <li key={index}>{todo}</li>
         ))}
       </ul>
       <input
         type="text"
         value={newTodo}
         onChange={handleInputChange}
       />
       <button onClick={handleAddTodo}>Add To-Do</button>
     </div>
   );
   ```

   - **Purpose**: Defines the UI, just like the `render` method in class components.

### Differences and Comparison

| Feature                    | Class Component                         | Functional Component                |
|----------------------------|------------------------------------------|-------------------------------------|
| **State Management**       | `this.state` and `this.setState`         | `useState`                          |
| **Side Effects**           | Lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) | `useEffect`                         |
| **Syntax**                 | ES6 class syntax                         | Functions                           |
| **Event Handlers**         | Bound in constructor or using arrow functions | Directly defined within the component |
| **Component Structure**    | More verbose and involves more boilerplate code | More concise and less boilerplate   |

### Why Functional Components are Better

1. **Simplicity and Readability**: Functional components are generally easier to read and write. They involve less boilerplate code and are more concise.

2. **Hooks**: Hooks provide powerful features that are not available in class components, such as `useState`, `useEffect`, `useContext`, etc. They allow you to reuse stateful logic without changing your component hierarchy.

3. **Avoiding `this` Keyword**: Functional components do not use the `this` keyword, which can be confusing and error-prone in class components.

4. **Better Performance**: Functional components can be more performant because they are stateless by default. With hooks, you can manage state more efficiently.

5. **Encapsulation of Logic**: Hooks allow you to encapsulate and reuse logic more easily. Custom hooks enable the extraction of complex logic into reusable functions.

### Conclusion

Both class-based and functional components have their places in React development, but functional components with hooks offer a more modern, simpler, and powerful approach to building components. They improve code readability, make it easier to manage state and side effects, and avoid common pitfalls associated with class-based components.

**Note to Instructor - Take a Break for 10 mins for learners to digest all of this and then move ahead**

---
title: Higher Order Components
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---

### Higher Order Components (HOCs) in React

Higher Order Components (HOCs) are an advanced technique in React for reusing component logic. HOCs are functions that take a component and return a new component with additional props or behaviors. They can be used to abstract and share functionality across different components without duplicating code.

#### Concept

A Higher Order Component is a function that takes a component and returns a new component.

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

#### Detailed Example

Let's create an example to understand HOCs better. We'll create a simple `withLoading` HOC that adds loading functionality to any component.

1. **Creating the HOC:**

```jsx
import React from 'react';

// Higher Order Component
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      // Simulating an async operation like fetching data
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoading;
```

2. **Creating a Wrapped Component:**

```jsx
import React from 'react';

const DataComponent = ({ data }) => {
  return (
    <div>
      <h1>Data Loaded</h1>
      <p>{data}</p>
    </div>
  );
};

export default DataComponent;
```

3. **Using the HOC:**

```jsx
import React from 'react';
import withLoading from './withLoading';
import DataComponent from './DataComponent';

const EnhancedDataComponent = withLoading(DataComponent);

const App = () => {
  return (
    <div>
      <EnhancedDataComponent data="Here is some data!" />
    </div>
  );
};

export default App;
```

#### Explanation

1. **HOC (`withLoading`):**
   - The `withLoading` function is a HOC that takes a component (`WrappedComponent`) and returns a new component.
   - The new component maintains its own state (`isLoading`) and simulates an async operation (like fetching data) in `componentDidMount`.
   - If `isLoading` is `true`, it renders a loading message. Otherwise, it renders the `WrappedComponent` with the passed props.

2. **Wrapped Component (`DataComponent`):**
   - A simple component that displays some data.

3. **Using the HOC:**
   - The `DataComponent` is wrapped with `withLoading` to create `EnhancedDataComponent`.
   - In the `App` component, `EnhancedDataComponent` is rendered, and it shows a loading message for 2 seconds before displaying the data.

### When to Use Higher Order Components

- **Code Reusability:** When you have logic that needs to be reused across multiple components, HOCs can help avoid code duplication.
- **Separation of Concerns:** HOCs can encapsulate specific behaviors or logic, making your components more focused on their primary concerns.
- **Enhancing Existing Components:** When you need to add additional functionality to existing components without modifying them directly.

### When Not to Use Higher Order Components

- **Complexity:** Overusing HOCs can make the code harder to understand and maintain due to the added layers of abstraction.
- **Performance Concerns:** Wrapping components in multiple HOCs can sometimes introduce performance issues due to the increased number of renders.


### Conclusion

HOCs are a powerful tool in React for reusing logic across components. However, they should be used judiciously, considering the complexity and performance implications. With the advent of hooks, many use cases for HOCs can now be achieved more elegantly, so it's essential to evaluate the best approach for your specific scenario.





