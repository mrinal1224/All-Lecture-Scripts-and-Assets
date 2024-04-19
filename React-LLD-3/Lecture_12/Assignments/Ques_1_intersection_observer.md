
**Problem Statement:**

You are tasked with implementing a feature on a webpage that detects when certain elements come into view using the Intersection Observer API in JavaScript. This feature will provide a smooth user experience by triggering animations or other actions when elements enter the viewport.

**Code Stub:**
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intersection Observer Challenge</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="box" id="box1">Box 1</div>
        <div class="box" id="box2">Box 2</div>
        <div class="box" id="box3">Box 3</div>
        <div class="box" id="box4">Box 4</div>
        <div class="box" id="box5">Box 5</div>
        <div class="box" id="box6">Box 6</div>
        <div class="box" id="box7">Box 7</div>
        <div class="box" id="box8">Box 8</div>
        <div class="box" id="box9">Box 9</div>
        <div class="box" id="box10">Box 10</div>
    </div>

    <script src="script.js"></script>
</body>
</html>

```

`style.css`
```css
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #ddd;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
}

```

**Instructions:**

- You are provided with a basic HTML structure and CSS styling for a set of boxes.
- Your task is to implement the JavaScript functionality using the Intersection Observer API to detect when each box comes into view.
- When a box comes into view, you should apply a visible indication such as changing the background color or adding a border to the box.

**Requirements:**

- Use the Intersection Observer API to detect when each box comes into view.
- Apply a visible indication to the box when it enters the viewport.
- You are not allowed to modify the HTML or CSS provided, only the JavaScript code in `script.js`.
- Ensure your solution works for dynamic content additions/removals (if boxes are added or removed dynamically).

**Note:**

Feel free to research and refer to the Intersection Observer API documentation if needed.

**Solution Approach:**

To solve this problem, we'll utilize the Intersection Observer API, which allows us to observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. Here's the approach we'll take:

1. We'll create an `IntersectionObserver` object and define a callback function that will be executed whenever the observed elements intersect with the viewport.
2. In the callback function, we'll iterate over the array of `IntersectionObserverEntry` objects and check if each observed element is intersecting.
3. If an element is intersecting, we'll apply the desired visual indication, such as changing the background color or adding a border.

**Solution Code: `script.js`**

```js
// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intersecting'); // Apply CSS class for visual indication
            observer.unobserve(entry.target); // Stop observing this element once it intersects
        }
    });
}

// Create an IntersectionObserver object with the handleIntersection callback
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Get all elements with class 'box' and observe each of them
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    observer.observe(box);
});

```

**Solution Explanation:**

- The `handleIntersection` function is the callback function provided to the Intersection Observer. It takes two arguments: `entries` (an array of `IntersectionObserverEntry` objects) and `observer` (the observer instance). This function is called whenever the observed elements intersect with the viewport.
- Inside `handleIntersection`, we iterate over each `entry` in the `entries` array. For each entry, we check if it is intersecting with the viewport using `entry.isIntersecting`.
- If an element is intersecting, we add the CSS class `'intersecting'` to it using `classList.add()`. This class is defined in the CSS file and provides the visual indication.
- We then stop observing the element by calling `observer.unobserve(entry.target)`, as we only need to trigger the intersection once.
- Finally, we create an `IntersectionObserver` object named `observer` with the `handleIntersection` callback function. We set the `threshold` to `0.5`, meaning the callback will be triggered when at least half of the target element is visible.
- We select all elements with the class `'box'` using `document.querySelectorAll('.box')` and observe each of them using `observer.observe(box)`.