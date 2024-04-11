# Title

## Problem Statement:
Create a simple React application using React Router v6 that implements a single route with a redirect. When the user visits the /old-page route, they should be automatically redirected to the /new-page route.


## code stub 

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Replace with your actual component definitions
function NewPage() {
  return (
    <div>
      <h1>Welcome to the new page!</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Implement the route and redirect here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

## solution 
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function NewPage() {
  return (
    <div>
      <h1>Welcome to the new page!</h1>
      <p>You have been redirected from the old page.</p> {/* Optional bonus challenge */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/old-page" element={<Navigate replace to="/new-page" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

