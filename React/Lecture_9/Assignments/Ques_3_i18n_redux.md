
## Problem Statement:

You are tasked with implementing a basic internalization feature in a React application using Redux Toolkit for state management. The application currently supports English language only, but it needs to be extended to support multiple languages. You are required to create the necessary slices, actions, reducers, and components to enable language switching functionality and update the displayed content accordingly using Redux Toolkit.

Your task is to:

* Write Redux Toolkit slice to manage the language state.
* Implement language toggle buttons for at least two languages, e.g., English and Spanish, in a separate component. These buttons should dispatch actions provided by Redux Toolkit to update the language state.
* Modify the necessary components (e.g., header, footer, etc.) to use Redux Toolkit's useSelector hook to connect to the language slice and display content based on the selected language.

### code stub
App.jsx 
```jsx
import React from 'react';
import LanguageToggle from './LanguageToggle';

const App = () => {
  return (
    <div>
      <h1>Internalization Example</h1>
      <LanguageToggle />
      {/* Other components where language should be applied */}
    </div>
  );
};

export default App;

```

`LanguageToggle.jsx`
```jsx
import React from 'react';

const LanguageToggle = () => {
  const toggleLanguage = (newLanguage) => {
    // Implement language switching logic here
    console.log(`Switching to ${newLanguage}`);
  };

  return (
    <div>
      <button onClick={() => toggleLanguage('en')}>English</button>
      <button onClick={() => toggleLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageToggle;

```




`features/languageSlice.js`

```jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en', // Default language is English
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;


```


`components/LanguageToggle.js`
```jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../features/languageSlice';

const LanguageToggle = () => {
  const dispatch = useDispatch();

  const toggleLanguage = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div>
      <button onClick={() => toggleLanguage('en')}>English</button>
      <button onClick={() => toggleLanguage('es')}>Spanish</button>
    </div>
  );
};

export default LanguageToggle;
```

`App.jsx`
```jsx
```
