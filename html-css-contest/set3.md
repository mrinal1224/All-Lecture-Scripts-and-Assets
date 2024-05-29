### Assignment 5: Image Gallery Grid

#### Problem Statement
Create an image gallery with a grid layout where images are evenly spaced.

#### Solution Approach
Use CSS Grid to layout the gallery items.

#### Hints
1. Use `display: grid` on the gallery container.
2. Use `grid-template-columns` to define columns.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery Grid</title>
    <style>
        .gallery {
            /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
        .gallery img {
            width: 100%;
            height: auto;
            padding: 5px;
        }
    </style>
</head>
<body>
    <div class="gallery">
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
    </div>
</body>
</html>
```

#### Complete Solution
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
```

### Assignment 6: Button Hover Effect

#### Problem Statement
Create a button that changes color when hovered over.

#### Solution Approach
Use CSS hover pseudo-class to change the button's background color on hover.

#### Hints
1. Use `:hover` pseudo-class.
2. Change the background color property.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Hover Effect</title>
    <style>
        .button {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
    </style>
</head>
<body>
    <button class="button">Hover me</button>
</body>
</html>
```

#### Complete Solution
```css
.button:hover {
    background-color: green;
}
```