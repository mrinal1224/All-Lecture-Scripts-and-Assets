# Class 1 - Web Fundamentals and Intro to HTML

---
title: Curriculum Overview
description:
duration: 900
card_type: cue_card
---


Greet the Learners and talk about the curriculum

**class wise breakup with project of Each module**

1. HTML/CSS - 7 Class (Portfoilo Webiste)
2. JavaScript and Machine Coding (DOM) - 22 Classes (Kanban Board and Mini Projects)
3. React - 13 classes (Movies App)
4. MERN - 12 to 14 classes (BookMyShow)

Explain in brief about each and every module

**HTML/CSS-**

Learning HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) is essential for anyone interested in web development, design, or even individuals who want to create and maintain their own websites. Here are several reasons why learning HTML and CSS is valuable:

1. **Foundation of Web Development:**
   - HTML is the backbone of web development. It provides the basic structure and markup for creating web pages.
   - CSS complements HTML by allowing you to style and format the content, making it visually appealing.

2. **Building Blocks of Websites:**
   - HTML defines the structure of a webpage, including headings, paragraphs, lists, images, links, and more.
   - CSS controls the layout and presentation of these elements, enabling you to create aesthetically pleasing and user-friendly websites.

**JavaScript-**

Web Development you cannot do without JavaScript!!!

 JavaScript is a versatile programming language with widespread use in web development and beyond. Here are several reasons why learning JavaScript is valuable:

   - **Client-Side Scripting:** JavaScript is the primary language for adding interactivity to websites. It allows you to create dynamic and responsive user interfaces, enhancing the overall user experience.

   - **Frameworks and Libraries:** Many popular web development frameworks and libraries, such as React, Angular, and Vue.js, are built using JavaScript. Learning JavaScript will open doors to these powerful tools , also you can do cross platform Mobile Application development with tools like React Native etc

   - **Full-Stack Development:** With the advent of technologies like Node.js, JavaScript is no longer limited to the browser. It can be used for server-side development, enabling full-stack development with a single language.


   About React and Node We will talk about when we reach there!






Start with the Actual Class

---
title: Introduction
description:
duration: 900
card_type: cue_card
---
## Introduction

When we think about accessing a website, there's more happening behind the scenes than meets the eye. The URL, or Uniform Resource Locator, is what we usually type into the address bar to access a web page. However, the URL represents much more than just a web address. It's a pathway to the actual resource we're trying to access on the internet.


---
title: Process
description:
duration: 900
card_type: cue_card
---

## Process
To break it down, when we enter a URL, the full form of URL comes into play: **Uniform Resource Locator**. This term accurately describes what it does — it locates a specific resource on the internet. This resource could be anything from a text document to a video, and the server's job is to provide us with that resource.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/110/original/upload_06940025115633bec555d541d722b876.png?1695109040)


A **server**, in this context, isn't a physical location but rather a program running somewhere in the world. This program generates the website content for us. It's important to note that a server is not a database. Rather, it's a responsive entity that resides somewhere in the vast expanse of the digital world. Imagine it as a helpful entity that receives your request and promptly serves you the requested information.

---
title: Dairy Farm Analogy
description:
duration: 900
card_type: cue_card
---

## Dairy Farm Analogy
Here's an analogy to help clarify the roles involved: Imagine you own a dairy farm and have numerous customers who regularly place orders for dairy products. To manage this influx of orders, you have an **operations team** that handles the order-taking process. They ensure that customers' requests are recorded accurately and are then forwarded to the **production team**.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/111/original/upload_9cef5b39282b29f01216e706282bbb64.png?1695109075)


In the context of websites, the operations team can be likened to the **DNS (Domain Name System)** system. The DNS system acts like an operations team, taking in requests and translating them into specific IP addresses. Think of DNS as a phonebook for the internet. When you enter a domain name like "scaler.com," the DNS system translates it to an IP address that points to a particular server.

However, it's important to note that the server itself is not where the data comes from. Instead, it's comparable to the dairy farm in our analogy—it's responsible for assembling and providing the products. In our website world, the actual data resides in a **database**. This database is akin to a **warehouse** for the dairy farm. All the products are stored there, ready to be accessed when needed.

When a request is made, the server applies specific protocols and data logic to retrieve the necessary information from the database. This process is what ensures that we receive the correct data as a response to our request.

Bringing it all together, the customers in our dairy farm analogy represent clients or users of the website. The operations team corresponds to the DNS system, efficiently directing requests. The dairy farm itself serves as the server, assembling and providing the desired information. And finally, the warehouse embodies the database, housing all the necessary data for the website.

In the grand scheme of things, even though we might simply see a website's interface through our browser, there's a complex interplay of components behind every web page that ensures we get the right information at the right time.




---
title: Introduction to HTML
description:
duration: 900
card_type: cue_card
---


## HTML / CSS

* Use this analogy to Explain Learners about HTML/CSS and JS


Lets say you have a construction company and given a task to create a shopping mall. How do you start

* Map or blueprint - wireframe
Wireframes in web development are basic blueprints for a website or application
Wireframes are used to plan the functionality and user experience
They are essential for planning the user interface and interaction flow, serving as a guide for developers and designers in the early stages of a project.
Figma is one such tool to create wireframe, Adobe XD

What is the next step after blueprint of the mall is ready 
Create the structure, brick mortar structure , Build the Foundation etc

HTML is structure of the web application
Or you can think of it as the skeleton that supports the body


After the structure is ready, you start to paint and make it beautiful
That is what css does for you
Show the web developer chrome extension by disabling css on any webiste and show how a webiste looks without CSS

After the mall looks ready, we need to add some functionality like escalators, lifts, parking gates, payment systems, etc

Similarly JS is what we introduce in our web application when we want interactivity like success message when button is clicked, hiding or showing a section, changing fonts , colors dynamically on user interaction


Stat now with Installing and IDE (VScode)

Integrated development environment

* It's a comprehensive tool used by developers to write and test software
* We are going to use Visual Studio Code (VS Code) which is a popular IDE. It's a lightweight IDE developed by Microsoft, widely used for programming in various languages. 

* VS Code offers features like syntax highlighting, intelligent code completion, and other imp features making it a versatile tool for developers.

* Download VS code (https://code.visualstudio.com/)

Open a folder - Give a Batch Name






## HTML

Under the folder, create index.html
Type exclamation and hit enter -> boilerplate code
This boilerplate HTML code is like the skeleton of a webpage:

#### Code
```html
<!doctype html>
<html lang = "en">
  <head>
    <meta charset = "utf - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1">
    <title>HTML DEMO</title>
  </head>
  <body>
    <h1>Hello, world ! </h1>
  </body>
</html>
```


* <!DOCTYPE html>: It's like saying, "Hey, we're starting an HTML page!" ( actually HTML5 which is the latest version of HTML )

* <html lang="en">: This is the main container of your page, and lang="en" means it's in English.

* Inside <html>, there are two parts:
<head>: Think of it as the brain of your page. Its not visible but contains imp info

* Meta tags - 
Meta tags in HTML are used to provide metadata about the web page. This data isn't displayed on the page itself but is important for browsers and search engines. 
They're essentially instructions to the browser and search engines about how to handle and display your page.


* <meta charset="UTF-8">: This makes sure your page can understand a wide range of characters from different languages.
When you're coding, you might use characters that are specific to certain languages, like accents in French or characters in Chinese. 
The UTF-8 character set includes a huge array of these characters from different languages. Without specifying UTF-8, your browser might not correctly interpret and display these characters, leading to garbled text or question marks on your webpage.


* <meta name="viewport"...: This helps your page look good on phones and tablets.

* <title>Document</title>: This is your page's title. You'll see it in the browser tab.

* <body>: This is where all the content you see on the webpage goes, like text and images.


* Running the file

Write some text like hello world
Open the index.html from the file system and double click to run the file
Install live server extension

* Case insensitive

HTML is designed to be case-insensitive for its tags, meaning it doesn't matter if you use uppercase, lowercase, or a mix of both for the tag names. 
Whether you write <head>, <HEAD>, or <HeAd>, it will be interpreted the same way by the browser. This is part of the HTML specification to make the language more forgiving and easier to use, especially for beginners. 
However, it's considered good practice to stick to lowercase for consistency and readability.

## Tags


Talk about how all that we see are tags . angle brackets
Headings - h1 to h6
Open any website  - zomato and discuss fonts
Paragraph tags - for writing some descriptive content
Lorem - emmet abbreviations
wikipedia or zomato content

HTML tags like 'p' and h1>-h6 give meaning to the text, making it easier for both people and computers ( screen readers ) to understand the structure and importance of the content

Its like in shopping mall, you will see big banners of brand from outside, but outside the shop in the mall, the banner size will be small. The products also have name but again the size of the text is small

Img tags - self enclosing tag
It has additional information which describes the img which are called as attributes
This is like adding adjectives to nouns in a sentence. Just like adjectives give more detail or characteristics to a noun, attributes provide additional information about an HTML tag.
accessories or features of a car. Just as a car can have features like a sunroof, a specific color, or a navigation system, HTML tags can have attributes that add extra features or details.

Discuss the src and alt tags ( alternate to image )
Either break the url or disable images with extension to show the alt tags

Write comments and discuss comment tags


## Anchor tags
<a> tags, commonly known as anchor tags, are used in HTML to create hyperlinks
Ask class what are hyperlinks

Anchor tags are used to link to other web pages or resources, both within the same website or externally to other websites.

#### Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <section>
        <a href = "https://www.scaler.com/topics/autoboxing-in-java/">Learn autoboxing - in - java</a>
    </section>
</body>
</html>

```

## Structure your code
#### Div
Div elements are often used to structure and style sections of a web page, making it easier to apply CSS styles or JavaScript functionality to specific groups of content.

#### Code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <div>
        <h2>Welcome to Scaler Topics</h2>
        <p>
         We're glad you're here
        </p>
    </div>
</body>
</html>
```
#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/112/original/upload_b1f0471a9f3040bdd40eb364e9101835.png?1695109208)

## Explain Divs
Think of <div> tags as a way to divide the page into different areas, making it easier to design and manage the layout.
In your house, you have different rooms
<div> tags in HTML are like invisible boxes that help organize and group content on a webpage.
like a header, footer, some content area, buttons area
Let us divide our code into different divisions

```html
<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
 </head>
 <body>
   <div>
       <h1>heading 1</h1>
       <h2>heading 1</h2>
       <h3>heading 2 or 3</h3>
       <h3>checking thus</h3>
       <h5>comparing this</h5>
   </div>
   <div>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus a veniam doloribus omnis laborum ipsum, dolore incidunt earum delectus est? Culpa, aut voluptas voluptatem provident exercitationem magni accusantium! Laudantium.</p>
   </div>
   <div>
       <!-- images are self closing tags -->
       <img src="" alt="cute dog image"/>
       <a href="http://www.google.com" target="_blank">take me to google</a>
   </div>
   <div>
       <p>some detial</p>
       <div>
           <p>some more detail</p>
       </div>
   </div>


 </body>
</html>
```

## Github account
Signup and create a account if not done
GitHub is like a big online library for computer code.
Imagine every project as a book in this library. People from
all over the world can store their code projects here, make changes, and work together. It keeps track of all the changes, so you can always see who changed what and when. It's a place where coders collaborate and share their work, making it easier to create and improve software.
Create a new repository - coolest_batch_25Jan

* Note for Instructor- 
You dont have to teach anything about git or github here
Just make sure learners create an accout and they can access the code you write and share during the class
make this a habit that after every section you push your code to a repo that learners can access and you have to maintain it througout the Batch Timeline



## Semantic tags
Imagine a book with no headings, index, markings, chapters, just text all the way through Will it be easy to read? Nope!


if you have a book with intro, bibliography, index, chapters, then it makes it more usable and readable
Semantic tags in HTML provide meaning to the structure of web pages, helping browsers, search engines, and assistive technologies understand the content better. 

They were needed to improve web accessibility and search engine optimization, moving away from generic tags like <div> and <span> which don't convey specific meanings.

https://www.semrush.com/blog/semantic-html5-guide/
Semantic tags were introduced with HTML5.

Create a new semantic.html file and copy the assets folder for portfolio , show the Demo and then start with writing basic Semantic HTML code


## Section Tag - An alternate to Divs
Sections are used to structure the content of a web page into logical parts, such as chapters, articles, or different sections of a document.

#### Code: 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <section>
        <h2>Section Title</h2>
        <p>This is a section of content.</p>
        
    </section>
</body>
</html>
```
## Tags and buttons

## Header tags

Header tags are used to structure the hierarchy of content on a webpage, with `<h1>` typically being the main title and `<h2>`, `<h3>`, and so on used for subsections. They help improve the accessibility and readability of content.
    
#### Code:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/113/original/upload_0666ce092529c955114832a23824d462.png?1695109287)


#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/114/original/upload_a280807eb2f3df89d88691096051f0eb.png?1695109351)


#### Buttons
Button elements are used to create clickable elements that can trigger actions when clicked, such as submitting a form or triggering JavaScript functions.

#### Code:
```html
<button type = "button"> BUTTON </button>
```
#### Output
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/116/original/upload_e873e3ecb310330c64503dafcf33ad53.png?1695109456)


## Create the Structure of the Portfolio


#### Code:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>

<body>
    <header>
        <div >
            <nav>
                <div>
                    <div>
                        <img src="./assets/scaler-academy logo 2.png" width="50px" alt="logo">
                    </div>
                    <div>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Blog</a></li>
                    </div>
                </div>
            </nav>
        </div>
        <div >
            <div>
                <img src="./assets/mrinal.jpg" alt="Profile">
            </div>
            <div>
                <h6>Mrinal Bhattacharya</h6>
                <h1>I'm a Frontend<br> <span>Developer</span></h1>
                <p>Description</p>
                <div>
                    <button>DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>
    </header>

     <section>
        <div>
            <div>
                <img src="./assets/mrinal_profile.jpg" height="400px" alt="profile pic">
            </div>
            <div>
                <h1>About <span>Me</span></h1>
                <h3>Hello! I'm Mrinal Bhattacharya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci distinctio obcaecati aliquid,
                    quia tempora quis optio repudiandae officia earum?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div>
                    <a href="#"><img src="./assets/linkedIn.png" width="40px"></a>
                    <a href="#"><img src="./assets/github logo.png" width="40px"></a>
                    <a href="#"><img src="./assets/leet logo.png" width="40px"></a>
                    <a href="#"><img src="./assets/twitter logo.png" width="40px"></a>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div>
            <h1>My Projects</h1>
            <p>I mostly work with HTML ,CSS ,JavaScript , React and Node</p>
            <div>
                <div>
                    <img src="./assets/calculator png.png">
                    <h2>Calculator</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
                <div >
                    <img src="./assets/cart png.png">
                    <h2>Shopping Cart</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
                <div>
                    <img src="./assets/to do list.png">
                    <h2>To do List</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
            </div>
        </div>
    </section>


</body>

</html>
```

* Write this structure and explan tags and how we create diffrent sections here

* Start the Doubt Session Take doubts and wrap the class




