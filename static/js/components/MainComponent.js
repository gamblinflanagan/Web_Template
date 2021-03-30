import React from "react";
import logo from "../../images/dragon.jpg";
import "./style.css";

const SomeComponent = () => {
    return (
        <div className="login">
            <div className="login-text">
                <h1>Web Template Main Page</h1>
                <h2 id="try"></h2>
            </div>
            <br />
            <div className="login-box">
				<input type="password" id="password" name="password" />
			</div>
            <br />
            <div className="buttons">
				<button className="login-button">
					Submit
				</button>
			</div>
            <br />
            <img src={logo} />
        </div>
    );
};

export default SomeComponent;