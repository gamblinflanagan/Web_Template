import MainComponent from "./components/MainComponent";
import React from "react";
import ReactDOM from "react-dom";

const SomePage = () => {
    return <MainComponent />;
};

ReactDOM.render(<SomePage />, document.getElementById("render-react-here"));