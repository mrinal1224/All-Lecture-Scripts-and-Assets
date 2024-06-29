---
title:Agenda
description:
duration: 900
card_type: cue_card
---

1. Buidling the Home page which will show Currently Running Movies
2. Buidling the Shows API
3. Partners can add shows in their approved theatres
4. Making the Shows Live
5. Selecting a Show

---

title:Building the Home page for Movies
description:
duration: 900
card_type: cue_card

---

In your Home page i.e `pages`->`Home.js` add this code

```js
import { useEffect, useState } from "react";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../calls/movies";
import { message, Row, Col, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Row className="justify-content-center w-100">
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            placeholder="Type here to search for movies"
            onChange={handleSearch}
            prefix={<SearchOutlined />}
          />
          <br />
          <br />
          <br />
        </Col>
      </Row>
      <Row
        className="justify-content-center"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {movies &&
          movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((movie) => (
              <Col
                className="gutter-row mb-5"
                key={movie._id}
                span={{
                  xs: 24,
                  sm: 24,
                  md: 12,
                  lg: 10,
                }}
              >
                <div className="text-center">
                  <img
                    onClick={() => {
                      navigate(
                        `/movie/${movie._id}?date=${moment().format(
                          "YYYY-MM-DD"
                        )}`
                      );
                    }}
                    className="cursor-pointer"
                    src={movie.poster}
                    alt="Movie Poster"
                    width={200}
                    style={{ borderRadius: "8px" }}
                  />
                  <h3
                    onClick={() => {
                      navigate(
                        `/movie/${movie._id}?date=${moment().format(
                          "YYYY-MM-DD"
                        )}`
                      );
                    }}
                    className="cursor-pointer"
                  >
                    {movie.title}
                  </h3>
                </div>
              </Col>
            ))}
      </Row>
    </>
  );
};

export default Home;
```

Let's break down the code step-by-step, with an emphasis on the usage of the `moment` library.

1. **Import Statements**:

   - `useEffect` and `useState` from `react`: These are React hooks. `useState` manages state, and `useEffect` handles side effects like data fetching.
   - `hideLoading` and `showLoading` from `../redux/loaderSlice`: These are Redux actions for managing a loading state.
   - `useDispatch` from `react-redux`: This hook is used to dispatch Redux actions.
   - `getAllMovies` from `../calls/movies`: A function that fetches movie data from an API.
   - `message`, `Row`, `Col`, `Input` from `antd`: UI components from the Ant Design library.
   - `useNavigate` from `react-router-dom`: This hook is used for navigation in a React Router application.
   - `SearchOutlined` from `@ant-design/icons`: An icon from Ant Design.
   - `moment` from `moment`: A library for parsing, validating, manipulating, and formatting dates.

2. **Component Initialization**:

   - The `Home` component is defined as a functional component.
   - `useState` is used to create two state variables: `movies` (initially `null`) and `searchText` (initially an empty string).

3. **Redux and Navigation Hooks**:

   - `useDispatch` initializes the `dispatch` function for dispatching Redux actions.
   - `useNavigate` initializes the `navigate` function for navigation.

4. **Data Fetching Function (`getData`)**:

   - `getData` is an asynchronous function to fetch movie data.
   - `dispatch(showLoading())` shows a loading spinner.
   - `await getAllMovies()` fetches the movies from the API.
   - If the response is successful, `setMovies(response.data)` updates the `movies` state with the fetched data.
   - If there is an error, `message.error(response.message)` or `message.error(err.message)` displays an error message.
   - `dispatch(hideLoading())` hides the loading spinner.

5. **Search Handling (`handleSearch`)**:

   - `handleSearch` updates the `searchText` state whenever the input field changes.
   - `console.log(searchText)` logs the current search text.

6. **Effect Hook (`useEffect`)**:

   - `useEffect(() => { getData(); }, []);` calls `getData` when the component mounts (only once, due to the empty dependency array).

7. **Render Method**:

   - The component returns a JSX structure.
   - **Search Input**:

     - A `Row` and `Col` structure from Ant Design is used to create a responsive layout.
     - An `Input` field is provided for searching movies, with the `SearchOutlined` icon as a prefix.
     - `onChange={handleSearch}` binds the search input to the `handleSearch` function.

   - **Movies Display**:
     - Another `Row` component displays the filtered movies.
     - The `movies` array is filtered based on `searchText`.
     - `map` is used to create a `Col` for each movie.
     - **Movie Poster and Title**:
       - `img` and `h3` elements display the movie poster and title.
       - Clicking on these elements navigates to the movie details page.
       - The URL includes a query parameter `date` with the current date formatted using `moment`.

8. **Using `moment`**:

   - `moment()` creates a moment object representing the current date and time.
   - `.format("YYYY-MM-DD")` formats the date as a string in the "YYYY-MM-DD" format.
   - This formatted date is appended to the URL as a query parameter `date`.

   **Example**:

   ```javascript
   navigate(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`);
   ```

   This navigates to a URL like `/movie/12345?date=2024-06-24` if the current date is June 24, 2024.

The `moment` library is used here for its simplicity and power in handling date and time. It allows easy formatting, parsing, and manipulation of dates, making it very useful in applications where date operations are frequent.

As date and Time are very importnat in a app like `bookmyshow` so `moment` helps in formatting them

---

title:Partners can add shows in their approved theatres
description:
duration: 900
card_type: cue_card

---

Now if you look in your Partner's Page , when the admin approves the theatre , the property `isActive` is set to `true` that means the theatre now is Active and can run shows , whenever a theatre will be approved we will show a buttom of `Add shows` beside it

You can see we have already added this in the `TheatreList` of the partner

Add one component as `ShowModel.js` which wil just be a basic component for now

```js
import React, { useEffect } from "react";

function ShowModal() {
  return (
    <>
      <h1>Show Modal</h1>
    </>
  );
}

export default ShowModal;
```

```js
import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import TheatreFormModal from "./TheatreFormModal";
import DeleteTheatreModal from "./DeleteTheatreModal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getAllTheatres } from "../../calls/theatres";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import ShowModal from "./ShowModal";

const TheatreList = () => {
  const { user } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [formType, setFormType] = useState("add");
  const [theatres, setTheatres] = useState(null);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllTheatres({ owner: user._id });
      if (response.success) {
        const allTheatres = response.data;
        // console.log(allTheatres);
        setTheatres(
          allTheatres.map(function (item) {
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, data) => {
        if (data.isActive) {
          return `Approved`;
        } else {
          return `Pending/ Blocked`;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div className="d-flex align-items-center gap-10">
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setFormType("edit");
                setSelectedTheatre(data);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedTheatre(data);
              }}
            >
              <DeleteOutlined />
            </Button>
            {data.isActive && (
              <Button
                onClick={() => {
                  setIsShowModalOpen(true);
                  setSelectedTheatre(data);
                }}
              >
                + Shows
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpen(true);
            setFormType("add");
          }}
        >
          Add Theatre
        </Button>
      </div>
      <Table dataSource={theatres} columns={columns} />
      {isModalOpen && (
        <TheatreFormModal
          isModalOpen={isModalOpen}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
          setIsModalOpen={setIsModalOpen}
          formType={formType}
          getData={getData}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteTheatreModal
          isDeleteModalOpen={isDeleteModalOpen}
          selectedTheatre={selectedTheatre}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
      {isShowModalOpen && (
        <ShowModal
          isShowModalOpen={isShowModalOpen}
          setIsShowModalOpen={setIsShowModalOpen}
          selectedTheatre={selectedTheatre}
        />
      )}
    </>
  );
};

export default TheatreList;
```

### Explanation of `showModal`, `isShowModalOpen` State, and Show Button Visibility

In the provided code, there is a component `TheatreList` which manages the display and interaction with a list of theatres. Here is a detailed explanation of how `showModal`, `isShowModalOpen` state, and the visibility of the show button work:

#### `showModal` Component

- `showModal` is a React component used to display a modal. In this context, it is used to show information or perform actions related to a theatre's shows.
- It is conditionally rendered based on the `isShowModalOpen` state.

#### `isShowModalOpen` State

- `isShowModalOpen` is a piece of state managed by the `useState` hook.
- It is a boolean that determines whether the `showModal` component is visible or not.
- Initial state: `const [isShowModalOpen, setIsShowModalOpen] = useState(false);` initializes it to `false`, meaning the modal is not visible by default.

#### Show Button Visibility

- The visibility of the show button depends on the `isActive` property of each theatre item.
- In the `columns` array, within the `render` function for the `Action` column:
  ```jsx
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, data) => {
      return (
        <div className='d-flex align-items-center gap-10'>
          <Button onClick={() => { setIsModalOpen(true); setFormType("edit"); setSelectedTheatre(data) }}>
            <EditOutlined/>
          </Button>
          <Button onClick={() => { setIsDeleteModalOpen(true); setSelectedTheatre(data); }}>
            <DeleteOutlined/>
          </Button>
          { data.isActive &&
            <Button onClick={() => { setIsShowModalOpen(true); setSelectedTheatre(data); }}>
              + Shows
            </Button>
          }
        </div>
      );
    }
  }
  ```
- The condition `{ data.isActive && <Button onClick={() => { setIsShowModalOpen(true); setSelectedTheatre(data); }}>+ Shows</Button> }` ensures that the show button is only visible when the theatre's `isActive` property is `true`.

#### How the Show Button Works

- When the show button is clicked, it executes the following code:
  ```jsx
  <Button
    onClick={() => {
      setIsShowModalOpen(true);
      setSelectedTheatre(data);
    }}
  >
    + Shows
  </Button>
  ```
  - `setIsShowModalOpen(true)`: This sets the `isShowModalOpen` state to `true`, making the `showModal` component visible.
  - `setSelectedTheatre(data)`: This sets the `selectedTheatre` state to the data of the clicked theatre, allowing the `showModal` to access and display the relevant theatre's information.

### Summary

- The `isShowModalOpen` state controls the visibility of the `showModal` component.
- The show button is conditionally rendered based on the `isActive` status of the theatre.
- Clicking the show button sets the `isShowModalOpen` state to `true` and updates the `selectedTheatre` state, thus displaying the `showModal` with the relevant theatre's details.

---

title:Show API
description:
duration: 900
card_type: cue_card

---

Now we need to create CRUD api for Show, So first we will create a Show Model

`ShowModel.js`

```js
const mongoose = require("mongoose");

const showSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movies",
      required: true,
    },
    ticketPrice: {
      type: Number,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    bookedSeats: {
      type: Array,
      default: [],
    },
    theatre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "theatres",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shows", showSchema);
```

1. **Schema Definition:**
   Inside the schema, various fields are defined with their respective types and constraints:

   - `name`: A string field that is required.
   - `date`: A date field that is required.
   - `time`: A string field that is required.
   - `movie`: A field that stores an ObjectId (a special type used by MongoDB to represent document IDs). This field creates a reference to another model (`movies`). This is used for establishing relationships between different documents. It's marked as required.
   - `ticketPrice`: A number field that is required.
   - `totalSeats`: A number field that is required.
   - `bookedSeats`: An array field with a default value of an empty array. This array is intended to store the details of seats that have been booked.
   - `theatre`: Similar to `movie`, it stores an ObjectId and references the `theatres` model, indicating which theatre the show is in. This field is also required.

2. **Timestamps Option:**

   ```javascript
   {
     timestamps: true;
   }
   ```

   This option automatically adds two new fields—`createdAt` and `updatedAt`—to the schema. These fields store the date and time when a document is created and last updated, respectively.

3. **Model Export:**
   ```javascript
   module.exports = mongoose.model("shows", showSchema);
   ```
   This line creates and exports a model from the defined schema. `mongoose.model` takes two arguments: the model name ("shows") and the schema (`showSchema`). This model represents the `shows` collection in the MongoDB database, where documents conforming to `showSchema` will be stored. By exporting this model, other parts of the application can import and use it to interact with the `shows` collection.

In summary, this code snippet sets up a Mongoose model for a "Show" entity that represent a movie show in a theatre, including various details like showtimes, movie references, pricing, seats, etc., with automatic tracking of creation and modification times.

---

title:Creating Routes for Shows
description:
duration: 900
card_type: cue_card

---

Let's write the API for our Shows

`showRoutes.js`

```js
const router = require("express").Router();

const Show = require("../models/showModel");

// Add Show
router.post("/add-show", async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "New show has been added!",
    });
    // console.log(req.body, res.success, res.message);
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
});

router.post("/delete-show", async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
});

// Update mshow
router.put("/update-show", async (req, res) => {
  try {
    await Show.findByIdAndUpdate(req.body.showId, req.body);
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/get-all-shows-by-theatre", async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.body.theatreId }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "All shows fetched",
      data: shows,
    });
    // console.log(req.body, res.data, shows)
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

// Get all theatres by movie which has some shows
router.post("/get-all-theatres-by-movie", async (req, res) => {
  try {
    const { movie, date } = req.body;
    // First get all the shows of the selected date
    const shows = await Show.find({ movie, date }).populate("theatre");

    // Filter out the unique theatres now
    let uniqueTheatres = [];
    shows.forEach((show) => {
      let isTheatre = uniqueTheatres.find(
        (theatre) => theatre._id === show.theatre._id
      );
      if (!isTheatre) {
        let showsOfThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id == show.theatre._id
        );
        uniqueTheatres.push({
          ...show.theatre._doc,
          shows: showsOfThisTheatre,
        });
      }
    });
    res.send({
      success: true,
      message: "All theatres fetched!",
      data: uniqueTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/get-show-by-id", async (req, res) => {
  try {
    const show = await Show.findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show fetched!",
      data: show,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
```

let's delve deeper into each part of the code and explain what each section does:

### 1. Setting Up Express Router and Importing Dependencies

```javascript
const router = require("express").Router();
const Show = require("../models/showModel");
```

- **Express Router**:

  - `const router = require('express').Router();` initializes an instance of Express Router, which allows us to define routes for handling HTTP requests.

- **Show Model**:
  - `const Show = require('../models/showModel');` imports the `Show` model from `showModel.js` (assuming it defines a Mongoose schema and methods for interacting with show data in MongoDB).

### 2. Adding a Show (`POST /add-show`)

```javascript
router.post("/add-show", async (req, res) => {
  try {
    const newShow = new Show(req.body); // Create a new Show instance with data from req.body
    await newShow.save(); // Save the new show to the database
    res.send({
      success: true,
      message: "New show has been added!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `POST` request to `/add-show`.
  - It expects the request body (`req.body`) to contain data for a new show.
  - It creates a new instance of `Show` using `req.body`, saves it to the database using `await newShow.save()`, and sends a success response if the operation is successful.
  - If there's an error (e.g., validation error or database error), it catches the error and sends a failure response with an error message.

### 3. Deleting a Show (`POST /delete-show`)

```javascript
router.post("/delete-show", async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.body.showId); // Find and delete a show by its ID
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `POST` request to `/delete-show`.
  - It expects the request body (`req.body`) to contain `showId`, which is used to find and delete the corresponding show from the database (`await Show.findByIdAndDelete(req.body.showId)`).
  - If the deletion is successful, it sends a success response.
  - If there's an error (e.g., the show ID is not found or a database error occurs), it sends a failure response with an error message.

### 4. Updating a Show (`PUT /update-show`)

```javascript
router.put("/update-show", async (req, res) => {
  try {
    await Show.findByIdAndUpdate(req.body.showId, req.body); // Find and update a show by its ID
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `PUT` request to `/update-show`.
  - It expects the request body (`req.body`) to contain `showId` and updated data (`req.body`).
  - It updates the show identified by `showId` with the new data using `await Show.findByIdAndUpdate(req.body.showId, req.body)`.
  - If the update is successful, it sends a success response.
  - If there's an error (e.g., validation error or database error), it sends a failure response with an error message.

### 5. Getting All Shows by Theatre (`POST /get-all-shows-by-theatre`)

```javascript
router.post("/get-all-shows-by-theatre", async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.body.theatreId }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "All shows fetched",
      data: shows,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `POST` request to `/get-all-shows-by-theatre`.
  - It expects the request body (`req.body`) to contain `theatreId`, which is used to find all shows associated with that theatre in the database (`await Show.find({ theatre: req.body.theatreId }).populate('movie')`).
  - It populates each show with details of the associated movie.
  - If shows are found, it sends a success response with the fetched shows.
  - If there's an error (e.g., database error), it sends a failure response with an error message.

### 6. Getting All Theatres by Movie and Date (`POST /get-all-theatres-by-movie`)

```javascript
router.post("/get-all-theatres-by-movie", async (req, res) => {
  try {
    const { movie, date } = req.body;
    // First get all the shows of the selected date
    const shows = await Show.find({ movie, date }).populate("theatre");

    // Filter out the unique theatres now
    let uniqueTheatres = [];
    shows.forEach((show) => {
      let isTheatre = uniqueTheatres.find(
        (theatre) => theatre._id === show.theatre._id
      );
      if (!isTheatre) {
        let showsOfThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id == show.theatre._id
        );
        uniqueTheatres.push({
          ...show.theatre._doc,
          shows: showsOfThisTheatre,
        });
      }
    });
    res.send({
      success: true,
      message: "All theatres fetched!",
      data: uniqueTheatres,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `POST` request to `/get-all-theatres-by-movie`.
  - It expects the request body (`req.body`) to contain `movie` and `date`.
  - It retrieves all shows of the specified `movie` and `date` from the database (`await Show.find({ movie, date }).populate('theatre')`).
  - It then filters out unique theatres and organizes shows under each unique theatre.
  - It sends a success response with the fetched theatres and associated shows.
  - If there's an error (e.g., database error), it sends a failure response with an error message.

### 7. Getting a Show by ID (`POST /get-show-by-id`)

```javascript
router.post("/get-show-by-id", async (req, res) => {
  try {
    const show = await Show.findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show fetched!",
      data: show,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});
```

- **Functionality**:
  - This route handles a `POST` request to `/get-show-by-id`.
  - It expects the request body (`req.body`) to contain `showId`.
  - It retrieves a specific show by its `showId` from the database (`await Show.findById(req.body.showId).populate('movie').populate('theatre')`).
  - It populates the retrieved show with details of the associated movie and theatre.
  - It sends a success response with the fetched show.
  - If there's an error (e.g., the show ID is not found or a database error occurs), it sends a failure response with an error message.

### 8. Exporting the Router

```javascript
module.exports = router;
```

- **Functionality**:
  - This line exports the `router` instance, allowing it to be used in other parts of the application where this file (`showRoutes.js`) is imported.

### Summary

This code defines routes (`/add-show`, `/delete-show`, `/update-show`, `/get-all-shows-by-theatre`, `/get-all-theatres-by-movie`, `/get-show-by-id`) for managing shows . Each route handles specific CRUD operations related to shows, interacting with the database via the `Show` model and sending appropriate responses based on the success or failure of the operations.

---

title:Axios Instances for Show Model
description:
duration: 900
card_type: cue_card

---

Axios calls corresponding to all the routes

`shows.js`

```js
import { axiosInstance } from ".";

export const addShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/shows/add-show", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const updateShow = async (payload) => {
  try {
    const response = await axiosInstance.put("/api/shows/update-show", payload);
    console.log(payload, response);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-all-shows-by-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const deleteShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/delete-show",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-all-theatres-by-movie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/shows/get-show-by-id",
      payload
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};
```

Now we need to create our showModel page and add shows for Theatres

In your Show Model add this code

`ShowModel.js`

```js
import {
  Col,
  Modal,
  Row,
  Form,
  Input,
  Button,
  Select,
  Table,
  message,
} from "antd";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";
// import { addTheatre, updateTheatre } from '../../apicalls/theatres';
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
import { getAllMovies } from "../../calls/movies";
import {
  addShow,
  deleteShow,
  getShowsByTheatre,
  updateShow,
} from "../../calls/shows";
import moment from "moment";

const ShowModal = ({
  isShowModalOpen,
  setIsShowModalOpen,
  selectedTheatre,
}) => {
  const [view, setView] = useState("table");
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [shows, setShows] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const movieResponse = await getAllMovies();
      if (movieResponse.success) {
        setMovies(movieResponse.data);
      } else {
        message.error(movieResponse.message);
      }

      const showResponse = await getShowsByTheatre({
        theatreId: selectedTheatre._id,
      });
      if (showResponse.success) {
        setShows(showResponse.data);
      } else {
        message.error(showResponse.message);
      }

      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response = null;
      if (view === "form") {
        response = await addShow({ ...values, theatre: selectedTheatre._id });
      } else {
        // console.log(view, selectedTheatre, selectedTheatre._id);
        response = await updateShow({
          ...values,
          showId: selectedShow._id,
          theatre: selectedTheatre._id,
        });
      }
      if (response.success) {
        getData();
        message.success(response.message);
        setView("table");
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const handleCancel = () => {
    setIsShowModalOpen(false);
  };

  const handleDelete = async (showId) => {
    try {
      dispatch(showLoading());
      const response = await deleteShow({ showId: showId });
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "Show Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Show Date",
      dataIndex: "date",
      render: (text, data) => {
        return moment(text).format("MMM Do YYYY");
      },
    },
    {
      title: "Show Time",
      dataIndex: "time",
      render: (text, data) => {
        return moment(text, "HH:mm").format("hh:mm A");
      },
    },
    {
      title: "Movie",
      dataIndex: "movie",
      render: (text, data) => {
        return data.movie.title;
      },
    },
    {
      title: "Ticket Price",
      dataIndex: "ticketPrice",
      key: "ticketPrice",
    },
    {
      title: "Total Seats",
      dataIndex: "totalSeats",
      key: "totalSeats",
    },
    {
      title: "Available Seats",
      dataIndex: "seats",
      render: (text, data) => {
        return data.totalSeats - data.bookedSeats.length;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div className="d-flex align-items-center gap-10">
            <Button
              onClick={() => {
                setView("edit");
                setSelectedMovie(data.movie);
                setSelectedShow({
                  ...data,
                  date: moment(data.date).format("YYYY-MM-DD"),
                });
                console.log(selectedMovie && selectedMovie.title);
              }}
            >
              <EditOutlined />
            </Button>
            <Button onClick={() => handleDelete(data._id)}>
              <DeleteOutlined />
            </Button>
            {data.isActive && (
              <Button
                onClick={() => {
                  setIsShowModalOpen(true);
                }}
              >
                + Shows
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <Modal
      centered
      title={selectedTheatre.name}
      open={isShowModalOpen}
      onCancel={handleCancel}
      width={1200}
      footer={null}
    >
      <div className="d-flex justify-content-between">
        <h3>
          {view === "table"
            ? "List of Shows"
            : view === "form"
            ? "Add Show"
            : "Edit Show"}
        </h3>
        {view === "table" && (
          <Button type="primary" onClick={() => setView("form")}>
            Add Show
          </Button>
        )}
      </div>
      {view === "table" && <Table dataSource={shows} columns={columns} />}

      {(view === "form" || view === "edit") && (
        <Form
          className=""
          layout="vertical"
          style={{ width: "100%" }}
          initialValues={view === "edit" ? selectedShow : null}
          onFinish={onFinish}
        >
          <Row
            gutter={{
              xs: 6,
              sm: 10,
              md: 12,
              lg: 16,
            }}
          >
            <Col span={24}>
              <Row
                gutter={{
                  xs: 6,
                  sm: 10,
                  md: 12,
                  lg: 16,
                }}
              >
                <Col span={8}>
                  <Form.Item
                    label="Show Name"
                    htmlFor="name"
                    name="name"
                    className="d-block"
                    rules={[
                      { required: true, message: "Show name is required!" },
                    ]}
                  >
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter the show name"
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Show Date"
                    htmlFor="date"
                    name="date"
                    className="d-block"
                    rules={[
                      { required: true, message: "Show date is required!" },
                    ]}
                  >
                    <Input
                      id="date"
                      type="date"
                      placeholder="Enter the show date"
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Show Timing"
                    htmlFor="time"
                    name="time"
                    className="d-block"
                    rules={[
                      { required: true, message: "Show time is required!" },
                    ]}
                  >
                    <Input
                      id="time"
                      type="time"
                      placeholder="Enter the show date"
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row
                gutter={{
                  xs: 6,
                  sm: 10,
                  md: 12,
                  lg: 16,
                }}
              >
                <Col span={8}>
                  <Form.Item
                    label="Select the Movie"
                    htmlFor="movie"
                    name="movie"
                    className="d-block"
                    rules={[{ required: true, message: "Movie  is required!" }]}
                  >
                    <Select
                      id="movie"
                      placeholder="Select Movie"
                      defaultValue={selectedMovie && selectedMovie.title}
                      style={{ width: "100%", height: "45px" }}
                      options={movies.map((movie) => ({
                        key: movie._id,
                        value: movie._id,
                        label: movie.title,
                      }))}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Ticket Price"
                    htmlFor="ticketPrice"
                    name="ticketPrice"
                    className="d-block"
                    rules={[
                      { required: true, message: "Ticket price is required!" },
                    ]}
                  >
                    <Input
                      id="ticketPrice"
                      type="number"
                      placeholder="Enter the ticket price"
                    ></Input>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Total Seats"
                    htmlFor="totalSeats"
                    name="totalSeats"
                    className="d-block"
                    rules={[
                      { required: true, message: "Total seats are required!" },
                    ]}
                  >
                    <Input
                      id="totalSeats"
                      type="number"
                      placeholder="Enter the number of total seats"
                    ></Input>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="d-flex gap-10">
            <Button
              className=""
              block
              onClick={() => {
                setView("table");
              }}
              htmlType="button"
            >
              <ArrowLeftOutlined /> Go Back
            </Button>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              {view === "form" ? "Add the Show" : "Edit the Show"}
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};
export default ShowModal;
```

This component (`ShowModal`) is a modal window used for managing shows at a theatre. Let's break down its functionality and structure:

### Imports
```javascript
import {
  Col,
  Modal,
  Row,
  Form,
  Input,
  Button,
  Select,
  Table,
  message,
} from "antd";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../calls/movies";
import {
  addShow,
  deleteShow,
  getShowsByTheatre,
  updateShow,
} from "../../calls/shows";
import moment from "moment";
```
- **antd**: Components and utilities from Ant Design library, used for UI elements like forms, tables, modals, etc.
- **redux**: Redux hooks (`useDispatch`) and actions (`showLoading`, `hideLoading`) for managing loading state.
- **Icons**: Icons from Ant Design for buttons (`ArrowLeftOutlined`, `EditOutlined`, `DeleteOutlined`).
- **React Hooks**: `useEffect` and `useState` for managing component state and side effects.
- **API Calls**: Functions (`getAllMovies`, `addShow`, `deleteShow`, `getShowsByTheatre`, `updateShow`) for interacting with backend services (`movies` and `shows`).

### Component Definition
```javascript
const ShowModal = ({
  isShowModalOpen,
  setIsShowModalOpen,
  selectedTheatre,
}) => {
  // State variables initialization
  const [view, setView] = useState("table");
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [shows, setShows] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const dispatch = useDispatch();

  // Function to fetch data (movies and shows) from backend
  const getData = async () => {
    try {
      dispatch(showLoading());
      const movieResponse = await getAllMovies();
      if (movieResponse.success) {
        setMovies(movieResponse.data);
      } else {
        message.error(movieResponse.message);
      }

      const showResponse = await getShowsByTheatre({
        theatreId: selectedTheatre._id,
      });
      if (showResponse.success) {
        setShows(showResponse.data);
      } else {
        message.error(showResponse.message);
      }

      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  // Function to handle form submission (Add or Edit Show)
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response = null;
      if (view === "form") {
        response = await addShow({ ...values, theatre: selectedTheatre._id });
      } else {
        response = await updateShow({
          ...values,
          showId: selectedShow._id,
          theatre: selectedTheatre._id,
        });
      }
      if (response.success) {
        getData(); // Refresh shows list
        message.success(response.message);
        setView("table"); // Switch view back to table
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  // Function to handle modal cancel
  const handleCancel = () => {
    setIsShowModalOpen(false);
  };

  // Function to handle deletion of a show
  const handleDelete = async (showId) => {
    try {
      dispatch(showLoading());
      const response = await deleteShow({ showId: showId });
      if (response.success) {
        message.success(response.message);
        getData(); // Refresh shows list
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  // Columns configuration for the shows table
  const columns = [
    // Columns definition with custom rendering for date, time, movie, and action buttons
  ];

  // Initial data fetch on component mount
  useEffect(() => {
    getData();
  }, []);

  // JSX return for the modal component
  return (
    <Modal
      centered
      title={selectedTheatre.name}
      visible={isShowModalOpen}
      onCancel={handleCancel}
      width={1200}
      footer={null}
    >
      {/* Content of the modal */}
      {/* Conditionally render either shows table or add/edit form */}
    </Modal>
  );
};

export default ShowModal;
```

### Explanation:
1. **State Management**: Uses `useState` to manage various states such as `view` (current view mode), `movies` (list of movies), `selectedMovie` (current selected movie), `shows` (list of shows), and `selectedShow` (current selected show).
   
2. **Data Fetching**: The `getData` function is an asynchronous function that fetches movies and shows data from the backend (`getAllMovies`, `getShowsByTheatre`). It dispatches loading actions (`showLoading`, `hideLoading`) during data fetching.

3. **Form Submission**: `onFinish` handles form submission for adding or updating shows. It dispatches loading actions, calls appropriate API functions (`addShow`, `updateShow`), and updates state and displays messages based on API responses.

4. **Event Handlers**: `handleCancel` closes the modal, `handleDelete` deletes a selected show, and `handleEdit` and `handleAdd` manage the switching between table view and form view (`setView`).

5. **Table Configuration**: `columns` array defines the configuration for the Ant Design `Table` component, including custom rendering for date, time, movie, and action buttons.

6. **Effect Hook**: Uses `useEffect` to fetch initial data (`getData`) when the component mounts (`[]` dependency array ensures it runs once).

7. **Modal Component**: Renders an Ant Design `Modal` with dynamic title (`selectedTheatre.name`), visible state (`isShowModalOpen`), width (`1200px`), and conditionally renders either a table of shows (`view === 'table'`) or a form (`view === 'form'` or `view === 'edit'`).


Now you will be able to add shows , Next step is we ant to make these shows live so tickets can be booked for these shows

We will be moving forward with making the Shows live and Seating Arrangement in the next class

Start the Doubt session.
