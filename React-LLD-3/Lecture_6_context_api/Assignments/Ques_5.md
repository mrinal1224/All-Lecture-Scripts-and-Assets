
### Question 2
In a React application using the Context API, you have a context provider that wraps several levels of components. If you need to update the context value based on an action in a deeply nested consumer component, which pattern is most appropriate?

A) Use the `useState` hook in the provider to manage the context state and pass the state updater function down through context.  
B) Implement shouldComponentUpdate in the provider to prevent unnecessary re-renders.  
C) Use a global state management library like Redux instead of the Context API.  
D) Store the state in local storage and have each consumer update and read from there.

**Correct Answer:** A

**Explanation:**  
The most effective and common way to manage state within the context is by using the `useState` hook in the context provider. This approach allows the provider to pass down both the state and a function to update that state (`setState`) through the context. Consumers can then use this updater function to modify the state, which will trigger the necessary re-renders in other consumers that rely on this context. Option B does not directly address the issue of updating context from a consumer. Option C could be an overkill solution when simple context management is needed. Option D is not advisable as it misuses local storage for state management, which is not its intended purpose and also bypasses React's state management and rendering optimizations.