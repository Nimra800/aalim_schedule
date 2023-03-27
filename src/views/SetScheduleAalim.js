import React, { useState } from "react";

import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    Button,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const SetScheduleAalim = () => {
    const location = useLocation();
    const history=useHistory()
    function handleSave() {
        {
            console.log(location.state.data.Schedules)
            axios
                .post(
                    "http://192.168.43.218/AalimSchduler/api/schedule/addschedule",
                    location.state.data.Schedules
                )
                .then((response) => {
                    if (response.data == "Error") {
                        alert("Something Went Wrong");
                    } else {
                        alert("Schedule Updated");
                    }
                });
        }
    }
    
   
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const timeArray = [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
        "09:00-10:00",
        "10:00-11:00",
        "11:00-12:00",
        "12:00-13:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00",
        "21:00-22:00",
        "22:00-23:00",
        "23:00-24:00",
    ];
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                <Image
                        onClick={()=>history.push(
                            {
                             pathname:"/main/Schedule",
                             state:{
                                 data:location.state.data
                             }
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
                    Set Schedule</NavbarBrand>
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

            <Row>
                <Col></Col>
                {days.map((day, index) => {
                    return (
                        <>
                            <Col key={index}>
                                <p>{day}</p>
                            </Col>
                        </>
                    );
                })}
            </Row>

            {timeArray.map((time, colindex) => {
                return (
                    <Row className="py-2">
                        <h5 className="mx-5">{time}</h5>
                        {days.map((day, rowindex) => {
                            return (
                                <Col>
                                    <input
                                        type="checkbox"
                                        defaultChecked={
                                      location.state.lstCheckBox[ rowindex + 7 * colindex]
                                        }
                                        onClick={() => {
                                            location.state.lstCheckBox[
                                                rowindex + 7 * colindex
                                            ] =
                                                !location.state.lstCheckBox[
                                                    rowindex + 7 * colindex
                                                ];
                                            let index = rowindex + 7 * colindex;
                                            let day,
                                                time = "";
                                            if (location.state.lstCheckBox[index]) {
                                                if (index % 7 == 0) {
                                                    day = "Mon";
                                                }
                                                if (index % 7 == 1) {
                                                    day = "Tue";
                                                }
                                                if (index % 7 == 2) {
                                                    day = "Wed";
                                                }
                                                if (index % 7 == 3) {
                                                    day = "Thu";
                                                }
                                                if (index % 7 == 4) {
                                                    day = "Fri";
                                                }
                                                if (index % 7 == 5) {
                                                    day = "Sat";
                                                }
                                                if (index % 7 == 6) {
                                                    day = "Sun";
                                                }

                                                if (index / 7 < 1) {
                                                    time = "00:00-01:00";
                                                } else if (index / 7 < 2) {
                                                    time = "01:00-02:00";
                                                } else if (index / 7 < 3) {
                                                    time = "02:00-03:00";
                                                } else if (index / 7 < 4) {
                                                    time = "03:00-04:00";
                                                } else if (index / 7 < 5) {
                                                    time = "04:00-05:00";
                                                } else if (index / 7 < 6) {
                                                    time = "05:00-06:00";
                                                } else if (index / 7 < 7) {
                                                    time = "06:00-07:00";
                                                } else if (index / 7 < 8) {
                                                    time = "07:00-08:00";
                                                } else if (index / 7 < 9) {
                                                    time = "08:00-09:00";
                                                } else if (index / 7 < 10) {
                                                    time = "09:00-10:00";
                                                } else if (index / 7 < 11) {
                                                    time = "10:00-11:00";
                                                } else if (index / 7 < 12) {
                                                    time = "11:00-12:00";
                                                } else if (index / 7 < 13) {
                                                    time = "12:00-13:00";
                                                } else if (index / 7 < 14) {
                                                    time = "13:00-14:00";
                                                } else if (index / 7 < 15) {
                                                    time = "14:00-15:00";
                                                } else if (index / 7 < 16) {
                                                    time = "15:00-16:00";
                                                } else if (index / 7 < 17) {
                                                    time = "16:00-17:00";
                                                } else if (index / 7 < 18) {
                                                    time = "17:00-18:00";
                                                } else if (index / 7 < 19) {
                                                    time = "18:00-19:00";
                                                } else if (index / 7 < 20) {
                                                    time = "19:00-20:00";
                                                } else if (index / 7 < 21) {
                                                    time = "20:00-21:00";
                                                } else if (index / 7 < 22) {
                                                    time = "21:00-22:00";
                                                } else if (index / 7 < 23) {
                                                    time = "22:00-23:00";
                                                } else if (index / 7 < 24) {
                                                    time = "23:00-24:00";
                                                }
                                                const newSchedule = {
                                                    Id: 0,
                                                    SlotId: index,
                                                    StartTime:
                                                        time.split("-")[0],
                                                    EndTime: time.split("-")[1],
                                                    Day: day,
                                                    Status: "Free",
                                                    AalimId:
                                                        location.state.data.Id,
                                                };
                                                location.state.data.Schedules = [
                                                    ...location.state.data.Schedules,
                                                    newSchedule,
                                                ];
                                            } else {
                                               
                                                let count = 0;
                                                location.state.data.Schedules.forEach((element) => {
                                                    if (
                                                        element.SlotId == index
                                                    ) {
                                                        location.state.data.Schedules.splice(
                                                            count,
                                                            1
                                                        );
                                                    }
                                                    count = count + 1;
                                                });
                                            }
                                        }}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                );
            })}
            <Row className="btn-design" onClick={handleSave}>
                <Button>Save</Button>
            </Row>
        </>
    );
};

export default SetScheduleAalim;
