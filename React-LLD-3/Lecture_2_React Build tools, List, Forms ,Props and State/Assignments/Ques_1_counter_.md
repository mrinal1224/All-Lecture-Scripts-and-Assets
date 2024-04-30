<script type = "text/babel">
        function Counter(){
        //useState ->initial value
        const [count,setCount] = React.useState(0);
        //const count=arr[0];
        //call this fn given by useState->
        //const updateCount=arr[1];
        //const count=10;
        
        const increment = () => {
            //tell react -> update count by 1
            console.log("Incremented");
            //setCount(1000);
            setCount(count + 1);
        }
        const decrement = () => {
            //tell react -> update count by -1
            console.log("Decremented");
            setCount(count - 1);
        }
        console.log("rendered");
        return <div>
        <button onClick = {increment}> + </button>
        <p>{count}</p>
        <button onClick = {decrement}> - </button>
        </div>
        }
        ReactDOM.render(<Counter></Counter>, document.getElementById("root"));
    </script>
