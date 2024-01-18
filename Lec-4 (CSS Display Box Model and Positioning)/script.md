
---
title: Agenda
description: Things that will be covered in today's session
duration: 180
card_type: cue_card
---

The topics we are going to cover in today's session are:
- Previous lecture recap with left topics
- CSS Fonts
- Box Model
- Display Property in CSS
- CSS positioning

So, let us start with the session.

---
title: Previous lecture brief
description: A brief recap for the previous lecture and discussion about background color in CSS.
duration: 600
card_type: cue_card
---

So, in the previous lecture, we left the background color in CSS.
- It works the same as the color.
- You can add CSS code for background color as :
```HTML=
h1{
    background-color : blue;
}
```

## **Example**:

[IMAGE_1 START SAMPLE]
![](https://hackmd.io/_uploads/ryUXY8npn.png)
[IMAGE_1 FINISH SAMPLE]

Here you will select the class namely "background" and apply CSS to them. It will be reflected to all the **h1s** inside that div tag.

> `color` is used to change the text color but `background-color` is used to change the color area behind that text.

- You can also use an image as the text background. To do this, you need to provide the image URL in the CSS as shown below:
```HTML=
h1{
    background-color : url(" url_of_that_specific_image.jpg ");
}
```

You can set the background size as:
```HTML=
h1{
    background-color : url(" url_of_that_specific_image.jpg ");
    background-size : 400px;
}
```
- In the CSS background property, when it finds any empty space, it starts to repeat its element. You can use the property `background : no-repeat;` to avoid it. 
- -You can customize the repetition of the BG image using the X and Y axis. 

---
title: CSS fonts
description: How to use and customize the fonts in CSS
duration: 1200
card_type: cue_card
---

- You can customize various aspects of the font such as size, look, and many dynamics of it. Let us see them one by one.
- First, create a file as shown below:
  
[IMAGE_2 START SAMPLE]
![](https://hackmd.io/_uploads/rJ3VYLh62.png)
[IMAGE_2 FINISH SAMPLE]

Then we will apply CSS to the fonts. First, let us see font family.

## Font family
- The different types of font available in the CSS are termed as font family.
- The font-family property can hold several font names as a "**fallback**" system. If the browser does not support the first font, it tries the next font.
- Font family are like "times", "courier", "arial". If you want to use a single font from this, you can just remove the other font styles from the font family.


- Syntax:
```HTML=
.heading_1{
    font-family: your_desired_font
}
```

## Font weight
- This font property is used to decide the intensity of the font.
- It's value ranges from lightest **100px** to boldest **800px**.
- Syntax:

```HTML=
font-weight: 800px;
```

## Font size
- It refers to the size of the text.
- Syntax:
```HTML=
font-size: xx-larger;
```
```HTML=
font-size: 50%;
```

- There is also a font-style that you can choose to customize your font like bold, italic, etc.

## Google font
- If you are not unable to get the font requirement from the above font properties, then you can use the Google font option.
- You just need to go to the Google search and search "**google font**". Refer website: `https://fonts.google.com/`.
- Here you can find and choose the font. Click over the font and you will get a lot of options to customize that font.
- Click on "**select font_style**" and select the link there.
- Then paste it on your HTML file head tag as shown below.

[IMAGE_3 START SAMPLE]
![](https://hackmd.io/_uploads/Hyn8KInT3.png)
[IMAGE_3 FINISH SAMPLE]

- Now copy the font family from the Google font website and you can use it in the CSS.
- Since you have imported the Google fonts using CDN till now. Now you can just copy the font family from Google font and paste it at the font family section in the link of the head tag.


---
title: Text in CSS
description: What is text, how is it different from font, etc
duration: 1200
card_type: cue_card
---
- Font and text can be seen as similar but they are not.
- Font focus on the look and styling but Text is the internal working of your text such as spacing, line width, etc.
- First, create a file of HTML is shown below

[IMAGE_4 START SAMPLE]
![](https://hackmd.io/_uploads/Sy-OFI263.png)
[IMAGE_4 FINISH SAMPLE]

First, let us see the text alignment property

## Text Alignment
- It is used to make the alignment of your text like from the left, from the right, or in the center.
- Syntax:

```HTML=
.heading_1{
    text-align : left;
}

```

## Text Decoration
- It is used to make your text attractive using some properties.
- These are oval-line, line-through, underline, etc.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
}
```

## Word Spacing
- It defines how many spaces are there between any two consecutive words.
- It is defined using the pixel values.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
    word-spacing : 100px;
}
```
## Line Height
- It defines the height between two consecutive lines.
- Syntax:

```HTML=
.heading_1{
    text-decoration : oval-line;
    word-spacing : 100px;
    line-height : 100px;
}
```
These are all text and font properties.

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

[IMAGE_5 START SAMPLE]
![](https://hackmd.io/_uploads/SkQYFU2a2.png)
[IMAGE_5 FINISH SAMPLE]

You can customize the size of the box by changing the height and width values.

### Note to instructor - I have added two analogies here feel free to choose anyone or both if the time allows ,also feel free to frame these analogies in your way

> Take a real-life example of creating a township including steps like making land cut, house placing, etc. to discuss the box concept. And introduce `margin padding and border` one by one.



## Padding
- It is the empty area inside the container.
- Syntax to add padding:

```HTML=
h1{
    padding : 20px;
}
```
- **Increasing the padding** area **decreases the container** space. Because padding is only inside that specific container, it can not go outside of the box.


## Margin
- The CSS margin properties are used to create space around two different elements, outside of any defined borders.
- It prevents your elements from getting overlapped.
- Syntax:
- Create another box as in the previous example then,

```HTML=
.box_2{
    width: 100px;
    height: 120px;
    background-color: blue;
}
```
- There are already some margins by CCS default. But you can customize it as :

```HTML=
.box_2{
    width: 100px;
    height: 120px;
    background-color: blue;
    margin : 0px;
}
```



**2nd Real-life analogy: A Gift Box**
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

Now, let's translate this analogy into a simple HTML and CSS example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Style for the gift box (element) */
    .gift-box {
      width: 200px; /* Content width + padding + border */
      padding: 20px; /* Empty space inside the box */
      border: 2px solid #333; /* Border around the box */
      margin: 30px; /* Space outside the box */
    }

    /* Style for the actual gift (content) */
    .gift {
      background-color: #ffd700; /* Yellow color for the gift */
      height: 100px; /* Height of the content */
    }
  </style>
</head>
<body>

  <!-- The gift box (element) -->
  <div class="gift-box">
    <!-- The actual gift (content) -->
    <div class="gift"></div>
  </div>

</body>
</html>
```

Explanation:

- The `.gift-box` class represents the box element, setting its width, padding, border, and margin.
- The `.gift` class represents the content (the actual gift) inside the box, setting its background color and height.

This example demonstrates how the CSS Box Model works with a real-life analogy of a gift box. Adjust the values and observe how the content, padding, border, and margin affect the overall layout.

## Applying Margins, Padding and Border 
- First, let us create three containers:

[IMAGE_6 START SAMPLE]
![](https://hackmd.io/_uploads/BkXsY836h.png)
[IMAGE_6 FINISH SAMPLE]

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
- Border is defined as that extra space that you can create around your HTML elements.
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
title: Quiz 1
description: Quiz 1
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
title: CSS Display
description: CSS Display Property
duration: 1800
card_type: cue_card
---
First, let us create a file as shown below to understand the working of the Display property:

[IMAGE_7 START SAMPLE]
![](https://hackmd.io/_uploads/H1pRtL2T3.png)
[IMAGE_7 FINISH SAMPLE]

> Note: Rem is also a unit to define pixels. It converts the pixel into 10 times. For example **5rem** is **50px**.


When you see the output you can see that the border is taking the whole area of paragraphs. But it should be on the paragraph **p1** only.

Now, let us add a span tag to the file as shown below:

[IMAGE_8 START SAMPLE]
![](https://hackmd.io/_uploads/Bk8TjInTh.png)
[IMAGE_8 FINISH SAMPLE] 

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


## CSS positioning

**[Ask the learners]**
What do you understand when we talk about positioning or position?

> **Note to Instructor:** Wait for 5-10 seconds to get some answers and then continue

The concept of positioning in CSS can be understood by  arrangement of players on a sports field. Imagine football or cricket field. 

**Think of a scenario in football:** you have a center forward positioned at one spot, and you'll find the center midfielder occupying another specific spot. This arrangement of players in different positions is scattered over the field.

Similarly, in CSS, positioning involves placing elements within a web page layout. Just as players are situated precisely on the field, web elements can be located using various CSS positioning techniques. 

Now that we know what is positioning in CSS. We will be now discussing types of position in CSS.

---
title: Types of Positions?
description: This section explains everything about Position Property in CSS
duration: 600
card_type: cue_card
---

So, let's understand two types of position in CSS:
* **Absolute Position**
* **Relative Position**

Think about a table you have in front of you. Imagine you're looking straight down at the table. It's just a flat square surface, like the top of the table. This is the place where you might put things, like your phone or a cup of coffee.

What we're going to talk about is how you can move this "cell phone" around on the table in two different ways.

**[Ask the learners]**
Can anyone tell what are the two ways we can move this cell phone on table.

When we talk about moving the box around, we're talking about changing its position in these two main directions – X-Axis and Y-Axis. These two coordinates, X and Y, help us understand exactly where the box (or any object) is located on the table.

Let's say you start with the cell phone placed at a specific spot on the table. Now, you want to move it a bit. In CSS terms, this is done by specifying how many centimeters (like pixels) you want to move the box from its current position. 

For example, if you move the box 10 centimeters to the right. So the relative position of the cell phone from its starting point to ending point has changed by 10 cm.

If you are measuring the distance from the starting of the Table. The distance between starting of the table and the cell phone will be the absolute position.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/071/original/upload_189ab829bb663b192a1033cb2dbf5b52.png?1695317443)

So we can define in terms of CSS as:

* **Relative Position:** The element is positioned relative to its previous position.
* **Absolute Position:** The element is positioned absolutely to its parent container.


Now, that we know what is Relative and Absolute Positioning. Let's move forward by coding and understanding positions.




**Position : realtive**


In CSS, the `position: relative` property is used to position an element relative to its normal position in the document flow. To explain this with a real-life analogy, let's consider a scenario of arranging books on a shelf.

Imagine you have a bookshelf, and each book represents an HTML element on a webpage. By default, the books are placed on the shelf in a specific order, much like how HTML elements are positioned in the normal document flow. Now, if you decide to move a particular book a few inches to the right or left, you're changing its position relative to its normal place on the shelf.

In CSS, the `position: relative` property allows you to make similar adjustments to the positioning of an element. When you apply `position: relative` to an element, it remains in the normal document flow, but you can then use the `top`, `right`, `bottom`, or `left` properties to move it from its original position.

Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .bookshelf {
      position: relative;
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
    }

    .book {
      position: relative;
      width: 50px;
      height: 100px;
      background-color: #3498db;
      color: #fff;
      text-align: center;
      line-height: 100px;
    }

    .book2 {
      position: relative;
      top: 20px;
      left: 30px;
    }
  </style>
</head>
<body>
  <div class="bookshelf">
    <div class="book">Book 1</div>
    <div class="book book2">Book 2</div>
  </div>
</body>
</html>
```

In this example, the `.book2` class has `position: relative`, and it is moved 20 pixels down and 30 pixels to the right from its normal position within the `.bookshelf`. The positioning is relative to where it would have been in the normal flow.

You can experiment with the values of `top`, `right`, `bottom`, and `left` to see how they affect the positioning of the element within its containing element. Keep in mind that using `position: relative` may not cause a visible change unless accompanied by additional positioning properties.


**Position : absolute**

 Let's continue with the bookshelf analogy to explain the `position: absolute` property in CSS.

In our bookshelf scenario, `position: absolute` can be said to taking a book out of the regular flow of the shelf and placing it in a specific position relative to the bookshelf itself. When a book has an absolute position, it's as if it's no longer part of the standard order on the shelf, and you can position it anywhere you want, ignoring the presence of other books.

In CSS, applying `position: absolute` to an element takes it out of the normal document flow and positions it relative to its closest positioned ancestor (an ancestor element that has a position value other than `static`) or, if there is none, relative to the initial containing block, usually the viewport.

Here's an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .bookshelf {
      position: relative; 
      /* Add and remove this position propery to show how absolute position will depend on nearest ancestor */
      width: 300px;
      height: 300px;
      border: 1px solid #ccc;
    }

    .book {
        display: inline-block;
    }

    .book1 {
      background-color: #3498db;
      width: 50px;
      height: 100px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      margin: 5px;
    }

    .book2 {
      background-color: red;
      width: 50px;
      height: 100px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      margin: 5px;

      /* Carefully add these properties and explain line by line */

      position: absolute;
      top : 30px;
      left: 50px;

    }

    .book3 {
      background-color: green;
      width: 50px;
      height: 100px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      margin: 5px;

    }

    .book4 {
      background-color: magenta;
      width: 50px;
      height: 100px;
      color: #fff;
      text-align: center;
      line-height: 100px;
      margin: 5px;

    }
  </style>
</head>
<body>
  <div class="bookshelf">
    <div class="book book1">Book 1</div>
    <div class="book book2">Book 2</div>
    <div class="book book3">Book 3</div>
    <div class="book book4">Book 4</div>
  </div>
</body>
</html>
```

In this example, the `.book2` class has `position: absolute`, and it is positioned 20 pixels from the top and 30 pixels from the left of the closest positioned ancestor, which is the `.bookshelf`. Notice that Book 2 is now positioned independently of Book 1 and does not affect the layout of other elements.

In simpler terms:

1. **Normal Flow (Default Order):** Elements are like books on a shelf, placed in a default order.

2. **`position: absolute`:** It's like taking a book out of the normal order and positioning it wherever you want, regardless of where other books are. The book (element) is no longer affecting the order of other books.



In this example, "Book 2" (element with `class="book2"`) is using `position: absolute` to be placed wherever you specify (20px from the top and 30px from the left). It's like moving a book independently on the shelf without affecting others.

Experiment with different values for `top`, `right`, `bottom`, and `left` to observe how the absolute positioning works in relation to its closest positioned ancestor or the initial containing block. It's a powerful tool for precise element placement on a webpage.



**Fixed position:** 
* Fixed Position is basically when your Element will take a place with the Respect to the window and it will not move from there.
* Fixed-positioned element is "fixed" in a specific location on the screen, and it won't move when the user scrolls up or down the page. This can be useful for creating elements that should always be visible, like navigation bars or call-to-action buttons, regardless of where the user is on the page. 
* The element will maintain its position relative to the viewport's coordinates, providing a consistent visual reference point as the user interacts with the content.

### Exercise 4

#### Problem Statement
Give **fixed** position value to box 3 and fix it at the bottom of the scrollable page.

#### Solution
* In style of box_3, we can use position property and set the value as **fixed**.
* For fixing it to the bottom of the page, we can give right property as 4px and bottom as 1px.

#### Pseudocode
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
            height: 4000px;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: fixed;
            right: 4px;
            bottom: 1px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now if we scroll the page, the box3 will be fixed at the bottom right of the page.


**Sticky:**
* When an element is given a "position" value of "sticky," it acts like a relative-positioned element within its containing element until a certain scroll threshold is reached. Once the user scrolls beyond that threshold, the element becomes "stuck" in place and behaves like a fixed-positioned element, remaining visible on the screen. 
* In other words, a sticky element starts as part of the normal document flow, just like a relatively positioned element. As the user scrolls, the element follows its normal position until it reaches a designated point (usually when its top or bottom edge reaches a specific distance from the viewport's edge). At that point, it becomes "sticky" and remains fixed at that position while the rest of the content scrolls.

Lets go to the zomato website and see its navbar, here you can see when we scroll the page, this navbar is getting fixed at the top of the page.

So on reaching a particular value, sticky gets fixed.

### Exercise 5

#### Problem Statement
Give **sticky** position value to box 3 and fix it at the top of the scrollable page.

#### Solution
* In style of box_3, we can use position property and set the value as **sticky**.
* For fixing it to the top of the page, we can give top property as 0.

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
            height: 4000px;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: sticky;
            top: 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now if we scroll the page, the box3 will behave normally till it touches the top and them it becomes fixed to the top of the page.
























That's all for today's session!
