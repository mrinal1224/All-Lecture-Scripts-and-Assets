## agenda


## explanation of MVC architecture 

MVC is an abbreviation for model-view-controller. Here is what each of those elements means:

- **Model**: It is the backend containing all of the data logic. It represents the business layer of the application. The model is the core section of this architectural pattern and only contains application information. It has no instructions for displaying the data to the user. It is unaffected by the user interface. It is in charge of the logic and application rules.
- **View**: It forms the graphical user interface (GUI) and represents the presentation layer of the application. It is used to visualize the data that the model contains.`In our case react is going to handle it`
- **Controller**: It is the application's brain that controls how data flows. It works on both the model and the view. It is used to manage the application flow, i.e., data flow in the model object, as well as to update the view whenever data changes. 
`Note`: all the handler function belong here 
![mvc](https://hackmd.io/_uploads/HymP5icCa.png)

## mounting the router
we can delegate traffic using Router where a router represents part of a route 
in our case 
* `MoviesRouter` represents `/api/Movies`
* `UserRouter` represents `/api/user`

```js
const express = require("express");
const MoviesRouter = express.Router();
const UserRouter = express.Router();
app.use("/api/user", UserRouter);
app.use("/api/Movies", MoviesRouter);

//User handlers
UserRouter.get("/", getAllUserHandler);
// chaining
UserRouter.post("/", checkInput, createuserHandler);
UserRouter.get("/:userId", getUserById);
UserRouter.delete("/:userId", deleteUserById);

// Movies handlers
MoviesRouter.post("/", checkInput, createMoviesHandler);
MoviesRouter.get("/", getAllMoviesHandler);
MoviesRouter.get("/:MoviesId", getMoviesById);
MoviesRouter.delete("/:MoviesId", deleteMoviesById);