---
title:Agenda
description:
duration: 900
card_type: cue_card
---

1. Creating the Theatre API
2. Creating the partners Page where they can List their theatres
3. Creating TheatresList for Admin where the Admin can approve and Deny the Theatres request
4. After Approval a Partner Theater can run shows



---
title:
description:
duration: 900
card_type: cue_card
---

Now as we are done Adding Movies , The next step is to create the `Partner's Page` where a Partner can list their theatre  

You remember the roles that we provided `Admin` `Partner` and `User` in our userModel

Now add this code in your register page so your register page will now be able to handle to registation roles one for `Partner` one for `user`

`Register.js Page`

```js
import React, { useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../calls/users";

function Register() {
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  rules={[{ required: true, message: "Email is required!" }]}
                ></Input>
              </Form.Item>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required!" }]}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                ></Input>
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                ></Input>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Sign Up
                </Button>
              </Form.Item>

            //   New Addition
              <Form.Item
                label="Register as a Partner"
                htmlFor="role"
                name="role"
                className="d-block text-center"
                initialValue={false}
                rules={[{ required: true, message: "Please select an option!" }]}
              >
                <div className="d-flex justify-content-start">
               
                  <Radio.Group
                    name="radiogroup"
                    className="flex-start"
                  >
                    <Radio value={'partner'}>Yes</Radio>
                    <Radio value={'user'}>No</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>
              //
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

We have added a simple Form Item of Radio Button which sets a role of a user as `user` or `partner`

when the role is user we will provide `user` rights when the role is `partner` we will provide partner rights

Also have these routes added in the app.js

```js
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import BookShow from "./pages/BookShow";
import SingleMovie from "./pages/SingleMovie";
import Partner from "./pages/Partner";

function App() {
  const { loading } = useSelector((state) => state.loader);

  return (
    <div className="App">
      {loading && (
        <div className="loader-container">
          {" "}
          <div className="loader"> </div>{" "}
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/partner"
            element={
              <ProtectedRoute>
                <Partner />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<ProtectedRoute><SingleMovie/></ProtectedRoute>} />
          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```


Now when you will login as a Partner , The partner Profile  should be able to list theatres

for that we will first create our theatre Model



---
title:Building the Theatre Model and Route
description:
duration: 900
card_type: cue_card
---

In your Server- Models - create a file with the `theatreModel.js` and define the schema and model for it

```theatreModel.js``` code below

```js
 const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    isActive: {
        type: Boolean,
        default: false
    },
},
{timestamps: true}
)

const Theatre = mongoose.model("theatres", theatreSchema);
module.exports = Theatre
```


### Detailed Explanation:

1. **Importing Mongoose:**
   ```javascript
   const mongoose = require('mongoose');
   ```
   - This line imports the Mongoose library, which is required to interact with MongoDB.

2. **Defining the Schema:**
   ```javascript
   const theatreSchema = new mongoose.Schema({
       name: {
           type: String,
           required: true,
       },
       address: {
           type: String,
           required: true,
       },
       phone: {
           type: Number,
           required: true,
       },
       email: {
           type: String,
           required: true,
       },
       owner: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'users'
       },
       isActive: {
           type: Boolean,
           default: false
       },
   },
   {timestamps: true}
   )
   ```
   - `theatreSchema` defines the structure of the documents within the `theatres` collection.
   - The schema has fields: `name`, `address`, `phone`, `email`, `owner`, and `isActive`.
     - `name`: A required string that represents the name of the theatre.
     - `address`: A required string that represents the address of the theatre.
     - `phone`: A required number that represents the phone number of the theatre.
     - `email`: A required string that represents the email address of the theatre.
     - `owner`: A reference to another document in the `users` collection, represented by an ObjectId.
     - `isActive`: A boolean that indicates whether the theatre is active or not, with a default value of `false`.
   - The schema also includes timestamps (`{ timestamps: true }`), which automatically adds `createdAt` and `updatedAt` fields to the documents.

3. **Creating the Model:**
   ```javascript
   const Theatre = mongoose.model("theatres", theatreSchema);
   ```
   - This line creates a Mongoose model named `Theatre` based on the `theatreSchema`. The model corresponds to the `theatres` collection in MongoDB.

4. **Exporting the Model:**
   ```javascript
   module.exports = Theatre;
   ```
   - This line exports the `Theatre` model so that it can be used in other parts of the application.

### Summary:
This code defines a Mongoose schema for a theatre, specifying its fields and types, and then creates a model based on that schema. The model is used to interact with the `theatres` collection in MongoDB, allowing you to create, read, update, and delete theatre documents in the database.


---
title:Theatre CRUD Route
description:
duration: 900
card_type: cue_card
---

Now same as we have done for Movies create CRUD route for Theatres

server-routes-theatre.js

```js
const router = require('express').Router();
const Theatre = require('../models/theatreModel');

router.post('/add-theatre',  async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: "New theatre has been added!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});




// Update theatre
router.put('/update-theatre',  async (req, res) => {
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Theatre has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Delete theatre
router.put('/delete-theatre', async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success: true,
            message: "The theatre has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});



module.exports = router;

```
 Below is a detailed explanation of each part of the code:

1. **Importing Dependencies:**
   ```javascript
   const router = require('express').Router();
   const Theatre = require('../models/theatreModel');
   ```
   - `express.Router()`: This creates a new router object which can be used to define routes.
   - `Theatre`: This is the Mongoose model for the theatre, which interacts with the MongoDB collection for theatres.

2. **Adding a New Theatre:**
   ```javascript
   router.post('/add-theatre',  async (req, res) => {
       try{
           const newTheatre = new Theatre(req.body);
           await newTheatre.save();
           res.send({
               success: true,
               message: "New theatre has been added!"
           });
       }catch(err){
           res.send({
               success: false,
               message: err.message
           });
       }
   });
   ```
   - `POST /add-theatre`: This route handles the addition of a new theatre.
   - `req.body`: The request body contains the details of the new theatre to be added.
   - `new Theatre(req.body)`: Creates a new instance of the `Theatre` model with the data provided in the request body.
   - `await newTheatre.save()`: Saves the new theatre to the database.
   - On success, sends a response with a success message. On error, sends a response with an error message.

3. **Updating an Existing Theatre:**
   ```javascript
   router.put('/update-theatre',  async (req, res) => {
       try{
           await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
           res.send({
               success: true,
               message: "Theatre has been updated!"
           });
       }catch(err){
           res.send({
               success: false,
               message: err.message
           });
       }
   });
   ```
   - `PUT /update-theatre`: This route handles the updating of an existing theatre.
   - `req.body.theatreId`: The ID of the theatre to be updated.
   - `await Theatre.findByIdAndUpdate(req.body.theatreId, req.body)`: Finds the theatre by its ID and updates it with the new data provided in the request body.
   - On success, sends a response with a success message. On error, sends a response with an error message.

4. **Deleting a Theatre:**
   ```javascript
   router.put('/delete-theatre', async (req, res) => {
       try{
           await Theatre.findByIdAndDelete(req.body.theatreId);
           res.send({
               success: true,
               message: "The theatre has been deleted!"
           });
       }catch(err){
           res.send({
               success: false,
               message: err.message
           });
       }
   });
   ```
   - `PUT /delete-theatre`: This route handles the deletion of a theatre.
   - `req.body.theatreId`: The ID of the theatre to be deleted.
   - `await Theatre.findByIdAndDelete(req.body.theatreId)`: Finds the theatre by its ID and deletes it from the database.
   - On success, sends a response with a success message. On error, sends a response with an error message.

5. **Exporting the Router:**
   ```javascript
   module.exports = router;
   ```
   - This exports the router object so that it can be used in other parts of the application.

### Summary

- The code defines three routes for adding, updating, and deleting theatres.
- Each route uses async/await to handle asynchronous operations with the MongoDB database via Mongoose.
- Proper error handling is implemented to provide meaningful responses to the client based on the success or failure of each operation.

1. Now here As you see there can be different partners and every different partner will have their own set of theatres so for the partner we will have to fetch only the Theatres that he owns


2. For the Admin because he should have all the theatres request in the Admin table we will have have to fetch all the theatre and show who is the partner there


So we will need to have to get routes

1. First get route will get the theatres for the partner that he owns
2. Admin theatres where we will get all theatres so admin can approve or decline a theatrer


So we will write 2 get routes

```js
// Get all theatres for Admin route
router.get('/get-all-theatres', async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: "All theatres fetched!",
            data: allTheatres
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
});

// Get the theatres of a specific owner
router.post('/get-all-theatres-by-owner',  async (req, res) => {
    try{
        const allTheatres = await Theatre.find({owner: req.body.owner});
        res.send({
            success: true,
            message: "All theatres fetched successfully!",
            data: allTheatres
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

```
Here’s an explanation of both routes in the provided code:

### Route 1: Get all theatres for Admin

**Route Definition:**
```javascript
router.get('/get-all-theatres', async (req, res) => {
    try {
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: "All theatres fetched!",
            data: allTheatres
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        });
    }
});
```

**Explanation:**
1. **HTTP Method:** GET
2. **Endpoint:** `/get-all-theatres`
3. **Functionality:** 
   - This route is intended to fetch all theatres from the database. It is typically used by an admin to view all the theatres.
4. **Logic:**
   - **Fetching Data:** The route uses `Theatre.find()` to retrieve all theatre documents from the `Theatre` collection.
   - **Populating Owner Field:** The `.populate('owner')` method is used to populate the `owner` field in the theatre documents with the related owner data from the `Owner` collection. This provides detailed information about the owner of each theatre.
   - **Sending Response:** 
     - If the data retrieval is successful, the route sends a response with a success status, a message indicating success, and the fetched theatre data.
     - If an error occurs during the process, the route catches the error and sends a response with a failure status and the error message.

### Route 2: Get the theatres of a specific owner

**Route Definition:**
```javascript
router.post('/get-all-theatres-by-owner', async (req, res) => {
    try {
        const allTheatres = await Theatre.find({ owner: req.body.owner });
        res.send({
            success: true,
            message: "All theatres fetched successfully!",
            data: allTheatres
        });
    } catch (err) {
        res.send({
            success: false,
            message: err.message
        });
    }
});
```

**Explanation:**
1. **HTTP Method:** POST
2. **Endpoint:** `/get-all-theatres-by-owner`
3. **Functionality:** 
   - This route is designed to fetch theatres owned by a specific owner. It is useful when the client wants to see theatres associated with a particular owner.
4. **Logic:**
   - **Request Body:** The route expects the owner ID to be provided in the request body (`req.body.owner`).
   - **Fetching Data:** It uses `Theatre.find({ owner: req.body.owner })` to find and retrieve theatre documents that have the specified owner ID.
   - **Sending Response:** 
     - If the data retrieval is successful, the route sends a response with a success status, a message indicating success, and the fetched theatre data.
     - If an error occurs during the process, the route catches the error and sends a response with a failure status and the error message.

### Key Differences:
1. **HTTP Methods:**
   - The first route uses a `GET` method, which is typically used to retrieve data without any side effects.
   - The second route uses a `POST` method, which is generally used to send data to the server (in this case, the owner ID) to create or retrieve resources based on the provided data.
   
2. **Purpose:**
   - The first route retrieves all theatres for administrative purposes.
   - The second route retrieves theatres specific to a particular owner, based on the owner ID provided in the request body. 

These routes provide the necessary functionality to manage and retrieve theatre information based on different requirements.

Your complete Theatre Route will now look like this

```js
const router = require('express').Router();
const Theatre = require('../models/theatreModel');

router.post('/add-theatre',  async (req, res) => {
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success: true,
            message: "New theatre has been added!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

// Get all theatres for Admin route
router.get('/get-all-theatres', async (req, res) => {
    try{
        const allTheatres = await Theatre.find().populate('owner');
        res.send({
            success: true,
            message: "All theatres fetched!",
            data: allTheatres
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
});

// Get the theatres of a specific owner
router.post('/get-all-theatres-by-owner',  async (req, res) => {
    try{
        const allTheatres = await Theatre.find({owner: req.body.owner});
        res.send({
            success: true,
            message: "All theatres fetched successfully!",
            data: allTheatres
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});


// Update theatre
router.put('/update-theatre',  async (req, res) => {
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
        // console.log(req.body.theatreId)
        res.send({
            success: true,
            message: "Theatre has been updated!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Delete theatre
router.put('/delete-theatre', async (req, res) => {
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success: true,
            message: "The theatre has been deleted!"
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});



module.exports = router;
```

---
title:Theatre Axios Instances
description:
duration: 900
card_type: cue_card
---

Now inside your calls folder at the client side create `AxiosInstaces` for all the Theatre routes


```js

import { axiosInstance } from ".";

export const addTheatre = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/theatres/add-theatre', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get all theatres for the Admin route
export const getAllTheatresForAdmin = async () => {
    try{
        const response = await axiosInstance.get('/api/theatres/get-all-theatres');
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Get theatres of a specific owner
export const getAllTheatres = async (payload) => {
    try{
        const response = await axiosInstance.post('/api/theatres/get-all-theatres-by-owner', payload);
        return response.data;
    }catch(err){
        return err.response;
    }
}

// Update Theatre
export const updateTheatre = async (payload) => {
    try{
        const response = await axiosInstance.put('/api/theatres/update-theatre', payload);
        return response.data;
    }catch(err){
        return err.resposne;
    }
}

// Delete Theatre
export const deleteTheatre = async (payload) => {
    try{
        const response = await axiosInstance.put('/api/theatres/delete-theatre', payload);
        return response.data;        
    }catch(err){
        return err.response;
    }
}


```

Here is a brief explanation of each function:

1. **addTheatre**
   - **Purpose:** Sends a POST request to add a new theatre.
   - **Implementation:** 
     - `axiosInstance.post` sends the payload to the specified endpoint.
     - If successful, it returns the response data.
     - If an error occurs, it returns the error response.

2. **getAllTheatresForAdmin**
   - **Purpose:** Sends a GET request to retrieve all theatres for the admin.
   - **Implementation:** 
     - `axiosInstance.get` requests data from the specified endpoint.
     - If successful, it returns the response data.
     - If an error occurs, it returns the error response.

3. **getAllTheatres**
   - **Purpose:** Sends a POST request to retrieve theatres for a specific owner.
   - **Implementation:** 
     - `axiosInstance.post` sends the payload to the specified endpoint.
     - If successful, it returns the response data.
     - If an error occurs, it returns the error response.

4. **updateTheatre**
   - **Purpose:** Sends a PUT request to update theatre details.
   - **Implementation:** 
     - `axiosInstance.put` sends the payload to the specified endpoint.
     - If successful, it returns the response data.
     - If an error occurs, it returns the error response.

5. **deleteTheatre**
   - **Purpose:** Sends a PUT request to delete a theatre.
   - **Implementation:** 
     - `axiosInstance.put` sends the payload to the specified endpoint.
     - If successful, it returns the response data.
     - If an error occurs, it returns the error response.


---
title:Creating Partners Page
description:
duration: 900
card_type: cue_card
---

Now inside your Partner.js component Page , we will create a Tab which will show the theatre list and from there we can also add update delete theatres


In the Partners page will have a component by the name TheatreList

Create TheatreList Component

```js

import React from 'react';

const TheatreList = () => {
   return <h1>TheatreList<h1>
    
}

export default TheatreList;

```
add it in the tab of Partners page

```js


import { Tabs } from 'antd';
import TheatreList from './TheatreList';


const Partner = () => {
      const items = [
        {
          key: '1',
          label: 'Theatres',
          children: <TheatreList/>,
        }
        
      ];

    return (
        <>
        <h1>Partner Page</h1>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Partner;



```


Inside the TheatreList we will use two more components by the name `TheatreFormModel` and `DeleteTheatreModel`

```TheatreList.js```

```js
import React, { useEffect, useState } from 'react';
import { Table, Button, message} from 'antd';
import TheatreFormModal from './TheatreFormModal';
import DeleteTheatreModal from './DeleteTheatreModal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllTheatres } from '../../calls/theatres';
import { useSelector, useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import ShowModal from './ShowModal';


const TheatreList = () => {
    const { user } = useSelector( (state) => state.user );
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isShowModalOpen, setIsShowModalOpen] = useState(false);
    const [selectedTheatre, setSelectedTheatre] = useState(null);
    const [formType, setFormType] = useState("add"); 
    const [theatres, setTheatres] = useState(null);
    const dispatch = useDispatch();

    const getData = async () => {
        try{
          dispatch(showLoading());
          const response = await getAllTheatres({ owner: user._id });
          if(response.success){
            const allTheatres = response.data;
            // console.log(allTheatres);
            setTheatres(
                allTheatres.map(function(item){
                return {...item, key: `theatre${item._id}`}
              })
            );
          }else{
            message.error(response.message)
          }
          dispatch(hideLoading())
  
        }catch(err){
          dispatch(hideLoading());
          message.error(err.message);
        }
      }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (status, data) => {
            if(data.isActive){
                return `Approved`
            }else{
                return `Pending/ Blocked`
            }
          }
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text, data) => {
            return(
              <div className='d-flex align-items-center gap-10'>
                <Button onClick={() => { setIsModalOpen(true); setFormType("edit"); setSelectedTheatre(data) }}><EditOutlined/></Button>
                <Button onClick={ () => { setIsDeleteModalOpen(true); setSelectedTheatre(data); }}><DeleteOutlined/></Button>
                { data.isActive && <Button onClick={ () => { setIsShowModalOpen(true); setSelectedTheatre(data); }}>+ Shows</Button> }
              </div>
            )
          }
        },
      ];

      useEffect(() => {
        getData();
      }, [])

    return(
        <>
        <div className='d-flex justify-content-end'>
            <Button type="primary" onClick={() => { setIsModalOpen(true); setFormType("add") }}>Add Theatre</Button>
        </div>   
        <Table dataSource={theatres} columns={columns} />
        { isModalOpen && <TheatreFormModal isModalOpen={isModalOpen} selectedTheatre={selectedTheatre} setSelectedTheatre={setSelectedTheatre} setIsModalOpen={setIsModalOpen} formType={formType} getData={getData} /> }
        { 
            isDeleteModalOpen && <DeleteTheatreModal isDeleteModalOpen={isDeleteModalOpen} selectedTheatre={selectedTheatre} setIsDeleteModalOpen={setIsDeleteModalOpen} setSelectedTheatre={setSelectedTheatre} getData={getData} /> 
        }
        {
          isShowModalOpen && <ShowModal isShowModalOpen={isShowModalOpen} setIsShowModalOpen={setIsShowModalOpen} selectedTheatre={selectedTheatre}/>
        }
        </>
    );
}

export default TheatreList;
```
`TheatreFormModal.js`

```js
import { Col, Modal, Row, Form,  Input, Button, message} from 'antd';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { addTheatre, updateTheatre } from '../../calls/theatres';
import TextArea from 'antd/es/input/TextArea';
import { useSelector } from 'react-redux';

const TheatreFormModal = ({isModalOpen, setIsModalOpen, selectedTheatre, setSelectedTheatre, formType, getData}) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // }

  const onFinish = async (values)  => {
    try{
      dispatch(showLoading());
      let response = null;
      if(formType === "add"){
        response = await addTheatre({...values, owner: user._id});
      }else{
        values.theatreId = selectedTheatre._id;
        response = await updateTheatre(values);
      }
      console.log(response);
      if(response.success){
        getData();
        message.success(response.message);
        setIsModalOpen(false);
      }else{
        message.error(response.message)
      }
      dispatch(hideLoading());     
    }catch(err){
      dispatch(hideLoading());
      message.error(err.message);
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTheatre(null);
  }

    return(
        <Modal centered title={formType === "add" ? "Add Theatre" : "Edit Theatre"} open={isModalOpen} onCancel={handleCancel} width={800} footer={null} >
        <Form layout='vertical' style={{width: "100%"}} initialValues={selectedTheatre} onFinish={onFinish}>
          <Row gutter={{
            xs: 6,
            sm: 10,
            md: 12,
            lg: 16,
          }}>
            <Col span={24}>
              <Form.Item label="Theatre Name" htmlFor='name' name="name" className='d-block' rules={[{required: true, message: "Theatre name is required!"}]}>
                <Input id="name" type="text" placeholder='Enter the theatre name'></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Theatre Address" htmlFor='address' name="address" className='d-block' rules={[{required: true, message: "Theatre name is required!"}]}>
                <TextArea id="address" rows="3" placeholder='Enter the theatre name'></TextArea>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row  gutter={{
                xs: 6,
                sm: 10,
                md: 12,
                lg: 16,
              }}>
              <Col span={12}>
                  <Form.Item  label="Email" htmlFor='email' name="email" className='d-block' rules={[{required: true, message: "Email  is required!"}]}>
                        <Input id="email" type="email" placeholder='Enter the email'></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item  label="Phone Number" htmlFor='phone' name="phone" className='d-block' rules={[{required: true, message: "Phone number is required!"}]}>
                    <Input id="phone" type="number" placeholder='Enter the phone number'></Input>
                </Form.Item>                
              </Col>
            </Row>
            </Col>          
          </Row>          
          <Form.Item>
              <Button block type="primary" htmlType='submit' style={{fontSize: "1rem", fontWeight: "600"}}>Submit the Data</Button>
              <Button className='mt-3' block onClick={handleCancel}>Cancel</Button>
          </Form.Item>
      </Form>
      </Modal>
    )
}
export default TheatreFormModal;
```
`DeleteTheatreModel.js`

```js
import { Modal, message } from "antd";
import { deleteTheatre } from "../../calls/theatres";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";

const DeleteTheatreModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  selectedTheatre,
  setSelectedTheatre,
  getData,
}) => {
  const dispatch = useDispatch();
  const handleOk = async () => {
    try {
      dispatch(showLoading);
      const theatreId = selectedTheatre._id;
      const response = await deleteTheatre({ theatreId });
      console.log(theatreId, response);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
        setSelectedTheatre(null);
      }
      setIsDeleteModalOpen(false);
      dispatch(hideLoading);
    } catch (err) {
      dispatch(hideLoading);
      setIsDeleteModalOpen(false);
      message.error(err.messagae);
    }
  };
  const handleCancel = () => {
    setIsDeleteModalOpen(false);
    setSelectedTheatre(null);
  };

  return (
    <>
      <Modal
        title="Delete Theatre?"
        open={isDeleteModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="pt-3 fs-18">
          Are you sure you want to delete this theatre?
        </p>
        <p className="pb-3 fs-18">
          This action can't be undone and you'll lose this theatre data.
        </p>
      </Modal>
    </>
  );
};

export default DeleteTheatreModal;
```

Let's break down the relationship and details of the three components: `TheatreList.js`, `TheatreFormModal.js`, and `DeleteTheatreModal.js`.

### 1. `TheatreList.js`

This component manages and displays the list of theatres. It has several responsibilities:
- Fetching the list of theatres from the server.
- Displaying the theatres in a table with actions to edit, delete, or add shows.
- Managing the state for modals used to add/edit and delete theatres.

#### Key Parts:

1. **State Management:**
   - `isModalOpen`, `isDeleteModalOpen`, `isShowModalOpen`: Control the visibility of the respective modals.
   - `selectedTheatre`: Holds the theatre data that is currently selected for editing or deletion.
   - `formType`: Determines if the modal is used for adding or editing a theatre.
   - `theatres`: Holds the list of theatres fetched from the server.

2. **Fetching Data:**
   - `getData`: An asynchronous function that fetches the list of theatres based on the user ID and updates the state.

3. **Columns Configuration:**
   - Defines the columns for the `Table` component, including actions like edit and delete.

4. **useEffect:**
   - Calls `getData` when the component mounts to fetch the list of theatres.

5. **Rendering:**
   - Renders a button to add a theatre and the `Table` component.
   - Conditionally renders `TheatreFormModal`, `DeleteTheatreModal`, and `ShowModal` based on the state.

### 2. `TheatreFormModal.js`

This component handles the form for adding or editing a theatre. It is displayed as a modal.

#### Key Parts:

1. **Props:**
   - `isModalOpen`, `setIsModalOpen`: Control the visibility of the modal.
   - `selectedTheatre`, `setSelectedTheatre`: Manage the data of the theatre being edited or added.
   - `formType`: Determines if the form is for adding or editing a theatre.
   - `getData`: Function to refresh the theatre list after an operation.

2. **Form Submission:**
   - `onFinish`: Handles the form submission. Depending on `formType`, it either adds a new theatre or updates an existing one.
   - Uses `addTheatre` and `updateTheatre` API calls.
   - Displays messages based on the success or failure of the operation.

3. **Form Layout:**
   - Uses `Form` from `antd` to handle form rendering and validation.
   - Fields include name, address, email, and phone number.
   - Submit and cancel buttons to handle the form actions.

### 3. `DeleteTheatreModal.js`

This component handles the deletion of a theatre. It is also displayed as a modal.

#### Key Parts:

1. **Props:**
   - `isDeleteModalOpen`, `setIsDeleteModalOpen`: Control the visibility of the modal.
   - `selectedTheatre`, `setSelectedTheatre`: Manage the data of the theatre being deleted.
   - `getData`: Function to refresh the theatre list after deletion.

2. **Deletion Handling:**
   - `handleOk`: Handles the confirmation of the delete action. Calls `deleteTheatre` API and displays appropriate messages based on the success or failure of the operation.
   - `handleCancel`: Closes the modal and resets the selected theatre.

3. **Rendering:**
   - Renders a confirmation message asking if the user is sure about deleting the theatre.
   - Provides `OK` and `Cancel` buttons to handle user actions.

### Relationship and Flow:

1. **User Interaction:**
   - **Viewing Theatres:** `TheatreList` fetches and displays the list of theatres. 
   - **Adding/Editing Theatres:** Clicking "Add Theatre" or the edit button opens `TheatreFormModal` where users can add a new theatre or edit an existing one. The form submission triggers the respective API call and refreshes the list in `TheatreList`.
   - **Deleting Theatres:** Clicking the delete button opens `DeleteTheatreModal`, which asks for confirmation and, upon confirmation, deletes the theatre and refreshes the list in `TheatreList`.

2. **State Management:**
   - `TheatreList` manages the state for the list of theatres and the visibility of modals.
   - `TheatreFormModal` and `DeleteTheatreModal` rely on `TheatreList` for their visibility and to refresh the list upon completion of their respective actions.

3. **Data Flow:**
   - The data (list of theatres) is fetched in `TheatreList` and passed to the respective modals through props.
   - Actions taken in the modals (add, edit, delete) update the data on the server and refresh the list in `TheatreList`.

### Integration:

The integration of these components ensures a smooth user experience for managing theatres. The list is always up-to-date, and modals provide a clean interface for adding, editing, and deleting theatres.

---
title:Admin Approval
description:
duration: 900
card_type: cue_card
---

Now go the admin page and there we have a TheatreTable.js component where we can recieve theatre request and can approve and deny it , let's start buidling that


```TheatresTable.js``` in admin Directory

```js

import { useState, useEffect } from 'react';
import { getAllTheatresForAdmin, updateTheatre } from '../../calls/theatres';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { message, Button, Table } from 'antd';

const TheatresTable = () => {
    const [theatres, setTheatres] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        try{
          dispatch(showLoading());
          const response = await getAllTheatresForAdmin();
          if(response.success){
            const allTheatres = response.data;
            setTheatres(
              allTheatres.map(function(item){
                return {...item, key: `theatre${item._id}`}
              })
              );
          }else{
            message.error(response.message)
          }
          dispatch(hideLoading())
  
        }catch(err){
          dispatch(hideLoading());
          message.error(err.message);
        }
      }

      const handleStatusChange = async (theatre) => {
        try{
          dispatch(showLoading);
          let values = {...theatres, theatreId: theatre._id, isActive: !theatre.isActive}
          const response = await updateTheatre(values);
          console.log(response, theatre);
          if(response.success){
            message.success(response.message);
            getData();
          }
          dispatch(hideLoading);
        }catch(err){
          dispatch(hideLoading);
          message.error(err.message);
        }
      }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            render: (text, data) => {
                return data.owner && data.owner.name;
            }
        },
        {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (status, data) => {
            if(data.isActive){
                return 'Approved'
            }else{
                return 'Pending/ Blocked'
            }
          }
        },
        {
          title: 'Action',
          dataIndex: 'action',
          render: (text, data) => {
            return(
              <div className='d-flex align-items-center gap-10'>
                { data.isActive ? <Button onClick={() => handleStatusChange(data)}>Block</Button> : <Button onClick={() => handleStatusChange(data)}>Approve</Button>  }
              </div>
            )
          }
        },
      ];

      useEffect(() => {
        getData();
      }, []);

      // console.log(theatres.length > 0 && theatres);

    return(
      <>
        {theatres && theatres.length > 0 && <Table dataSource={theatres} columns={columns} />}
      </>
    )
}

export default TheatresTable;

```

The provided code is a React component named `TheatresTable` that uses various hooks and libraries to display and manage a list of theatres for an admin. Here's a detailed breakdown of the code:

1. **Imports**:
   - `useState` and `useEffect` from React for managing state and side effects.
   - `getAllTheatresForAdmin` and `updateTheatre` from a module named `theatres` for API calls.
   - `showLoading` and `hideLoading` from a Redux slice named `loaderSlice` to manage loading state.
   - `useDispatch` from `react-redux` to dispatch actions.
   - `message`, `Button`, and `Table` from the Ant Design (`antd`) library for UI components and notifications.

2. **Component Definition**: 
   - The `TheatresTable` component is defined as a functional component.

3. **State Management**:
   - `theatres` state is initialized as an empty array to hold the list of theatres.
   - `useDispatch` is used to get the dispatch function from the Redux store.

4. **getData Function**:
   - This asynchronous function fetches the list of theatres from the server.
   - It dispatches `showLoading` to indicate loading state.
   - It calls `getAllTheatresForAdmin` to get the theatres data.
   - If the response is successful, it maps over the data to add a `key` property to each theatre and sets it in the `theatres` state.
   - It handles any errors by displaying an error message and hiding the loading state using `hideLoading`.

5. **handleStatusChange Function**:
   - This function is used to toggle the active status of a theatre.
   - It dispatches `showLoading` to indicate loading state.
   - It updates the theatre's status and calls `updateTheatre` to send the update to the server.
   - If the update is successful, it displays a success message and fetches the updated data.
   - It handles any errors by displaying an error message and hiding the loading state using `hideLoading`.

6. **Columns Definition**:
   - The `columns` array defines the columns for the Ant Design `Table` component.
   - Each column has a title, data index, and key.
   - The `render` function is used for custom rendering, such as displaying the owner's name, status, and action buttons.

7. **useEffect Hook**:
   - The `useEffect` hook is used to fetch the initial data when the component mounts by calling `getData`.

8. **Return Statement**:
   - The component returns a `Table` component from Ant Design if there are theatres to display.
   - The `Table` is populated with the `theatres` data and the defined `columns`.

```javascript
import { useState, useEffect } from 'react';
import { getAllTheatresForAdmin, updateTheatre } from '../../calls/theatres';
import { showLoading, hideLoading } from '../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { message, Button, Table } from 'antd';

const TheatresTable = () => {
  const [theatres, setTheatres] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllTheatresForAdmin();
      if (response.success) {
        const allTheatres = response.data;
        setTheatres(
          allTheatres.map(function(item) {
            return { ...item, key: `theatre${item._id}` };
          })
        );
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      message.error(err.message);
    }
  };

  const handleStatusChange = async (theatre) => {
    try {
      dispatch(showLoading());
      let values = { ...theatres, theatreId: theatre._id, isActive: !theatre.isActive };
      const response = await updateTheatre(values);
      if (response.success) {
        message.success(response.message);
        getData();
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      render: (text, data) => {
        return data.owner && data.owner.name;
      }
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status, data) => {
        return data.isActive ? 'Approved' : 'Pending/Blocked';
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, data) => {
        return (
          <div className='d-flex align-items-center gap-10'>
            <Button onClick={() => handleStatusChange(data)}>
              {data.isActive ? 'Block' : 'Approve'}
            </Button>
          </div>
        );
      }
    }
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {theatres && theatres.length > 0 && <Table dataSource={theatres} columns={columns} />}
    </>
  );
};

export default TheatresTable;
```

**Conclusion**:
The `TheatresTable` component is designed to display a table of theatres for an admin, allowing them to view theatre details and toggle the active status of each theatre. 


In the Next class we will start working on Shows

Start the Doubt session.




