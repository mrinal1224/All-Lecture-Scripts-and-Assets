```jsx
    <div id = "root"></div>
    <script type = "text/babel">
    
        function InputCounter(props){
        const {index,value} = props;
        const count,setCount] = React.useState(value);

        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count + 1);
        }
        console.log("rendered");
        
        return <div>
        <div class = "set"> 
            <input type = "text"/>
            <button>Set</button>
        </div>
        <h2>Counter Number:{index} </h2>
        <button onClick = {increment}> + </button>
        <p>{count}</p>
        <button onClick = {decrement}> - </button>
        </div>
        }
        ReactDOM.render(<InputCounter></InputCounter>, document.getElementById("root"));
    
    ```