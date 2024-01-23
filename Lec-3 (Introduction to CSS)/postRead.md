# Comprehensive Guide to CSS Selectors

## Introduction

CSS (Cascading Style Sheets) selectors play a crucial role in styling web documents. They enable developers to target specific HTML elements and apply styles to them. In this guide, we'll explore various CSS selectors, accompanied by practical examples.

### 1. Universal Selector

The universal selector `*` selects all elements on a webpage. It can be used to apply a style globally.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
    }
  </style>
  <title>Universal Selector Example</title>
</head>
<body>
  <!-- All elements will have no margin or padding -->
  <div>Hello, World!</div>
</body>
</html>
```

### 2. Type Selector

The type selector selects elements based on their tag names. For example, `p` targets all `<p>` elements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p {
      color: blue;
    }
  </style>
  <title>Type Selector Example</title>
</head>
<body>
  <p>This is a paragraph with blue text.</p>
  <div>This won't be affected.</div>
</body>
</html>
```

### 3. Class Selector

The class selector targets elements with a specific class attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
  <title>Class Selector Example</title>
</head>
<body>
  <p class="highlight">This paragraph has a yellow background.</p>
  <p>This paragraph won't be highlighted.</p>
</body>
</html>
```

### 4. ID Selector

The ID selector targets a specific element with a unique ID attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    #main-heading {
      font-size: 24px;
    }
  </style>
  <title>ID Selector Example</title>
</head>
<body>
  <h1 id="main-heading">This heading has a larger font size.</h1>
  <p>This won't be affected.</p>
</body>
</html>
```

### 5. Attribute Selector

The attribute selector targets elements based on their attributes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    input[type="text"] {
      border: 1px solid #ccc;
    }
  </style>
  <title>Attribute Selector Example</title>
</head>
<body>
  <input type="text" placeholder="Type something here">
  <input type="password" placeholder="Password">
</body>
</html>
```

### 6. Child Selector

The child selector (`>`) selects direct children of a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ul > li {
      list-style-type: square;
    }
  </style>
  <title>Child Selector Example</title>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <ul>
      <li>Sub-item 1</li> <!-- This won't have square bullets -->
      <li>Sub-item 2</li> <!-- This won't have square bullets -->
    </ul>
  </ul>
</body>
</html>
```

### 7. Descendant Selector

The descendant selector (whitespace) selects all descendants of a specified element, regardless of their depth.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    article p {
      font-style: italic;
    }
  </style>
  <title>Descendant Selector Example</title>
</head>
<body>
  <article>
    <p>This paragraph is italicized.</p>
    <div>
      <p>This paragraph is also italicized.</p>
    </div>
  </article>
</body>
</html>
```

### 8. Adjacent Sibling Selector

The adjacent sibling selector (`+`) selects an element that is immediately preceded by a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2 + p {
      font-weight: bold;
    }
  </style>
  <title>Adjacent Sibling Selector Example</title>
</head>
<body>
  <h2>Heading 2</h2>
  <p>This paragraph has bold text.</p>
  <p>This paragraph won't be affected.</p>
</body>
</html>
```

### 9. General Sibling Selector

The general sibling selector (`~`) selects all elements that are siblings of a specified element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2 ~ p {
      color: green;
    }
  </style>
  <title>General Sibling Selector Example</title>
</head>
<body>
  <h2>Heading 2</h2>
  <p>This paragraph has green text.</p>
  <p>This paragraph also has green text.</p>
</body>
</html>
```

## Advanced CSS Selectors


### 1. `:hover`, `:active`, `:focus` Pseudo-classes

#### Explanation:
- `:hover`: Styles a button when the mouse cursor is over it.
- `:active`: Applies styles to the button when it is being clicked.
- `:focus`: Adds a green border to an input element when it has keyboard focus.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    button:hover {
      background-color: lightblue;
    }

    button:active {
      transform: scale(0.9);
    }

    input:focus {
      border: 2px solid green;
    }
  </style>
</head>
<body>
  <button>Hover me</button>
  <input type="text" placeholder="Focus me">
</body>
</html>
```

### 2. `:nth-child()` Pseudo-class

#### Explanation:
- `:nth-child(odd)`: Styles odd list items with a light gray background.
- `:nth-child(even)`: Styles even list items with a light blue background.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    li:nth-child(odd) {
      background-color: lightgray;
    }

    li:nth-child(even) {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</body>
</html>
```

### 3. `:not()` Pseudo-class

#### Explanation:
- `:not(.special)`: Styles paragraphs that do not have the class "special" with a dark gray color.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:not(.special) {
      color: darkgray;
    }
  </style>
</head>
<body>
  <p>This is a regular paragraph.</p>
  <p class="special">This is a special paragraph.</p>
</body>
</html>
```

### 4. `:first-child`, `:last-child`, `:only-child` Pseudo-classes

#### Explanation:
- `:first-child`: Makes the first list item bold.
- `:last-child`: Changes the color of the last list item to red.
- `:only-child`: Makes the only paragraph inside its container italic.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    li:first-child {
      font-weight: bold;
    }

    li:last-child {
      color: red;
    }

    p:only-child {
      font-style: italic;
    }
  </style>
</head>
<body>
  <ul>
    <li>First</li>
    <li>Second</li>
    <li>Last</li>
  </ul>

  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Last paragraph</p>
</body>
</html>
```

### 5. `:nth-of-type()` Pseudo-class

#### Explanation:
- `:nth-of-type(2n)`: Styles every second paragraph with a light gray background.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:nth-of-type(2n) {
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</body>
</html>
```

### 6. `:first-of-type`, `:last-of-type`, `:only-of-type` Pseudo-classes

#### Explanation:
- `:first-of-type`: Styles the first heading with a green color.
- `:last-of-type`: Increases the font size of the last paragraph.
- `:only-of-type`: Adds a blue border to the only div containing a paragraph.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h2:first-of-type {
      color: green;
    }

    p:last-of-type {
      font-size: 18px;
    }

    div:only-of-type {
      border: 1px solid blue;
    }
  </style>
</head>
<body>
  <h2>First Heading</h2>
  <h2>Second Heading</h2>

  <p>This is a paragraph in a div.</p>
  <div>
    <p>Another paragraph</p>
  </div>
</body>
</html>
```

### 7. `:checked`, `:disabled` Pseudo-classes

#### Explanation:
- `:checked`: Styles a checked checkbox with a yellow background.
- `:disabled`: Reduces the opacity of a disabled checkbox.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    input:checked {
      background-color: yellow;
    }

    input:disabled {
      opacity: 0.5;
    }
  </style>
</head>
<body>
  <input type="checkbox" checked> Checked
  <input type="checkbox" disabled> Disabled
</body>
</html>
```

### 8. `:before`, `:after` Pseudo-elements

#### Explanation:
- `:before`: Inserts ">> " before the content of each paragraph with a blue color.
- `:after`: Inserts " <<" after the content of each paragraph with a red color.

#### HTML and CSS:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    p:before {
      content: '>> ';
      color: blue;
    }

    p:after {
      content: ' <<';
      color: red;
   

 }
  </style>
</head>
<body>
  <p>This is a paragraph.</p>
</body>
</html>
```

Feel free to use these examples as standalone HTML files to understand and experiment with each advanced CSS selector.




