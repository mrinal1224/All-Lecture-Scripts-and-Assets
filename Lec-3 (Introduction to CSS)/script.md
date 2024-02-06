
# Class 3 - Introduction to CSS

---
title: Introduction to CSS
description: Brief overview of CSS and its various aspects
duration: 300
card_type: cue_card
---


# Agenda:
- Rules of CSS
- Ways to Add CSS
- CSS Selectors
- Properties of CSS (color, background, fonts, and texts)

So, lets start!



We have already discussed in the previous class a breif overview of css , now lets see how to use CSS and Rules to Use CSS.

---
title:CSS Rules
description: Brief overview of CSS Rules 
duration: 300
card_type: cue_card
---

## CSS Rules

CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.

For example, you can decide to have the main heading on your page to be shown as large red text. The following code shows a very simple CSS rule that would achieve the styling described above:





```css 
h1 {
  color: red;
  font-size: 5em;
}
```

In the above example, the CSS rule opens with a [selector](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector). This _selects_ the HTML element that we are going to style. In this case, we are styling level one headings ([h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)).
- We then have a set of curly braces `{ }`.
- Inside the braces will be one or more **declarations**, which take the form of **property** and **value** pairs. We specify the property (`color` in the above example) before the colon, and we specify the value of the property after the colon (`red` in this example).
- This example contains two declarations, one for `color` and the other for `font-size`. Each pair specifies a property of the element(s) we are selecting ([h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) in this case), then a value that we’d like to give the property.

Now as we know the rules , Let's See how we can use CSS in Diffrent Ways








These are the things that we will discuss. Now, let us see them one by one.


- Create a basic HTML file and add a heading **h1** inside the body tag entitled: "Heading 1" and open it in a browser to show how it looks.
- Now, let us see how to add CSS to this element.

> Discuss the style tag that helps to use style in your HTML elements.

# Steps to add style tag:
- Add `<style>` and `</style>` tag inside the head tag of your HTML file. Inside this **style** tag, you can use all the CSS stylings.
- Select the element that you need to add CSS.
- For example, h1 and add curly braces to it. Inside this, you can define the CSS properties as shown below:

```HTML=
h1{
    color : brown;
}
```
> Ask students which symbol is used to define the CSS property and tell them to remember to end the property with semi-colon ";".
> 
> **ANSWER**- COLON ":"


---
title: Various ways of using CSS 
description: Various ways of using CSS
duration: 300
card_type: cue_card
---


> Ask about the various ways of using CSS
They are: 
1. External
2. Internal
3. Inline

# Using CSS in three different ways:


<!-- Take h1 h2 h3 and apply  -->

## 1. External CSS
- You can create a separate file for CSS having the extension "**.css**".
- Here you do not need to use any HTML tag. You can directly write your CSS and properties.

### Example

```HTML=
H3{
    color: green;
}
```
To reflect these CSS into your HTML file, you need to link that CSS file to the HTML file.
- Use the "link" tag to do this as shown below.

```
<link rel="CSS_file_name" href="./CSS_file_name.css">
```
- You can add the file location in the **href** to add the CSS file if it is at some other location in your system.

> These are the three ways that can be used to apply CSS to your HTML file. Now we will discuss the ways of selecting a particular element.



## 2. Internal CSS 
- When you write CSS in the same HTML file. (using the style tag)

<!-- 
Add Examples of Internal CSS -->


## 3. Inline CSS
- It is writing CSS for a particular element. (using style attribute.) 

### Example
```
<h2 style = "color: red;"> I am heading 2 </h2>
```
- Here we are providing the CSS to that specific element "h2" only, known as Inline CSS. Always try to add a style tag inside the **head tag**.


> Ask students about the difference between **style attribute** and **style tag**.


<!-- Add Precedence -->

<!-- Show DevTools show all the elements and show the precedence (create a diffrent file also Introduce User Agent Stylesheet) -->


---
title:  Element selectors
description: Various ways of element selectors
duration: 300
card_type: cue_card
---
- As we have seen in the previous example, **h1{}** was the selector. But there are more ways of selecting elements.
- Have a brief discussion about how the students can select an element as the previous method that we learned till now.


## Breif Explanation on Class and ID Selectors and how to use them

In CSS (Cascading Style Sheets), a class selector is a way to select and style HTML elements based on the presence of a specific class attribute. Class selectors are denoted by a period (.) followed by the class name, and they allow you to apply styles to multiple elements across your HTML document that share the same class.

**Syntax:**
```css
.className {
  /* styles go here */
}
```


**Real-life Analogy:**
Imagine a classroom with students of different interests, and each interest group has a specific color associated with it. Students interested in science wear blue badges, students interested in literature wear red badges, and so on.


**Example:**
Consider the following HTML snippet:

#### All h1 here represents students

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ClassRoom</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1 class="science">Student-1 - Science</h1>
  <h1 class="science">Student-2 - Science</h1>
  <h1 class="literature">Student-3 - Litetrature</h1>
  <h1 class="literatre">Student-4 - Litetrature</h1>
  <h1 class="Science">Student-5 - Science</h1>

</body>
</html>
```

Now, let's create a CSS file (`styles.css`) to apply styles using the class selector:

```css
.science {
  color: blue;
  font-weight: bold;
}

.literature {
  color: red;
  font-weight: bold;
}
```

In this example, the class selector `.science and .literature` are used to select elements with the specific interest  and apply a style that changes the text color to blue and red based on the students interest.

There can be multiple students with interest in science so by creating a science class we can assign them similar properties as we gave them batches similary it will work for literature studnets as well

So class is just a way of grouping elements where they should behave and have similar properities.

In this analogy:
- The HTML document represents the classroom.
- Each student corresponds to an HTML element (h1).
- The different interests represent classes.
- The color-coded badges are like class properties.


<!-- Extend this example with ID -->


### Now let's look at what is the purpose of id Selector

In CSS (Cascading Style Sheets), an ID selector is used to select and style a specific HTML element based on its unique identifier. The syntax for an ID selector is to use the "#" symbol followed by the unique ID of the HTML element.

**Real-life Analogy:**

Imagine a library where each book has a unique identification number. In this analogy:

- The library is like an HTML document.
- Each book is like an HTML element.
- The unique identification number assigned to each book is like the HTML element's ID.

Now, consider that you want to highlight or mark a specific book you want to read . You would use its unique identification number to locate it. , here you cannot and should not provide the same highlight color to diffrent books that wont be good because then you wont be able to identify it uniquely 

In CSS terms:

- The unique identification number of the book is similar to the ID of an HTML element.
- The process of styling or marking that specific book is like applying styles to the HTML element using the ID selector in CSS.





```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ID Selector Book Example</title>
  <style>
    #uniqueElement {
      color: blue;
      font-weight: bold;
    }
  </style>
</head>
<body>
   <h1 id='uniqueElement'> The Great Gatsby </h1>
   <h1> Harry Potter </h1>
   <h1> A Tale of two Cities </h1>
   <h1> Fourth Wing </h1>
</body>
</html>
```

In this example, the ID selector `#uniqueElement` is used to style the text within the `<h1>` element. The text inside the h1 will appear in blue and bold.


Just as you use the library book card to identify and handle a specific book, you use the ID selector in CSS to identify and style a specific HTML element.







## Descendent selectors

<!-- Add to Post Reads -->

In CSS, the descendant selector is represented by a space (` `) and is used to select all instances of a particular element that are descendants of another specified element. The real-life analogy for the descendant selector can be likened to a family tree, where you want to select all the descendants of a particular ancestor.

Let's imagine a family tree scenario where you have different generations. In this analogy, the ancestor is like the root of the family, and descendants are subsequent generations. For instance, you might want to style all the grandchildren in a family tree. The descendant selector allows you to do this by selecting all the grandchildren, regardless of the immediate parent.

Here's a code example to illustrate this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Style for the grandParent element */
    .grandParent {
      font-weight: bold;
    }

    .grandParent .parent {
        color : red;
    }


    /* Style for all descendants (grandchildren) of the ancestor */
    .grandParent .child {
      text-decoration: underline;
    }
  </style>
  <title>Descendant Selector Example</title>
</head>
<body>

  <!-- Ancestor element -->
  <div class="grandParent">
    Ancestor
    <!-- Immediate child of the ancestor -->
    <div class="parent">
      Parent
      <!-- Grandchild of the ancestor -->
      <p class="child">child 1</p>
      <p class="child">child 2</p>
    </div>
    <!-- Another immediate child of the ancestor -->
    <div class="parent">
      Another Parent
      <!-- Grandchild of the ancestor -->
      <p class="child">child 3</p>
      <p class="child">child 4</p>
    </div>
  </div>

</body>
</html>
```

In this example:

- The `.grandParent` class represents the ancestor element.
- The `.parent` class represents the immediate children of the ancestor.
- The `.child` class, targeted by the descendant selector `.grandParent .child`, represents all descendants (grandchildren) of the ancestor.

This way, you can apply different styles to the grandParent, immediate children (Parent), and all descendants in the family tree structure.


- Anything down the order can be termed as a descendent. For example, a child is the descendent of their father and grandfather as well.

- Now, you need to select the obvious list as shown in the image and make it blue color.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/035/original/upload_741aa927d48eecd0dcd6ec59f15eba43.png?1695311213)


- When you select **ol li{}** as the selector then all the elements will get blue. So you need to select the specific parents that are "div" as shown in the example.

- We will write the selector as:
```HTML=
div li{
    color: blue;
}
```


Now moving to Children Selectors.

## Child selectors

In CSS, a child selector is a way to target and style specific elements that are direct children of a particular parent element. The child combinator is represented by the ">" symbol, and it selects elements that are immediately nested within another element.

Let's use a real-life analogy to understand this concept better:

Imagine a family tree where you have grandparents at the top, followed by their children (your parents), and then you as the grandchild. If you want to specify something that only applies to your direct parents (not your grandparents or yourself), you could use the child selector.

Now, let's translate this analogy into CSS with a code example. Suppose you have the following HTML structure representing a family tree:

```html
<div class="grandparent">
    <div class="parent">
        <p>You</p>
    </div>
    <div class="parent">
        <p>Your Sibling</p>
    </div>
</div>
```

If you want to style only the `<p>` elements that are direct children of the elements with the class "parent," you can use the child selector like this:

```css
.parent > p {
    color: blue;
}
```

In this example, the CSS rule targets only the `<p>` elements that are immediate children of elements with the class "parent." The color property is set to blue for these specific paragraphs.

So, the analogy here is similar to specifying something that only applies to your direct parents in a family tree, not to your grandparents or yourself.


Let us take an example as shown below.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/036/original/upload_6e331819a556124295cda866b1ad80df.png?1695311277)


There are two span tags. Here we need to make the text "I am the direct son" blue using CSS.

- Use the greater than **">"** symbol to use direct children.

```html=
div > h1 > span{
    color: blue;

}
```
- It means that you are directing to apply CSS to the span element that is directly children to the **h1**.



> Discuss a question having two different classes namely **class1** and **class2** and apply CSS on them to make one class **blue** and one class **red**.
- Solution:
```HTML=
.class1{
    color: blue;
}:

.class2{
    color: red;
}
```
### Question on multiple classes

Suppose a situation when there are two or more than two classes for a single element as shown below and you have to make some specific elements blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/038/original/upload_1a43d7aa8cd4e546b6264e88799e956b.png?1695311389)


- Here we need to select multiple classes **m1** and **m2** and make them blue.
- Solution:
```HTML=
.m1.m2{    <!-- it is multiple selector -->
    color : blue;
}
```
Here you will use multiple classes as shown in the example to apply the CSS to some specific elements in such cases.

### Question on a combination of all the previously discussed selectors.

You have to make the text "**I'm here, find me**" blue as shown in the question image below. Feel free to use any selector or combination of selectors you want.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/039/original/upload_e17f8e227f4328a482d1cc22803e0dc5.png?1695311505)


> Give 3-4 minutes to the students to try then move ahead with the solution.

- **Solution**:

```HTML=
.c1 .c2{
    color: blue;
}
```

### Question on Class with Children Combinator

In this question you need to make the select and make the text "**I'm a direct son**" blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/041/original/upload_6e8bceeaca78cf983eb897650d522316.png?1695311598)


- **Solution**:
```HTML=
.c1>p{
    color: blue;
}
```

### Question on id selector
- The id selector uses the id attribute of an HTML element to select a specific element.

- The id of an element is unique within a page, so the id selector is used to select one unique element.
- We use "#" to address the id.

> Ask students the difference between class and id of CSS.
> **Ans**: Elements can have the same classes but they can not have the same id. 

### Example

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/042/original/upload_0a85830042d3f0d832f66b0c11e9ab40.png?1695311661)

- You need to select **s2** with the "id=the-one" and make blue

- Solution:
```HTML=
#the-one{
    color: blue;
}
```

### Question on attribute selector

- CSS attribute selectors are used to select and style HTML elements with the specified attributes and values.
- Let us take an example as shown below. Here we need to select the button element and make the color blue.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/044/original/upload_106e606616e173b79a0a71bd501d9812.png?1695311699)


- **Solution**:
```HTML=
input[value="Select me"]{
    color: blue;
}
```
Here you can write the element like "input" and start the bracket "[]". Inside the bracket, you can write the attribute that you are selecting to apply CSS.

- That's how the attribute selector works.


---
title:  CSS Colors
description: How to use colors and various properties to the elements of HTML.
duration: 300
card_type: cue_card
---

# 1. Normal Color 
- The very basic way of using colors is as follows as we have discussed earlier that is `h1{color: color_name;}`
- Using this method you can use the 140 colors of CSS. But what do you need to use a color apart from these 140 colors?

# 2. RGB
- Then we use the **RGB value** to change the element colors. 
- RGB is the color concept that shows how you can create any color using a definite proportion of these three colors that are **Red**, **Green**, and **Blue**.
The range of RGB values is from **(000 to 255)**.

Let us take an example how to use RGB values for CSS.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/045/original/upload_001bf16ebd83d5ea0df12fc19d263397.png?1695311917)
[

- You can also add **opacity** property where you pass the RGB values. 
- Range of opacity is from (0.00 to 1.00)
- For example-

```HTML=
color : rgba(255, 165, 100, 0.50);
```
> Ask the students to try different colors using different RGB values.


# 3. Color code (Hexadecimal code)
- Color codes are three-byte hexadecimal numbers (meaning they consist of **six digits**), with each byte, or pair of characters in the Hex code, representing the intensity of **red**, **green**, and **blue** in the color respectively.
- We have hex code for every color in CSS.
- You can find these codes on Google search also.

> Ask the students that they can use the free website `www.coolors.co` to find amazing color palettes and their codes.

- You can use these hex codes to paste into your CSS thing.
- Remember to apply hashtag **"#"** before the codes. For example- **#DC143C** 

Now, let us see the 4th method of CSS Colors.

# 4. HSC 
- It stands for **Hue**, **Saturation**, and **Lightness**.

## Example
```HTML=
h2{
    color : hsl(100%, 15%, 25%)
}
```
- In this, we define these three properties in percentage.



# Final Question of the session

Now, let us summarize the session and use all the previous selectors and color properties to solve this problem shown below:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/046/original/upload_cf0319b7c90943234aa84a26a0e8ff6f.png?1695312027)


- **Solution**:
First, we will add a style tag and then write all the CSS provided in the question like this:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/047/original/upload_2ea1f412f739128739787f0498ccba03.png?1695312161)


Coming to the point 6 of the question. Let us first see what is pseudo selector.

## Pseudo selector
- 
In CSS (Cascading Style Sheets), pseudo-selectors are used to select and style elements based on their state, position in the document, or other criteria that cannot be expressed by simple element selectors. Pseudo-selectors are denoted by a colon (:) followed by a keyword. 

There are keywords like hover , active , focus etc


- For example, if you go on the anchor tag it chnages it's behaviour , this is basically hover property 
The :hover CSS pseudo-class matches when the user interacts with an element with a pointing device, but does not necessarily activate it. It is generally triggered when the user hovers over an element with the cursor (mouse pointer).

```HTML=
a:hover{
    color : hsla(100%, 15%, 25%, 0.6)
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/048/original/upload_14bb1001ae9af53dda59aa7200cd2c8f.png?1695312197)


---
title: Basic CSS properties
description: A brief Intoduction to Basic CSS properties on background , text and fonts.
duration: 600
card_type: cue_card
---

### Background color in CSS.
- It works the same as the color.
- You can add CSS code for background color as :

```HTML=
h1{
    background-color : blue;
}
```

## **Example**:


![](https://hackmd.io/_uploads/ryUXY8npn.png)


Here you will select the class namely "background" and apply CSS to them. It will be reflected to all the **h1s** inside that div tag.

> `color` is used to change the text color but `background-color` is used to change the color area behind that text.

- You can also use an image as the text background. To do this, you need to provide the image URL in the CSS as shown below:
```HTML=
h1{
    background-image : url(" url_of_that_specific_image.jpg ");
}
```

You can set the background size as:
```HTML=
h1{
    background-image : url(" url_of_that_specific_image.jpg ");
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
- It's value ranges from lightest **100** to boldest **800**.
- Syntax:

```HTML=
font-weight: 800;
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


![](https://hackmd.io/_uploads/Sy-OFI263.png)


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


> That's all for today's session.

The doubt session begins!