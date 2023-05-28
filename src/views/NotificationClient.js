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
import { useHistory } from "react-router-dom";
export const NotificationClient = () => {
    const [rating, setRating] = useState(2);
    const history=useHistory()

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
                    Notification</NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img onClick={
                                ()=>history.push('/auth/signin')
                            }
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
                            <CardTitle className="px-2">Aalim Name:</CardTitle>
                            <CardTitle>Nimra Fatima</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Requested Service:
                            </CardTitle>
                            <CardTitle>Nikkah</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Date:
                            </CardTitle>
                            <CardTitle>21/12/2022</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Previous Service:
                            </CardTitle>
                            <CardTitle>Complete</CardTitle>       
                            
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
                         <Row className="mr-5">
                            <Button className="btn-accept">Rate Aalim</Button>
                            
                        </Row>
                        
                    </Card>
                </Col>
            </Container>
        </>
    );
};
