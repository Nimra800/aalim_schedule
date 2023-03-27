import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    CardSubtitle,
    Button,
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useState } from "react";
export const Request = () => {
    const [rating, setRating] = useState(2);

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand href="/">
                <button>
                        <img
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></img>
                        </button>
                    Request</NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img
                        src={Logout}
                        width={20}
                        height={20}
                        className="ml-4"
                    ></img>

                    <img
                        className="ml-4"
                        alt="logo"
                        src={download}
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    />
                </div>
            </Navbar>
            <Container className="container-center">
                <Col>
                    <Card className="request-card shadow">
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Client Name:</CardTitle>
                            <CardTitle>Nimra Awan</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Requested Service:
                            </CardTitle>
                            <CardTitle>Nikkah</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Previous Service:
                            </CardTitle>

                            <StarRatings
                                rating={rating}
                                starRatedColor="yellow"
                                changeRating={changeRating}
                                numberOfStars={5}
                                name="rating"
                                starDimension="20px"
                                starSpacing="2px"
                            ></StarRatings>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Request Service:</CardTitle>
                            <CardTitle>Nikkah</CardTitle>
                        </Row>
                        <hr></hr>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Time:</CardTitle>
                            <CardTitle>From 2:00PM To 3:00PM</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Date:</CardTitle>
                            <CardTitle>21/12/22 Distance: 2Km</CardTitle>
                        </Row>
                        <Row className="mb-2">
                            <CardTitle className="px-2">Address:</CardTitle>
                            <CardTitle>6Road Rawalpindi Location</CardTitle>
                        </Row>

                            

                        <Row className="mr-5">
                            <Button className="btn-accept">Accept</Button>
                            <Button className="btn-reject">Reject</Button>
                        </Row>
                        
                    </Card>
                </Col>
            </Container>
        </>
    );
};
