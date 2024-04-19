 <script type = "text/babel">

        function Counter(props){
        const {index,value} = props;
        const [count,setCount] = React.useState(value);
        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count + 1);
        }
        console.log("rendered");
        return <div>
        <h2>Counter Number:{index} </h2>
        <button onClick = {increment}> + </button>
        <p>{count}</p>
        <button onClick = {decrement}> - </button>
        </div>
        }
        
        function ParrentCounter(){
            return <div>
                <Counter index = {1} value = {2}/>
                <Counter index = {2} value = {3}/>       
                <Counter index = {3} value = {4}/>
        </div>
        }
        ReactDOM.render(<ParrentCounter></ParrentCounter>, document.getElementById("root"));