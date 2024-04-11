 ## usecallback
 * `cache a reference  to a function`-> `usecallback` to cache  a function that can be used to prevent ot to be recreated on every re-render.

```jsx
import { useState, memo, useCallback } from "react";
const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const MemoizedHandleClick = 
        useCallback(() => {
            setCount(count + 1);
        },[count]);
    return (
        <div>
            <input type="text" value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <p>Count: {count}</p>
            <MemoChildrenComponent
                parentClick={MemoizedHandleClick}
                count={count}
            ></MemoChildrenComponent>
        </div>
    );
};

const MemoChildrenComponent = memo(ChildrenComponent);

function ChildrenComponent({ parentClick, count }) {
    console.log('ChildComponent is rerendered');
    return (
        <>
            <button onClick={parentClick}>child says Increment count from
                {count}</button>
        </>

    )
}

export default ParentComponent;
```