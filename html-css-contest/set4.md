### Assignment 7: Responsive Card Layout

#### Problem Statement
Create a responsive card layout that adjusts the number of cards per row based on screen size.

#### Solution Approach
Use CSS Grid and media queries to adjust the grid layout.

#### Hints
1. Use `display: grid` on the card container.
2. Use `grid-template-columns` and media queries.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Card Layout</title>
    <style>
        .cards {
           

 /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
        .card {
            background-color: lightgrey;
            padding: 20px;
            margin: 10px;
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <div class="cards">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
    </div>
</body>
</html>
```

#### Complete Solution
```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
}
```

### Assignment 8: Fixed Header

#### Problem Statement
Create a fixed header that stays at the top of the page while scrolling.

#### Solution Approach
Use the `position: fixed` property to fix the header at the top.

#### Hints
1. Use `position: fixed`.
2. Set the top property to 0.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Header</title>
    <style>
        .header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            width: 100%;
            /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
        .content {
            padding: 100px 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        Fixed Header
    </div>
    <div class="content">
        <p>Scroll down to see the fixed header.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis turpis at felis dapibus, non vulputate libero vestibulum. Sed bibendum varius velit, vel lacinia sapien faucibus nec. Proin a justo id libero fringilla placerat. Nullam tristique leo orci, ac tristique odio cursus sit amet. Maecenas sagittis nunc at magna blandit, at tincidunt libero hendrerit. Curabitur vestibulum purus sit amet nisi malesuada, quis facilisis tortor vulputate. Ut sit amet mi id risus luctus mollis. Integer ut vehicula lorem, ac bibendum ipsum. Pellentesque consectetur euismod urna, non interdum justo laoreet ac. Curabitur nec justo ut ligula varius tempor.</p>
    </div>
</body>
</html>
```

#### Complete Solution
```css
.header {
    position: fixed;
    top: 0;
    width: 100%;
}
```