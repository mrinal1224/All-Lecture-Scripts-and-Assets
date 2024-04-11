# title : internationalization of context
##  Problem Statement:

You are tasked with implementing a basic internalization feature in a React application using Context API. The application currently supports English language only, but it needs to be extended to support multiple languages. You are required to create the necessary context and components to enable language switching functionality and update the displayed content accordingly.

Your task is to:

* Write the LanguageContext.js file using React Context API that will store the current language preference.
* Implement a LanguageProvider component in LanguageContext.js that wraps the entire application and provides the language context to its children. This component should have state to manage the current language and a function to update it.
* Develop language toggle buttons for at least two languages, e.g., English and Spanish, in the provided LanguageToggle.js file. These buttons should be separate components and should be able to change the language when clicked. The LanguageProvider component in LanguageContext.js should handle the language switching logic.
* Modify the App.js file to use the LanguageProvider component from LanguageContext.js and integrate the LanguageToggle component to enable language switching functionality.

Your solution should demonstrate proficiency in using React Context API for managing application-wide state, updating components based on context changes, and handling language switching functionality for internalization.

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


Your task is to complete the implementation of LanguageContext.js and integrate it with App.js and LanguageToggle.js to achieve the desired internalization feature.

## Solution 

```jsx
// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

```
`App.js`
```jsx
import React from 'react';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider from LanguageContext.js
import LanguageToggle from './LanguageToggle';

const App = () => {
  return (
    <LanguageProvider> {/* Wrap the entire application with LanguageProvider */}
      <div>
        <h1>Internalization Example</h1>
        <LanguageToggle />
        {/* Other components where language should be applied */}
      </div>
    </LanguageProvider>
  );
};

export default App;

```

`LanguageToggle.js`
```
import React from 'react';
import { useLanguage } from './LanguageContext'; // Import useLanguage from LanguageContext.js

const LanguageToggle = () => {
  const { changeLanguage } = useLanguage(); // Use changeLanguage from LanguageContext.js

  const toggleLanguage = (newLanguage) => {
    changeLanguage(newLanguage); // Call changeLanguage to update language
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