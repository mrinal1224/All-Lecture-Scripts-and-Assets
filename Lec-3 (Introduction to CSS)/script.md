
---
title: Introduction to CSS
description: Brief overview of CSS and its various aspects
duration: 300
card_type: cue_card
---
# Agenda:
- What is CSS
- Need for CSS
- CSS Selectors
- Properties of CSS (color, background, fonts, and texts)

So, lets start!


> Ask about the various ways of using CSS
They are: 
1. Inline
2. Internal
3. External

> Q. Ask students about **CSS selectors**
**Ans**- CSS selectors are used to select the elements that will undergo designing using CSS.

These are the things that we will discuss. Now, let us see them one by one.

---
title: Adding CSS to an element
description: Adding CSS to an element
duration: 300
card_type: cue_card
---
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
title: Quiz 1
description: Quiz 1
duration: 90
card_type: quiz_card
---
# Question
How many colors are there in CSS by default?
# Choices

- [ ] 125
- [ ] 145
- [x] 140
- [ ] 147

---
title: Various ways of using CSS 
description: Various ways of using CSS
duration: 300
card_type: cue_card
---
# Using CSS in three different ways:

## 1. Internal CSS 
- When you write CSS in the same HTML file. (using the style tag)


## 2. Inline CSS
- It is writing CSS for a particular element. (using style attribute.) 

### Example
```
<h2 style = "color: red;"> I am heading 2 </h2>
```
- Here we are providing the CSS to that specific element "h2" only, known as Inline CSS. Always try to add a style tag inside the **head tag**.
- Inline CSS has more priority than Internal CSS.

> Ask students about the difference between **style attribute** and **style tag**.

## 3. External CSS
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

In this example, the class selector `.science and .literatre` are used to select elements with the specfict interest  and apply a style that changes the text color to blue and red based on the stundents interest.

There can be multiple students with interest in science so by creating ascience class we can assign them similar properties as we gave them batches similary it wil work for literature studnets as well

So class is just a way of grouping elements where they should behave and have similar properities.

In this analogy:
- The HTML document represents the classroom.
- Each student corresponds to an HTML element (h1).
- The different interests represent classes.
- The color-coded badges are like class properties.







## Descendent selectors
- Anything down the order can be termed as a descendent. For example, a father is the descendent of their child.
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

Let's see another type of selector which is the Classes

## Classes

- It is a very important part when you are learning CSS.
- Classes are defined as separate entities of similar elements.
- For real real-life example, if you are in class 10, then all the students there should be in class 10 only.
- Similarly, in CSS, similar elements having the same behavior are separated in a specific class as shown below code:


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/037/original/upload_130e57374ed680b30734deba9ee0b2c7.png?1695311313)


- We use dot (.) to select a class and apply CSS to them. Here the name of the class is test so we will apply CSS to this class as below:

```HTML=
.test{
    color: blue;
}
```
This will be applied to both the elements of the class namely the **test**.

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
- When you hover over any element and it changes its behavior, it is known as a Pseudo selector.
- For example, if you go on a sign-in button it becomes popped up.

```HTML=
a.hover{
    color : hsla(100%, 15%, 25%, 0.6)
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/048/original/upload_14bb1001ae9af53dda59aa7200cd2c8f.png?1695312197)


> That's all for today's session.

The doubt session begins!