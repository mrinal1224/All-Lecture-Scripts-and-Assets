# Tile : styled Button

## Problem Statement
Create a component called App that renders a button with the text “Click me!”. The button should have the following styles:

* A solid blue background color
* A white text color
* A font size of 16px
* A padding of 10px 20px
* A border-radius of 5px
* A pointer cursor
* A hover effect that changes the background color to light blue and the text color to black.

### Demo
<img src="https://www.reacterry.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fcoding-platform%2F6519a935-8dfb-4bf8-91af-909a6315410f_button.gif%3Fauto%3Dcompress%2Cformat&w=750&q=75"/>

###  Directions 
* You can use any type of inline , internal style it's up to you 
* Your component should return just one button JSX element
* The button should contain string “Click me!”

### solution
app.jsx 
```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <button className="custom-button">Click me!</button>
    </div>
  );
}

export default App;
```

```css
/* App.css */
.custom-button {
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.custom-button:hover {
  background-color: lightblue;
  color: black;
}

```











