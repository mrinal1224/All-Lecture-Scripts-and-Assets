# Title : Implementing a 404 Page 
## Problem Statement
Create a simple React application using React Router v6 that implements a custom 404 page for "not found" routes. Any route that doesn't match your defined routes should display your custom 404 message.

Code Stub:

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Implement the route for Home and 404 handling here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <button onClick={() => window.location.href = '/'}>Go back to Home</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```