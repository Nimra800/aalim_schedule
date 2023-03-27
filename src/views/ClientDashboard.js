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

import Notification from "../../src/assets/img/Notification1.png";
import Logout from "../../src/assets/img/Logout1.png";
import profile from "../../src/assets/img/profile1.png";
import download from "../../src/assets/img/dumpyicon.png";
import SearchAalim from "../../src/assets/img/SearchAalim.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
export const ClientDashboard = () => {
  //Navigation
  const history = useHistory()
  const location = useLocation()
    return (
        <>
            {/* <Container className="container"> */}
                {/* <Col> */}
                    <Navbar className="mb-3 bg" light>
                        <NavbarBrand>
                       
                            ClientDashboard
                        </NavbarBrand>
                        <div>
                            
                            <img
                                src={Notification}
                                width={20}
                                height={20}
                            ></img>
                            <img
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
                                    pathname:"/main/ProfileClient",
                                    state:{
                                        data:location.state.data
                                    }

                                }
                            )}>
                                <div>
                                    <img
                                        src={profile}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Profile
                                </CardTitle>
                            </Card>
                        </div>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                
                               {pathname: "/main/SearchClient",
                            state:{
                                data:location.state.data
                            }}
                                
                                )}>
                                <div>
                                    <img
                                        src={SearchAalim}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Search Aalim
                                </CardTitle>
                            </Card>
                        </div>
                        
                    </Row>
                    </Container>
                {/* </Col> */}
        </>
    );
};