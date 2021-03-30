import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/dragon.jpg";
import "./style.css";




const MainComponent = () => {
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
				<Link to='/second'>
                    <button className="login-button">
                        Second
                    </button>
                </Link>
			</div>
            <br />
            <img src={logo} />
        </div>
    );
};

export default MainComponent;