import React from "react";
import {
    Card,
    CardTitle,
    Col,
    Container,
    Navbar,
    NavbarBrand,
    Row,
} from "reactstrap";

import task from "../../src/assets/img/task1.png";
import Notification from "../../src/assets/img/Notification1.png";
import Request from "../../src/assets/img/ViewRequest.png";
import Schedule from "../../src/assets/img/Schedule1.png";
import Logout from "../../src/assets/img/Logout1.png";
import profile from "../../src/assets/img/profile1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
export const AalimDashboard = () => {
  //Navigation
  const location = useLocation()
  const history = useHistory()
  
    return (
        <>
            {/* <Container className="container"> */}
                {/* <Col> */}
                
                    <Navbar className="mb-3 bg" light>
                        <NavbarBrand href="/">
                        
                               AalimDashboard
                        </NavbarBrand>
                        <div>
                            
                            <img
                                src={Notification}
                                width={20}
                                height={20}
                            ></img>
                            <img onClick={
                                ()=>history.push('/auth/signin')
                            }
                                src={Logout}
                                width={20}
                                height={20}
                                className="header"
                            ></img>

                            <img  className="header"  alt="logo"
                                src={download}
                                style={{
                                    height: 40,
                                    width: 40,
                                }}></img>
                        </div>
                    </Navbar>
                    <Container className="container-center">
                    
                    <Row>
                           
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                               {
                                pathname:"/main/profileAalim",
                                state:{
                                    data:location.state.data
                                }
                               })}>
                                <div>
                                    <img
                                        src={profile}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    View Profile
                                </CardTitle>
                            </Card>
                        </div>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:"/main/Schedule",
                                    state:{
                                        data:location.state.data
                                    }
                                })} >
                                <div>
                                    <img
                                        src={Schedule}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Set Schedule
                                </CardTitle>
                            </Card>
                        </div>
                    </Row>

                    <Row>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:"/main/viewtask",
                                    state:{
                                        data:location.state.data
                                    }
                                }
                            )}>
                                <div>
                                    <img
                                        src={task}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    View Task
                                </CardTitle>
                            </Card>
                        </div>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                
                                {pathname:"/main/request",
                                state:{
                                    data:location.state.data
                                }})}>
                                <div>
                                    <img
                                        src={Request}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    View Requests
                                </CardTitle>
                            </Card>
                        </div>
                    </Row>
                    </Container>
                {/* </Col> */}
        </>
    );
};
