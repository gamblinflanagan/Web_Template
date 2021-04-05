import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";

//import componets here
import MainPage from "./MainPage";

const EntryPage = () => {
    return <MainPage />;
};

ReactDOM.render(<EntryPage />, document.getElementById("render-react-here"));