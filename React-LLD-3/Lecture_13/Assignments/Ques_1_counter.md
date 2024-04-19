**Problem Statement:**

You are tasked with creating a simple counter component using React. The counter should be implemented as a class-based component and should have the following functionalities:

1. Display an initial count of 0.
2. Render two buttons: one for incrementing the count and one for decrementing the count.
3. Update the count accordingly when the buttons are clicked.

You are provided with a basic structure for the Counter component. Your task is to complete the component so that it functions as described above.

**Code Stub:**

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state here
  }

  // Implement methods here

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          {/* Display count here */}
        </div>
        <button onClick={/* Implement onClick for increment */}>Increment</button>
        <button onClick={/* Implement onClick for decrement */}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
```

**Instructions:**

1. Initialize the state inside the constructor of the Counter component. The state should have a property `count` initialized to 0.

2. Implement the `onClick` event handler for the increment button. This event handler should update the count by incrementing it by 1 when the button is clicked.

3. Implement the `onClick` event handler for the decrement button. This event handler should update the count by decrementing it by 1 when the button is clicked.

**Note:**
- You are not allowed to use functional components or hooks for this task. Only class-based components are permitted.
- Ensure that the component updates the count and re-renders properly when the buttons are clicked.


**Solution Approach:**

To solve this problem, we need to complete the Counter component by implementing its state management and event handlers. Here's the approach we'll take:

1. Initialize the state in the constructor: We'll initialize the state with a property `count` set to 0.

2. Implement event handlers:
   - Increment: We'll implement an `incrementCount` method that updates the count by incrementing it by 1.
   - Decrement: We'll implement a `decrementCount` method that updates the count by decrementing it by 1.

3. Bind event handlers: We'll bind the event handlers to the respective buttons in the render method.

4. Update the UI: We'll ensure that the UI displays the current count and updates accordingly when the buttons are clicked.

**Solution Code:**

```javascript
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          Count: {this.state.count}
        </div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
```

**Explanation:**

- We initialize the state inside the constructor with `count` set to 0.
- `incrementCount` and `decrementCount` methods are defined to update the count by incrementing and decrementing respectively using `setState`.
- Event handlers `incrementCount` and `decrementCount` are bound to the respective buttons in the render method.
- The UI displays the current count from the state, and it updates accordingly when the buttons are clicked.