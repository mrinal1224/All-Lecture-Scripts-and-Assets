---
title: Nested Routes
description: Using nested routes in the About section to navigate through the company and founders.
duration: 4920
card_type: cue_card
---

## Nested Routes
these are the routes that are nested inside a components that is in itself rendered using an outer route . Let's tak an example for the same
* In the About sections let us have some components rendered using Route  
* Let us have company and founder components
```jsx

<Routes>
                <Route path = "/home/" element = {<Home></Home>}></Route>
                <Route path = "/about/*" element = {<About></About>}> </Route>
                <Route path = "/listing" element = {<Listing></Listing>}><Route>
</Routes>

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
```
* So the path becomes `/about/company` or `/about/founder`
* If we have `/about/someroute` where the someroute doesn't match then it will still be in about only same happens for `/about`