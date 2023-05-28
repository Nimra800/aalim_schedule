import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    Container,
    Input,
    Row,
} from "reactstrap";
import download from "../../assets/img/1.png";
const SignIn = () => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                "http://192.168.244.66/AalimSchduler/api/register/signin?email=" +
                    email +
                    "&password=" +
                    password
            )
            .then((response) => {
                console.log(response.data)
             if (response.data == "Not Exists") {
                    alert(response.data);
                } else if (response.data == "Error") {
                    alert(response.data);
                }else   if (response.data["Schedules"] == undefined) {
                    history.push(
                        {
                            pathname:"/main/clientdashboard",
                            state:{
                                data:response.data

                            }
                        }
                    );
                }
                 else {
                    
                  history.push({
                    pathname:"/main/aalimdashboard", 
                    state : {
                    data:response.data
                  }
                });

                }
            });
    };

    //email textbox
    const [email, setEmail] = useState();

    
    const [password, setPassword] = useState();
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={4} className="split left">
                        <div className="centered img">
                            <img src={download} height={300} width={300}></img>
                        </div>
                    </Col>

                    <Col md={1}></Col>

                    <Col md={5} className="split right">
                        <Card className="shadow centered w-75">
                            <CardTitle tag="h5" className="my-2">
                                SignIn
                            </CardTitle>
                            <CardBody>
                                {/* Email TextBox Start */}

                                <Row className="my-2">
                                    <Col>
                                        <div>
                                            <Input
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            ></Input>
                                        </div>
                                    </Col>
                                </Row>

                                {/* Email TextBox End */}
                                <Row className="my-2">
                                    <Col>
                                        <div>
                                            <Input
                                                placeholder="Password"
                                                value={password}
                                                onChange={(p) =>
                                                    setPassword(p.target.value)
                                                }
                                            ></Input>
                                        </div>
                                    </Col>
                                </Row>

                                {/*
                                Button Code Start
                                 */}
                                <Button className="w-75" onClick={handleSubmit}>
                                    SignIn
                                </Button>
                                 {/*
                                Button Code End
                                 */}
                                <Row className="ml-5 mt-2">
                                    <CardTitle className="mr-2">
                                        Didn't' have an account?
                                    </CardTitle>
                                    <Link to="/auth/signup">
                                        <strong> SignUp</strong>
                                    </Link>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default SignIn;
