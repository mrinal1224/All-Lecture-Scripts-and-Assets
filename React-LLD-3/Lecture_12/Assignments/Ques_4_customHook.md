**Problem Statement:**

You are tasked with building a simple web application that fetches and displays data from an API using React hooks. Your task is to implement a custom hook called `useFetch` that will handle fetching data from the provided API endpoint and return the fetched data to be displayed on the UI. You are provided with a basic React component structure and a stub for the `useFetch` hook. Your goal is to complete the implementation of the `useFetch` hook and render the fetched data onto the UI.

**Instructions:**

1. Implement the `useFetch` hook inside the `useFetch.js` file.
2. Use the provided API endpoint (`https://api.example.com/data`) to fetch the data.
3. Handle loading, error, and success states appropriately within the hook.
4. Pass the fetched data to the `DataDisplay` component.
5. Display the fetched data on the UI by mapping over it and rendering each item in a list.
6. Style the UI using CSS according to your preference.

**Code Stub:**

```jsx
// useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code here
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

```jsx
// App.js
import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  return (
    <div className="app">
      <h1>Data Fetching App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="data-container">
          <h2>Data:</h2>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
```

**Note:**

- Ensure you handle loading, error, and success states appropriately.
- You may need to adjust the API endpoint URL depending on the actual API you're using for testing.
- Feel free to style the UI according to your preference using CSS.