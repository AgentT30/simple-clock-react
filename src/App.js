import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "react-live-clock";

function App() {
    return (
        <div className="App">
            <h1>Clock</h1>
            <div class="clock">
                <Clock format={"hh:mm:ss"} ticking={true} timezone={"UTC+0530"} />
            </div>
        </div>
    );
}

export default App;
