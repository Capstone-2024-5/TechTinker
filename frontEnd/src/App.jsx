import React from "react";
import ReactDOM from "react-dom";
import User from "./components/User.jsx";

class App extends React.Component {
    render() {
        return (
            <>
            <div>Tech Tinker</div>
            <User />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("contents"));
