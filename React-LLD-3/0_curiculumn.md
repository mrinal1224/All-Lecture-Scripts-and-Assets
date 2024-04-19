# Titles
## 1. Introduction to React
* JS required for React[pre-read]
* challenges of  frontend
* What is React and its advantages
* Setting up a React Development Environment using cdn link
* Components
* What is JSX
* Props
* Component composition
* Process of rendering(high level)
    * JSX Compilation
    * component creation
    * virtual dom construction
    * DOM update
    * rendering
    * event handlers -> synthetic Events
 * Rendering lists ->
        * map
        * for loop
* Key prop
* Good Practice [postread]

## 2. React (States , VDOM and rendering)
* State and dynamic UI
    * one counter example
        * thought process to create a component
            * static UI
            * adding Event Listeners
            * adding state variable
            * update the state  in listeners
    * usecase of useState
        * normal vs useState
    * multiple counter
* VDOM and and re-render
    *  How state influences re-render
* Forms in React: controlled components and state as single source of truth
    * multiple counters with input
    * Styling in react [postread]
        * Inline
        * internal
        * module.css
        * styled component

## 3: Build tools ,lifting the state up and useEffect
* Setup using vite
* adding autocomplete extension
* Thought process to create react components->(TODO)
    *  Sample code example
* Lifting the state up
* React Devtools
* Lifecycle of a component[pre-read]+ class
* UsEffect and it's 3 versions
* UseEFfect and it's cleanup 

## 4: Imdb-1: setup,client side routing and React router
* Intuition and requirement of client side routing
* Understanding React Router
* Setting up routes and links in a React Application
* Redirects , private route, 404 Page not found
* adding routing in the project
* nested routes [postreads]
* programmatic redirect [postereads]

## 5: Imdb-2 : movies page and pagination 
* Project Demo and WireFrame
* Configure Tailwind with React for Designing the Project
* Creating Banner,Movies
* showing the result
* Pagination

## 6: Imdb-3 : TMDB API , watch list and localstorage   
* Exploring the TMDB API and generating an API key [pre-read]
* Creating and Designing the Watchlist
* Add movies to Watchlist
* Delete Movies from Watchlist
* Local storage to keep persistent data
* Adding localstorage so things are [later on we will be using redux for it]

## 7: Imdb-4 : searching ,sorting, filteration and Context API 
* intution of each
    * filtering
    * searching in react
* Prop Drilling
* Context API Introduction
* Usecontext
* `Project`: theme changer
* Integrating context API to our Project
* Disadvantages of context API

## 8: Redux-1 and redux toolkit
* useReducer Hook [postread]
    * counter simple
    * form example
*  useReducer + usecontext -> for central state management[postread]
* Why redux?? Redux and it’s advantages
* Global store and Imp concepts of redux
    * Store ,provider, action , dispatch, reducer
    * RootReducer
    * Hooks in redux: useSelector and useDispatch
* Integrating redux with react
## 9: Redux-2 
* Principles of redux
* Redux devtools
* Async tasks and redux-thunk
* Context API vs Redux [when to use which]
* How redux toolkit helps to abstarct away extra details[post-read]
    * slices
    * immutability -> immerjs
* Adding redux to the project[part-1]
* Adding Redux to the project[part-2]


## 10 Testing and deployment
* TDD and types of test
* Usecase of Jest
* usecase of  RTL
* implementings unit tests
* Deployment -> setup
* Deploying on netlify

## 11 React Perf and rendering
* React Perf
    * Code splitting ->
    * Lazy Loading ->
        * React.Lazy and
        * react suspense
        *  dynamic imports
* Memoization
    * useMemo
    * useCallBack
    * React.Memo
 * Important concepts-> for optimization[postread]
        *  diffing /reconciler algorithm
        *  VDOM and real DOM
        * fiber architecture
        <!-- post read and for inter/adv -->
        * Custom react render
            `Note`: should be added to beginner batch[advancedsection]
        * Virtualization -> windowing logic
        * way to render an app
            * CSR
            * SSR
            * CSR+SSR
            * when to use which
            * what are they
        * Ways to render an application[indepth] [postread]
            * when to use which
            * what are they
            * static rendering
                *  static site generation
                * incremental static generation
             * client side rendering
             * server side rendering
             * CSR + SSR
                * progressive hydration
                * selective hydration
        * Virtual DOM vs shadow DOM vs DOM[postread]
        * SSR with nextjs[postread]

## 12 :React machine coding Problems
* Stop watch
    * useRef
    * creating custom hook
* Infinte scroll
    * useCallback
    * fetching data, useEffect
    * Intersection Observer

## 13 : React Interview Prep
* Class based components
* Class based components and life cycle
* Class based vs functional
* Pure components and React.memo
*  useState and previous state
* Higher order component pattern

## Extra content
* Profiler and measuring perf
* how webpack works and how to setup a project using it
* using typescript with react
* Perf -> useTransition, useDefferedValue[postread]
* Render props ,Static Type checking
* Portals in react
* Error boundaries
* forwarding refs pattern
