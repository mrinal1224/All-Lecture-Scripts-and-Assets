

### Question 1
Which of the following statements is true when using React's Context API to manage state in a component hierarchy?

A) Context API cannot be used with functional components.  
B) Updating the context from a consumer component requires the use of a higher-order component or a wrapper component to provide the context values.  
C) Context API can be used to avoid prop-drilling between components that are far apart in the component tree.  
D) All context consumers re-render whenever the parent component re-renders, regardless of changes in context value.

**Correct Answer:** C

**Explanation:**  
The Context API is particularly useful for sharing data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Therefore, it is an ideal solution for avoiding prop-drilling, which involves passing props from parent to child at multiple levels just to reach a deep component. Options A and B are incorrect as Context API can certainly be used with functional components, and updating context from a consumer does not necessarily require a higher-order component. Option D is incorrect because not all context consumers re-render when the parent component re-renders; they re-render only when the context value actually changes.
