### React.Memo
 `component level caching` -> `React.memo` you can preventre-render of a componnet if the props are not changed.

`Memo.app`
```jsx
import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <MemoGreeting name={name} />
        </>
    );
}

const MemoGreeting = React.memo(Greeting);
function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}!</h3>;
}
```
