import React from "react";
//import logo_image from "../../img/react.png";
import "./style.css";


/*
            <p>
                <h1 className="some-style-class">Hello, this is a react component.</h1>
                <br />
                <img src={logo_image} height="100px" />
            </p>*/

const SomeComponent = () => {
    return (
        <div className="login">
            <div className="login-text">
                <h1>Cannibiz home page</h1>
                <h2 id="try"></h2>
            </div>
        </div>

    );
};

export default SomeComponent;