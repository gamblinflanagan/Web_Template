import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const SecondComponent = () => {
    return (
        <div className="Second">
           <h1>SECOND PAGE</h1>
           <br />
            <div className="buttons">
                <Link to='/'>
                    <button className="login-button">
                        Index
                    </button>
                </Link>
			</div>
        </div>
    );
};

export default SecondComponent;