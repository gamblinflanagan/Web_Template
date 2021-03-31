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
            <br />
            <div className="Vid">
                <iframe
                    src="https://www.youtube.com/embed/m6Sj7VAiOv4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default SecondComponent;
