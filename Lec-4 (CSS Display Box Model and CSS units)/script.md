# Class 4 - CSS Box Model, Display Property and CSS units
---
title: Agenda
description: Things that will be covered in today's session
duration: 180
card_type: cue_card
---

The topics we are going to cover in today's session are:

- Box Model
- Display Property in CSS
- Overflow in CSS
- CSS Units


So, let us start with the session.



---
title: Box Model
description: What is Box model and display
duration: 1500
card_type: cue_card
---

- Anything that we create in HTML and CSS takes the form of a box.
- You can check this by inspecting.
- Go to any website that we have created till now, select an html element paragraph and right click, then click on **inspect**. Here you see the boxing of your content in the right panel.


Always remember to add height and width to your box otherwise, it will not be visible. Make the box as shown below.

<img src='./Box_Model_Image2.png'/>


You can customize the size of the box by changing the height and width values.


**Real-life analogy: A Gift Box**
let's use a real-life analogy to understand the CSS Box Model by comparing it to a physical box.

Imagine you have a gift box, and you want to decorate it. The box has the actual gift inside, which is like the content of an HTML element. Now, let's break down the components of the CSS Box Model using this analogy:

1. **Content:**
   - **Real-life analogy:** The actual gift inside the box.
   - **CSS analogy:** The content area of an HTML element.

2. **Padding:**
   - **Real-life analogy:** The empty space inside the box between the content and the box walls. You might want to add padding to protect the gift.
   - **CSS analogy:** Padding is the space between the content and the border of an HTML element.

3. **Border:**
   - **Real-life analogy:** The walls of the gift box that provide structure and define its shape.
   - **CSS analogy:** Border is the boundary around the padding. It can have a specific style, color, and width.

4. **Margin:**
   - **Real-life analogy:** The space outside the gift box. It's the distance between this box and other elements or boxes around it.
   - **CSS analogy:** Margin is the space outside the border. It creates distance between the element and other elements on the page.



This example demonstrates how the CSS Box Model works with a real-life analogy of a gift box.


---
title: Quiz 1
description: Quiz 1
duration: 90
card_type: quiz_card
---

# Question
What does the CSS Box Model consist of?
# Choices

- [x] Margin, Padding, Content, Border
- [ ] Margin, Padding, Text, Border
- [ ] Border, Content, Float, Padding
- [ ] Margin, Float, Width, Padding

---
title: Applying Margin Padding and Borders
description: 
duration: 1500
card_type: cue_card
---

## Applying Margins, Padding and Border 
- First, let us create three containers:

<img src='./Box_Model_3.png'>

- The CSS that we apply in the containers will be applied to all the containers because they all have the same name.
- When you apply margin 20px, it gets reflected in the element from all sides.
- If you want to apply margin from a specific side say top, then :

```HTML=
.container{
    background-color : lightgreen;
    margin-top : 20px;
}
```
- Likewise, you can apply margin for **bottom**, **left** and **right** side too.

Now, let us apply padding.

- If you apply padding to the container, it gets reflected in the **div tag**. You can check by applying padding to the container.
- So, it should be avoided. Rather it is best practice to **apply padding to the elements** by targeting the element separately in the style tag  as:

```HTML=
h1{
    padding : 20px;
}
```

Coming to margins,
- If can apply four values to the margin property as `margin : 10px 20px 30px 40px;` it will be reflected as `margin : top right bottom left`
- You can try using different margin values to see the different results. 
- If you pass three values to the margin property and forget the last value, as `margin: 10px 20px 30px;`, then it will be reflected as "10 px for top and 20 px as left and right both and 40px for bottom".
- If you pass two values to the margin property as `margin : 10px 20px;`, then it will be reflected as "10px for top and bottom, and 20px as left and right.

> All these concepts are similar for **padding**. You just need to use padding in place of margins. And the rest of the rules will be the same.


## Border
- Border is defined as that extra layer that you can create around your HTML elements.
- There are many types of borders such as **solid**, **dashed**, **dotted**, etc. that you need to define in the syntax to see it.
- Syntax:

```HTML=
.container{
    background-color : lightgreen;
    martin-top : 20px;
    border : 2px solid red;
}
```
### Border Alignment Properties
- border-top : 5px solid blue ;
- border-left: 2px solid red;
- border-right: 6px dashed green;
- border bottom: 5px solid red;

### Border Radius Properties
- It is used to apply curved edges to the borders
- Syntax:

```HTML=
border-radius : 20px;
```
You can also apply this radius to a specific side of the border for example : `` border-top-right_radius: 20px;``


> These are the all properties and concepts (Margins, Padding, and Borders) that together are termed as "**Box Model** in CSS".


---
title: Quiz 2
description: Quiz 2
duration: 90
card_type: quiz_card
---

# Question
What is the order of values when passing all four values in the margin?
# Choices

- [ ] top right left bottom
- [ ] right left top bottom
- [ ] top bottom left right
- [x] top right bottom left


> Summarizing
- Everything that we create in an HTML is taken as a Box known as **Box Model**.
- It will have two dimensions that are Height and Width. 
- And these boxes have three properties that are **Margin**. **Padding**, and **Border**.

---
title: Box Sizing
description: 
duration: 1500
card_type: cue_card
---


## BOX Sizing (content-box and border-box)


Let's imagine a box as a metaphor for an HTML element on a webpage. This box can have content inside, some space around the content called padding, and a border around that. The `box-sizing` property in CSS determines how the size of this box is calculated.

### Content-Box (Default):

Imagine you have a suitcase (the box) and you want to pack clothes (content) inside it. The size of the suitcase is determined by the size of the clothes only. If you add padding (extra space inside the suitcase), it won't change the overall size of the suitcase. Similarly, if you add a border (a decorative edge to the suitcase), it also won't affect the overall size of the suitcase. In CSS terms, this is like using `box-sizing: content-box;`. The size of the box is based on the content, and padding and border are added on top.

Example Code:
```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #3498db;
  box-sizing: content-box;
}
```

### Border-Box:

Now, let's say you have another suitcase, and this time, you want the size of the suitcase to include not just the clothes but also the space inside (padding) and the outer shell (border). You specify the total size you want the suitcase to be, and everything inside, including clothes, padding, and border, fits within that size. In CSS terms, this is like using `box-sizing: border-box;`. The size of the box is the total size you've specified, and padding and border are included within that size.

Example Code:
```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid #e74c3c;
  box-sizing: border-box;
}
```

In summary, `box-sizing` influences how the size of an element is calculated. Content-Box calculates size based on the content, adding padding and border on top. Border-Box calculates size including content, padding, and border within the specified width and height.

---
title: CSS Overflow
description: 
duration: 1500
card_type: cue_card
---


### CSS Overflow

When the content goes out of the container is known as **Overflow**.

Let's take an example where we create a div element and add content of 100 words to it. We create a container and give it a static width and height.

```htmlembedded!
<style>
    .container{
        border: 2px solid tomato;
        width: 200px;
        height: 200px;
    }
</style>
<body>
    <div class = "container">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a.
    </div>
</body>
```

The result will be that the box will not contain the whole content and it will create an overflow condition. Therefore, we will use overflow to overcome it. We can use auto, hidden, scroll and visible overflow properties.

#### Example

Let's understand how:

```htmlembedded!
<style>
    .container{
        border: 2px solid tomato;
        width: 200px;
        height: 200px;
        overflow: hidden; /* the content going outside of the container will be hidden */
    }
</style>
<body>
    <div class = "container">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a.
    </div>
</body>
```

#### Properties of Overflow

**Hidden**: The content that remains outside the container will be hidden or not visible. It does not occupy space where the content is hidden.

**Scroll**: A scroll bar is added inside the container so that you can go through the whole content inside the container.

**Auto**: It works similarly to scroll the only difference is that scroll will always show scroll inside the container while auto will only show when the content is overflowing.

**Visible**: It will make the content visible. There will be no change.

> The container takes only the space designated to it. Therefore, the overflow content will overlap with the other content added after the container.

**[Ask the learners]**

How will we apply the overflow condition if we make the container horizontal for the following div content?

```htmlembedded!
<div class = "horizontal-container">
    Scaler
</div>
```

--> 
```htmlembedded!
<style>
    .horizontal-container{
        font-size: 30px;
        width: 50px;
        height: 30px;
        
        border: 2px solid black;
        
        overflow: hidden;
    }
</style>
```

We can add any other property as well it will work similarly to the vertical container.

> If you want to hide the vertical or horizontal scroll bar you can use the following syntax: `overflow-x: hidden;` or `overflow-y: hidden;`.




---
title: CSS Display
description: CSS Display Property
duration: 1800
card_type: cue_card
---
First, let us create a file as shown below to understand the working of the Display property:


<img src='./Display_1.png'/>


When you see the output you can see that the border is taking the whole area of paragraphs. But it should be on the paragraph **p1** only.

Now, let us add a span tag to the file as shown below:

<img src='./Display_2.png'>


When you run this file, You can see that these **span tags** are not acting as a paragraph. This means that there are no borders applied to it.

Now, give this span tag border, height, and width property as :

```HTML=
span{
    border: 2px solid blue;
    height: 50px;
    width: 50px; 
}
```
Now give the p tag height and width as :

```HTML=
p{
    border: 2px solid red;
    height: 50px;
    width: 50px;
}
```
You can see in the output that there are no changes seen in the span tag.

> Note: Block elements can have customizable height and width but you can not provide height and width to the inline elements (**span tag** in this case). 


Here comes the need for **Display property**

- Add a random image to the file using **img src tag**.
- Also add an anchor tag entitled "click me".
- You can see that you can provide customizable height and width to the image. Here, it is working as both inline and block elements.
- CSS allows the user to add all of these tags as a Display property.
- Syntax:

```HTML=
p{
    display : inline;
}
```
This makes your element an **inline-block**. That's the work of the Display property in CSS. After that, you can provide height and width to the inline elements too.


## How Margins and Padding work for Inline Elements

In CSS, both margin and padding are properties used to control the spacing around elements. However, the way they work for inline elements can be a bit different compared to block-level elements.

**Margin:**
- **Definition:** Margin is the space outside the border of an element. It creates space between the element's border and surrounding elements.
- **Real-life analogy:** Think of it like the margin of a page in a book. The space between the content and the edge of the page.

**Padding:**
- **Definition:** Padding is the space between the content of an element and its border. It creates space inside the element.
- **Real-life analogy:** Imagine a box with content inside. The padding would be the space between the content and the walls of the box.

Now, for inline elements:

**Inline Elements:**
- **Definition:** Inline elements are those that do not start on a new line and only take up as much width as necessary.
- **Real-life analogy:** Inline elements can be compared to words within a sentence. They flow within the content without breaking the line.

**How Margin and Padding Work for Inline Elements:**

Inline elements are treated a bit differently when it comes to margins and paddings. In most cases, horizontal margins (left and right) for inline elements do not have an effect, while vertical margins (top and bottom) can create space above and below the element.

Let's see an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .inline-element {
      display: inline;
      border: 1px solid black;
      margin: 10px;   /* Vertical margins will take effect, horizontal margins won't */
      padding: 5px;
    }
  </style>
  <title>Inline Element Example</title>
</head>
<body>
  <p>
    Some text before
    <span class="inline-element">Inline Element</span>
    Some text after
  </p>
</body>
</html>
```

In this example, the inline element (`span` with class "inline-element") will have vertical margins (top and bottom) of 10 pixels each, creating space above and below the element. The horizontal margins won't affect the inline flow. The padding of 5 pixels will create space between the content and the border of the inline element.

Adjust the values and observe how the spacing changes in the rendered output.

---
title: CSS Units
description: CSS Units
duration: 1800
card_type: cue_card
---


### CSS Units in Detail

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Units Examples</title>
  <style>
    /* Pixels (px) */
    .px-example {
      width: 200px;
      height: 150px;
      font-size: 16px;
      background-color: lightblue;
    }

    /* Percentage (%) */
    .percentage-example {
      width: 50%;
      padding: 5%;
      font-size: 120%;
      background-color: lightgreen;
    }

    /* Viewport Width (vw) and Viewport Height (vh) */
    .viewport-example {
      width: 50vw;
      height: 30vh;
      background-color: lightcoral;
    }


    /* REM */

    .rem-example {
      margin: 1rem; /* Always equivalent to 16px */
      background-color: lightgoldenrodyellow;
    }


 </style>
</head>
<body>

  <div class="px-example">Pixel Example</div>

  <div class="percentage-example">Percentage Example</div>

  <div class="viewport-example">Viewport Example</div>


  <div class="rem-example">REM Example</div>

  Vmax Example</div>

</body>
</html>
```

Open this HTML file in a web browser to see the different examples of CSS units in action. Adjust the values and observe how the layout changes based on the specified units.

With each unit Example you use these Definitions- 

1. **Pixels (px):**
- Pixels are like the tiny dots on your screen. When you use pixels, you're saying exactly how many dots something should be tall or wide.


- Example: font-size: 16px; makes the text size equivalent to 16 dots high.


- Use Case: Pixels are great for when you want precise control, like for a border width or a button size.

   - The `px` unit is fixed and does not change with the size of the viewport or user settings.
   - Useful for creating fixed layouts.
   - Example:

    ```css
    div {
      width: 200px;
      height: 150px;
      font-size: 16px;
    }
    ```

2. **Percentage (%):**
   - The `%` unit is relative to the size of the containing element.
   - Useful for creating fluid layouts that adapt to different screen sizes.

   - Keep in mind that percentages for padding and margin are calculated based on the width of the containing block, not the element itself.

   - Percentages for font sizes are relative to the font size of the parent element.

   - Percentages are relative to something else. For example, if you set a width in percentage, it's a percentage of the width of the parent element.


   - Example: width: 50%; means the element will take up half the width of its parent.


   - Use Case: Percentages are useful for responsive design, where you want elements to change size based on the screen or parent element.


   - Code - add a div in the file

```html
<body>
   <div class="px-example">Pixel Example</div>
   <div class="container">
     <div class="sidebar">Sidebar</div>
     <div class="main-content">Main Content</div>
   </div>
 </body>
```

Add styles

```css
.container {
       display: flex;
       width: 100%; /* Full width of the parent/container */
     }


     .sidebar {
       width: 25%; /* Takes up 25% of the container's width */
       background-color: lightcoral;
     }


     .main-content {
       width: 75%; /* Takes up the remaining 75% of the container's width */
       background-color: lightgreen;
     }
```
- When using percentages in CSS, the base value for the calculation depends on the property being set ( discuss on ipad ) .


- Font Size:
When you set the font size in percent, it's based on the font size of the element's parent.
- Example: If the parent element has a font size of 16px, and you set a child element's font size to 150%, the child's font size will be 150% of 16px, which is 24px.


- Padding and Margin:
For padding and margin set in percent, the calculation is based on the width of the containing block (the parent element), regardless of whether you're setting vertical or horizontal padding/margin.


Example: If a div has a width of 500px, setting padding: 10%; will result in a padding of 50px on all sides, because 10% of 500px is 50px.


Generally we prefer to give fixed values because it might not be very intuitive otherwise


Try giving padding and margin for sidebar in percent and see that it takes container’s width as base value even though we have width defined for it

   
```css 
     .container {
       display: flex;
       width: 400px; /* Full width of the parent/container */
     }


     .sidebar {
       width: 25%; /* Takes up 25% of the container's width */
       background-color: lightcoral;
       padding:10%;
       margin:10%;
     }
```

Width and Height:

- Width and height percentages are relative to the dimensions of the parent element.

- Example: If a parent element is 600px wide, setting a child element's width to 50% will make it 300px wide.


3. **Viewport Width (vw) and Viewport Height (vh):**
   - `vw` is a percentage of the viewport width, and `vh` is a percentage of the viewport height.
   - Useful for creating responsive designs based on the viewport size.
   - Example:

    ```css
    div {
      width: 50vw;
      height: 30vh;
    }
    ```


4. **REM:**
   - relative to the font-size of the root element (usually the `<html>` tag).
   - Useful for maintaining consistent spacing throughout the document.

   -  Examples: If the base font size is 16px, font-size: 2rem; would be 32px.

   - Use Case: Rems are great for consistent scaling across your website, as they always refer to a single base size.

   - Example:

    ```css
    html {
      font-size: 16px;
    }

    div {
      margin: 1rem; /* This is always equivalent to 16px */
    }
    ```





Remember to choose units based on your specific design requirements and the behavior you want for your web page. Combining different units wisely can lead to more flexible and responsive layouts.


