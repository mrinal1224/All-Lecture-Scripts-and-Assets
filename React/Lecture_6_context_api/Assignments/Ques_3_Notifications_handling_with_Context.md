Sure, let's design another coding problem based on React's Context API with a different objective. This time, we'll focus on optimizing a multi-level notification system.

### Problem Statement

**Title:** Optimizing Notification Handling with React Context API

**Description:**
In an existing React application, notifications are passed down through multiple components via prop drilling. These notifications include system alerts, error messages, and informational pop-ups that appear in various parts of the application. Your task is to refactor this codebase by implementing the React Context API to manage notifications more efficiently and centrally.

**Initial Code Setup (with Prop Drilling):**
```jsx
// App.js
import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  const [notifications, setNotifications] = React.useState([]);

  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  return (
    <div>
      <Dashboard notifications={notifications} addNotification={addNotification} />
      <Footer notifications={notifications} />
    </div>
  );
}

export default App;

// Dashboard.js
import React from 'react';

function Dashboard({ notifications, addNotification }) {
  return (
    <div>
      <button onClick={() => addNotification("New alert from Dashboard!")}>
        Add Dashboard Alert
      </button>
      {notifications.map((note, idx) => <p key={idx}>{note}</p>)}
    </div>
  );
}

export default Dashboard;

// Footer.js
import React from 'react';

function Footer({ notifications }) {
  return (
    <div>
      {notifications.map((note, idx) => <div key={idx}>{note}</div>)}
    </div>
  );
}

export default Footer;
```

**Requirements:**
1. Refactor the code to use React Context API to manage notifications.
2. Ensure that both the `Dashboard` and `Footer` components can consume notifications context and that the `Dashboard` can still add notifications.

**Hints:**
- Create a `NotificationContext` and a corresponding provider that includes both the notifications and the method to add new notifications.
- Provide the `NotificationContext` at the top level in `App.js`.
- Use the `useContext` hook in `Dashboard.js` and `Footer.js` to consume the context.

### Solution Approach

1. **Create Context:**
   - Define `NotificationContext` with an associated provider that manages the notification state and provides functions to modify it.

2. **Consuming Context:**
   - Update `Dashboard` to add notifications through the context.
   - Update `Footer` to display notifications using the context.

3. **Testing:**
   - Write test cases to verify that notifications are added correctly and displayed in both `Dashboard` and `Footer`.

### Complete Solution

**NotificationContext.js:**
```jsx
import React from 'react';

export const NotificationContext = React.createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = React.useState([]);

  const addNotification = notification => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
```

**App.js:**
```jsx
import React from 'react';
import { NotificationProvider } from './NotificationContext';
import Dashboard from './Dashboard';
import Footer from './Footer';

function App() {
  return (
    <NotificationProvider>
      <Dashboard />
      <Footer />
    </NotificationProvider>
  );
}

export default App;
```

**Dashboard.js and Footer.js are updated by consuming the `NotificationContext` using `useContext`.**

### Test Cases

1. **Notification Addition Test:**
   - Simulate a button click in `Dashboard` to add a notification and verify that the notification appears in both `Dashboard` and `Footer`.

2. **Initial Notifications Display Test:**
   - Verify that no notifications are displayed initially until a notification is added.

By following this approach, the application's notification system becomes more maintainable and scalable, with centralized management of notifications using React's Context API.