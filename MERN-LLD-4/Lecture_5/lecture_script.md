---
title: Project Demo
description: 
duration: 900
card_type: cue_card
---

## Today's Content
From Today we will start creating our Final Fullstack Project that is 'Book my Show Clone'

Demo of the App - https://bookmyshow-nrkr.onrender.com/login




---
title: Project Setup and Adding Frontend Code for Registration
description: In this segment, we'll set up React, Express, Node.js, and a MongoDB database, and we'll also write frontend code for user registration.
duration: 2700
card_type: cue_card
---

## Project Setup and Adding Frontend Code for Registration

Before we move into authentication and authorization, it's essential to set up the project infrastructure. We'll start by configuring React, Express, Node.js, and MongoDB. These components must be installed and configured correctly to proceed.

To begin, let's create a folder named "bookMyShow-project." Inside this folder, create another one called "client," where we'll develop the frontend of our application. To kickstart the React app, use the following command:

```cpp
npx create-react-app
```

Additionally, create a folder named "server" in the main project directory. The "client" folder will house all the frontend code, while the "server" folder will be dedicated to setting up our Express backend. With the React app initialized, let's navigate to the "App.js" file to continue.


#### Pseudocode
```cpp
function App() {
  return (
    <div>
      <h1>
        Hello
      </h1>
    </div>
  )
}
export default App;
```

Now, let's initiate our client application by running the command npm start. 


> Note to instructor - Take a moment to show the local host and see how our app looks.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/324/original/upload_c3cacc7db150560f524aa121bf3cb867.png?1695968640)

With our React app successfully set up, it's time to create two fundamental pages: the login and registration pages. These pages are essential components of any application.

Our initial set of pages includes:

1. Home Page
2. Register Page
3. Login Page

To expedite the development process, we will leverage Ant Design, a library that provides pre-built components, eliminating the need for extensive custom CSS. Within the component section, you'll find various components, each with an example code.

Since our focus is on building the login and registration pages, we'll primarily work with forms. So, let's navigate to the component section, search for "form," and explore multiple form examples. You can choose a form that suits your needs and copy the code from there.

In our client directory, let's begin by installing the required dependencies:

```javascript
npm install react-router-dom antd axios
```


Now, let's structure our project by creating a "pages" folder. Inside this folder, create three subfolders: "login," "register," and "Home." Within each of these subfolders, create an "index.js" file.

Here's the structure for "index.js" within the "Home" folder:


#### Pseudocode
```javascript
const Home = () => {
  return (
    <div>
      This is my home page
    </div>
  )
}
export default Home;
```


Similarly, for the "index.js" file in the "login" folder:


#### Pseudocode
```javascript
const Login = () => {
  return (
    <div>
      This is my Login page
    </div>
  )
}
export default Login;
```



And for the "index.js" file in the "register" folder:

#### Pseudocode

```javascript
const Register = () => {
  return (
    <div>
      This is my Register page
    </div>
  )
}
export default Register;
```

We will navigate to the 'App.js' file import all of these components set up React Router DOM and create our first route 


#### Pseudocode

```javascript
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '/register' element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```


> Note to instructor - Test the functionality of these pages once


---
title: Design the Login and Register Page
description: Explains MVC Model
duration: 500
card_type: cue_card
---

Note to Instructor - Copy this CSS code in the `app.css` file , this the css for alignment and basic styling , this is not be explained in the class, learners can make sense of css this is just to be copied and used. 


```css
.App-logo {
  height: 40vmin;
  pointer-events: none;
}
.App-header {
  background-color: #f3f8ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flex-1{
  flex: 1;
}
.ms-3{
  margin-left: 1rem;
}
.text-center{
  text-align: center;
}
.cursor-pointer{
  cursor: pointer;
}
.inner-container{
  max-width: 1000px;
  margin-inline: auto;
}
.max-width-300{
  max-width: 300px;
}
.movie-data{
  color: #999;
  font-size: 15px;
  margin-top: 4px;
  margin-bottom: 8px;
}
.movie-data span{
  color: #212121;
  font-weight: 600;
}
.flex-shrink-0{
  flex-shrink: 0;
}
.App-link {
  color: #61dafb;
}  
.d-block{
  display: block;
}
input, select{
  min-height: 45px;
}
button{
  min-height: 45px;
  font-size: 1rem;
}
.w-100{
  width: 100%;
}
.text-white{
  color: #fff;
}
.m-0{
  margin: 0
}
.mt-0{
  margin-top: 0
}
.mt-3{
  margin-top: 1rem;
}
.me-3{
  margin-right: 1rem;
}
.gap-10{
  gap: 10px;
}
.justify-content-between{
  justify-content: space-between;
}
.justify-content-end{
  justify-content: end;
}
.fs-12{
  font-size: 12px;
}
.ant-select-selector{
  height: 45px !important;
}
.ant-select-selection-item{
  padding-top: 5px !important;
}
table th{
  white-space: nowrap;
}
.ant-modal .ant-modal-title{
  font-size: 2rem;
}
.py-3{
  padding-block: 1rem;
}
.pb-3{
  padding-bottom: 1rem;
}
.pt-3{
  padding-top: 1rem;
}
.fs-18{
  font-size: 18px;
}
.d-none{
  display: none;
}
.mb-3{
  margin-bottom: 1rem;
}
.mb-5{
  margin-bottom: 50px;
}
.mb-10px{
  margin-bottom: 10px;
}
.mb-25px{
  margin-bottom: 25px;
}
.ant-menu{
  flex: 1;
  justify-content: flex-end;
}
.mt-8{
  margin-top: 8px;
}
hr{
  background-color: #eee !important;
  border: 1px solid #ddd;
}
.show-ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-left: 0;
}
.blue-clr{
  color: #1890ff
}
.show-ul li{
  padding: 0.75rem 1rem;
  border: 1px solid #bbb;
  border-radius: 5px;
  cursor: pointer;
  color: orange;
  transition: all 0.1s ease-in;
}
.show-ul li:hover{
  color: #fff;
  background-color: orange;
  border-color: transparent;
}
.movie-title-details *{
  margin-bottom: 6px;
  margin-top: 0;
}
.show-name *{
  margin-bottom: 4px;
  margin-top: 0;
}
.show-name span{
  font-weight: 500;
  color: #555;
}
.max-width-600{
  max-width: 600px;
}
.mx-auto{
  margin-inline: auto;
}
.seat-ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: 600px;
}
.seat-ul .seat-btn{
  background-color: #f6f6f6;
  border: 1px solid #a0a0a0;
  width: 40px;
  height: 35px;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  font-size: 13px;
  min-height: unset;
}
.seat-ul .seat-btn:hover{
  background-color: #f1f1f1;
}
.seat-ul .seat-btn.selected{
  border-color: #02a802;
  background-color: #02a802;
  color: #fff;
}
.seat-ul .seat-btn.booked{
  background-color: #ddd;
  color:#999;
  border-color: #ddd;
  cursor:not-allowed;
}
.screen-div{
  max-width: 75%;
  margin-inline: auto;
  height: 10px;
  background-color: #eee;
}
.bottom-card{
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.bottom-card div span{
  font-weight: 600;
  font-size: 1.25rem;
}
.show-details h3{
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 4px;
}
.show-details *{
  margin-bottom: 2px;
  margin-top: 0;
}
.px-3{
  padding-inline: 1rem;
}

/* Loader */
.loader-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.35);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
.ant-table-content{
  overflow-y: auto;
  width: 100%;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* Loader Ends here */

@media screen and (min-width: 768px){
  .site-layout{
    padding: 0 50px;
  }
  .show-details{
    margin-left: 1rem;
  }
  .main-area.mw-500{
    width: 500px;
  }
}
@media screen and (max-width: 767px){
  .mt-3-mob{
    margin-top: 1rem;
  }
  .mt-8px-mob{
    margin-top: 8px;
  }
  .ant-layout-header{
    padding-inline: 10px;
  }
  .flex-column-mob{
    flex-direction: column;
  }
  .single-movie-div{
    flex-direction: column;
  }
  .single-movie-img{
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
```


Now Install Ant Design with the Command 

`npx install antd` in the client folder

Provide this link to the learners to explore AntD on theri own , it is a very basic design library very similiar to Tailwind which provides pre build components ready to use


---
title: Designing the Login page
description: Explains MVC Model
duration: 500
card_type: cue_card
---

In your Login Component , Write this code

```js
import React from 'react'
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section className="left-section">
          <h1>Login to BookMyShow</h1>
        </section>

        <section className="right-section">
          <Form layout="vertical">
    
          <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                id="email"
                type="text"
                placeholder="Enter your Email"
              ></Input>
            </Form.Item>

            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
                
              ></Input>
            </Form.Item>

            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              New User? <Link to="/register">Register Here</Link>
            </p>
          </div>
        </section>
      </main>
    </header>
  </>
  )
}

export default Login

```
This React component, named `Login`, creates a login form for a web application called BookMyShow. It uses Ant Design components for the form and its elements, as well as React Router for navigation. Here's a breakdown of what the code does:

1. **Imports**:
    - `React` is imported to create the component.
    - `Button`, `Form`, and `Input` are imported from Ant Design, a popular UI library, to create the form and its elements.
    - `Link` is imported from `react-router-dom` to handle navigation to the registration page.

2. **Login Component**:
    - The `Login` function component returns a JSX fragment (`<> ... </>`) containing the structure of the login page.

3. **Header**:
    - The `header` element with the class name `App-header` acts as a container for the main content.

4. **Main Section**:
    - Inside the `main` element with classes `main-area`, `mw-500`, `text-center`, and `px-3`, there are two sections:
        - `left-section`: Contains a heading (`h1`) prompting the user to log in.
        - `right-section`: Contains the login form.

5. **Form**:
    - The `Form` component from Ant Design is used to create a vertically aligned form.
    - **Email Input**:
        - `Form.Item` with label "Email" and a required rule.
        - `Input` field with `id` set to "email", type set to "text", and placeholder "Enter your Email".
    - **Password Input**:
        - `Form.Item` with label "Password" and a required rule.
        - `Input` field with `id` set to "password", type set to "password", and placeholder "Enter your Password".
    - **Submit Button**:
        - `Form.Item` contains a `Button` with type "primary", block display, `htmlType` set to "submit", and inline styling to adjust font size and weight. The button's text is "Login".

6. **Link to Registration**:
    - Below the form, a `div` contains a `p` element with a link (`Link` component) to the registration page (`/register`), prompting new users to register.

Overall, this component sets up a basic login form with email and password fields, a submit button, and a link for new users to register.


---
title: Design The Resgiter Page
description: Explains MVC Model
duration: 500
card_type: cue_card
---

```js
import React from "react";
import { Button, Form, Input , message } from "antd";
import { Link } from "react-router-dom"

import { RegisterUser } from '../apicalls/users'

function Register() {
 
 return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>

          <section className="right-section">
            <Form layout="vertical">
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                 
                ></Input>
              </Form.Item>

              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your Email"
                  
                ></Input>
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                 
                ></Input>
              </Form.Item>

              <Form.Item className="d-block">
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Already a user? <Link to="/login">Login now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;
```

This React component, `Register`, represents a registration form for a user to sign up for a service called "BookMyShow." The code uses Ant Design (antd) components to create the form and React Router's `Link` component for navigation. Here’s a breakdown of what the code does:

1. **Imports**: 
   - `React` from "react" is necessary to use React components.
   - `Button`, `Form`, `Input`, and `message` are imported from "antd" to use Ant Design's form and input elements.
   - `Link` from "react-router-dom" is used for navigation.
   - `RegisterUser` from '../apicalls/users' (although not used in this snippet, it likely handles the API call for user registration).

2. **Functional Component**:
   - `Register` is defined as a functional component.

3. **JSX Structure**:
   - The component returns a fragment (`<>...</>`) containing the layout of the registration form.

4. **Header and Main Content**:
   - `header` and `main` tags structure the content. The main content is centered with a maximum width of 500 pixels.
   - There is a `section` with a title "Register to BookMyShow".

5. **Form**:
   - The form is created using Ant Design’s `Form` component with a vertical layout.
   - Three `Form.Item` components are used for "Name", "Email", and "Password" inputs, each with appropriate labels, placeholders, and validation rules to make these fields required.

6. **Form Fields**:
   - Each input field (`Input` component) has an `id`, `type`, and `placeholder` attribute.
   - The form fields are all required, with validation messages for each.

7. **Submit Button**:
   - A `Button` component is used to submit the form. It is styled to be primary, block-level, and has increased font size and weight.

8. **Navigation Link**:
   - Below the form, there is a `Link` component that navigates to the login page if the user is already registered.

Both the Pages will look something like this

`Login Page`
<img src='https://i.ibb.co/939DYtL/Screenshot-2024-06-10-at-9-54-09-PM.png'/>


`Resgiter Page`
<img src='
https://i.ibb.co/QMbGtT7/Screenshot-2024-06-10-at-9-54-13-PM.png'/>


