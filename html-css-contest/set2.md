### Assignment 3: Equal Height Columns

#### Problem Statement
Make the columns inside the container have equal height.

#### Solution Approach
Use Flexbox to make the columns have equal height.

#### Hints
1. Use `display: flex` on the container.
2. Utilize `flex` property on the columns.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equal Height Columns</title>
    <style>
        .container {
            display: flex;
        }
        .column {
            width: 33.33%;
            padding: 20px;
            background-color: lightgrey;
            border: 1px solid #000;
            /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
    </div>
</body>
</html>
```

#### Complete Solution
```css
.container {
    display: flex;
}
.column {
    flex: 1;
    padding: 20px;
    background-color: lightgrey;
    border: 1px solid #000;
}
```

### Assignment 4: Sticky Footer

#### Problem Statement
Create a sticky footer that stays at the bottom of the page even if the content is not enough to fill the page height.

#### Solution Approach
Use Flexbox on the body and container to make the footer sticky.

#### Hints
1. Use `display: flex` and `flex-direction: column` on the body.
2. Use `flex: 1` on the main content container.

#### Boilerplate Code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticky Footer</title>
    <style>
        body {
            margin: 0;
            /* Write your solution below this line */
            
            /* Write your solution above this line */
        }
        .container {
            flex: 1;
        }
        .footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
    </div>
    <div class="footer">
        Footer
    </div>
</body>
</html>
```

#### Complete Solution
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
}
.container {
    flex: 1;
}
```
