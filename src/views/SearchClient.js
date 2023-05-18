import React from "react";
import {
    Card,
    CardTitle,
    Col,
    Container,
    Navbar,
    NavbarBrand,
    Row,
    DropdownItem,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Button,
    FormGroup,
    Label,
} from "reactstrap";
import DatePicker from "react-datepicker";
import { DateRangePicker } from "react-date-range";
import "react-datepicker/dist/react-datepicker.css";
import Notification from "../../src/assets/img/Notification1.png";
import Logout from "../../src/assets/img/Logout1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { Image } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-date-range/dist/styles.css"; // Import the default styles
import "react-date-range/dist/theme/default.css"; // Import the default theme

export const SearchClient = () => {
    const location = useLocation();
    const history = useHistory();

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [isDropdownOpen, setDropDownOpen] = useState(false);

    const [selectedServiceValue, setSelectedServiceValue] = useState("");
    const [isServiceDropdownOpen, setServiceDropDownOpen] = useState(false);

    const [selectedTimeValue, setSelectedTimeValue] = useState("");
    const [isTimeDropdownOpen, setTimeDropDownOpen] = useState(false);

    const [selectedDayValue, setSelectedDayValue] = useState("");
    const [isDayDropdownOpen, setDayDropDownOpen] = useState(false);

    const [Location, setLocation] = useState("");

    //Date Range
    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        }
    ]);

    const handleSelect = (ranges) => {
        setSelectedRange([ranges.selection]);
        location.state.daterange=[ranges.selection]
    };

    //select dropdown value
    function DropwDownValueChange(fikkah) {
        location.state.fikkah = fikkah;
        setSelectedValue(fikkah);
    }
    //dropdown open/close
    function toggle() {
        setDropDownOpen((prevState) => !prevState);
    }

    //select dropdown value
    function ServiceDropwDownValueChange(value) {
        location.state.service = value;
        setSelectedServiceValue(value);
    }
    //dropdown open/close
    function toggleService() {
        setServiceDropDownOpen((prevState) => !prevState);
    }

    //step  drop down for startTime
    const [isStartTimeDropdownOpen, setStartTimeDropdownOpen] = useState(false);
    const [startTime, setStartTime] = useState("");
    function StartTimeDropwDownValueChange(startTime) {
        location.state.starttime=startTime
        setStartTime(startTime);
    }
    function StartTimeToggle() {
        setStartTimeDropdownOpen((prevState) => !prevState);
    }

     //step  drop down for endTime
     const [isEndTimeDropdownOpen, setEndTimeDropdownOpen] = useState(false);
     const [endTime, setEndTime] = useState("");
     function EndTimeDropwDownValueChange(endTime) {
        location.state.endtime=endTime
         setEndTime(endTime);
     }
     function EndTimeToggle() {
         setEndTimeDropdownOpen((prevState) => !prevState);
     }

  

    //select dropdown value
    function DayDropwDownValueChange(value) {
        location.state.day = value;
        setSelectedDayValue(value);
    }
    //dropdown open/close
    function toggleDay() {
        setDayDropDownOpen((prevState) => !prevState);
    }

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

    const lstServices = ["Nikkah", "Kul"];

    const lstDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const handleDateChange = (date) => {
        location.state.date=date
        setSelectedDate(date);
    };

    const CustomInput = ({ value, onClick }) => (
        <button type="button" className="form-control" onClick={onClick}>
            {value || "Select a date"}
        </button>
    );

    //Api Call
    const handleSearch = (e) => {
      
       
        e.preventDefault();
       if(location.state.service=='Nazrah'){
        console.log(location.state.daterange)
        const date = location.state.daterange[0]['startDate']
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
        }

        const StartDate = `${year}-${month}-${day}`;
        console.log(StartDate);

        const enddate = location.state.daterange[0]['endDate']
         year = enddate.getFullYear();
         month = enddate.getMonth() + 1;
         day = enddate.getDate();
        if (month < 10) {
            month = `0${month}`;
        }
        if (day < 10) {
            day = `0${day}`;
        }

        const EndDate = `${year}-${month}-${day}`;
        console.log(EndDate);
        axios
        .get(
            "http://192.168.43.218/AalimSchduler/api/Search/SearchNazrah?fikkah=" +
                location.state.fikkah +
                "&services=" +
                location.state.service +
                "&time=" +
                location.state.time +
                "&latlng=" +
                location.state.latLng +
                "&startdate=" +
                StartDate +
                "&enddate=" +
                EndDate +
                "&cid=" +
                location.state.data.Id
        )
        .then((response) => {
            if (response.data != "Error") {
                console.log(response.data);
                   let list=[]
                 for(let i=0;i<response.data.length;i++){
                    console.log(response.data[i].Id)
                   let  val={
                        'Distance':response.data[i]['Distance'],
                        'Fikkah':response.data[i]['Fikkah'],
                        'Gender':response.data[i]['Gender'],
                        'Id':response.data[i].Id,
                        'Image':response.data[i]['Image'],
                        'Name':response.data[i]['Name'],
                        'PhoneNo':response.data[i]['PhoneNo'],
                        'Rating':response.data[i]['Rating'],
                        'Services':response.data[i]['Services'],
                        'rid':-1
                    }
                    list.push(val);

                 }
                console.log(list)
                history.push({
                    pathname: "/main/SearchDetailsClient",
                    state: {
                        data: location.state.data,
                        searchResult: response.data,
                        Location: location.state.Location,
                        fikkah: location.state.fikkah,
                        day: location.state.day,
                        time: location.state.time,
                        service: location.state.service,
                        latLng: location.state.latLng,
                    },
                });
            } else {
                alert("Error");
            }
        })
        .catch((error) => {
            alert(error);
        });
       }else{
        axios
        .get(
            "http://192.168.43.218/AalimSchduler/api/Search/SearchNazrah?fikkah=" +
                location.state.fikkah +
                "&services=" +
                location.state.service +
                "&time=" +
                location.state.time +
                "&latlng=" +
                location.state.latLng +
                "&startdate=" +
                location.state.date +
                "&enddate=" +
                location.state.date +
                "&cid=" +
                location.state.data.Id
        )
        .then((response) => {
            if (response.data != "Error") {
                console.log(response.data);
                   let list=[]
                 for(let i=0;i<response.data.length;i++){
                    console.log(response.data[i].Id)
                   let  val={
                        'Distance':response.data[i]['Distance'],
                        'Fikkah':response.data[i]['Fikkah'],
                        'Gender':response.data[i]['Gender'],
                        'Id':response.data[i].Id,
                        'Image':response.data[i]['Image'],
                        'Name':response.data[i]['Name'],
                        'PhoneNo':response.data[i]['PhoneNo'],
                        'Rating':response.data[i]['Rating'],
                        'Services':response.data[i]['Services'],
                        'rid':-1
                    }
                    list.push(val);

                 }
                console.log(list)
                history.push({
                    pathname: "/main/SearchDetailsClient",
                    state: {
                        data: location.state.data,
                        searchResult: response.data,
                        Location: location.state.Location,
                        fikkah: location.state.fikkah,
                        day: location.state.day,
                        time: location.state.time,
                        service: location.state.service,
                        latLng: location.state.latLng,
                    },
                });
            } else {
                alert("Error");
            }
        })
        .catch((error) => {
            alert(error);
        });
       }
    };
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                    <Image
                        onClick={() =>
                            history.push({
                                pathname: "/main/ClientDashboard",
                                state: {
                                    data: location.state.data,
                                },
                            })
                        }
                        src={Backbutton}
                        width={25}
                        height={25}
                    ></Image>
                    Search Aalim
                </NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img
                        src={Logout}
                        width={20}
                        height={20}
                        className="header"
                    ></img>

                    <img
                        className="header"
                        alt="logo"
                        src={download}
                        style={{
                            height: 40,
                            width: 40,
                        }}
                    ></img>
                </div>
            </Navbar>
            <Container className="client-card-design">
                <div className="mx-5">
                    <Card className="client-card-design shadow">
                        <div className="mt-4 mx-4">
                            <h5>Select Fikkah</h5>
                        </div>
                        <Row className="my-2 mx-2 ">
                            <Col>
                                <div>
                                    <Dropdown
                                        isOpen={isDropdownOpen}
                                        toggle={toggle}
                                    >
                                        <DropdownToggle caret>
                                            {location.state.fikkah
                                                ? location.state.fikkah
                                                : "Select an option"}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Hanfia"
                                                    )
                                                }
                                            >
                                                Hanfia
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Jafari"
                                                    )
                                                }
                                            >
                                                Jafari
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Maliki"
                                                    )
                                                }
                                            >
                                                Maliki
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Hanbali"
                                                    )
                                                }
                                            >
                                                Hanbali
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Zaidiyyah"
                                                    )
                                                }
                                            >
                                                Zaidiyyah
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Ibadiyyah"
                                                    )
                                                }
                                            >
                                                Ibadiyyah
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    DropwDownValueChange(
                                                        "Zahiriyah"
                                                    )
                                                }
                                            >
                                                Zahiriyah
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                        <div className="mt-4 mx-4">
                            <h5>Select Services</h5>
                        </div>
                        <Row className="my-2 mx-2 ">
                            <Col>
                                <div>
                                    <Dropdown
                                        isOpen={isServiceDropdownOpen}
                                        toggle={toggleService}
                                    >
                                        <DropdownToggle caret>
                                            {location.state.service
                                                ? location.state.service
                                                : "Select an option"}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem
                                                onClick={() =>
                                                    ServiceDropwDownValueChange(
                                                        "Nikkah"
                                                    )
                                                }
                                            >
                                                Nikkah
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    ServiceDropwDownValueChange(
                                                        "Kul"
                                                    )
                                                }
                                            >
                                                Kul
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    ServiceDropwDownValueChange(
                                                        "Ameen"
                                                    )
                                                }
                                            >
                                                Ameen
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    ServiceDropwDownValueChange(
                                                        "Nazrah"
                                                    )
                                                }
                                            >
                                                Nazrah
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={() =>
                                                    ServiceDropwDownValueChange(
                                                        "Dua"
                                                    )
                                                }
                                            >
                                                Dua
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>

                        <div className="mt-4 mx-4">
                            <h5>Select Start Time</h5>
                        </div>
                        <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isStartTimeDropdownOpen}
                                    toggle={StartTimeToggle}
                                >
                                    <DropdownToggle caret>
                                        {location.state.starttime  
                                            ? location.state.starttime
                                            : "Select a Start Time"}
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
                    <div className="mt-4 mx-4">
                            <h5>Select End Time</h5>
                        </div>
                        <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isEndTimeDropdownOpen}
                                    toggle={EndTimeToggle}
                                >
                                    <DropdownToggle caret>
                                        {location.state.endtime
                                            ? location.state.endtime 
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
                        <div className="mt-4 mx-4">
                            <h5>Select Date</h5>
                        </div>
                        {location.state.service == "Nazrah" ? (
                            <>
                                <div>
                                    <DateRangePicker
                                        ranges={location.state.daterange==null?selectedRange:location.state.daterange}
                                        onChange={handleSelect}
                                    />
                                </div>
                            </>
                        ) : (
                            <Row className="my-2 mx-2 ">
                                <Col>
                                    <div>
                                        <DatePicker
                                            selected={location.state.date}
                                            onChange={handleDateChange}
                                            customInput={<CustomInput />}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        <Row className="my-2 mx-2">
                            <Col>
                                <Button
                                    className="w-100 px-4 mt-2"
                                    onClick={() =>
                                        history.push({
                                            pathname: "/main/Googlemap",
                                            state: {
                                                data: location.state.data,
                                                page: "searchClient",
                                                Location:
                                                    location.state.Location,
                                                fikkah: location.state.fikkah,
                                                day: location.state.day,
                                                starttime: location.state.starttime,
                                                endtime: location.state.endtime,
                                                service: location.state.service,
                                                daterange:location.state.daterange,
                                                date:location.state.date
                                            },
                                        })
                                    }
                                >
                                    Get Direction
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-2 mx-4 ">
                            <div>
                                <CardTitle>
                                    {location.state == undefined
                                        ? Location
                                        : location.state.Location}
                                </CardTitle>
                            </div>
                        </Row>

                        <Row className="my-2 mx-2">
                            <Col>
                                <Button
                                    className="w-100 px-4 mt-2"
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Container>
        </>
    );
};
