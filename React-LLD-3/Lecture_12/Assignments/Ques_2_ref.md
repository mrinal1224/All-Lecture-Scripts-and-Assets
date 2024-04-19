### Problem Statement

In a React application, you are tasked with building a component where a user can type comments into a textarea and submit them. The component should also display a count of the characters left, which is dynamically updated as the user types. However, the current implementation results in the entire component re-rendering whenever the user types a character, leading to performance issues, especially as the component complexity grows.

### Code Stub (Before Optimization)

```jsx
import React, { useState } from 'react';

function CommentBox() {
  const [comment, setComment] = useState('');
  const maxLength = 200;

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <p>{maxLength - comment.length} characters left</p>
    </div>
  );
}

export default CommentBox;
```

### Problem and Optimization Task

Your task is to optimize the `CommentBox` component by using the `useRef` hook to track the number of characters left without causing re-renders for the whole component every time the user types. This approach ensures that updates to the character count are efficient and do not impact the performance of other parts of the component.

### Hints

1. Utilize `useRef` to create a reference for the textarea element.
2. Update the count of characters left by directly manipulating the DOM in the `handleChange` function, thereby avoiding state updates and re-renders.
3. Ensure the initial character count is displayed correctly when the component mounts.

### Solution Approach

1. Import `useRef` from React.
2. Create a ref for the character count paragraph.
3. In the `handleChange`, update the inner text of this paragraph directly.
4. Set the initial text content of the character count paragraph in the useEffect to ensure it's correct on the first render.

### Optimized Solution

```jsx
import React, { useState, useRef, useEffect } from 'react';

function CommentBox() {
  const [comment, setComment] = useState('');
  const maxLength = 200;
  const charCountRef = useRef(null);

  useEffect(() => {
    charCountRef.current.innerText = `${maxLength} characters left`;
  }, []); // Only on mount

  const handleChange = (event) => {
    setComment(event.target.value);
    charCountRef.current.innerText = `${maxLength - event.target.value.length} characters left`;
  };

  return (
    <div>
      <textarea
        value={comment}
        onChange={handleChange}
        maxLength={maxLength}
      />
      <p ref={charCountRef}></p>
    </div>
  );
}

export default CommentBox;
```

### Test Cases

- **Test Case 1**: Verify that the initial character count is correct.
  - Expected: On initial render, the character count should display "200 characters left".

- **Test Case 2**: Type a few characters and check that the character count updates correctly without re-rendering other components.
  - Expected: Typing "Hello" should update the character count to "195 characters left", and there should be no console logs or other indications of a full component re-render.

- **Test Case 3**: Test boundary conditions, like when reaching the maximum character limit.
  - Expected: Typing up to 200 characters should update the count accurately to "0 characters left".

This solution uses `useRef` effectively to manage updates to the character count, optimizing the performance by minimizing unnecessary re-renders and directly manipulating the DOM where appropriate.