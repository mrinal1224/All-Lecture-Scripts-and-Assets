# Dynamic DOM (Consume and work with an API)

---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---

## Agenda
* What is JSON? and How to work with JSON data
* Create a weather app using an API.
* We will be using the "weather API" for getting the data of real-time weather and use that data in our app. 




---
title: Introduction to JSON 
description:
duration: 120
card_type: cue_card
---

### JSON

JSON, which stands for JavaScript Object Notation, is a lightweight format for storing and transporting data. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is based on the JavaScript programming language, but it is language-independent, meaning it can be used with many programming languages, including Python, Ruby, PHP, and many others. Let's break this down into simpler concepts:

### 1. What is JSON?

Imagine you're writing down your shopping list in a way that you want both your friends and a computer to understand. You would choose a simple, structured format, right? JSON is exactly that but for data. It uses a set of rules to represent data as text, making it easy to send this data across the internet or save it in files.

### 2. Structure of JSON

JSON's format is reminiscent of JavaScript object literal syntax, but with some restrictions. It mainly consists of two structures:

- **Objects**: These are collections of key/value pairs. In JSON, an object begins with `{` (left brace) and ends with `}` (right brace). Each key is followed by a colon (`:`) and then the value assigned to that key. Key-value pairs are separated by commas. For example:

  ```json
  {
    "name": "John Doe",
    "age": 30,
    "isEmployed": true
  }
  ```

- **Arrays**: These are ordered lists of values. In JSON, an array begins with `[` (left bracket) and ends with `]` (right bracket). Values are separated by commas. For example:

  ```json
  ["apple", "banana", "cherry"]
  ```

Values in JSON can be strings (text wrapped in double quotes `" "`), numbers, objects, arrays, `true`, `false`, or `null`.

### 3. How JSON Works with JavaScript

Now , the major application of this JSON format is to pass data from one System to another , As Most of the internet's data transmission protocols, like HTTP, are text-based. They are designed to transmit data as text rather than in proprietary formats (objects or arrays). JSON, being a text-based format, fits seamlessly into this architecture.

So Now as JSON is text(string) based so to transfer data from one system another we need to convert data that we need to transfer into JSON string

We will take a very fun example for this

Imagine you have a box of toys. In the world of web development, your toys are your data, like names, ages, or places. Now, you want to send this box to a friend who lives far away. But there's a catch: you can't send the box as it is; you need to pack it in a special way so that it can travel through the internet. This is where **JSON** comes into play.

**JSON** is a way to pack your data (toys) so that they can travel easily over the internet. It turns your data into a string (a sequence of letters, numbers, and symbols) that can be sent and then unpacked by your friend (or another computer).

Let's create a simple example to illustrate both parsing and stringifying with toys as our data. First, we'll "pack" our toy data into a JSON string using `JSON.stringify()`, and then we'll "unpack" it using `JSON.parse()`.

```javascript
// Define our toys as a JavaScript object
var toys = {
  toy1: {name: "Teddy Bear", color: "Brown"},
  toy2: {name: "Race Car", color: "Red"},
  toy3: {name: "Doll", color: "Pink"}
};
// Now Here this is in  Javascript object Format and in this format data cannot be sent over the internet as this is not universally understood by the data transfer protocols

// Pack our toys into a box (convert our toys object into a JSON string)
var toysJSONString = JSON.stringify(toys);
console.log("Packed Toys:", toysJSONString);


// Here We have converted the javascript object into JSON string now this is understood by the protocolos

// Now, let's say this JSON string is sent over the internet.
// On the other side, we receive this packed box of toys as a JSON string.


// Now as we are recieving a JSON string , so while writing javascript code we will not be able to apply object properties in a JSON string , so now to convert the string again to object we will parse it


// Unpack our toys from the box (parse the JSON string back into a JavaScript object)
var unpackedToys = JSON.parse(toysJSONString);
console.log("Unpacked Toys:", unpackedToys);

// Now, 'unpackedToys' is a JavaScript object with our toys,
// and we can access and work with them like before.
console.log("Let's play with the:", unpackedToys.toy1.name); // Accessing the Teddy Bear
```

In this example:
- We start with our toys organized in a JavaScript object.
- We "pack" these toys using `JSON.stringify()`, turning them into a string that can be easily sent over the internet.
- We simulate receiving this packed string on the other side and then "unpack" it using `JSON.parse()`, turning it back into a JavaScript object that we can work with.
- Finally, we access one of the toys from our unpacked object to show that it's back to its original, usable form.


### 4. Why Use JSON?

JSON is popular for several reasons:

- It is text, and can be read and written by humans.
- It is easy for machines to parse and generate.
- It is fully compatible with JavaScript and many other languages, making it a good choice for data interchange on the web.

In summary, JSON is a universally accepted format for structuring data, making it an essential part of modern web development. Its simplicity, ease of use, and compatibility with many programming languages have made it a preferred choice for data interchange on the internet.


---
title: Introduction to API 
description:
duration: 120
card_type: cue_card
---

### API and the Use of JSON Data

After understanding the basics of JSON and its importance in web development, it's crucial to explore how JSON data is utilized in APIs (Application Programming Interfaces). APIs play a pivotal role in enabling different software applications to communicate with each other. They act as intermediaries that allow applications to exchange data and functionality easily and securely. JSON, with its simplicity and efficiency, is widely used as the format for exchanging data in API communications. Let's delve deeper into APIs and the role of JSON data in this context.

#### What is an API?

An API is a set of rules and protocols that allows one software application to access the data or functionality of another application, server, or service. APIs are like menus in a restaurant; the menu provides a list of dishes you can order, along with a description of each dish. When you specify which dish you want, the kitchen (the system) prepares the dish and serves it. In the digital world, APIs work similarly: they allow developers to request specific data or actions, and the system responds accordingly.

#### The Role of JSON in APIs

JSON is the medium through which data is exchanged between clients and servers in many APIs. It serves as the "language" that both the requesting and the responding parties understand. Here's how JSON is used in the context of APIs:

1. **Requesting Data**: When an application requests data from a server, it sends an API call, which is essentially a request made over the internet. This request often includes data formatted as a JSON string. For example, an application might request the details of a user by sending a JSON string that specifies the user ID.

2. **Responding to Requests**: Upon receiving the request, the server processes it and sends back a response. This response is typically also in JSON format, containing the data requested or confirmation of the action taken. For instance, a server might respond with a JSON object that includes the user's details.

3. **Ease of Integration**: The reason JSON is so popular in API development is its ease of integration with most programming languages. Libraries in Python, JavaScript, Ruby, and many others can easily parse JSON strings into native data structures of the respective language (like dictionaries in Python or objects in JavaScript) and vice versa.

4. **API Endpoints**: APIs are structured around endpoints, each serving a specific function. An endpoint for retrieving user data might return a JSON object with user attributes, while another endpoint for posting user data might accept JSON-formatted user details.

#### Example: A Simple REST API Call

Imagine an application needs to display the current weather in a user's location. It might use a weather API that provides weather data. The process would look something like this:

1. The application sends a request to the weather API's endpoint, possibly including the location's coordinates in a JSON-formatted request body.
2. The weather API processes this request and responds with a JSON object containing weather details like temperature, humidity, and weather conditions.
3. The application then parses this JSON response and uses the data to display the weather information to the user.

#### Conclusion

APIs and JSON together streamline the process of data interchange across the internet, making it simpler, faster, and more efficient. JSON's role as a universally compatible data format makes it the backbone of modern API design, allowing seamless integration and communication between different systems and applications. This synergy between APIs and JSON data not only enhances the functionality and efficiency of applications but also contributes to a more interconnected and interoperable digital ecosystem.


**API**
* Stands for **Application Programming Interface**.
* It is an interface where all the data and protocols can be stored in a section-wise manner. 
* Just like the above example in the way we served the request to the customers, the data will be saved in an interface called as API
* Consider that apart from the customers, the you also cater to the needs of a restaurant by providing them with the products that they need. 
* In this way, the demands of both customers and restaurant gets their demands fulfilled.
* These customers are basically **clients**. The shops are nothing but **servers**.
> Ask the students if they are familiar with the concept of client and server. 

* The data is being requested from an external factor. Whatever the client needs, he will seek that from the external source. 
* There are different use cases of various data and it is impossible to store it in a single place. 

**Key points**
* API acts as a bridge between client and server. 
* It has huge sets of data that can be used for applications.
* API not only has data, but also has protocols, method implementations etc. 

#### Example
Consider you want to order a burger from Zomato or Swiggy. You decide to order it from Burger King. For that, Zomato will need to use the API of burger king to get the data of Burger king. 

* This data is coming from the API.
* The API is stored in JSON format.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/289/original/upload_53dd165cb742742e9f97796f9941eaf0.png?1695148884)


> Ask students if they have heard about APIs, then mention that some of the experienced folks might have heard about this. Earlier, REST APIs and SOAP APIs were used to store data and write APIs. Now JS devs thought about introducing JSON which is similar to the JS Syntax.


**Key points**
* JSON stands for JavaScript Object Notation. 
* It has a format similar to that of objects in JS. It has key-value pairs.
* The value can be obtained by using a key.
* The JSON file should end with '.json' extension. 


>Open VSCode and create a Farm.json file.

Coming to the previous example, a farm can have name, registration number, number of goods etc. There are many farms as such. **We want to create a dataset of all the farms where we can see data of each individual farm.**


#### Code

First start with this code, and tell the students to ensure that the **keys** are enclosed in **double quotes** so that it does not throw an error. 
```javascript

[
    {
        "name":"Farm 1",
        "products":["Eggs","Milk","vegetables"],
        "registrationNo":1234,
        "Employees":70,
        "isOperating": true
    }
]
```

This is the first object. Whenever we are creating different objects within the same JSON file, ensure that the **keys remain the same** for all the objects. They should **not change**. 

The code for 3 farms is-
```javascript

{
    {
        "name":"Farm 1",
        "products":["Eggs","Milk","vegetables"],
        "registrationNo":1234,
        "Employees":70,
        "isOperating": true
    },
    {
        "name":"Farm 2",
        "products":["Eggs","Milk","Cheese"],
        "registrationNo":12345,
        "Employees":60,
        "isOperating": false
    },
    {
        "name":"Farm 1",
        "products":["vegetables"],
        "registrationNo":12346,
        "Employees":30,
        "isOperating": true
    }
    
}
``` 

> Show some examples of APIs to the students. Tell them that we will be creating a weather app today and open it. 
> https://www.weatherapi.com/
> Inform that they need to sign-in.

* Find the API key and paste it under the **API explorer** tab. 
* Select the protocol as **HTTPS**.
* Click on show response. You can see the JSON format in the response section.

Proceeding to our code, create an `index.html` file. Inside the script tag, paste the above JSON code.

```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let data = [
    {
        "name":"Farm 1",
        "products":["Eggs","Milk","vegetables"],
        "registrationNo":1234,
        "Employees":70,
        "isOperating": true
    },
    {
        "name":"Farm 2",
        "products":["Eggs","Milk","Cheese"],
        "registrationNo":12345,
        "Employees":60,
        "isOperating": false
    },
    {
        "name":"Farm 1",
        "products":["vegetables"],
        "registrationNo":12346,
        "Employees":30,
        "isOperating": true
    }
    
]
console.log(data)
</script>
</body>
</html>
```



**Key points**
* To convert JSON to JavaScript readable code, we use the **JSON.parse()** method
* The data received from a web server is a string, so to convert we use the JSON.parse() method to convert to a JavaScript object. 
* When working with APIs, we get everything in string, so to parse that JSON, we use the JSON.parse() method. 


>Brief the students about the steps to sign up on the https://www.weatherapi.com/. Ask them to do it accordingly. 

* After logging in, there will be an API key generated which will be unique for everyone. Copy that key first.
* Under **API Response Fields**, you can check all the fields that the API is providing. There are many options available. 
* Under **API Explorer**, paste the key. You will see the API Call as follows.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/292/original/upload_b1ce9393b8bd6d8ad8c11d66a121acac.png?1695149012)


Here the "q" stands for **query** and here we are querying for London. The call is basically our URL and inside this we also have our API key and the search query. 

* Apart from the current data, you can also get the Forecast, Future data as provided by the API. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/293/original/upload_04a31b2878e550d5e6bf91f446d29778.png?1695149064)


---
title: Weather App Project
description:
duration: 120
card_type: cue_card
---

> Inform the students that For this project, we will be focusing on the JS part, so the CSS part has already been created and we just have to paste it. 
> Guide the students about the final interface before starting the code. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/294/original/upload_29da4001046dbfb1550deb5c6acdfa5b.png?1695149088)


**Step 1**
Create `index.html`, `style.css` and `index.js` files in VSCode. 

**Step 2**
Inside the `index.html` file, we will be creating various divisions for various parameters like temperature, location, time and date etc. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/295/original/upload_a9c73804d050f6a0f077c520dcb3203b.png?1695149109)

In the other division for weather condition, we will display an emoji along with the weather condition. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/296/original/upload_89a96e16ee00ec649a4e80c5b3f90cc8.png?1695149128)

**Step 3**
Create a form which contains an input field and a button also. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/297/original/upload_7ba43e5dbf022aa0a217332ecc9afad7.png?1695149155)

> Write a step-by-step code for each step. 

**Code**
```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta http-equiv = "X - UA - Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Weather app Class</title>

    <link rel = "stylesheet" href = "style.css">
</head>
<body>

     <div class = "container">
         <div class = "weather">
             <div class = "temp">20</div>
             <div class = "time_location">
                 <p>Location</p>
                 <span>Random time and Date</span>
             </div>

             <div class = "weather_condition">
                  <p><img src = "" alt = ""></p>
                  <span>Condition</span>
             </div>
         </div>
     </div>


     <nav>
         <form>
             <input type = "text" placeholder = "Search_location" class = "searchField">
             <button type = "submit">Search</button>
         </form>
     </nav>


</body>

<script src = "index.js"></script>
</html>
```

Execute the above code, the output is

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/298/original/upload_d0356ec9757a7bebdf0714ff51d749dd.png?1695149252)

This is a simple HTML code, we will have to add CSS to style it.

> Inform the students that we will not focus on the CSS part as it is simple. We will just paste the code. 

**Style.css**-
```css
@import url("https://fonts.googleapis.com/css2?family=Economica&family=Grape+Nuts&family=Roboto:wght@100;300;400;700;900&display=swap");

* {
  margin: 0%;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  background-color:#01161E;
  display: flex;
  justify-content: center;
  align-items: center;
}


.weather {
  z-index: 2;
  display: flex;
  align-items: center;
  color: white;
}

.weather > div {
  margin: 0.625rem;
}

.weather1 {
  font-size: 4rem;
}

.weather p {
  font-size: 2rem;
}
.weather span {
  font-size: 0.75rem;
}

.weather3 span {
  margin: 0.3rem;
}

.weather3 img {
  width: 2rem;
}
nav {
  height: 100px;
  padding: 1rem 0;
  position: absolute;
  bottom: 0%;
  width: 100%;
  background-color: rgba(180, 177, 177, 0.202);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav form {
  width: 70%;
  grid-template-columns: 5fr 1fr;
  display: grid;
}

.searchField {
  font-size: 1.1rem;
  outline: none;
  color: white;
  background-color: transparent;
  padding: 1rem 0;
  border: none;
  border-bottom: 2px solid white;
  width: 98%;
}

nav form button {
  background-color:#4ECDC4;
  font-size: 1.1rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;}
```

After executing the CSS code, the output is

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/299/original/upload_f0509cd60bb58737e5373d70d48b4648.png?1695149282)

**Index.js**-

We will see how to get data from an API. We will use the **fetch API**. The **fetch()** method will be used here.
> Type fetch method in the browser and just show the docs as a glimpse. 

The URL will be passed to the fetch() method as a parameter. We will understand how to use the fetch() method inside our JS code.

We will be coming across various terms like async, await but they will be covered in depth in the later lectures.

Before diving deep into the fetch() method, we will understand the try and catch block which is a pre-requisite for this.

The try block is used to execute the code that might encounter an error. An error can lead to unexpected termination of the program. Hence we put it inside the try block and any error that might be encountered by the try block is sent to the catch block. This is the exception handling concept. 

In the try block, we will define the URL which is the API call. 

```javascript
 let url = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`
 ```
Here we have wrapped the url in backticks so that we can use the string template literals which denoted bt the `${}` symbol. 

* Let us understand using a real-life analogy about asynchronous programming. 

* Suppose you are teaching a batch of 100 students. One student asks doubt and it takes 5 minutes to resolve it. Another student asks a doubt which takes another 5 minutes. One more student asks a doubt and it takes 5 minutes. To solve the doubts of 3 students, 97 students has to waste their 15 minutes.

> Ask the students what could a better approach for this?

* A better approach is to teach first and in the last few minutes of the lecture, take up the doubts of the students. In this way, the time of the other students is not wasted. 

* Now just replace students with functions. The first approach is the synchronous programming where everything happens in a sequence. 

* In synchronous programming, important instructions get blocked due to some previous instructions, which causes a delay in the user interface. **Asynchronous** code execution allows to execution next instructions immediately and **doesn't block the flow** because of previous instructions.

**Key points**
* In APIs, we will be using the asynchronous JS. 
* We will be using **async** and **await** keywords which are important. 
* The **async** keyword needs to be added before the function which tells the function that it is asynchronous. 
* The **await** keyword tells that it needs wait till the data comes. 

```javascript
const response = await fetch(url)
```

Now let's run the code till now. 

```java
let target = "Pune"
async function fetchData(target){
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=8b6d5f63a04a485fa5351525232908&q=${target}&aqi=no`

        const response = await fetch(url)

        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

fetchData(target)
```

We will obtain this

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/300/original/upload_f06df9d4a4683805954bb656a39fe8f5.png?1695149320)

This is not in the JSON format. We will have to convert this to JSON by using the **.json() method**. 

We will add this line-
```javascript
const data = await response.json()
console.log(data)
```

We will receive the data in JS object format.

Now we will **extract dynamic values from** the object. 

Look into the format, to obtain temperature, we will go under `current` and then in `temp_c`

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/301/original/upload_894097c9f4d2225e2a1f65d7e0100f5b.png?1695149343)

Let us write the required values. 

```java
let currentTemp = data.current.temp_c
let currentCondition = data.current.condition.text
let locationName = data.location.name
let localTime = data.location.localtime
let conditionEmoji = data.current.condition.icon
```
We will print these values on the console to see if they have been fetched properly or not. Output is

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/302/original/upload_a8add666735fe1907f2e69614eac16b5.png?1695149375)


To print and display the data on the website, we will use DOM. The data has to be changed dynamically and for that, DOM has to be used. We will use the classes earlier written in HTML to target and dynamically set values. The code for DOM part-

```javascript
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");
```
> Just explain in short about the variable and which class it is targeting. Eg- `temperatureField` variable is targeting the `temp` class. 

Now, we want to make our search bar work. We will add an event listener to it. Whenever there is an event performed, the event listener will execute the callback function passed as a parameter. 

The search function changes the value of the target(the target city) to the value that we have entered. After typing the city and pressing the submit button, the form will get submitted and the "submit" event will get invoked. 

The `fetchData` function will be passed the value of the target that we have entered. 

```javascript
form.addEventListener('submit' , search )

//search- callback function

function search(){
    target = searchField.value

    fetchData(target)
}

```

The code till now is

```javascript
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "Pune"
async function fetchData(target){
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=8b6d5f63a04a485fa5351525232908&q=${target}&aqi=no`

        const response = await fetch(url)

        const data = await response.json()

        form.addEventListener('submit' , search )

        function search(){
            target = searchField.value
        
            fetchData(target)
        }
        console.log(data)

        let currentTemp = data.current.temp_c
        let currentCondition = data.current.condition.text
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon
        console.log(currentTemp ,currentCondition ,locationName , localTime , conditionEmoji )
    }
    catch(error){
        console.log(error)
    }
}
fetchData(target)
```

After we run the code, we see that even after entering the name of the city in the search bar, the results are not getting updated. It is because, the form is submitting the value somewhere and page is getting refreshed. This is the nature of the form that after it is submitted, the page is refreshed. 

For that, we use the **preventDefault()** method. Our code for the `search()` function becomes-

```javascript
function search(e){

    e.preventDefault()
    target = searchField.value

    fetchData(target)
}
```

Now, when we search for a city, the output is obtained on the console.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/303/original/upload_07b20aa1d296c7ce114e051640ac2a33.png?1695149418)


Now, we will update the data on our page. A function `updateDOM()` will be created which will contain the values to be updates as parameters.


>First demonstrate this example. We will use the **innerText()** method to set the value inside the HTML.

```javascript
function updateDOM(temp , locationName , time , emoji , condition){

    temperatureField.innerText = temp

    cityField.innerText = locationName

    
    emojiField.src = emoji

    weatherField.innerText = condition
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/304/original/upload_3086c0907f207f7aecf7c97855c347e4.png?1695149448)


**ADD DAY**

We can also add day along with the date. Here, **date objects** will be used. 

> console.log(time) then ask the students whether the date or the time is useful to get the day. The answer is date.

Since the date and time is separated by a space, we will use the **split()** method to separate them. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/305/original/upload_1ca3475c0f4e577805e4d08339373c48.png?1695149470)

The split() method splits the value at the delimiter provided and returns an array. Here. after splitting the above value, we get the date at 0th position and time at 1st position. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/306/original/upload_6dcd1d672b2d81019b045800199a9104.png?1695149492)

```javascript
const exactTime = time.split(" ")[1]
const exactdate = time.split(' ')[0]
```

To convert date to day, we follow-
```java
const exactDate = new Date(exactdate).getDay()
```

The output is a number which indicate the day in form of a number. 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/307/original/upload_7cbfda536fac2d05ec6f13b7ac54321f.png?1695149519)

We will write another function that converts the day number to day. 

```javascript
function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";

      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      default:
        return "Don't Know";
    }
  }
```

Our final code is 

```javascript
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


let target = 'Pune'


form.addEventListener('submit' , search )


function search(e){

    e.preventDefault()
    target = searchField.value

    fetchData(target)
}



async function fetchData(target){
    try {
        let url = `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`

        const response = await fetch(url)

        const data = await response.json()

        console.log(data)


        let currentTemp = data.current.temp_c
        let currentCondition = data.current.condition.text
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon

        console.log(currentTemp ,currentCondition ,locationName , localTime , conditionEmoji )


       updateDOM(currentTemp , locationName ,localTime ,conditionEmoji , currentCondition)

    } catch (error) {
        console.log(error)
    }
}



function updateDOM(temp , locationName , time , emoji , condition){


    console.log(time)

    const exactTime = time.split(" ")[1]
    const exactdate = time.split(' ')[0]




    const exactDay = getDayFullName(new Date(exactdate).getDay())
    console.log(exactDay)



    temperatureField.innerText = temp

    cityField.innerText = locationName

    dateField.innerText = `${exactTime}   ${exactDay}   ${exactdate}`


    emojiField.src = emoji

    weatherField.innerText = condition


}



function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";

      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      default:
        return "Don't Know";
    }
  }


fetchData(target)
```