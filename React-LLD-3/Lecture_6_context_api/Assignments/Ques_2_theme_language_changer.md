### Problem Statement

**Title:** Optimizing User Settings Management with React Context API

**Description:**
You are tasked with refactoring an existing React application that manages user settings across multiple components. Currently, the application uses prop drilling to pass user preferences (like theme and language) down through several levels of components, making the code difficult to manage and scale.

Your goal is to optimize the codebase by implementing the React Context API to provide a more efficient and maintainable way to access user settings across the application. You will need to create a `SettingsContext` to handle the theme and language preferences, eliminating the need for prop drilling.

**Initial Code Setup (with Prop Drilling):**
```jsx
// App.js
import React from 'react';
import UserSettings from './UserSettings';
import Profile from './Profile';

function App() {
  const [theme, setTheme] = React.useState('light');
  const [language, setLanguage] = React.useState('English');

  return (
    <div>
      <UserSettings theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
      <Profile theme={theme} language={language} />
    </div>
  );
}

export default App;

// UserSettings.js
import React from 'react';

function UserSettings({ theme, setTheme, language, setLanguage }) {
  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <button onClick={() => setLanguage(language === 'English' ? 'Spanish' : 'English')}>
        Toggle Language
      </button>
    </div>
  );
}

export default UserSettings;

// Profile.js
import React from 'react';

function Profile({ theme, language }) {
  return (
    <div style={{ color: theme === 'light' ? 'black' : 'white' }}>
      Profile Page in {language}
    </div>
  );
}

export default Profile;
```

**Requirements:**
1. Refactor the above code to use React Context API.
2. Ensure that the `Profile` and `UserSettings` components consume context instead of props for theme and language settings.
3. The application's functionality (theme and language toggling) must remain unchanged.

**Hints:**
- Initialize a `SettingsContext` using React's `createContext`.
- Provide the `SettingsContext` at the top level in `App.js`.
- Use the `useContext` hook in `UserSettings.js` and `Profile.js` to consume the context.

### Solution Approach

1. **Create Context:**
   - Define `SettingsContext` and an associated provider in a new file or at the top of `App.js`.
   - The provider should wrap all components that require access to the settings.

2. **Consuming Context:**
   - Modify `UserSettings` and `Profile` to use the `useContext` hook to access theme and language settings from `SettingsContext`.

3. **Testing:**
   - Write test cases to ensure that toggling theme and language updates the UI accordingly. Utilize libraries like Jest and React Testing Library.

### Complete Solution

**SettingsContext.js:**
```jsx
import React from 'react';

export const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const [language, setLanguage] = React.useState('English');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'English' ? 'Spanish' : 'English');

  return (
    <SettingsContext.Provider value={{ theme, setTheme: toggleTheme, language, setLanguage: toggleLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};
```

**App.js:**
```jsx
import React from 'react';
import { SettingsProvider } from './SettingsContext';
import UserSettings from './UserSettings';
import Profile from './Profile';

function App() {
  return (
    <SettingsProvider>
      <UserSettings />
      <Profile />
    </SettingsProvider>
  );
}

export default App;
```

**UserSettings.js and Profile.js are updated similarly by consuming context using `useContext`.**

### Test Cases

1. **Theme Toggle Test:**
   - Verify that clicking the toggle button in `UserSettings` switches the theme between light and dark.

2. **Language Toggle Test:**
   - Verify that clicking the toggle button in `UserSettings` toggles the language between English and Spanish.

By following this approach, you will have a

 more scalable and maintainable codebase using React's powerful Context API, and testing ensures that the functionality remains intact.