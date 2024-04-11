1. What is ref used for ?
a. Optimizing render cycle
b. storing values that can survive re-renders [*]
c. can create reference to redux 

2. Which of the following statements accurately describes the purpose and functionality of the useCallback hook in React ?

A) useCallback is used to memoize expensive computations so that they are only re-executed when necessary, optimizing performance in functional components.

B) useCallback is used to define a callback function and memoize it, preventing unnecessary re-creations of the function during re-renders of the component that owns it.[*]

C) useCallback is solely used for handling asynchronous operations in React components, ensuring that callbacks are executed asynchronously without blocking the main thread.

D) useCallback is used to trigger re-renders of a component when specific props change, allowing for efficient updates and rendering optimizations.

3. Which of the following statements accurately describes a rule for creating custom hooks in React?

A) Custom hooks must always start with the prefix "use" and can only be called within functional components.[*]

B) Custom hooks can be named anything as long as they return a function.

C) Custom hooks can directly modify the state of a component they are used in.

D) Custom hooks can only access React built-in hooks like useState and useEffect.
