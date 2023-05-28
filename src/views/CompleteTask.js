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
import StarRatings from "react-star-ratings/build/star-ratings";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export const CompleteTask = () => {
    const history = useHistory();
    const location = useLocation();
    const [rating, setRating] = useState(2);
    const [data, setData] = useState([]);
    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    useEffect(() => {
        console.log(location.state.data.Id);
        axios
            .get(
                "http://192.168.244.66/AalimSchduler/api/task/getCompletedAalimTasks?id=" +
                    location.state.data.Id
            )
            .then((response) => {
                if (response.data != "error") {
                    console.log(response.data);
                    setData(response.data);
                } else {
                    alert("Error");
                }
            });
    }, []);

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                    <Image
                        onClick={() =>
                            history.push({
                                pathname: "/main/ViewTask",
                                state: {
                                    data: location.state.data,
                                },
                            })
                        }
                        src={Backbutton}
                        width={25}
                        height={25}
                    ></Image>
                    CompleteTask
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
            {data.map((e, i) => {
                
               return  (
                <Container className="container-center">
               <Col>
                   <Card className="pandingtask-card shadow">
                       <Row className="margin-bottom">
                           <CardTitle className="px-2">
                               Client Name: {e.Name}
                           </CardTitle>
                          
                       </Row>
                       <Row className="margin-bottom">
                           <CardTitle className="px-2">
                               Time: {e.StartTime}-{e.EndTime}
                           </CardTitle>
                          
                       </Row>
                       <Row className="margin-bottom">
                           <CardTitle className="px-2">
                              Service:{e.Service}
                           </CardTitle>
                          
                       </Row>
                       <Row className="margin-bottom">
                           <CardTitle className="px-2">
                               Completed Date:{e.Date}
                           </CardTitle>
                       </Row>
                       <Row className="margin-bottom">
                           <CardTitle className="px-2">Rating:</CardTitle>
                           <StarRatings
                               rating={e.rating}
                               starRatedColor="yellow"
                              
                               numberOfStars={5}
                               name="rating"
                               starDimension="20px"
                               starSpacing="2px"
                           ></StarRatings>
                       </Row>
                     
                   </Card>
               </Col>
           </Container>
               )
            })}
        </>
    );
};
