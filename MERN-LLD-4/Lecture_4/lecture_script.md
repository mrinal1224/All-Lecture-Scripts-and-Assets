

## Agenda
* BMS project Demo
* CRUD of movies
* Restful Design

## Project Demo

We have following pages in our project
![image](https://hackmd.io/_uploads/HkeRcOgx0.png)
![image](https://hackmd.io/_uploads/SkAyoOllA.png)
![image](https://hackmd.io/_uploads/BJIXouexR.png)
![image](https://hackmd.io/_uploads/rJU8o_xeR.png)
![image](https://hackmd.io/_uploads/S11to_llC.png)
![image](https://hackmd.io/_uploads/BkVai_xg0.png)
![image](https://hackmd.io/_uploads/BkoRjOeeA.png)
![image](https://hackmd.io/_uploads/ByL13Oll0.png)
![image](https://hackmd.io/_uploads/Byefnuee0.png)
![image](https://hackmd.io/_uploads/rkgrnuexA.png)
![image](https://hackmd.io/_uploads/H1qUnulxA.png)
![image](https://hackmd.io/_uploads/H1sFnOxgA.png)
![image](https://hackmd.io/_uploads/r1Xo2dxe0.png)
![image](https://hackmd.io/_uploads/rkL23ulgA.png)
![image](https://hackmd.io/_uploads/rkzahOxe0.png)
![image](https://hackmd.io/_uploads/HJCandee0.png)
![image](https://hackmd.io/_uploads/H1FJ6uxlA.png)
![image](https://hackmd.io/_uploads/rJX76uxgR.png)
![image](https://hackmd.io/_uploads/rkvEpOlgA.png)



## User Model
Schema and Model wrt to user should be kept in different file 
`userModel.js`
```js
const mongoose = require("mongoose");

// our schema for users for a BookMyShow website

const userSchemaRules = {

name: {

type: String,

required: true,

},

email: {

type: String,

required: true,

unique: true,

},

password: {
type: String,
required: true,
minlength: 8,

}
,

createdAt: {

type: Date,

default: Date.now()

}

}

// schema-> structure and validation

const userSchema = new mongoose.Schema(userSchemaRules);

// this model -> will have queries

const UserModel = mongoose.model("userModel", userSchema);

module.exports=UserModel;
```


## refactoring handlers
**Problem Statement**: If we use function statement then those statements are hoisted and because they are hoisted by mistake function can overwritten 

`api.js`
```js
app.get("/api/user", getAllUserHandler);
async function getAllUserHandler(req, res) {
    try {
        console.log("I am inside  get method");

        const userDataStore = await UserModel.find();
        if (userDataStore.length == 0) {
            throw new Error("No users are present")
        }
        res.status(200).json({
            status: "success",
            message: userDataStore
        })
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }

}

```
**Solution** : convert function statement into function expression . If we use function expression so they needs to created before the use and because we are using const declaration so function definition can't be overwritten 

`api.js`

```js
const getAllUserHandler=async function (req, res) {
    try {
        console.log("I am inside  get method");

        const userDataStore = await UserModel.find();
        if (userDataStore.length == 0) {
            throw new Error("No users are present")
        }
        res.status(200).json({
            status: "success",
            message: userDataStore
        })
    } catch (err) {
        res.status(404).json({
            status: "failure",
            message: err.message
        })
    }

}
app.get("/api/user", getAllUserHandler);
```
 Note:  Repeat the same for all the handler functions 


## chaining of middleware , refactoring checkInput and deleteById
In express we chain middleware in a route so and behaviour remains the same . This chaining feature helps to improve code readability 
## Check input middleWare 
### Initially 
```js
app.use(express.json());
app.use(function (req, res, next) {
    // console.log("36",req.method);
    if (req.method == "POST") {
        // check if the body is empty or not 
        const userDetails = req.body;
        const isEmpty = Object.keys(userDetails).length == 0;
        if (isEmpty) {
            res.status(400).json({
                status: "failure",
                message: "userDetails are empty"
            })
        } else {
            next();
        }
    } else {
        next();
    }
})

app.get("/api/user", getAllUserHandler);
app.post("/api/user", createuserHandler);
app.get("/api/user/:userId", getUserById);
```

### finally  
```js
const checkInput=(req, res, next) => {
const userDetails = req.body;
const isEmpty = Object.keys(userDetails).length == 0;
if (isEmpty) {
res.status(400).json({
status: "failure",
message: "userDetails are empty"
})
} else {
next();
}
}
app.use(express.json());


app.get("/api/user", getAllUserHandler);
app.post("/api/user", checkInput,createuserHandler);
app.get("/api/user/:userId", getUserById);
```


**Note**: test your code after this 

## DeleteByid

```js
const deleteUserById=async function (req, res) {

let { elementId } = req.params;

try {

let element = await UserModel.findByIdAndDelete(elementId);

res.status(200).json({

status: "successfull element deleted",

message: element

});

} catch (err) {

console.error(err);

res.status(500).json({

status: "failure",

message: err.message

  

});

}

}

app.delete("/api/user/:userId", deleteUserById);
```




When we are working on a backend API as it is a very complex piece of software so to make your code more readble and scalable to write we follow rest principle to create an API
## Key Principles of RESTful APIs

1. **Client-Server Separation of **:
- Clear separation between client and server responsibilities.
- Clients handle the user interface, while servers manage data storage and processing.

2. **Resource-Based Routing**:
- Data is exposed as resources (e.g., `/users`, `/Movies`).
- Each resource is uniquely identified by a route.

**Note**  Resources on which routes should be decided
for ex in and BookMyShow Website we can have 
* Users
* Movies
* Shows
* Theaters
* Bookings

1. **Actions are done by HTTP method**
- `GET`: Retrieve a resource.
- `POST`: Create a new resource.
- `PATCH`: Update an existing resource.
- `DELETE`: Delete a resource.

Example of routes 
Instead of `app.get("/getUser")` it should be  `app.get("/user")``
Instead of `app.get("/reviewforbatman)` it should be  `app.get("/review/reviewforbatman)``
  
1. **Statelessness**:
- Each request from the client to the server must contain all the necessary information for the server to fulfil it .

- The server doesn’t store any client state between requests. Every request is independent.simplifying scalability and reducing coupling.

  Instead of `app.get("/nextPage")` it should be  `app.get("/5")`
### Benefits
* **Scalability**: REST APIs are scalable and can handle a large number of clients.
* **Simplicity**: Easy to understand and use due to the use of standard HTTP methods and URLs.
* **Independence** : tech stack of client/server


## Adding Movies Model and handler functions
## creating Movies Model
`MoviesModel.js`
```js
const mongoose = require("mongoose");

// BookMyShow -> Amazon

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true    
    },
    description: {
        type: String, 
        required: true    
    },
    duration: {
        type: Number, 
        required: true    
    },
    genre: {
        type: String, 
        required: true    
    },
    language: {
        type: String, 
        required: true    
    },
    releaseDate: {
        type: Date, 
        required: true    
    },
    poster: {
        type: String, 
        required: true
    },
});

const Movies = mongoose.model('movies', movieSchema);
module.exports = Movies
```


## Adding routes and createMoviesHandler

Now if we follow our rest principles then the route should start from `/api/movies`. These will be the routes and handler associated to Moviess
### Creating routes 
In `api.js`
```js
app.get("/api/Movies", checkInput,getAllMoviesHandler);
app.post("/api/Movies", createMoviesHandler);
app.get("/api/Movies/:MoviesId", getMoviesById);
app.delete("api/Movies/:MoviesId", deleteMoviesById);
```

### Creating handler function 

Create all four route handlers just by copying and pasting handler function of user and replacing `UserModel` with `MovieModel`







**Problem ** : we are writing all the code is same file so we need to make it more structured  
**Solution** : We should use `MVC architecture` to organise our code  

