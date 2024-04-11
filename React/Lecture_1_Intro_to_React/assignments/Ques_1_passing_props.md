# React_Lec_1_Que_1
Note : these questions will do string matching and to avoid confusion please write the exact text

## Problem Statement

Your task is to create a React component named Greeting with the following requirements:

1. The component should take two props, age and occupation.
2. Inside the component, use the provided template to display a greeting message. The message should include the `name` that shpuld be equal to `Jasbir`  with `age` prop, and the provided `occupation` prop passed 
3. Output should be 
```jsx 
<h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation} </h1>
```
 Note : these questions will do string matching and to avoid confusion please write the exact text
## code stub 
```jsx
function Greeting(props) {
    // Your code here

    return (
        // Your JSX template here
    );
}

// Example usage:
ReactDOM.render(<Greeting age={30} occupation={"Software Engineer"} />, document.getElementById("root"));
```


## solution 

```jsx
 function Greeting(obj) {
            let {age,occupation}=obj;
            let name="Jasbir";
            return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation} </h1>;
        }
```

## Test Cases
### Test case-1
// Test Case 1
Input: ReactDOM.render(<Greeting age={25} occupation={"Web Developer"} />, document.getElementById("root"));
Output : Hello Jasbir! Thanks Babel :) is 25 years old and works as Web Developer

### Test case-2
// Test Case 2
Input : ReactDOM.render(<Greeting age={40} occupation={"Data Scientist"} />, document.getElementById("root"));
Output : Hello Jasbir! Thanks Babel :) is 40 years old and works as Data Scientist

### Test case-3
// Test Case 3
Input:  ReactDOM.render(<Greeting age={18} occupation={"Student"} />, document.getElementById("root"));
Output: Hello Jasbir! Thanks Babel :) is 18 years old and works as Student








