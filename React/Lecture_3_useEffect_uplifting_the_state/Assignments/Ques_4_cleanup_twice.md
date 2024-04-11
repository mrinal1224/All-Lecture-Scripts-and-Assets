# Que Fix an interval that fires twice?

 Problem Statment : This Counter component displays a counter that should increment every second. On mount, it calls setInterval. This causes onTick to run every second. The onTick function increments the counter.

However, instead of incrementing once per second, it increments twice. Why is that? Find the cause of the bug and fix it.


```jsx
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }
    setInterval(onTick, 1000);
  }, []);

  return <h1>{count}</h1>;
}
```

## solution 
When Strict Mode is on (like in the sandboxes on this site), React remounts each component once in development. This causes the interval to be set up twice, and this is why each second the counter increments twice.

However, React’s behavior is not the cause of the bug: the bug already exists in the code. React’s behavior makes the bug more noticeable. The real cause is that this Effect starts a process but doesn’t provide a way to clean it up.

To fix this code, save the interval ID returned by setInterval, and implement a cleanup function with clearInterval:

```jsx
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}
```

