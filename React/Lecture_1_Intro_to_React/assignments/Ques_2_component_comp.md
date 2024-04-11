  # title : component composition
  ## Problem Statement : Create  parent components 
  `Note` : these questions will do string matching and to avoid confusion please write the exact text

* Your Task is to Create `HELLOPARENT` Component in which you have to 
* render `HELLO` five times  
* render `BYE component once`

### code stub 
```jsx
function HELLO(prop) {
            let {name,age} = prop
            return <h1>Hello {name} Thanks Babel is {age} old </h1>;
        }
        function BYE(){
            return <p>BYE Component</p>
        }
ReactDOM.render(<HELLOPARENT></HELLOPARENT>, document.getElementById("root"));
```

 ## solution
 
 ```jsx
        // -> component : a function that returns HTML
        function HELLO(prop) {
            let {name,age} = prop
            return <h1>Hello {name} Thanks Babel is {age} old </h1>;
        }
        function BYE(){
            return <p>BYE Component</p>
        }
        function HELLOPARENT() {
            return <div>
                <HELLO name = {"Rohan"} age = {10}></HELLO>
                <HELLO name = {"Rajneesh"} age = {30}></HELLO>
                <HELLO name = "Krishna" age = {40}></HELLO>
                <HELLO ></HELLO>
                <BYE></BYE>
                </div>
        }
        ReactDOM.render(<HELLOPARENT></HELLOPARENT>, document.getElementById("root"));

```