import React from "react";
import { Navbar, NavbarBrand, Container,Row,Card,CardTitle } from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import pandingtask from "../../src/assets/img/PandingTask.png";
import completetask from "../../src/assets/img/CompleteTask.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory } from "react-router-dom";
export const ViewTask = () => {
  const history = useHistory()
    return (
        <> <Navbar className="mb-3 bg" light>
        <NavbarBrand href="/">
        <button>
                        <img
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></img>
                        </button> 
            Tasks
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
    <Container className="container-center " >
    <Row>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push("/main/pendingtask")}>
                                <div>
                                    <img
                                        src={pandingtask}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Pending Tasks
                                </CardTitle>
                            </Card>
                        </div>
                        
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push("/main/completetask")}>
                                <div>
                                    <img
                                        src={completetask}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Complete Tasks
                                </CardTitle>
                            </Card>
                        </div>
                        </Row>
                        
                        </Container>
        </>
    )

}

