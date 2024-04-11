## template Routes
<!-- template route -->
## Problem Statement:

Create a React application using React Router v6 that implements the following functionalities:

1. Template Route:

* Define a template route with the path /users/:id.
* Pass the userId parameter to the route component using the useParams hook.

2. User Component:

* Implement the provided Users component, which fetches user data from https://fakestoreapi.com/users/:id based on the received userId and displays user information (username, name, phone).
## code stub : 
```jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Users(props) {
    // ... existing code from the prompt ...
}

function App() {
  return (
    <BrowserRouter>
      {/* Implement the template route and component here */}
    </BrowserRouter>
  );
}

export default App;

```

## solution
```jsx
function Users(props) {
    // console.log(props.isAdmin);
    let params = useParams();
    let [user, setUser] = useState(null);
    console.log("46", params)
    // https://fakestoreapi.com/users/2
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`)
            const userData = await resp.json();
            console.log(userData);
            setUser(userData);
        })()
    }, [])
    return <>
        {user == null ? <h3>...loading</h3> : <>
            <h4>User Name: {user.username}</h4>
            <h3> Name: {user.name.firstname + " " + user.name.lastname}</h3>
            <h4> Phone: {user.phone}</h4>
        </>}
    </>

}
```