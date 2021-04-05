import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import componets here
import MainComponent from "./components/MainComponent";
import SecondComponent from "./components/SecondComponent";


export default function MainPage() {

    return (
        <Router>
            <Switch>
                <Route exact path="/"><MainComponent /></Route>
                <Route exact path="/second"><SecondComponent /></Route>
            </Switch>
        </Router>
    );
}

