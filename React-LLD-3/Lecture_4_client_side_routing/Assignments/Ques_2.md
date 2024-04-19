# Title :  Links in react router dom 
## Problem Statement:

Create a React application with a dynamic navbar using React Router v6 that links to the following routes:

* Home: Path: /home, renders "Home" content.
* Profile: Path: /home/profile, renders "Profile" content.
* Listing: Path: /listing, renders "Listing" content.

### Instructions:

1. Implement the <Navbar> component:
    * Create a new component named Navbar.js.
    * Import necessary components (Link from react-router-dom) and styles (optional).
    * Build the navbar structure using HTML elements like nav, ul, and li.
    * Use Link components from react-router-dom to create navigation links:
        * Each link should have a corresponding to attribute set to the appropriate route path.
        * Provide clear and descriptive link text using the children prop.
2. Integrate the <Navbar> component into the <App> component:
    * Import the newly created Navbar component in the App.js file.
    * Within the <BrowserRouter> component, render the <Navbar> outside of the <Routes> component hierarchy. This ensures the navbar is accessible on all routes.

## code stub 
```jsx 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Listing = () => <h1>Listing Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Implement the navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### solution 

```jsx
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home/profile">Profile</Link>
        </li>
        <li>
          <Link to="/listing">Listing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// App.js (updated)
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Listing = () => <h1>Listing Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> {/* Render the navbar outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

```