### Problem Statement

In a React application, there is a `ListItem` component that renders individual items in a list. This component receives properties from its parent but often re-renders unnecessarily because its parent component’s state changes frequently. Although the properties of the `ListItem` component (like the item text) do not change often, the component still re-renders every time the parent updates, leading to suboptimal performance.

### Code Stub (Before Optimization)

```jsx
import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

function ListItem({ text }) {
  console.log('Rendering', text);
  return <div>{text}</div>;
}

export default List;
```

### Problem and Optimization Task

Your task is to optimize the rendering of the `ListItem` component by using `React.memo` to prevent unnecessary re-renders. The goal is to ensure that `ListItem` only re-renders when its own props change, not when unrelated state changes occur in its parent component.

### Hints

1. Understand how `React.memo` can be used to optimize the rendering of components based on props changes.
2. Consider what props `ListItem` depends on and how to ensure they are correctly memoized.
3. `React.memo` wraps a component to create a memoized version of it.

### Solution Approach

1. Import `React.memo` from React.
2. Wrap the `ListItem` component with `React.memo` to prevent it from re-rendering unless its props change.
3. Ensure the implementation correctly checks for prop changes, which, in this simple example, should be straightforward since `ListItem` only receives `text`.

### Optimized Solution

```jsx
import React, { useState } from 'react';

function List() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <MemoizedListItem key={index} text={item} />
      ))}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

const ListItem = React.memo(function ListItem({ text }) {
  console.log('Rendering', text);
  return <div>{text}</div>;
});

const MemoizedListItem = React.memo(ListItem);

export default List;
```

### Test Cases

- **Test Case 1**: Check initial rendering to confirm that all list items render correctly.
  - Expected: The console should log "Rendering Apple", "Rendering Banana", "Rendering Cherry".

- **Test Case 2**: Increment the counter in the parent `List` component and verify that `ListItem` components do not re-render if their props (`text`) haven't changed.
  - Expected: Clicking "Increment Counter" should only update the counter and not cause any logs for re-rendering the list items, confirming that `MemoizedListItem` isn't being re-rendered unnecessarily.

- **Test Case 3**: Add a new item to the `items` array and ensure only the new item triggers a render.
  - Expected: Adding "Date" to the list should log "Rendering Date", but should not cause re-render logs for existing items.

Using `React.memo` in this manner ensures that the component’s performance is optimized by avoiding unnecessary renders when the parent component's state changes do not affect the child components' props.