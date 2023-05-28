import React from "react";
import { Navbar, NavbarBrand, Container,Row,Card,CardTitle } from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import SetScheduleimg from "../../src/assets/img/SetSchedule.png";
import ViewSchedule from "../../src/assets/img/ViewSchedule.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Schedule = () => {
    let [schedule, SetSchedule] = useState([]);
  const history = useHistory()
  const location = useLocation()
  let lstCheckBox = [];
  useEffect(async () => {
    await axios
        .get(
            "http://192.168.244.66/AalimSchduler/api/schedule/getschedule?id=" +
                location.state.data.Id
        )
        .then((response) => {
           let temp=[]
            for(let i=0;i<response.data.length;i++){
                temp[i]={
                    Id: response.data[i].Id,
                    SlotId:  response.data[i].SlotId,
                    StartTime:
                    response.data[i].StartTime,
                    EndTime:  response.data[i].EndTime,
                    Day:  response.data[i].Day,
                    Status:  response.data[i].Status,
                    AalimId:
                    response.data[i].AalimId,
                };
            }
            SetSchedule(temp);
           location.state.data.Schedules=temp
           console.log(location.state.data.Schedules)
        });
}, []);

for (let i = 0; i < 168; i++) {
    let v =false
    for(let j=0;j<schedule.length;j++){
      if(schedule[j].SlotId===i){
        v=true
      }
    }
    console.log(v);
   lstCheckBox[i]=v
  }
    return (
        <> <Navbar className="mb-3 bg" light>
        <NavbarBrand>
        <Image  onClick={() => 
                            history.push({
                                pathname: "/main/AalimDashboard",
                                state: {
                                    data: location.state.data,
                                },
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
            Schedule
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
                            <Card className="card-design shadow" onClick={
                                ()=>history.push(
                                   {
                                    pathname:"/main/SetScheduleAalim",
                                    state: {
                                        data:location.state.data,
                                        lstCheckBox:lstCheckBox
                                    }
                                   })}>
                                <div>
                                    <img
                                        src={SetScheduleimg}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    Set Schedule
                                </CardTitle>
                            </Card>
                        </div>
                        
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {pathname:"/main/ViewScheduleAalim",
                                state: {
                                    data:location.state.data
                                }})}>
                                <div>
                                    <img
                                        src={ViewSchedule}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    View Schedule
                                </CardTitle>
                            </Card>
                        </div>
                        </Row>
                        
                        </Container>
        </>
    )

}