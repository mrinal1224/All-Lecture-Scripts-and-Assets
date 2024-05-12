---
title: Imdb Project Overview
description: 
duration: 3430
card_type: cue_card
---



## IMDB Clone React Website

### Project Description

We will be creating an IMDB clone, where we will fetch Real-time trending movies data and will show it in grid format, we will be designing the whole application by using Tailwind CSS which we abe alredy set up in our previous class

### Features of the project

The following will be the features of our IMDB clone:

- The user will be able to view the list of the latest & trneding movies (IMDB API)
- User can create their own separate watchlist
- User can filter movies according to genre
- User can sort movies according to ratings
- Pagination will be implemented to move from one page to another to get updated data of other movies
- Search feature will be there for movies.
- We will be deploying this to netlify




---
title: Project setup and  overview 
description: vite project setup 
duration: 462
card_type: cue_card
---
### setup 
 

#### undersanding Project structure
Again let's go through the code base again -> for us all of the code will live inside `src` directory 

- **main.jsx**: entry file for our project . It is the place from where our project will start executing

**Code**:

```javascript=
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```


* **App.js** : This is the second react component that will represent the whole IMDB application  
* 
---
title: Adding Top level components 
description: 
duration: 462
card_type: cue_card
---
`Instructor ques`: How many Different Route do we have in this application 
`Ans`: -> one Home Page and one Watch List and we also have a common navbar 

Let's create route for these two . Let's create a directory named `Components` [we will be keeping all the components of our application here]
inside that let's create  components for our two routes
* `Home.jsx`
* `WatchList.jsx`

`Home.jsx`
```jsx=
import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home
```
`WatchList`
```jsx
import React from 'react'

function WatchList() {
  return (
    <div>WatchList</div>
  )
}
export default WatchList
```
* let's create common navbar
`NavBar`
```jsx
import React from 'react'
function NavBar() {
  return (
    <div>NavBar</div>
  )
}
export default NavBar
```

let's now add these two pages and NavBar into our app.jsx.

```jsx
import WatchList from './Components/WatchList';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
function App() {
  (<>
    <NavBar />
    <Home />
    <WatchList />
  </>
             
  );
}
export default App;
```

### Routing in our Application

Like always we will have to install react-router-dom

```curl
npm i react-router-dom
```

Let's add these routes to our Project. 

`main.jsx`
import browser router and wrap the whole application inside it 
```jsx
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```
In `app.jsx`

```jsx
// inside the return statement of App.jsx add these
        <NavBar/>

        <Routes>
          <Route
            path="/" element={<Home />}
          />
          <Route
            path="/watchlist"
            element={<WatchList />}
          />
        </Routes>
       

```

### Navbar
Let's start with NavBar component first.
`Instructor question` : Which component do we use to create links in react-router-dom.
answer : Link

`Instructor cue`: 
for our logo we will be using below image ->[save this image and add it to the src folder with the name of MovieLogo.png]

<img src="https://hackmd.io/_uploads/SJIg4uaTT.png" height="100px"/>

link to download logo - https://hackmd.io/_uploads/SJIg4uaTT.png



As discussed before let's add  these three links to our NavBar component
**NavBar.jsx**

```jsx
import React from "react";
import Logo from "../MovieLogo.png";
import {Link} from 'react-router-dom'
function NavBar() {
return (
    <>
      <Link to="/">
        <img src={Logo} />
      </Link>

      <Link to="/">Movies</Link>

      <Link to="/watchlist">Watchlist</Link>
    </>
  );
}

export default NavBar;
```

#### styling Navbar
Now let's use tailwind to style them

```jsx=
<div className="flex space-x-8 items-center pl-3 py-4">
      <Link to='/'><img className="w-[50px]" src={Logo} /></Link>

      <Link to="/"  className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>

      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
```

#### explaination of tailwind styling  
 Let's break it down step by step:

* **Layout Strategy** : we're opting for a flexible layout using `flex class`, which allows us to easily control the positioning and alignment of our child elements.
    * Spacing Between Elements: We want to ensure there's adequate spacing between our child elements. With the `space-x-8 class`, we specify the horizontal spacing between elements. This ensures that our links and logo aren't too tightly packed together
    * Alignment: To ensure our elements are vertically centered within the container, we use the `items-center` class.
* **Padding**: Adding padding to the left and top/bottom of our container ensures that our content isn't cramped against the edges of the container. The `pl-3` class adds padding to the left side of the container, while the `py-4` class adds padding to the top and bottom.
 
* **Styling Links and Image**:  For the logo image, we use w-[50px] to set a custom width of 50 pixels. For the links, we use classes like text-blue-500, text-3xl, and font-bold to specify the color, font size, and font weight respectively. 

#### output 
![image](https://hackmd.io/_uploads/HyayvdpTp.png)

---
title: Banner and Movies component
description: 
duration: 462
card_type: cue_card
---

`Instructor cue` : We will first use placeholder image to design the component and then in the movies component we will introduce TMDB API:  https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68

In banner we will have backgound image and on which bottom center we will have movie name.

so we will need to div's  -> first one will used to show a background image and and an inner div that will be at the bottom ,Overall, this code snippet creates a responsive container with a background image, and a text element positioned at the bottom.

```jsx
import React from "react";
function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          `url( https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68)`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
       Placeholder movie
      </div>
    </div>
  );
}
export default Banner;
```
#### explaination of styling
* Inline Style: The style attribute is used to apply inline CSS styles to the div element. In this case, the backgroundImage property is set to a URL that points to the background image. This image will be displayed as the background of the container.
* Height: The h-[20vh] md:h-[75vh] classes are used to set the height of the div element. The first class, h-[20vh], sets the height to 20% of the viewport height (vh). This means the height of the container will be 20% of the viewport height, making it responsive to different screen sizes. The md:h-[75vh] class applies a height of 75% of the viewport height only on medium-sized screens and above (md breakpoint).
* Flexbox Layout: The flex class is used to establish a flexbox layout for the container. This allows us to easily control the alignment and positioning of the child elements within the container.
    * Vertical Alignment: The items-end class is used to align the child elements to the bottom of the container. This ensures that the text inside the container is positioned at the bottom
* Background Image: The bg-cover and bg-center classes are used to control the background image behavior. bg-cover ensures that the background image covers the entire container without distorting its aspect ratio, and bg-center ensures that the background image is centered within the container.
* Child Element: Inside the container, there is a div element with the classes text-white w-full text-center text-2xl. This element contains the text "Placeholder movie". The classes are used to style the text, setting its color to white (text-white), making it take up the full width of the container (w-full), center-aligning the text (text-center), and setting the font size to 2 times the base font size (text-2xl).


`Instructor cue` **Now import banner component to Home component**

### Movies component
to create the movie List component -> we will need to map it though the list of movies . 


`Instructor cue` : We will first use placeholder image the design the component and later on we will replace it  TMDB API:  https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68

let's first start with creating the UI for it 

We will using placeholder image first then this will be replaced by actual API data.
 
 Now the movie component is very simple -> it simply map through moviesArr

```jsx=
import React, {  useState } from "react";


function Movies() {
//     we will be using this static list of movies then we will replace it with actual  data fetching logic 
     const [movies, setMovies] = useState([
        {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 1"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 2"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 3"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 4"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 5"},
         
     ]);
  return (
    <div>
      <div >
        <h1>Trending Movies</h1>
      </div>
      <div >
        {movies.map((movieObj) => {
          return (
              <div
    style={{
      backgroundImage: `url(${movieObj.url})`,
    }}
  >
    <div 
        >
      {movieObject.title}
    </div>
  </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
```
#### styling movies component
 we will be placing 
* trending movies to center of the screen 
*  want to make sure that all the movies are placed with the help of flex and are wrapped 

```jsx
  <div>
    <div className="text-2xl font-bold text-center m-5">
      <h1>Trending Movies</h1>
    </div>
    <div className="flex justify-evenly flex-wrap gap-8 ">
      {movies.map((movieObj) => {
        return (
          <div
            className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
            style={{
              backgroundImage: `url(${movieObj.url})`,
            }}
          >
            <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
              {movieObject.title}
            </div>
          </div>
        );
      })}
    </div>
  </div>
```
##### Explaination of styling
 Let's break down the provided code:

1. **Trending movies **: 
   - `<div className="text-2xl font-bold text-center m-5">`:
   - `text-2xl`: Sets the text size to 2 times the original size.
   - `font-bold`: Makes the text bold.
   - `text-center`: Aligns the text to the center horizontally.
   - `m-5`: Applies margin on all sides of the `<div>` element.

2. **Movie Cards**:
   - `<div className="flex justify-evenly flex-wrap gap-8 ">`: This `<div>` element serves as a container for displaying movie cards. It utilizes Flexbox for layout and responsiveness.
   - `flex`: Sets the display property to flex, allowing flexible layout options for child elements.
   - `justify-evenly`: Distributes the child elements evenly along the main axis (horizontal) with equal spacing between them.
   - `flex-wrap`: Allows the child elements to wrap onto multiple lines if they exceed the width of the container.
   - `gap-8`: Specifies the gap between each child element to be 8 units.

4. **Movie Card**:
   - `<div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end">`: This `<div>` represents a single movie card.
   - `h-[40vh] w-[200px]`: Sets the height to 40% of the viewport height and width to 200 pixels, ensuring consistent sizing for each card.
   - `bg-center bg-cover`: Positions the background image at the center and covers the entire container.
   - `rounded-xl`: Applies rounded corners to the card, giving it a softer appearance.
   - `hover:scale-110 duration-300`: When hovered, the card scales to 110% of its original size with a smooth transition effect over 300 milliseconds.
   - `hover:cursor-pointer`: Changes the cursor to a pointer when hovered, indicating that the card is clickable.
   - `flex flex-col justify-between items-end`: Arranges the content inside the card in a column layout, aligning items to the end of the main axis (bottom in this case).

5. **Movie Title**:
   - `<div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">`: This `<div>` contains the title of the movie displayed on the card.
   - `text-white`: Sets the text color to white.
   - `w-full`: Sets the width of the `<div>` to 100% of its parent container.
   - `text-center`: Aligns the text to the center horizontally.
   - `text-xl`: Sets the font size to extra-large.
   - `p-2`: Applies padding of 2 units to all sides of the `<div>`.
   - `bg-gray-900/70`: Sets the background color to a semi-transparent dark gray (#444) with 70% opacity.
   - `rounded-lg`: Applies rounded corners to the `<div>`, matching the card's border radius.

6. **Inline Styles**:
   - `style={{ backgroundImage: `url(${movieObj.url})` }}`: Sets the background image of each movie card dynamically based on the `url` property of the current `movieObj`. This allows for individualized background images for each movie card.

**Now import Movies component to Home component**





---
title: Pagination and code refractoring
description: 
duration: 462
card_type: cue_card
---
## Pagination component
our pagination looks like this 
![image](https://hackmd.io/_uploads/r1p3jFppp.png)


`Instructor cue`: We will be using font-awesome to include icons in our application . Please addd this script link to index.html

```html
 <script src="https://kit.fontawesome.com/589957875e.js" crossorigin="anonymous"></script>
```

In our same MovieList component let's implement it . 
We will be needing two button -> back and forward and a text that reflects page number.Let's go inside our MovieList component and implement it 



```jsx=
function Movies() {
//     this state variable will be used to represent pagination
const [pageNo, setPageNo] = useState(1);
 
  //  console.log('this is the movies array' , movies)
// go next handler
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
// go back handler
  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    }
    setPageNo(pageNo - 1);
  };


return(
 
    <div>
        <div onClick={handlePrevious} ><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
      </div>   
)        
```

### styling pagination
let's style our pagination component using tailwind 

```jsx
return(
 
    <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2'>
        <div onClick={handlePrevious} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
      </div>   
)  
```

**Explaination**
As  rest of the classes we have already covered
* **bg-gray-400**: This class sets the background color of the element to a shade of gray (specifically, gray-400). The number 400 refers to the intensity level of the gray color.
* **h-[50px]**: we are giving 50px height to pagination component
* **w-full**: This class sets the width of the element to 100% of its parent container's width. here it will place pagination to have fulll width of screen always

---
### Refractoring Pagination and Movie Card

`Instructor question` : hasn't our component grown very big .??

Ans : Yes , It is always a good practice to idenify if you can break it in smaller and preferrably independent compoenents because it promotes reusability of code and improves code readbility 

Let's extract two components from our Movies Component
*  Pagination
*  MoviesCard
#### Pagination refractoring
* create a file `Pagination.jsx`
* intialize the component -> using refce
* import the component and pass required props to it
(as our pagination will require setter function to go forward,backword and show the page number)

Movies.jsx
```jsx=
 <Pagination
        nextPageFn={handleNext}
        previosuPageFn={handlePrevious}
        pageNumber={pageNo}
      />
```
* copy the code of  the pagination and add it to the Pagination  component with required props

pagination.jsx
```jsx
function Pagination({nextPageFn , previosuPageFn , pageNumber}) {
  return (
      <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center'>
        <div onClick={previosuPageFn} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNumber}</div>
        <div onClick={nextPageFn} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
      </div>
  )
}
```
### Movie Card refractoring

* create a file `MovieCard.jsx`
* intialize the component -> using refce
* import the component and pass required props to it
(as our movieCard will require movieObject)

Movies.jsx
```jsx=
 {movies.map((movieObj) => {
          return (
            <MovieCard
              
              movieObj={movieObj}
            />
      
          );
        })}
```

* copy the code of  the MovieCard and add it to the MovieCard component with required props

MovieCard.jsx
```jsx
import React from "react";

function MovieCard({movieObj}) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(${movieObj.url})`,
      }}
    >
      <div className="text-white w-full text-center text-xl p-2 rounded-lg bg-gray-900/70">
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
```

Now you can see how much lighter our original Movies Component looks 

---
title: TMDB API
description: Replacing dummy entries with data from TMDB API?
duration: 120
card_type: cue_card
---

## Replacing dummy entries with data from TMDB API

#### Que We can't use the static images  and to drive out our application so we need a server that can give use realtime data that all the data we require. 

#### Solution : 
In the above use case we need to talk to servers that just send data in a given format`. 

let's understand how it's done with the help of an anology
#### Anology
Imagine you're in charge of creating certificates for a course completion. You have a template for the certificate design that includes placeholders for the student's name, course title, and completion date. This template is like React components. React is like your design tool, allowing you to structure and design the certificate layout.

Now, to fill in the actual data and generate the final certificate, you need information about the student who completed the course. This is where APIs come in. APIs act as messengers, fetching the necessary data from a database or external source. In our analogy, the API is gets the information about the student from various sources and brings it to you.

So, to create the final certificate:

1. **React Components (Template)**: You start with React components, just like you start with a certificate template. These components provide the structure and layout for the certificate.
    
2. **API Calls (Data Gathering)**: Next, you make API calls to gather the specific data needed to fill in the placeholders on the certificate. This is akin to collecting information about the student's name, course details, and completion date from different sources.
    
3. **Data Integration (Data into Template)**: Once the API returns the necessary data, you integrate it into the React components. This process involves replacing the placeholders in the template with the actual student data, similar to how you fill in the student's name, course details, and completion date onto the certificate.
    
4. **Final UI (Final Certificate)**: Finally, with the data integrated into the React components, you have a fully populated certificate – your final UI. This certificate is ready to be presented to the student, showcasing their achievement.
    

In summary, React provides the framework for designing the certificate layout, while APIs fetch the relevant data to populate the certificate, resulting in a seamless process to generate the final UI, just like creating a personalized certificate for each course completion

---


### Structure of data receieved from TMDB API

We will be using this url to get list of movies 
`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`

it will return the data in the form of  an array then that will contain lot of properties that populates 

when you will fetch the data you will get a list of 20 movies like this .
![image](https://hackmd.io/_uploads/BksttvzyR.png)
* Here's `backdrop_path` property that is responsible for helping you get the poster image
* title will give you title of the movie
* adult property will tell you if the movie is only for adult or not 

In short it is up to you how you want to use this data


## Populating Banner and Movies   from TMDB
let's  understand the how we can replace the dummy data in Banner.jsx and Movies.jsx

* Banner.jsx :  we need to replace the dummy image url and replace that with some realtime url of a movies

 **Adding dynamic Poster to Banner**
 
let's see how it is done
* install axios
```
npm i axios
```
* import axios in Banner component
* We will next use an useEffect for fetching the data
* use the fetched data populate our banner component



`Banner.jsx`
```jsx
\\ create a state variable to hold the image and title to hold title
const [bannerImage , setBannerImage] = useState("https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68");
const [title, setTitle]=useState("Placeholder title")

 useEffect(() => {
    console.log("use effect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      )
      .then(function (res) {
        //           we will get the list of all the films
        console.log("Films", res.data.results);
        //           for the sake of our example we will be using the first object that represents first movie
        const firstMovie = res.data.results[0];
        const firstMovieTitle = firstMovie.title;
        const firstMoviePoster = firstMovie["backdrop_path"];
        setTitle(firstMovieTitle);

        setBannerImage(
          `https://image.tmdb.org/t/p/original/${firstMoviePoster}`
        );
      });
  }, []);

```
Now we have fetched the required banner image. Let's update our Banner component to support this
```jsx=
return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {title}
      </div>
    </div>
  );
}
```
update imports
```jsx=
import React, { useState, useEffect } from "react";
```


`Movies.jsx` :  we need to replace the dummy image url and replace that with some realtime url of a movies
 
```
   const [movies, setMovies] = useState([
        {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 1"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 2"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 3"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 4"},
         {url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68", title:"Movie 5"},
         
     ]);
``` 

now let's talk how we can leverage TMDB API to get that data

We will be using axios to get the data from the same  url  that is given by TMDB->

`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`

let's see how it is done 


* import axios in movies component
* We will next use an useEffect for fetching the data
* set the movies from the incoming data 

`movies.jsx`
```jsx
 const [movies, setMovies] = useState([]);

 useEffect(() => {
    console.log("use effect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, []);
```

`instructor cue`: show the console to show list of movies and show that with the help backdrop_path you get the movie posters

`moviecard.jsx`
```jsx!
 <div
            className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,
            }}
        >
            <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.title}
            </div>
        </div>
```
### Modify the pagination to work with data coming 
Let's keep the pagination in sync with movies for that 
we already have pageNumber state variable . 
Now we can use this to update the list of movies as we change the page number.

**Solution**: Update the useEffect to depend upon pageNo state variable-> add it to dependency array and the url

`movies.jsx`
```
useEffect(() => {
        console.log("use effect fetched data");
        axios
            .get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                console.log(res.data.results);
                setMovies(res.data.results);
            });
    }, [pageNo]);
```



