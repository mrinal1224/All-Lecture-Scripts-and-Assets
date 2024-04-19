## Problem Statement:
You are tasked with creating a React component that fetches data from an API and displays it on the screen. Your component should handle loading and error states gracefully. You must implement a class-based component and include the `componentDidMount` lifecycle method to fetch the data.

### Instructions:
1. Implement the `componentDidMount` method to fetch data from the provided API endpoint when the component mounts.
2. Display a loading state while the data is being fetched.
3. Handle any errors that may occur during the data fetching process and display an error message accordingly.
4. Once the data is fetched successfully, display it on the screen.

### Code Stub:
```jsx
import React, { Component } from 'react';

class DataFetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Implement data fetching logic here
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {/* Display fetched data here */}
      </div>
    );
  }
}

export default DataFetchingComponent;
```

API Endpoint: `https://api.example.com/data`

Note: Make sure to replace `https://api.example.com/data` with the actual API endpoint you want to fetch data from.




## solution 
Solution Approach:
1. In the `componentDidMount` method, we will make a fetch request to the provided API endpoint.
2. While the data is being fetched, we will set the `loading` state to `true` to display a loading message.
3. If there's an error during the fetch request, we will catch the error and update the `error` state accordingly.
4. If the data is fetched successfully, we will update the `data` state with the fetched data and set `loading` to `false`.
5. In the render method, we will conditionally render the loading message, error message, or the fetched data based on the state values.

Solution Code:
```jsx
import React, { Component } from 'react';

class DataFetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {/* Display fetched data here */}
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetchingComponent;
```

### Explanation:
- In the `componentDidMount` method, we use `fetch` to make a GET request to the provided API endpoint.
- We handle the response using promise chaining. If the response is not okay (`!response.ok`), we throw an error.
- If the response is okay, we parse the JSON response and update the component's state with the fetched data.
- If any error occurs during the fetch process, we catch it and update the component's state with the error message.
- In the render method, we check the `loading` and `error` states to conditionally render loading, error, or fetched data.
