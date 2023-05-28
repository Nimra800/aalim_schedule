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
import FeedBackClient from "../../src/assets/img/FeedBackclient.png";
import CompletedTaskClient from "../../src/assets/img/completeTaskClient.jpg";
import pendingTaskClient from "../../src/assets/img/pendingTaskClient.jpg";
import download from "../../src/assets/img/dumpyicon.png";
import SearchAalim from "../../src/assets/img/SearchAalim.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import { useState } from "react";
export const ClientTask = () => {
  //Navigation
  const history = useHistory()
  const location = useLocation()
  const [lstClientTask,setlstClientTask] = useState()

  useEffect(()=>{
    axios.get("http://192.168.244.66/AalimSchduler/api/task/getClientTasks?id="+location.state.data.Id).then((response)=>{
           if(response.data!='Error'){
            console.log(response.data)
            setlstClientTask(response.data)
           }
        })
   },[])

    return (
        <>
                    <Navbar className="mb-3 bg" light>
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
                            Task
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
                                    pathname:"/main/PendingTaskClient",
                                    state:{
                                        data:location.state.data,
                                        lstClientTask:lstClientTask
                                    }

                                }
                            )}>
                                <div>
                                    <img
                                        src={pendingTaskClient}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Pending Task
                                </CardTitle>
                            </Card>
                        </div>

                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:"/main/FeedBackClient",
                                    state:{
                                        data:location.state.data,
                                        lstClientTask:lstClientTask
                                    }

                                }
                            )}>
                                <div>
                                    <img
                                        src={FeedBackClient}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    FeedBack 
                                </CardTitle>
                            </Card>
                        </div>

                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:"/main/CompletedTaskClient",
                                    state:{
                                        data:location.state.data,
                                        lstClientTask:lstClientTask
                                    }

                                }
                            )}>
                                <div>
                                    <img
                                        src={CompletedTaskClient}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Completed Task
                                </CardTitle>
                            </Card>
                        </div>
</Row>
                        </Container>
               
        </>
    );
};