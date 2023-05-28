import React, { useEffect, useState } from "react";
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
    DropdownItem,
    DropdownMenu,
    Dropdown,
    DropdownToggle,
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
    const history = useHistory();
    const [lstCheckBox, setLstCheckBox] = useState(location.state.lstCheckBox);

    //step  drop down for service
    const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
    const [service, setService] = useState(null);
    function serviceDropwDownValueChange(service) {
        setService(service);
    }
    function serviceToggle() {
        setServiceDropdownOpen((prevState) => !prevState);
    }

    //step  drop down for startTime
    const [isStartTimeDropdownOpen, setStartTimeDropdownOpen] = useState(false);
    const [startTime, setStartTime] = useState("");
    function StartTimeDropwDownValueChange(startTime) {
        setStartTime(startTime);
    }
    function StartTimeToggle() {
        setStartTimeDropdownOpen((prevState) => !prevState);
    }

    //step  drop down for endTime
    const [isEndTimeDropdownOpen, setEndTimeDropdownOpen] = useState(false);
    const [endTime, setEndTime] = useState("");
    function EndTimeDropwDownValueChange(endTime) {
        setEndTime(endTime);
    }
    function EndTimeToggle() {
        setEndTimeDropdownOpen((prevState) => !prevState);
    }

    //step  drop down for day
    const [isDayDropdownOpen, setDayDropdownOpen] = useState(false);
    const [day, setDay] = useState("");
    function DayDropwDownValueChange(day) {
        setDay(day);
    }
    function DayToggle() {
        setDayDropdownOpen((prevState) => !prevState);
    }

    function handleSave() {
       
        console.log(service)
       if(service!=null){
        if (service.name == "Nazrah") {
            var days = "";
            daysChecked.forEach((element) => {
                if(element.isChecked){
                    days += element.name + ' ';
                }
                
            });
           
            const data = {
                Id: 0,
                ServiceId: service.Id,
                StartTime: startTime,
                EndTime: endTime,
                Day: days,
                Status: "Free",
                AalimId: location.state.data.Id,
            };
            console.log(data)
            axios
                .post(
                    "http://192.168.244.66/AalimSchduler/api/schedule/addschedule",
                    data
                )
                .then((response) => {
                    if (response.data == "Error") {
                        alert("Something Went Wrong");
                    } else {
                        alert("Schedule Updated");
                    }
                });
        } else {
            const data = {
                Id: 0,
                ServiceId: service.Id,
                StartTime: startTime,
                EndTime: endTime,
                Day: day,
                Status: "Free",
                AalimId: location.state.data.Id,
            };
            console.log(data)
            axios
                .post(
                    "http://192.168.244.66/AalimSchduler/api/schedule/addschedule",
                    data
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
    }

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const [daysChecked, setDaysChecked] = useState([
        { name: "Mon", isChecked: true },
        { name: "Tue", isChecked: true },
        { name: "Wed", isChecked: true },
        { name: "Thu", isChecked: true },
        { name: "Fri", isChecked: true },
        { name: "Sat", isChecked: true },
        { name: "Sun", isChecked: true },
    ]);

    const handleCheckboxChange = (name) => {
        const updatedDaysChecked = daysChecked.map((day) => {
            if (day.name === name) {
                return { ...day, isChecked: !day.isChecked };
            }
            return day;
        });

        setDaysChecked(updatedDaysChecked);
    };
    const timeArray = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "24:00",
    ];
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                    <Image
                        onClick={() =>
                            history.push({
                                pathname: "/main/Schedule",
                                state: {
                                    data: location.state.data,
                                },
                            })
                        }
                        src={Backbutton}
                        width={25}
                        height={25}
                    ></Image>
                    Set Schedule
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
            <div className="cardDesign">
                <Card className="card-design-schedule shadow">
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isServiceDropdownOpen}
                                    toggle={serviceToggle}
                                >
                                    <DropdownToggle caret>
                                        {service != null
                                            ? service.name
                                            : "Select a service"}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {location.state.data.Services.map(
                                            (value, index) => {
                                                return (
                                                    <DropdownItem
                                                        onClick={() =>
                                                            serviceDropwDownValueChange(
                                                                value
                                                            )
                                                        }
                                                    >
                                                        {value.name}
                                                    </DropdownItem>
                                                );
                                            }
                                        )}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>

                    {/* StartTime DropDown Start */}

                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isStartTimeDropdownOpen}
                                    toggle={StartTimeToggle}
                                >
                                    <DropdownToggle caret>
                                        {startTime != ""
                                            ? startTime
                                            : "Select a StartTime"}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {timeArray.map((value, index) => {
                                            return (
                                                <DropdownItem
                                                    onClick={() =>
                                                        StartTimeDropwDownValueChange(
                                                            value
                                                        )
                                                    }
                                                >
                                                    {value}
                                                </DropdownItem>
                                            );
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>

                    {/* StartTime DropDown End */}
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isEndTimeDropdownOpen}
                                    toggle={EndTimeToggle}
                                >
                                    <DropdownToggle caret>
                                        {endTime != ""
                                            ? endTime
                                            : "Select a EndTime"}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {timeArray.map((value, index) => {
                                            return (
                                                <DropdownItem
                                                    onClick={() =>
                                                        EndTimeDropwDownValueChange(
                                                            value
                                                        )
                                                    }
                                                >
                                                    {value}
                                                </DropdownItem>
                                            );
                                        })}
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>

                    {service != null ? (
                        service.name != "Nazrah" ? (
                            <Row className="my-2 mx-2">
                                <Col>
                                    <div>
                                        <Dropdown
                                            isOpen={isDayDropdownOpen}
                                            toggle={DayToggle}
                                        >
                                            <DropdownToggle caret>
                                                {day != ""
                                                    ? day
                                                    : "Select a Day"}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {days.map((value, index) => {
                                                    return (
                                                        <DropdownItem
                                                            onClick={() =>
                                                                DayDropwDownValueChange(
                                                                    value
                                                                )
                                                            }
                                                        >
                                                            {value}
                                                        </DropdownItem>
                                                    );
                                                })}
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </Col>
                            </Row>
                        ) : (
                            <Row className="my-2 mx-2">
                                <Col>
                                    {daysChecked.map((day) => (
                                        <div
                                            key={day.name}
                                            className="radio-profile"
                                        >
                                            <input
                                                className="mr-4"
                                                type="checkbox"
                                                checked={day.isChecked}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        day.name
                                                    )
                                                }
                                            />
                                            {day.name}
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                        )
                    ) : (
                        <div></div>
                    )}

                    <Row className="btn-design ml-4 mb-4" onClick={handleSave}>
                        <Button>Save</Button>
                    </Row>
                </Card>
            </div>
        </>
    );
};

export default SetScheduleAalim;

// import React, { useEffect, useState } from "react";
// import {
//     Navbar,
//     NavbarBrand,
//     Container,
//     Row,
//     Card,
//     CardTitle,
//     Col,
//     Button,
//     FormGroup,
//     Input,
//     Label,
// } from "reactstrap";
// import Logout from "../../src/assets/img/Logout1.png";
// import Notification from "../../src/assets/img/Notification1.png";
// import download from "../../src/assets/img/dumpyicon.png";
// import Backbutton from "../../src/assets/img/Backbutton.png";
// import { Image } from "react-bootstrap";
// import axios from "axios";
// import { useHistory, useLocation } from "react-router-dom";

// const SetScheduleAalim = () => {
//     const location = useLocation();
//     const history = useHistory();
//     const [lstCheckBox, setLstCheckBox] = useState(location.state.lstCheckBox);
//     let [mon,setMon]=useState(false)
//     let [tue,setTue]=useState(false)
//     let [wed,setWed]=useState(false)
//     let [thu,setThu]=useState(false)
//     let [fri,setFri]=useState(false)
//     let [sat,setSat]=useState(false)
//     let [sun,setSun]=useState(false)

//     function handleSave() {
//         {
//             console.log(location.state.data.Schedules);
//             axios
//                 .post(
//                     "http://192.168.244.66/AalimSchduler/api/schedule/addschedule",
//                     location.state.data.Schedules
//                 )
//                 .then((response) => {
//                     if (response.data == "Error") {
//                         alert("Something Went Wrong");
//                     } else {
//                         alert("Schedule Updated");
//                     }
//                 });
//         }
//     }

//     const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     const timeArray = [
//         "00:00-01:00",
//         "01:00-02:00",
//         "02:00-03:00",
//         "03:00-04:00",
//         "04:00-05:00",
//         "05:00-06:00",
//         "06:00-07:00",
//         "07:00-08:00",
//         "08:00-09:00",
//         "09:00-10:00",
//         "10:00-11:00",
//         "11:00-12:00",
//         "12:00-13:00",
//         "13:00-14:00",
//         "14:00-15:00",
//         "15:00-16:00",
//         "16:00-17:00",
//         "17:00-18:00",
//         "18:00-19:00",
//         "19:00-20:00",
//         "20:00-21:00",
//         "21:00-22:00",
//         "22:00-23:00",
//         "23:00-24:00",
//     ];
//     return (
//         <>
//             <Navbar className="mb-3 bg" light>
//                 <NavbarBrand>
//                     <Image
//                         onClick={() =>
//                             history.push({
//                                 pathname: "/main/Schedule",
//                                 state: {
//                                     data: location.state.data,
//                                 },
//                             })
//                         }
//                         src={Backbutton}
//                         width={25}
//                         height={25}
//                     ></Image>
//                     Set Schedule
//                 </NavbarBrand>
//                 <div>
//                     <img src={Notification} width={20} height={20}></img>
//                     <img
//                         src={Logout}
//                         width={20}
//                         height={20}
//                         className="header"
//                     ></img>
//                     <img
//                         className="ml-4"
//                         alt="logo"
//                         src={download}
//                         style={{
//                             height: 40,
//                             width: 40,
//                         }}
//                     />
//                 </div>
//             </Navbar>

//             <Row>
//                 <Col></Col>
//                 {days.map((day, dayIndex) => {
//                     return (
//                         <>
//                             <Col key={dayIndex} >
//                                 <Input
//                                     type="checkbox"

//                                     onClick={() => {
//                                         const newList = [...lstCheckBox];

//                                         lstCheckBox.forEach((e, index) => {
//                                             if (day == "Mon") {
//                                                 if(mon==true){
//                                                     if (index % 7 == 0) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );
//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 0) {
//                                                         newList[index] = true;
//                                                      let lst=   getDayTime(index)
//                                                      console.log(lst[0]+lst[1])
//                                                      let day=lst[0]
//                                                     let  time=lst[1]
//                                                      const newSchedule = {
//                                                     Id: 0,
//                                                     SlotId: index,
//                                                     StartTime:
//                                                         time.split("-")[0],
//                                                     EndTime: time.split("-")[1],
//                                                     Day: day,
//                                                     Status: "Free",
//                                                     AalimId:
//                                                         location.state.data.Id,
//                                                 };
//                                                 location.state.data.Schedules =
//                                                 [
//                                                     ...location.state.data
//                                                         .Schedules,
//                                                     newSchedule,
//                                                 ];
//                                                     }
//                                                 }

//                                             } else if (day == "Tue") {
//                                                 if(tue==true){
//                                                     if (index % 7 == 1) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );
//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 1) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }else if (day == "Wed") {
//                                                 if(wed==true){
//                                                     if (index % 7 == 2) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );

//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 2) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }else if (day == "Thu") {
//                                                 if(thu==true){
//                                                     if (index % 7 == 3) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );
//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 3) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }else if (day == "Fri") {
//                                                 if(fri==true){
//                                                     if (index % 7 == 4) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );
//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 4) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }else if (day == "Sat") {
//                                                 if(sat==true){
//                                                     if (index % 7 == 5) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );

//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 5) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }else if (day == "Sun") {
//                                                 if(sun==true){
//                                                     if (index % 7 == 6) {
//                                                         newList[index] = false;
//                                                         let count = 0;
//                                                         location.state.data.Schedules.forEach(
//                                                             (element) => {
//                                                                 if (
//                                                                     element.SlotId ==
//                                                                     index
//                                                                 ) {
//                                                                     location.state.data.Schedules.splice(
//                                                                         count,
//                                                                         1
//                                                                     );
//                                                                 }
//                                                                 count = count + 1;
//                                                             }
//                                                         );
//                                                     }
//                                                 }else{
//                                                     if (index % 7 == 6) {
//                                                         newList[index] = true;
//                                                         let lst=   getDayTime(index)
//                                                         console.log(lst[0]+lst[1])
//                                                         let day=lst[0]
//                                                        let  time=lst[1]
//                                                         const newSchedule = {
//                                                        Id: 0,
//                                                        SlotId: index,
//                                                        StartTime:
//                                                            time.split("-")[0],
//                                                        EndTime: time.split("-")[1],
//                                                        Day: day,
//                                                        Status: "Free",
//                                                        AalimId:
//                                                            location.state.data.Id,
//                                                    };
//                                                    location.state.data.Schedules =
//                                                    [
//                                                        ...location.state.data
//                                                            .Schedules,
//                                                        newSchedule,
//                                                    ];
//                                                     }
//                                                 }
//                                             }
//                                         });
//                                         if(day=="Mon"){
//                                             if(mon==true){
//                                                 setMon(false);

//                                             }else{
//                                                setMon(true)
//                                             }
//                                         }else if(day=="Tue"){
//                                             if(tue==true){
//                                                 setTue(false);
//                                             }else{
//                                                setTue(true)
//                                             }
//                                         }else if(day=="Wed"){
//                                             if(wed==true){
//                                                 setWed(false);
//                                             }else{
//                                                setWed(true)
//                                             }
//                                         }else if(day=="Thu"){
//                                             if(thu==true){
//                                                 setThu(false);
//                                             }else{
//                                                setThu(true)
//                                             }
//                                         }else if(day=="Fri"){
//                                             if(fri==true){
//                                                 setFri(false);
//                                             }else{
//                                                setFri(true)
//                                             }
//                                         }else if(day=="Sat"){
//                                             if(sat==true){
//                                                 setSat(false);
//                                             }else{
//                                                setSat(true)
//                                             }
//                                         }else if(day=="Sun"){
//                                             if(sun==true){
//                                                 setSun(false);
//                                             }else{
//                                                setSun(true)
//                                             }
//                                         }

//                                         setLstCheckBox(newList);
//                                     }}
//                                 ></Input>
//                                 <p>{day}</p>
//                             </Col>
//                         </>
//                     );
//                 })}
//             </Row>

//             {timeArray.map((time, colindex) => {
//                 return (
//                     <Row className="py-2" key={colindex}>
//                         <h5 className="mx-5">{time}</h5>
//                         {days.map((day, rowindex) => {
//                             return (
//                                 <Col key={rowindex + 7 * colindex}>
//                                     <Input
//                                         type="checkbox"
//                                         checked={
//                                             lstCheckBox[rowindex + 7 * colindex]
//                                         }
//                                         onClick={() => {
//                                             location.state.lstCheckBox[
//                                                 rowindex + 7 * colindex
//                                             ] =
//                                                 !location.state.lstCheckBox[
//                                                     rowindex + 7 * colindex
//                                                 ];
//                                             lstCheckBox[
//                                                 rowindex + 7 * colindex
//                                             ] =
//                                                 !lstCheckBox[
//                                                     rowindex + 7 * colindex
//                                                 ];
//                                             console.log(
//                                                 location.state.lstCheckBox[
//                                                     rowindex + 7 * colindex
//                                                 ]
//                                             );
//                                             const newList = [...lstCheckBox];
//                                             newList[rowindex + 7 * colindex] =
//                                                 lstCheckBox[
//                                                     rowindex + 7 * colindex
//                                                 ];

//                                             setLstCheckBox(newList);

//                                             let index = rowindex + 7 * colindex;
//                                             let day,
//                                                 time = "";
//                                             if (
//                                                 location.state.lstCheckBox[
//                                                     index
//                                                 ]
//                                             ) {
//                                                 if (index % 7 == 0) {
//                                                     day = "Mon";
//                                                 }
//                                                 if (index % 7 == 1) {
//                                                     day = "Tue";
//                                                 }
//                                                 if (index % 7 == 2) {
//                                                     day = "Wed";
//                                                 }
//                                                 if (index % 7 == 3) {
//                                                     day = "Thu";
//                                                 }
//                                                 if (index % 7 == 4) {
//                                                     day = "Fri";
//                                                 }
//                                                 if (index % 7 == 5) {
//                                                     day = "Sat";
//                                                 }
//                                                 if (index % 7 == 6) {
//                                                     day = "Sun";
//                                                 }

//                                                 if (index / 7 < 1) {
//                                                     time = "00:00-01:00";
//                                                 } else if (index / 7 < 2) {
//                                                     time = "01:00-02:00";
//                                                 } else if (index / 7 < 3) {
//                                                     time = "02:00-03:00";
//                                                 } else if (index / 7 < 4) {
//                                                     time = "03:00-04:00";
//                                                 } else if (index / 7 < 5) {
//                                                     time = "04:00-05:00";
//                                                 } else if (index / 7 < 6) {
//                                                     time = "05:00-06:00";
//                                                 } else if (index / 7 < 7) {
//                                                     time = "06:00-07:00";
//                                                 } else if (index / 7 < 8) {
//                                                     time = "07:00-08:00";
//                                                 } else if (index / 7 < 9) {
//                                                     time = "08:00-09:00";
//                                                 } else if (index / 7 < 10) {
//                                                     time = "09:00-10:00";
//                                                 } else if (index / 7 < 11) {
//                                                     time = "10:00-11:00";
//                                                 } else if (index / 7 < 12) {
//                                                     time = "11:00-12:00";
//                                                 } else if (index / 7 < 13) {
//                                                     time = "12:00-13:00";
//                                                 } else if (index / 7 < 14) {
//                                                     time = "13:00-14:00";
//                                                 } else if (index / 7 < 15) {
//                                                     time = "14:00-15:00";
//                                                 } else if (index / 7 < 16) {
//                                                     time = "15:00-16:00";
//                                                 } else if (index / 7 < 17) {
//                                                     time = "16:00-17:00";
//                                                 } else if (index / 7 < 18) {
//                                                     time = "17:00-18:00";
//                                                 } else if (index / 7 < 19) {
//                                                     time = "18:00-19:00";
//                                                 } else if (index / 7 < 20) {
//                                                     time = "19:00-20:00";
//                                                 } else if (index / 7 < 21) {
//                                                     time = "20:00-21:00";
//                                                 } else if (index / 7 < 22) {
//                                                     time = "21:00-22:00";
//                                                 } else if (index / 7 < 23) {
//                                                     time = "22:00-23:00";
//                                                 } else if (index / 7 < 24) {
//                                                     time = "23:00-24:00";
//                                                 }
//                                                 const newSchedule = {
//                                                     Id: 0,
//                                                     SlotId: index,
//                                                     StartTime:
//                                                         time.split("-")[0],
//                                                     EndTime: time.split("-")[1],
//                                                     Day: day,
//                                                     Status: "Free",
//                                                     AalimId:
//                                                         location.state.data.Id,
//                                                 };
//                                                 location.state.data.Schedules =
//                                                     [
//                                                         ...location.state.data
//                                                             .Schedules,
//                                                         newSchedule,
//                                                     ];
//                                             } else {
//                                                 let count = 0;
//                                                 location.state.data.Schedules.forEach(
//                                                     (element) => {
//                                                         if (
//                                                             element.SlotId ==
//                                                             index
//                                                         ) {
//                                                             location.state.data.Schedules.splice(
//                                                                 count,
//                                                                 1
//                                                             );
//                                                         }
//                                                         count = count + 1;
//                                                     }
//                                                 );
//                                             }
//                                         }}
//                                         style={{
//                                             width: "30px",
//                                             height: "30px",
//                                         }}
//                                     />
//                                 </Col>
//                             );
//                         })}
//                     </Row>
//                 );
//             })}
//             <Row className="btn-design" onClick={handleSave}>
//                 <Button>Save</Button>
//             </Row>
//         </>
//     );
// };

// function getDayTime(index){
//     let day=''
//     let time=''
//     if (index % 7 == 0) {
//         day = "Mon";
//     }
//     if (index % 7 == 1) {
//         day = "Tue";
//     }
//     if (index % 7 == 2) {
//         day = "Wed";
//     }
//     if (index % 7 == 3) {
//         day = "Thu";
//     }
//     if (index % 7 == 4) {
//         day = "Fri";
//     }
//     if (index % 7 == 5) {
//         day = "Sat";
//     }
//     if (index % 7 == 6) {
//         day = "Sun";
//     }

//     if (index / 7 < 1) {
//         time = "00:00-01:00";
//     } else if (index / 7 < 2) {
//         time = "01:00-02:00";
//     } else if (index / 7 < 3) {
//         time = "02:00-03:00";
//     } else if (index / 7 < 4) {
//         time = "03:00-04:00";
//     } else if (index / 7 < 5) {
//         time = "04:00-05:00";
//     } else if (index / 7 < 6) {
//         time = "05:00-06:00";
//     } else if (index / 7 < 7) {
//         time = "06:00-07:00";
//     } else if (index / 7 < 8) {
//         time = "07:00-08:00";
//     } else if (index / 7 < 9) {
//         time = "08:00-09:00";
//     } else if (index / 7 < 10) {
//         time = "09:00-10:00";
//     } else if (index / 7 < 11) {
//         time = "10:00-11:00";
//     } else if (index / 7 < 12) {
//         time = "11:00-12:00";
//     } else if (index / 7 < 13) {
//         time = "12:00-13:00";
//     } else if (index / 7 < 14) {
//         time = "13:00-14:00";
//     } else if (index / 7 < 15) {
//         time = "14:00-15:00";
//     } else if (index / 7 < 16) {
//         time = "15:00-16:00";
//     } else if (index / 7 < 17) {
//         time = "16:00-17:00";
//     } else if (index / 7 < 18) {
//         time = "17:00-18:00";
//     } else if (index / 7 < 19) {
//         time = "18:00-19:00";
//     } else if (index / 7 < 20) {
//         time = "19:00-20:00";
//     } else if (index / 7 < 21) {
//         time = "20:00-21:00";
//     } else if (index / 7 < 22) {
//         time = "21:00-22:00";
//     } else if (index / 7 < 23) {
//         time = "22:00-23:00";
//     } else if (index / 7 < 24) {
//         time = "23:00-24:00";
//     }
//    return [day,time]
// }

// export default SetScheduleAalim;
