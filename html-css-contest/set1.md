
### Assignment 1: Centering a Box

#### Problem Statement
Center the red box horizontally and vertically within the blue container.

#### Solution Approach
Use Flexbox properties to center the box.

#### Hints
1. Use `display: flex` on the container.
2. Utilize `justify-content` and `align-items`.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centering a Box</title>
    <style>
        .container {
            width: 100vw;
            height: 100vh;
            background-color: blue;
            /* Write your solution below this line */

            /* Write your solution above this line */
        }
        .box {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box"></div>
    </div>
</body>
</html>
```

#### Complete Solution
```css
.container {
    width: 100vw;
    height: 100vh;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Assignment 2: Creating a Responsive Navbar

#### Problem Statement
Create a responsive navbar that displays a hamburger menu on smaller screens.

#### Solution Approach
Use media queries to change the display of the navigation items based on screen size.

#### Hints
1. Use `@media` queries.
2. Utilize `display: none` and `display: block`.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <style>
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .hamburger {
            display: none;
        }
        /* Write your solution below this line */
        
        /* Write your solution above this line */
    </style>
</head>
<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div class="hamburger">
            <a href="#menu">☰</a>
        </div>
    </div>
</body>
</html>
```

#### Complete Solution
```css
@media (max-width: 600px) {
    .navbar a {
        display: none;
    }
    .hamburger {
        display: block;
        float: right;
    }
}
```






These assignments provide a practical and easy-to-test approach to learning HTML and CSS concepts. Each assignment includes hints and a step-by-step solution to help learners understand the process of solving these problems.