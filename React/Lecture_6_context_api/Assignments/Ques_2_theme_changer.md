`ThemeChanger.jsx`
```jsx
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";
import React, {useContext} from "react";
function Header() {
    // console.log(CTheme);
    return (<div style = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    const { CTheme } = useContext(ThemeWrapper);
    return <div className = {CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Header;
```
`footer.jsx`
```jsx
import { useContext } from "react";
import "./themeManager.css";
import { ThemeWrapper } from "./ThemeManger";

function Footer() {
    return (<div style = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Footer</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    // 3
   const {CTheme} = useContext(ThemeWrapper)
    return <div className = {CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Footer;
```
`article.jsx`
```jsx
import "./themeManager.css";
function Article() {
    return (<div styl = {{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Article</div>
        <div>⬇</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, id.</p>
    </div>)
}

export default Article;
```

**ThemeManager.jsx**
```jsx
import React, { useState } from 'react'
import Header from './Header';
import Article from './Article';
import Footer from './footer';
//1
export const ThemeWrapper = React.createContext();
function ThemeManger() {
    // cTheme-> Header, Footer+ also change that
    const [CTheme, setCTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme =
            CTheme == "light" ? "dark": "light";
        setCTheme(newTheme)
    }

    return (
        // 2. 
        <ThemeWrapper.Provider
            value = {{ CTheme }}>
            <h1>Theme Management</h1>
            <button
                onClick = {toggleTheme}
            >Toggle Theme</button>
            <Header></Header>
            <Article></Article>
            <Footer></Footer>
        </ThemeWrapper.Provider >
    )
}

export default ThemeManger
```
**themeManager.css**
```css
.light {
    background-color: white;
    color: black;
}

.dark {
    background-color: black;
    color: white;
}
```