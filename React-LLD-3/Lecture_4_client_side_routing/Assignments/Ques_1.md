# Title : Routing  
## Problem Statement:

In this React challenge, you'll implement routing using the react-router-dom library (version 6 or above) to seamlessly navigate between different UI components within your application.

### Instructions:

Import necessary components: Ensure that you import the required components (Home, Profile, Listing, and Product) from their respective files or modules.

Create Routes component: Within the App component, create a Routes component from react-router-dom to define the routing logic.

Define routes: Inside the Routes component, use the Route component to specify the paths for each of the desired routes:

/home/profile: Renders the Profile component.
/listing: Renders the Listing component.
"/" (empty path): Redirects to the Home component.
/home: Renders the Home component.
/product: Renders the Product component.

### Code Stub:
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Replace these with your actual components
const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Listing = () => <h1>Listing Page</h1>;
const Product = () => <h1>Product Page</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* Implement your routing logic here */}
    </BrowserRouter>
  );
}

export default App;

```

## solution 
```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ... (Component imports)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```