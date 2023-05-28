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
    Input,
} from "reactstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Avatar from "react-avatar";
export const ViewProfileClient = () => {
    const location = useLocation()
    const history=useHistory()
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                <Image  onClick={() => 
                            history.push({
                                pathname: "/main/ProfileClient",
                                state: {
                                    data: location.state.data,
                                },
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
            Profile
                    View Profile</NavbarBrand>
            </Navbar>
            <Container className="container-center-view-profile">
                <Col>
                    <Card className="profile-card-design shadow">
                    <div className="px-4">
                          <Avatar
                                   src={"http://192.168.244.66/AalimSchduler/Content/Uploads/"+location.state.data.Image}
                                   size="100"
                                   round={true}
                               />
                          </div>
                 
                        <h2>
                            {
                                location.state.data.Name
                            }
                        </h2>
                        <StarRatings
                                rating={location.state.data.Rating??0}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name="rating"
                                starDimension="40px"
                                starSpacing="2px"
                            ></StarRatings>
                        <hr className="mx-3"/>
                       {/* <div className="profile-card-service">
                       <h2>
                            Services
                        </h2>
                       </div>
                       {
                        location.state.data.Services.split(' ')
                       } */}
                       <div className="profile-card-service">
                       <h4>
                         Personal Information
                        </h4>
                       </div>
                       <div className="profile-card-peronal-information">
                        <Col>
                        <Row>
                            <h5>
                                Phone Number:
                            </h5>
                           
                            <CardSubtitle  className="mt-0 ml-1">
                                {
                                    location.state.data.Phonenumber
                                }
                            </CardSubtitle>
                        </Row>
                        <Row>
                            <h5>
                                Email:
                            </h5>
                           
                            <CardSubtitle  className="mt-0 ml-1">
                                {
                                    location.state.data.Email
                                }
                            </CardSubtitle>
                        </Row>
                        <Row>
                            <h5>
                                Fikkah:
                            </h5>
                           
                            <CardSubtitle  className="mt-0 ml-1">
                                {
                                    location.state.data.Fikkah
                                }
                            </CardSubtitle>
                        </Row>
                        <Row>
                            <h5>
                                Location:
                            </h5>
                            <CardSubtitle  className="mt-0 ml-1">
                                {
                                    location.state.data.Location
                                }
                            </CardSubtitle>
                        </Row>
                        </Col>
                       </div>

                  
                    </Card>
                </Col>
            </Container>
        </>
    );
};