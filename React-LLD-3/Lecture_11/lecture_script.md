---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 369
card_type: cue_card
---
## Agenda
* React Perf
    * Code splitting ->
    * dynamic imports
    * Lazy Loading ->
        * React.Lazy and
        * react suspense
        
* Memoization
    * useMemo
    * useCallBack
    * React.Memo
* Important concepts-> for optimization
    *  diffing /reconciler algorithm
    *  VDOM and real DOM
    * fiber architecture


---
title: Code Splitting and Lazy Loading
description: Code peformance wrt to build file 
duration: 3000
card_type: cue_card
---

**Note to instructor - use CRA to initilaize React app as vite handles this concept differently**


## React Code Splitting and Lazy Loading:

### Scenario Without Code Splitting and Lazy Loading

Imagine a scenario where you have built a comprehensive React application with multiple components, pages, and features. In a standard setup, all of your JavaScript code, including all the components, gets bundled into one large file during the build process. When a user accesses your application, this entire bundle is loaded and executed in the browser.

Suppose we have this app with three compnents `HomePage`,`AboutPage`,`ContactPage`


`HomePage`
```js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to the Home Page</h1>
            <p>This is the homepage of our website.</p>
        </div>
    );
}

export default HomePage;

```

`About.js`
```js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="aboutpage">
            <h1>About Us</h1>
            <p>Learn more about our company and team.</p>
        </div>
    );
}

export default AboutPage;


```
`ContactPage.js`
```js
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contactpage">
            <h1>Contact Us</h1>
            <p>Feel free to reach out to us via email or phone.</p>
        </div>
    );
}

export default ContactPage;


```

```javascript
// App.js
import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
```

In this example, all the components (HomePage, AboutPage, and ContactPage) are loaded at once, regardless of whether the user needs them immediately or not.

<img src='https://i.ibb.co/vkp6YWj/Screenshot-2024-05-25-at-1-30-10-PM.png'>

Here you can see a complete bundle has been loaded which has loaded all the components regardless of if need them or not




### Problems That Can Arise in this scenario

1. **Long Initial Load Time**: The initial load time can be significantly high as the browser needs to download a large JavaScript bundle before rendering any content.
2. **Poor Performance**: Large bundle sizes can lead to performance issues, especially on slower networks or less powerful devices.
3. **Unnecessary Resource Usage**: Users might download code for components and features they never interact with, leading to wasted resources.






### Understanding Dynamic Import in Detail 

Dynamic import is a powerful feature in JavaScript that allows you to load modules asynchronously. This means that instead of loading all your JavaScript code upfront, you can load parts of it on demand. This can be particularly useful in large applications where you want to optimize performance and reduce initial load times.

In React, dynamic import can be used to load components only when they are needed. This helps in splitting your code and loading it in smaller chunks, which is often referred to as "code splitting".

Let's take the same example and implement dynamic import using functional components and hooks.

#### Before Dynamic Import

```javascript
// App.js
import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
```

#### After Dynamic Import

With dynamic import, you can load components only when they are required. Here’s how you can modify the example to use dynamic import with functional components and hooks:

```javascript
// App.js
import React, { useState } from 'react';

function App() {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  const loadHomePage = () => {
    import('./components/HomePage').then((module) => {
      setHomePage(() => module.default);
    });
  };

  const loadAboutPage = () => {
    import('./components/AboutPage').then((module) => {
      setAboutPage(() => module.default);
    });
  };

  const loadContactPage = () => {
    import('./components/ContactPage').then((module) => {
      setContactPage(() => module.default);
    });
  };

  return (
    <div>
      <button onClick={loadHomePage}>Load Home Page</button>
      <button onClick={loadAboutPage}>Load About Page</button>
      <button onClick={loadContactPage}>Load Contact Page</button>

      {HomePage && <HomePage />}
      {AboutPage && <AboutPage />}
      {ContactPage && <ContactPage />}
    </div>
  );
}

export default App;
```

In this implementation:
- We maintain state using the `useState` hook to keep track of whether each component has been loaded.
- We use the `import()` function to dynamically load the components when a button is clicked.
- The `import()` function returns a promise that resolves to the module object, from which we can access the default export (the component itself).
- Once the component is loaded, we update the state to render the component.


Now you will see whenever you click on a button only the component associated with that button will get loaded and chunks will be created for each respective component separately

<img src='https://i.ibb.co/QbD8rxH/Screenshot-2024-05-25-at-1-30-51-PM.png'>



<img src='https://i.ibb.co/mDm83NR/Screenshot-2024-05-25-at-1-31-10-PM.png'>

### Key Points About Dynamic Import

1. **Asynchronous Loading**: Dynamic import allows you to load modules asynchronously, meaning the rest of your application can continue to run while the module is being fetched.
2. **Code Splitting**: By using dynamic import, you can split your code into smaller chunks that are loaded on demand. This helps in reducing the initial load time of your application.
3. **Improved Performance**: Loading only the necessary code when it is needed can significantly improve the performance of your application, especially for large applications with many components.
4. **Better Resource Utilization**: Users download only the code they need, which saves bandwidth and results in a more efficient use of resources.

Dynamic import is a powerful tool for optimizing React applications.









## But, Yes! of course there is a But, There are some cons as well as why only dynamic imports may not be the best techinique for code splitting

While dynamic import as shown in the example above can be a powerful tool, there are a few reasons why it might not be the best approach for every situation.

1. **Manual State Management**: In the given example, we manually manage the state for each dynamically imported component. This can become cumbersome and error-prone as the number of components grows, leading to more boilerplate code and potential bugs.

2. **Lack of Built-in Fallback UI**: The example does not provide a built-in way to show a fallback UI while the component is loading. While we can add this manually, it requires additional code and effort. `React.Suspense` offers a straightforward way to handle this. We will see this next

3. **Complexity**: The code for manually importing and managing state can become complex, especially in larger applications. This complexity can make the code harder to maintain and understand.

4. **Best Practices**: Using `React.lazy` and `Suspense` is a React-recommended approach for code splitting and lazy loading. It leverages React’s built-in mechanisms, ensuring better integration and reliability.


### Implementing Code Splitting with lazy and suspense 

Let’s revisit the initial scenario and implement code splitting and lazy loading using `React.lazy` and `Suspense`.

#### Before Code Splitting and Lazy Loading

```javascript
// App.js
import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
```

#### After Code Splitting and Lazy Loading

```javascript
// App.js
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </Suspense>
    </div>
  );
}

export default App;
```

Let's break down the provided code step by step, focusing on the `lazy` and `Suspense` functions in React.

### Step 1: Importing Dependencies

```javascript
import React, { Suspense, lazy } from 'react';
```

- `React`: The core React library.
- `Suspense`: A component from React that allows you to show a fallback (like a loading indicator) while waiting for some code to load.
- `lazy`: A function from React that lets you load components dynamically, which is useful for code-splitting.

### Step 2: Dynamically Importing Components

```javascript
const HomePage = lazy(() => import('./components/HomePage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
```

- `HomePage`, `AboutPage`, and `ContactPage`: These are the components that are being imported lazily.
- `lazy(() => import('./components/HomePage'))`: This syntax is used to dynamically import the `HomePage` component. The `import` statement inside `lazy` is a dynamic import, which means that this component will only be loaded when it is needed, instead of loading it upfront with the initial bundle.

### Step 3: Creating the `App` Component

```javascript
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </Suspense>
    </div>
  );
}
```

- `Suspense`: This component wraps the lazily loaded components and specifies a fallback UI to display while the component is being loaded.
- `fallback={<div>Loading...</div>}`: This is the fallback content that will be displayed while the component is being loaded. In this case, it is a simple `<div>` with the text "Loading...".

### Step 4: Exporting the `App` Component

```javascript
export default App;
```

- `export default App;`: This statement exports the `App` component as the default export of the module, making it available for import in other parts of the application.

### Detailed Explanation of `lazy` and `Suspense`

1. **`lazy` Function**:
   - `lazy` is used to dynamically import a component. This helps in code-splitting, which means breaking down the code into smaller chunks and loading them on demand.
   - The `lazy` function takes a function that returns a dynamic import statement. For example, `lazy(() => import('./components/HomePage'))` will load the `HomePage` component only when it is needed.

2. **`Suspense` Component**:
   - `Suspense` is a component that allows you to specify a loading fallback while waiting for the lazily loaded component to be fetched.
   - You wrap the lazily loaded component with `Suspense` and provide a `fallback` prop, which is the content you want to show while the component is loading. In the example, `<div>Loading...</div>` is shown while each of the components (`HomePage`, `AboutPage`, `ContactPage`) is being loaded.

By using `lazy` and `Suspense`, you can improve the performance of your application by only loading the components when they are needed, which can result in faster initial load times and a better user experience.

### Benefits of Implementing Lazy Loading

1. **Optimized Load Time**: By splitting the code into smaller chunks and loading them on-demand, the initial load time is significantly reduced.
2. **Improved Performance**: The browser handles smaller JavaScript files, which can lead to better performance, especially on slower networks or devices.
3. **Efficient Resource Utilization**: Users download only the code they need, which saves bandwidth and improves the overall user experience.

### Conclusion

Implementing code splitting and lazy loading in a React application can lead to significant performance improvements. By dynamically loading components, you can reduce the initial load time, improve the application’s responsiveness, and ensure efficient use of resources. The combination of `React.lazy` and `Suspense` makes it easy to integrate these techniques into your application, providing a better experience for your users.



