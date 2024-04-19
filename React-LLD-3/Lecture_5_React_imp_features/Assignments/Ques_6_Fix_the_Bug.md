## Fix The Bug


### Problem Statement
The `Counter` component should allow users to increase a score by either 1 or 3, depending on which button is clicked. However, the "+3" button does not function correctly and only increments the score by 1 instead of 3. Identify and fix the bug to make the component work as intended.



### Code Stub (with the Bug)
```jsx
import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
```



### Hints to Solve the Problem
1. **React State Updates**: Understand that state updates might be asynchronous. Using the state directly from the previous render might lead to outdated values being used.
2. **Using Updater Functions**: Use updater functions with `setScore` to ensure that you're working with the most current value of the state.
3. **Code Review**: Look at how `increment` is called in the "+3" button's `onClick` handler and think about how React batches updates during events.

### Solution Approach
1. Modify the `increment` function to take a parameter that defines how much the score should increase by.
2. Pass a callback function to `setScore` that receives the previous state and correctly updates based on it, rather than relying on the stale `score` from the closure.

### Corrected Code
```jsx
import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment(amount = 1) {
    setScore(prevScore => prevScore + amount);
  }

  return (
    <>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(3)}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
```

### Test Cases to Verify the Correct Solution
1. **Initial Score Check**: When the component first loads, ensure that the score is initially set to 0.
2. **Single Increment Check**: Click the "+1" button and verify that the score changes to 1.
3. **Triple Increment Check**: Click the "+3" button and verify that the score increments by 3 from whatever the current score is (e.g., from 0 to 3, from 3 to 6).
4. **Multiple Clicks**: Click the "+1" button three times and the "+3" button once, and ensure the score reflects the expected sum (which should be 6 if starting from 0).

