**Problem Statement**:
You are tasked with implementing an Intersection Observer in a React component to detect when a specific element comes into view on the webpage. 

**Instructions**:
1. Utilize the provided HTML and CSS structure to create a React component.
2. Implement the Intersection Observer in the React component to observe the target element with the class name "observe-me".
3. When the target element comes into view, log a message to the console stating "Target element is now in view!".
4. You are only required to work on the React component logic. Do not make any changes to the provided HTML and CSS.

HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intersection Observer React Problem</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="react.production.min.js"></script>
  <script src="react-dom.production.min.js"></script>
  <script src="babel.min.js"></script>
  <script src="index.js" type="module"></script>
</body>
</html>
```

CSS (styles.css):
```css
.container {
  height: 1000px;
  background-color: #f0f0f0;
}

.observe-me {
  width: 100px;
  height: 100px;
  background-color: #ff6347;
  margin: 50px auto;
}
```

React Component (index.js):
```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const IntersectionObserverComponent = () => {
  useEffect(() => {
    // Implement Intersection Observer here
    
  }, []);

  return (
    <div className="container">
      {/* Do not change or implement anything here */}
      <div className="observe-me"></div>
    </div>
  );
}

ReactDOM.render(<IntersectionObserverComponent />, document.getElementById('root'));
```

Your task is to complete the `useEffect` hook inside the `IntersectionObserverComponent` so that when the element with the class "observe-me" comes into view, it logs the message "Target element is now in view!" to the console.