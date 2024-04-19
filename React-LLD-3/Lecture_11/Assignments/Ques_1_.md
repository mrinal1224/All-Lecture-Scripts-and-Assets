### Problem Statement

In a React application, a developer has created a component that calculates the sum of an array and displays it alongside other data. The component is re-rendering frequently due to state updates unrelated to the array, causing the sum calculation to be unnecessarily repeated. This leads to performance degradation, especially as the size of the array grows.

### Code Stub (Before Optimization)

```jsx
import React, { useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // Expensive calculation
  const calculateSum = (numbers) => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };

  const sum = calculateSum(numbers);

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default ExpensiveComponent;
```

### Problem and Optimization Task

Your task is to optimize the `ExpensiveComponent` by using the `useMemo` hook to prevent the unnecessary recalculation of the sum when the component re-renders due to updates in the `count` state. The sum should only be recalculated if the `numbers` array changes.

### Hints

1. Understand how `useMemo` works to memoize expensive calculations.
2. Consider when `useMemo` should recompute: specifically, think about the dependencies of `useMemo`.
3. The `useMemo` hook takes two parameters: a function and an array of dependencies.

### Solution Approach

1. Import the `useMemo` hook from React.
2. Wrap the `calculateSum` function call with `useMemo`, specifying `numbers` as the dependency.
3. Ensure that the memoized value is only recalculated when `numbers` changes.

### Optimized Solution

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]); // Dependency array

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default ExpensiveComponent;
```

### Test Cases

- **Test Case 1**: Check that the sum is initially calculated correctly.
  - Expected: Output "Sum: 15" when numbers are `[1, 2, 3, 4, 5]`.

- **Test Case 2**: Increment the `count` and verify that "Calculating sum..." does not print again, indicating no recalculation.
  - Expected: On clicking "Increment Count", only the count should increment without recalculating the sum.

- **Test Case 3**: Change the `numbers` array and verify the sum recalculates.
  - Expected: After changing `numbers` to `[10, 20, 30]`, the sum should update to "Sum: 60", and "Calculating sum..." should print again.

