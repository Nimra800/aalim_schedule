import React, { useState } from "react";
import {
    Card,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Navbar,
    NavbarBrand,
    Row,
} from "reactstrap";

import Notification from "../../src/assets/img/Notification1.png";
import Logout from "../../src/assets/img/Logout1.png";
import profile from "../../src/assets/img/profile1.png";
import download from "../../src/assets/img/dumpyicon.png";
import SearchAalim from "../../src/assets/img/SearchAalim.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";
export const CompletedTaskClient = () => {
    //Navigation
    const history = useHistory();
    const location = useLocation();
    const [data, setData] = useState(location.state.lstClientTask);

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                    <Image
                        onClick={() =>
                            history.push({
                                pathname: "/main/ClientTask",
                                state: {
                                    data: location.state.data,
                                },
                            })
                        }
                        src={Backbutton}
                        width={25}
                        height={25}
                    ></Image>
                    Completed Task
                </NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img onClick={
                                ()=>history.push('/auth/signin')
                            }
                        src={Logout}
                        width={20}
                        height={20}
                        className="header"
                    ></img>

                    <img
                        className="header"
                        alt="logo"
                        src={download}
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    ></img>
                </div>
            </Navbar>
            <Row>
                {data.map((e, i) => {
                    return e.Status === "Completed" ? (
                        <Col className="sm-2">
                            <Container className="container-center">
                                <Card className="client-task-card-design shadow p-4">
                                    <Col>
                                    <Row>
                                            <h5 className="ml-4">Aalim Name: </h5>
                                            <CardSubtitle className="mt-0">
                                                {e.Name}
                                            </CardSubtitle>
                                        </Row>
                                        <Row>
                                            <h5 className="ml-4">Service: </h5>
                                            <CardSubtitle className="mt-0">
                                                {e.Service}
                                            </CardSubtitle>
                                        </Row>
                                        <Row>
                                            <h5 className="ml-4">Time: </h5>
                                            <CardSubtitle className="mt-0">
                                                {e.StartTime}-{e.EndTime}
                                            </CardSubtitle>
                                        </Row>

                                        <Row>
                                            <h5 className="ml-4">Date: </h5>
                                            <CardSubtitle className="mt-0">
                                                {e.Date}
                                            </CardSubtitle>
                                        </Row>
                                        <Row>
                                            <h5 className="ml-4">Hadiya: </h5>
                                            <CardSubtitle className="mt-0">
                                                {e.Hadiya}
                                            </CardSubtitle>
                                        </Row>
                                        <Row className="margin-bottom">
                                            <h5 className="ml-4">Rating: </h5>
                                            <StarRatings
                                                rating={e.rating}
                                                starRatedColor="yellow"
                                                numberOfStars={5}
                                                name="rating"
                                                starDimension="20px"
                                                starSpacing="2px"
                                            ></StarRatings>
                                        </Row>
                                    </Col>
                                </Card>
                            </Container>
                        </Col>
                    ) : null;
                })}
            </Row>
        </>
    );
};
