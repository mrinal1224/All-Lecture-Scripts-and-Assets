
# Class 3 - Introduction to CSS

---
title: Agenda
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


---
title:Introduction to CSS and CSS Rules
description: Brief overview of CSS Rules 
duration: 300
card_type: cue_card
---

We have already discussed in the previous class a breif overview of css , now lets see how to use CSS and Rules to Use CSS.

## CSS Rules

CSS is a rule-based language — you define the rules by specifying groups of styles that should be applied to particular elements or groups of elements on your web page.

For example, you can decide to have the main heading on your page to be shown as large red text. The following code shows a very simple CSS rule that would achieve the styling described above:


# Steps to add style tag:
- Add `<style>` and `</style>` tag inside the head tag of your HTML file. Inside this **style** tag, you can use all the CSS stylings.
- Select the element that you need to add CSS.
- For example, h1 and add curly braces to it. Inside this, you can define the CSS properties as shown below:


```html 
<style>
h1 {
  color: red;
  font-size: 5em;
}
</style>
```

In the above example, the CSS rule opens with a [selector](https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector). This _selects_ the HTML element that we are going to style. In this case, we are styling level one headings ([h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)).
- We then have a set of curly braces `{ }`.
- Inside the braces will be one or more **declarations**, which take the form of **property** and **value** pairs. We specify the property (`color` in the above example) before the colon, and we specify the value of the property after the colon (`red` in this example).
- This example contains two declarations, one for `color` and the other for `font-size`. Each pair specifies a property of the element(s) we are selecting ([h1](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) in this case), then a value that we’d like to give the property.





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


- Before Moving to Different ways of using CSS , Have you ever Wondered that when you do not use CSS even then there is some default styling is set for your elements , Your button looks a certain way , Input boxes look a certin way , Ever Wondered How these Designs are applied?


- The Answer is User-Agent StyleSheet



#### User Agent Style Sheet

The user agent stylesheet in CSS is a set of default styles that web browsers apply to HTML documents when no specific styles are provided by the author. Each web browser has its own user agent stylesheet, and it serves as a baseline style for rendering HTML elements. The term "user agent" refers to the software (web browser) that acts on behalf of the user when interacting with web content.

`Now Let's Move Forward and See how to Apply your Own CSS styling and Diffrent ways of applying them!`








## 1. External CSS
- You can create a separate file for CSS having the extension "**.css**".
- Here you do not need to use any HTML tag. You can directly write your CSS and properties.

### Example

```HTML=
h3{
    color: green;
}
```
To reflect these CSS into your HTML file, you need to link that CSS file to the HTML file.
- Use the "link" tag to do this as shown below.

```
<link rel="stylesheet" href="./CSS_file_name.css">
```
- You can add the file location in the **href** to add the CSS file 

- The code Will look like this ->

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div>
    <h1>Welcome to Scaler</h1>

    <h2>I hope you are Doing good</h2>
    <h3>See you Again!</h3> 

</div>

</body>
</html>
```


`You will notice the color of h3 will become green`





## 2. Internal CSS 
- When you write CSS in the same HTML file. (using the style tag)


- basic example of using internal CSS within an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css">
    <title>CSS Example</title>
    <style>
        /* Internal CSS */
      
        h1 {
            color: tomato;
        }
        
    </style>
</head>
<body>

<div>
    <h1>Welcome to Scaler</h1>

    <h2>I hope you are Doing good</h2>
    <h3>See you Again!</h3>

</div>

</body>
</html>
```

In this example, the CSS styles are defined within a `<style>` tag in the `<head>` section of the HTML document. These styles apply to the elements within the HTML document. `h1` sets the color of heading text.


## 3. Inline CSS
- It is writing CSS for a particular element. (using style attribute.) 

### Example
 Inline CSS involves styling individual HTML elements using the `style` attribute directly within the element tag. Here's a basic example:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="style.css">
    <title> CSS Example</title>
    <style>
        /* Internal CSS */
      
        h1 {
            color: #333;
        }
        
    </style>
</head>
<body>

<div>
    <h1>Welcome to Scaler</h1>
     

     <!-- <Inline CSS> -->
    <h2 style='color:blue'>I hope You are doing Good</h2>

    <h3> See you again </h3>

</div>

</body>
</html>
```

In this example, the styles are directly applied to each HTML element using the `style` attribute within the opening tag. This allows for individual styling of elements without the need for a separate CSS file or `<style>` tag in the `<head>` section.
- Here we are providing the CSS to that specific element "h2" only, known as Inline CSS. Always try to add a style tag inside the **head tag**.

> These are the three ways that can be used to apply CSS to your HTML file.

**Touch a Little on the Precedence**

 CSS precedence determines which styles will be applied to an HTML element when conflicting styles are defined in multiple places. Here's the precedence order:

1. **Inline CSS**: Styles defined directly within the HTML element using the `style` attribute have the highest precedence. They override any other styles applied to the same element.

2. **Internal CSS**: Styles defined within a `<style>` tag in the `<head>` section of the HTML document come next in precedence. They apply to all elements of the same type throughout the document, unless overridden by inline styles.

3. **External CSS**: Styles defined in an external CSS file linked to the HTML document using the `<link>` tag have the lowest precedence. They apply globally to all elements of the specified type, unless overridden by inline or internal styles.

In cases of conflicting styles (where the same property is defined in multiple places), the style with the highest precedence will be applied. If two conflicting styles have the same precedence, the one defined later in the document will override the earlier one.

It's important to use CSS precedence carefully to ensure that styles are applied as intended and to avoid unexpected behavior.


---
title: CSS selectors
description: Various ways of Selecting Elements in CSS
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


---
title: HTML Classes Quiz 1
description: Quiz 1
duration: 90
card_type: quiz_card
---
# Question
*Which CSS selector is used to select all elements with the class "highlight"?*
# Choices

- [ ] `#highlight`
- [ ] *`highlight`*
- [ ] `*highlight*`
- [x] `.highlight`
---

---
title: Descendant and Children Selectors
description: 
duration: 300
card_type: cue_card
---

## Descendent selectors
- Anything down the order can be termed as a descendent. For example, a child is the descendent of their Father as well as their GrandFather.
- Now, you need to select the obvious list as shown in the image and make it blue color.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/035/original/upload_741aa927d48eecd0dcd6ec59f15eba43.png?1695311213)


- For that first discuss the "**descent selector**". 
- When you select **ol li{}** as the selector then all the elements will get blue. So you need to select the specific parents that are "div" as shown in the example.

- We will write the selector as:
```HTML=
div li{
    color: blue;
}
```
Now moving to Children Selectors.

## Children selectors
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

---
title: Multiple Classes on an Element
description: 
duration: 300
card_type: cue_card
---

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


---
title: Attribute Selector
description: 
duration: 300
card_type: cue_card
---

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
title: Final Question with Discussing Colors and Pesudo Selector
description: 
duration: 300
card_type: cue_card
---

# Final Question of the session

Now, let us summarize the session and use all the previous selectors and color properties to solve this problem shown below:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/046/original/upload_cf0319b7c90943234aa84a26a0e8ff6f.png?1695312027)


- **Solution**:
First, we will add a style tag and then write all the CSS provided in the question like this:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/047/original/upload_2ea1f412f739128739787f0498ccba03.png?1695312161)


Coming to the point 6 of the question. Let us first see what is pseudo selector.

## Pseudo selector
- When you hover over any element and it changes its behavior, it is known as a Pseudo selector.
- For example, if you go on a sign-in button it becomes popped up.

```HTML=
a.hover{
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