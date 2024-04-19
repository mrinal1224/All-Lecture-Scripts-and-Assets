const express = require('express')
const cors = require('cors')
const morgan = require("morgan");

const rateLimit = require("express-rate-limit");
const  helmet =require("helmet");

require('dotenv').config();

require('./config/dbConfig');
const app = express()

const userRoutes = require('./routes/userRoutes')
const movieRoute = require('./routes/movieRoutes')
const theatreRoute = require('./routes/theatreRoute')
const showRoute = require('./routes/showRoute')
const bookingRoute = require('./routes/bookingRoute')

// Set security HTTP headers
app.use(helmet());
// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!"
});

app.use(cors())
app.use(express.json())


if (process.env.NODE_ENV === "development") {
  // Development logging
  app.use(morgan("dev"));
}

app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoute)
app.use('/api/theatres', theatreRoute)
app.use('/api/shows', showRoute)
app.use('/api/bookings', bookingRoute)

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
})


const PORT = process.env.PORT || 8081

const path = require("path");

__dirname = path.resolve();

// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("server running at port " + PORT)
})




