# Full Stack LLD: React-5: context API and it's usecases

---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---

## Agenda
* Prop Drilling
* Context API
* Add Context API to our Project
* Disadvantage of context API
* When to use Context API/REDUX

### Setup for Understanding Prop Drilling
* Let us we add Cart and User Components to the folder.
* Add routes for these two components to the `Home.jsx`
* Navigate to Navbar and add Links to Home, Users, and Cart.
* Add styling to Navbar in App.css
* Add minimal content in the Cart and Users
*  Now go to Page 3 on the Home page and from there visit users and back to the home page.
* Let us build a component tree for our Application

**Cart.jsx**

```javascript
import React from 'react'

function Cart() {
  return (
    <h1>Cart</h1>
  )
}

export default Cart
```

**User.jsx**
```javascript
import React from 'react'

function User() {
    return (
        <h1>User</h1>
    )
}

export default User
```

**Routing in App.jsx**

```javascript
<Route path = "/cart" element = {<Cart></Cart>}></Route>
<Route path = "/user" element = {<User></User>}> </Route>
```

**Navbar**

```javascript
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div
    className = 'navbar'
    >

      <Link to = "/">Home </Link>
      <Link to = "/user">Users</Link>
      <Link to = "/cart">Cart</Link>
    </div>
  )
}

export default NavBar
```


### Component tree for the App
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/057/012/original/upload_be375aac43be22e663e0f16167b918cd.png?1700132317)


### Case Study : Issue with Pagination 

[Ask to learners]
**Que Let's say i go to page 3 and then  from home page to users  and return back what do you think happens ??**
Ans: when we come back pagination is again reset to page number 1  

**Reason**
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/057/014/original/upload_2812b17564fd227c8948c7a03fd84859.png?1700132466)
* We have Route and when Route finds a match it removes the current page and adds another page.
* So in our case when it finds users it removes home and when we come back home, the user's page is removed.
* Here, the whole state is removed and it renders like it is rendering for the first time.
* We return to Page 1 instead of Page 3. 


[Ask the learners]
**Que Is this a good user experience?**
* It is not a good user experience.

### Solving the Issue -> State Uplifting?
-> We can store pageState to the App and send this as a prop to the Home. 
This is called Page Uplifting.

Problem: if a component is removed from the UI
Due to routing or any other reason. If we want to
preserve the state.
Solution: uplift the state to an ancestor which will not be re-rendered.

### Issue-1 with State Uplifting 
Page Uplifting also has a problem. Here, if I visit for All Categories I have page number 3 but for individual categories, there are not more than 2. So if I go to some other category, it is still on Page 3 and I will have to go previous which is again not a good user experience.

**Solution** For this particular issue what we can do is, whenever there is any change in the Home Page, at that time we can set the page number to 1. This is for any type of operation.

## Issue 2 : Prop Drilling
* Now coming to the older problems, we are required to uplift the page number.
* When we lift the state the problem that arises is the Prop Drilling 
* **Prop Drilling** -> When the descendant needs a prop and the height of that component tree is huge then we have to pass props to the whole chain.
* What can be the possible solution for this is to wrap the whole thing around the whole application and any of the elements should be able to access the state whenever they want.
* This block that covers the entire application and must be able to serve all the components is called the context area.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/057/018/original/upload_b185c110b061fc7a92562faf57b9fe54.png?1700132603)
* This is a three-step process
    * **Step 1:** create an context wrapper object using the method `createContext()`.
    * **Step 2:** Now use `<ContextWrapper.Provider>` tag to wrap all the components inside it.
    * **Step 3:** To save values, use a `value` prop and assign some value to it.
```jsx
import React, { useContext } from 'react';
// 1
const ContextWrapper = React.createContext();
function Context() {
    return (
        //2
        <ContextWrapper.Provider value = "Be safe">
            <GrandParent></GrandParent>
        </ContextWrapper.Provider>
    )
}

function GrandParent() {
    return <>
        <h2>GrandParent</h2>
        <div>⬇</div>
        <Parent></Parent>
    </>
}

function Parent() {
    return <>
        <h2>Parent</h2>
        <div>⬇</div>
        <Children></Children>
    </>
}
function Children() {
    const message = useContext(ContextWrapper);
    return <>
        <h2> Children</h2>
        <div>⬇</div>
        <div>{message}</div>
    </>
}


export default Context
```
* Now wherever you want to pass these values you can wrap them around using the same variable and `.Provider`.
* Now to derive value we use a method given by React `useContext(ContextWrapper)` to extract value.
* What we are doing is we are wrapping the entire app inside a wrapper. To this wrapper, we are giving a message. With the help of the `useContext` method, we can extract the message from a child's note without sending it to the parent or grandparent.
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/057/021/original/upload_e77fb81c703e7137eee773faf6846991.png?1700132688)
* Its usecase is Theme -> Dark and Light Theme

---
title: Theme Manager
description: An application of context provider is a theme manager
duration: 3960
card_type: cue_card
---


## Theme Manager
* Add Creator, Article, Footer, and ThemeManager pages to the project.
* We have two classes light and dark in the `themeManager.css` file.
* The header needs the current theme variable. If it is `light` then a light theme is applied and if it is `dark` a dark theme is applied.
* `ThemeManager.jsx` has three sections Header, Article, and Footer.
* Now only, the header and footer need theme changing.
* We just have to pass props to the header as well as the footer but not to the article.
* The first step is simple, we just have to create context. By default, we have a light theme.
* Wrap the required elements inside it.
* Next let us console.log() the current context object we have.
* Finally call the `useContext` method wherever required.
* We are not following good practices as well as this is not a complete solution.
* Use the state variable in ThemeManager for the current theme. We can have a toggle button that changes the theme when clicked.

**Header.jsx**
```jsx
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";
import React, {useContext} from "react";
function Header() {
    // console.log(CTheme);
    return (<div style = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    const { CTheme } = useContext(ThemeWrapper);
    return <div className = {CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Header;
```

**Footer.jsx**
```jsx
import { useContext } from "react";
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";

function Footer() {
    return (<div style = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Footer</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    // 3
   const {CTheme} = useContext(ThemeWrapper)
    return <div className = {CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Footer;
```

**Article**
```jsx
import "./themeManager.css";
function Article() {
    return (<div styl = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Article</div>
        <div>⬇</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, id.</p>
    </div>)
}

export default Article;
```

**ThemeManager.jsx**
```jsx
import React, { useState } from 'react'
import Header from './Header';
import Article from './Article';
import Footer from './footer';
//1
export const ThemeWrapper = React.createContext();
function ThemeManger() {
    // cTheme-> Header, Footer+ also change that
    const [CTheme, setCTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme =
            CTheme == "light" ? "dark": "light";
        setCTheme(newTheme)
    }

    return (
        // 2. 
        <ThemeWrapper.Provider
            value = {{ CTheme }}>
            <h1>Theme Management</h1>
            <button
                onClick = {toggleTheme}
            >Toggle Theme</button>
            <Header></Header>
            <Article></Article>
            <Footer></Footer>
        </ThemeWrapper.Provider >
    )
}

export default ThemeManger
```

**themeManager.css**
```css
.light {
    background-color: white;
    color: black;
}

.dark {
    background-color: black;
    color: white;
}
```

---
title: Adding Context Provider 
description: Adding Context Provider to the project
duration: 5619
card_type: cue_card
---

## Adding Context to the Project

### Things to Think Around
* Features
* data 
* State
* UI

1. Steps/ 
   * Initial Data 
        * Searching
        * Sorting
        * Categorization
        * Pagination
        * Render the Results
 
2. Data 
    * Products
    * Categories

### Pagination Context Provider
* Create a new Component Pagination inside the context folder => `contexts/PaginationContext.jsx`.
* Next inside this file export the default funtion `PaginationProvider()` that will return `PaginationContext.Provider`.
* This takes `Children` as a prop and calls it between its tags.
* In React we have this Children Prop that we can use.
* To implement Pagination we need two props `pageSize` and `pageNum`.
* So we will shift these two useStates inside PaginationProvider. 
* Let's move ahead and try to use it everywhere.
* We can access it at any part of the program using `useContext` to get all the state variables.
* All the state variables are at the same place, you don't need to have props.
* All the state variables can be added to this file and can be coded for better user experience.
* It is majorly used where data is constant for the entire website.
* We can also add categories as well as search for context.

[Link](https://github.com/Jasbir96/Full_stack_may_2023/tree/master/React/5_context_api/products/src) to final code.

