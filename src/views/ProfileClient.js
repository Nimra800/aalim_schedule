import React from "react";
import { Navbar, NavbarBrand, Container,Row,Card,CardTitle} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import editprofile from "../../src/assets/img/editprofile.png";
import viewprofile from "../../src/assets/img/viewprofile.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
export const ProfileClient = () => {
    const history = useHistory()
    const location = useLocation()
    return (
        <> <Navbar className="mb-3 bg" light>
        <NavbarBrand>
        <Image  onClick={() => 
                            history.push({
                                pathname: "/main/ClientDashboard",
                                state: {
                                    data: location.state.data,
                                },
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
            Profile
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
    <Row>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:'/main/ViewProfileClient',
                                    state:{
                                        data:location.state.data
                                    }
                                }
                            )}>
                                <div>
                                    <img
                                        src={viewprofile}
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
                            <Card className="card-design shadow" onClick={()=>history.push({
                                pathname:"/main/SetProfileClient",
                               state:{
                                data:location.state.data
                               }
                            })}>
                                <div>
                                    <img
                                        src={editprofile}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2" >
                                    Set Profile
                                </CardTitle>
                            </Card>
                        </div>
                        </Row>
                        
                        </Container>
        </>
    )

}