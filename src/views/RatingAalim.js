import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    Button,
    
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useState } from "react";
export const RatingAalim = () => {
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
                    Rating</NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img
                        src={Logout}
                        width={20}
                        height={20}
                        className="header"
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
                    <Card>
                        <Row className="margin-bottom">
                            <CardTitle className="ml-5 pt-1">
                                Rating:
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
                        <Row className="mx-5 my-3">
                            <Button className="btn-confirm">Submit</Button>
                        </Row>
                    </Card>
                </Col>
            </Container>
        </>
    );
};
