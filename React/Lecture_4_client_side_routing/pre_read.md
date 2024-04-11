---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---
## Agenda
* Intuition and requirement of client side routing
* Understanding React Router
* Setting up routes and links in a React Application
* Redirects , private route, 404 Page not found
* adding routing in the project
* Discussion about tailwindcss
* WatchList Page UI dicussion about the project 
* nested routes [postreads]
* programmatic redirect[postereads]
let's start.

---
title: Intution for Frontent Routing 
description: The client Server requests a response in the form of React Bundles
duration: 649
card_type: cue_card
---
## Req res cycle for a react app 
* Let us discuss the client server once again
* The browser sends the request for the page `linkedin.com`. The server returns a `React Bundled file`.
**Note**  Show the live LinkedIn website and visit different parts of the website to show how it works or changes
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/593/original/upload_07d2f2bf20afee593ee6172896d07768.png?1699678960)

### supposed behaviour of SPA

* For this kind of web apps 
-> The URL changes but the app doesn't reload
-> You need to have different routes for different page
* For the end user 
-> It should look like an app
-> load time should be small
* Let us say the browser is sending a request for the `Job` so it fetches the latest React bundle. But here exists a problem
* When we request data from the backend there are always two components UI and data.
* Initial Request for UI and Bundle: When the user accesses the application, the browser sends a request for the initial UI and a minimal bundle of the application.
* Initial UI and Placeholder/Loader: The application loads an initial UI, which may include placeholders or loaders for various components that are not immediately visible. These placeholders help create a better user experience by giving the impression that the application is responsive.
* User Interaction: When the user interacts with the application, such as clicking a button or navigating to a specific page, the application checks whether the necessary UI components for that action are already loaded.
* Conditional Data Request: If the UI components for the requested action are already loaded, the application only makes a request to the backend for the data needed for that action, rather than fetching the entire UI and bundle again. Initial few pages are loaded to avoid unnessary loading again and again on the user side.

![Request for webpage.png](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/594/original/upload_9e183e0bc1a9400de4dced059e963817.png?1699679084)


* Initially we will fetch a few UIs of the pages and when the user clicks on any buttons, it will simply request data if the page UI already exists.
* If you don't optimize it up to a level, the bundle size can be very big.

---
title: React Router DOM Setup 
description: Adding react router to a react app and sample code 
duration: 1940
card_type: cue_card
---

## React Router DOM

* Create a new project and navigate inside it.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/595/original/upload_aa4f31b760917d6b72428d89834be016.png?1699679122)
* install module react-router-dom using `npm i react-router-dom`
* import BrowserRouter from 'react-router-dom' in the `main.jsx` or the page to the lowermost component.
* Wrap `<App />` inside `<BrowserRouter></BrowserRouter>`

```jsx
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/596/original/upload_98ec82dca5689e31add65762abba19ad.png?1699679221)

* Create a folder named `poc` in `src` and create a file `Routing.jsx` inside it.
* Inside `Routing.jsx` create a navbar with `home`, `about`, and `listing`.
```jsx
function About() {
    return (
        <h2>About Page</h2>
    )
}
function Home() {
    return <h3>I am Home Page</h3>
}
function Listing() {
    return <h3>I am Listing Page</h3>
}
```
* Create Routes for different pages in the same file.
* `import {Routes, Route}` from 'react-router-dom'
* Use Route to specify paths. It takes two props `path` to define and whenever it has that path it renders the items mentioned inside the `element` prop.
* **Routes** is used to combine multiple `Route`. And Inside `Routes` only `Route` can be called.
```jsx
<Routes>
                <Route path = "/home/" element = {<Home></Home>}></Route>
                <Route path = "/about/*" element = {<About></About>}> </Route>
                <Route path = "/listing" element = {<Listing></Listing>}></Route>
    </Routes>
```

* There is a wildcard matching if the path is given as `path = "*"` which matches everything. The order of placing wildcard won't affect its working. It will always try to match the specific path first.
* We are adding Page Not Found using the wildcard.
```jsx
<Route path = "*" element = {<PageNotFound></PageNotFound>}> </Route>
                {/* path -> /* -. wild card  */}
```

```jsx
function PageNotFound() {
    return <h3>Page Not found</h3>;
}
```

---
title: Link
description: Using the Link in React Router DOM
duration: 3430
card_type: cue_card
---

## Link

* There is another tag called `Link` in "react-router-dom". It takes a prop `to="/Home"` where we can give some path and it will change the URL and the Page accordingly.
* On clicking these buttons, the page won't reload. The content of the page changes but the page doesn't reload.

```jsx
            <nav>
                <ul>
                    <li>
                        <Link to = "/home" >Home Page </Link>
                    </li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/listing">Listing</Link></li>
                </ul>
            </nav>
```
---
title: Template Routes
description: How to do dynamic routing in React
duration: 3620
card_type: cue_card
---

## Template Routes/ Dynamic Routes
* Let's say we are rendering user routes
* So based on the `id` of the user the path as well as the page is defined.
```jsx
<Route path = "/users/:id" element = {<Users isAdmin = {true}></Users>}> </Route>
```
* The hook called `usePrams()` provided by React Router DOM returns an object whatever template route you have given.
* This will return the path given after `../users/`.
* We are using props to define if the user isAdmin
```jsx
function Users(props) {
    console.log(props.isAdmin);
    let params = useParams();
    const userID = param.id;
    console.log("param", param);
    
    return <h3>I am a user component</h3>
}
```

## Application of Template route
To understsna it better let's take a realife usecase 
* Fake Store API - we want to make a simple get request for the users.
* Show demo to the learners how users and id returns the data in Fake Store API
**[Ask the learners]**
If the route is given how are you going to get the data and represent it in this HTML?
-> `useEffect` with an empty list
* Before rendering we will just check if the user data is not null then we will print the user data else we will provide some placeholder like `loading...`.
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
* These are called template routes or dynamic routes. Everything written like `:abc` can be derived with the help of `params.abc`, where `let params = useParams()`.

---
title: Redirecting Routes
description: Using the Navigate tag in Routes
duration: 4827
card_type: cue_card
---

## Redirecting Routes
* Let's say we want to redirect the user to another path when some specific path is given as input.
* `Navigate` component inside React Router DOM helps us achieve this.
```jsx
<Route path = "/abc" element = {<Navigate to = "/home"></Navigate>}></Route>
```

So in the above example if the user uses url `/abc` he/she will be redirected to the home page.





**Routing.jsx**

```jsx
import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";
function Routing() {
    return (
        <div style = {{
            textAlign: 'center',
            marginLeft: "50vw"
        }}>
            <h2>Routing Example</h2>
            <nav>
                <ul>
                    <li>
                        <Link to = "/home" >Home Page </Link>
                    </li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/listing">Listing</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path = "/home/" element = {<Home></Home>}></Route>
                <Route path = "/about/*" element = {<About></About>}> </Route>
                <Route path = "/listing" element = {<Listing></Listing>}></Route>
                <Route path = "/abc" element = {<Navigate to="/home"></Navigate>}></Route>
                {/* template routes -> dynamic routes  */}
                <Route path = "/users/:id" element = {<Users isAdmin = {true}></Users>}> </Route>
                <Route path = "*" element = {<PageNotFound></PageNotFound>}> </Route>
                {/* path -> /* -. wild card  */}
            </Routes>
        </div>
       
    )
}

function About() {
    return (
        <>
            <h2>About Page</h2>
            <Routes>
                <Route path = "company" element = {<Company />}> </Route>
                <Route path = "founders" element = {<Founder></Founder>}> </Route>
            </Routes>
        </>
    )
}
function Company() {
    return <h4> We are  a good firm</h4>
}
function Founder() {
    return <h4> We are Nice People </h4>
}

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

function Home() {
    return <h3>I am Home Page</h3>
}
function Listing() {
    return <h3>I am Listing Page</h3>
}

function PageNotFound() {
    return <h3>Page Not found</h3>;
}

export default Routing
```


**Note**
* All the component should have their own file. It's just for explanatory purposes that we have defined everything under the same file. 
* Use best practices and define a new file for each component.




## IMDB Clone React Website

### Project Description

We will be creating an IMDB clone, where we will fetch Real-time trending movies data and will show it in grid format, we will be designing the whole application by using Tailwind CSS.

### Features of the project

The following will be the features of our IMDB clone:

- The user will be able to view all the latest & trneding movies (IMDB API)
- User can create his own separate watchlist
- User can filter movies according to genre
- User can sort movies according to ratings
- Pagination will be implemented to move from one page to another to get updated data of other movies
- Search feature will be there for movies.
- We will be deploying this to netlify

### Wireframe 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/481/original/Screenshot_2023-09-20_170326.png?1695209627)


### Implementation

#### What is tailwind css?


Tailwind CSS is a highly popular and innovative utility-first CSS framework for web development. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind CSS focuses on providing a comprehensive set of utility classes that make it easier to create custom and responsive designs without the need for writing custom CSS.

**Following are features of Tailwind CSS:**

1. **Utility-First Approach:** Tailwind CSS adopts a utility-first approach, offering a vast collection of small, single-purpose utility classes that can be combined to create complex designs and layouts. This approach promotes code reusability and rapid development.
2. **Customizable and Configurable:** Tailwind is highly customizable through a configuration file, allowing developers to tailor the framework to match their project's specific design requirements. You can customize everything from colors and spacing to typography and breakpoints.
3. **Responsive Design Made Easy:** Creating responsive web designs is simplified with Tailwind CSS. It provides responsive variants of utility classes, enabling developers to adapt the layout and styling of their websites for various screen sizes and devices effortlessly.
4. **Performance Optimization:** Tailwind CSS is designed with performance in mind. It generates optimized CSS files by purging unused classes, resulting in smaller file sizes and faster loading times for web pages.
5. **Active Community and Ecosystem:** Tailwind CSS has a thriving community of developers who contribute to its growth and share resources. Additionally, there are numerous plugins and extensions available that enhance Tailwind's capabilities, making it suitable for a wide range of web development projects.

In this application we will be integrating tailwind to our react app.

- **tailwind.confing.js**

```javascript=
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

