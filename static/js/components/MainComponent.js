import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import componets here
import logo from "../../images/dragon.jpg";
import "./style.css";




const MainComponent = () => {
    return (
        <div className="login">
           <Container>
                <Row>
                    <Col md>
                        <div className="login-text">
                            <h1>Web Template Main Page</h1>
                            <h2 id="try">works on all machines</h2>
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
                        {/*<br />
                        <br />
                        <br />
                        <Button id="bootButton">Test</Button>*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainComponent;