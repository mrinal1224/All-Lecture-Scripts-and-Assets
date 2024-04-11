## 13 : React Interview Prep-2
## agenda

* Class based components
* Class based components and life cycle
* Class based vs functional
* Pure components and React.memo

## class based componet
* initial state is defined inside constructor
*  you this is only available  inside the life cycle methods
* this.setState to update the the state 

## Stages of a react  component
* mounting : creation
* updation 
* unmount : deletion 

### Life cycle methods -> class based component
* `constructor` :use to intialize your state  

* `render` : render the output
* `componentdidMount` :  runs only once after first render
    *   Class Component :`componentDidMount()`
    *   functional `useEffect(cb, [])`

* `componentdidupdate`: run after the update
    * functional componet: `useEffect(cb, [dep1,dep2])`
    * class based component`componentDidMount`+ `componentDidUpdate`

* `componenWillUnmount`: run after deletion 
    * Class Component : componenetWillUnmount
    * functional component : cleanup function of useEffect


### How functional are difff from classbased components
* Lifecycle methods -> are only accessible in classbased components

* class based compoent had a lot of overeahed of this and more boiler plate code that lead to heavier bundle size 

`FunctionalCounter.jsx`
```jsx
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount((prevCount) => { return prevCount + 1 })
    }
    const decCount = () => {
        setCount((prevCount) => { return prevCount - 1 })
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={incCount} >+</button>
                <button onClick={decCount}>-</button>
            </div>

        </>
    )

}
/***
* 1. is your component correctly rendered -> default ()
* 
* 2. when you interact with it -> it works correctly or not
*      click + -> 0 -> 1
*      click - -> 0-> -1
* **/
export default Counter
```


`Class Counter.jsx`
``` jsx
import React, { PureComponent } from 'react'
// life cycle method-> lcm
export default class ClassCounter extends PureComponent {
    // 1. first lcm  -> intiializes your state 
    constructor(props) {
        console.log("constructor");
        super(props)
        this.state = {
            count: 0
        }
        // this.incCount=this.incCount.bind(this);
    }
    incCount =  ()=> {
        // set state 
        this.setState({ count: this.state.count + 1 })
    }
     decCount =  ()=> {
        this.setState({ count: this.state.count - 1 })
    }
    // 2. second lcm -> it used to render the jsx
    componentDidMount(){
        console.log("run once after first render");
    }
    componentDidUpdate(){
        console.log("I will run after every update")
    }
    render() {
        console.log("render");
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.incCount} >+</button>
                    <button onClick={this.decCount}>-</button>
                </div>

            </>
        )

    }
}


/***
 * class based componnet 
 *  -> only your life cycle methods had access to this -> you 
 * **/ 
```
*  useState and previous state[postread]
* Higher order component pattern[post read]

## HOC
`withDataFetching.jsx` 
```jsx
import React, { useState, useEffect } from 'react'

function withDataFetching(WrappedComponent, dataSource) {
    return function DataFetchingHOC(props) {

        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
        useEffect(() => {
            setIsLoading(true);
            try {
                fetch(dataSource)
                    .then(res => res.json())
                    .then((data) => {
                        console.log("data", data);
                        setData(data);
                    })
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, []);

        return (
            <WrappedComponent
                data={data}
                error={error}
                loading={isLoading}
                {...props}
            >
            </WrappedComponent>
        )
    }

}

export default withDataFetching
```

`DataComponent.jsx`
```jsx
import React from 'react'

function DataComponent({loading,error,data}) {
    if (loading) {
        return (
            <h2>Loading</h2>

        )
    }
    if (error) {
        <>
            <h2>Loading</h2>
        </>
    }

    return (

        <>
            <h2> Data from API</h2>
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li style={{ textAlign: 'left', paddingLeft: '10px' }} key={`item-${index + 1}`}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default DataComponent;
```
`DataListItem.jsx`
```jsx
import { memo } from 'react';
import withDataFetching from './hoc/withDataFetching';
import DataComponent from './DataComponent';
const DataFetchingHOC = withDataFetching(
    DataComponent,
    "https://jsonplaceholder.typicode.com/todos"
);

const DataListItems = () => {
// 4 inputs
    return (
        <>
            <DataFetchingHOC />
        </>
    )
}

export default memo(DataListItems);
```


## Functional and class based components

`functionalCounter.jsx`
```jsx
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const incCount = () => {
        setCount((prevCount) => { return prevCount + 1 })
    }
    const decCount = () => {
        setCount((prevCount) => { return prevCount - 1 })
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={incCount} >+</button>
                <button onClick={decCount}>-</button>
            </div>

        </>
    )

}
/***
* 1. is your component correctly rendered -> default ()
* 
* 2. when you interact with it -> it works correctly or not
*      click + -> 0 -> 1
*      click - -> 0-> -1
* **/



export default Counter
```

`classCounter.jsx`
```jsx
 import React, { PureComponent } from 'react'
// life cycle method-> lcm
export default class ClassCounter extends PureComponent {
    // 1. first lcm  -> intiializes your state 
    constructor(props) {
        console.log("constructor");
        super(props)
        this.state = {
            count: 0
        }
        // this.incCount=this.incCount.bind(this);
    }
    incCount =  ()=> {
        // set state 
        this.setState({ count: this.state.count + 1 })
    }
     decCount =  ()=> {
        this.setState({ count: this.state.count - 1 })
    }
    // 2. second lcm -> it used to render the jsx
    componentDidMount(){
        console.log("run once after first render");
    }
    componentDidUpdate(){
        console.log("I will run after every update")
    }
    render() {
        console.log("render");
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.incCount} >+</button>
                    <button onClick={this.decCount}>-</button>
                </div>

            </>
        )

    }
}


/***
 * class based componnet 
 *  -> only your life cycle methods had access to this -> you 
 * **/ 
```


## setting with prev state 
state update with previous state
```jsx
import { useState } from "react";
import React from 'react'
function State_exp() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setInterval(() => {
            // console.log(count);
            // setCount(count + 1);
            setCount((prevCount) => { return prevCount + 1 });
        }, 1000)
    }
    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}

export default State_exp;
```