import React, { useEffect, useState } from "react";
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
    CardSubtitle,
 
} from "reactstrap";




import Notification from "../../src/assets/img/Notification1.png";
import Logout from "../../src/assets/img/Logout1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { useHistory, useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import StarRatings from "react-star-ratings/build/star-ratings";
import { Image } from "react-bootstrap";
import axios from "axios";
export const SearchDetailsClient = () => {
    const location = useLocation();
    const history = useHistory();
    const [id,setId]=useState()
    
    const [search, setSearch] = useState(location.state.searchResult);

  
    
    console.log(search);
    function handleSendRequest(index){
        const data={
            'Id':0,
            'AalimId':search[index].Id,
            'ClientId':location.state.data.Id,
            'Location':location.state.Location,
            'StartTime':location.state.time.split('-')[0],
            'EndTime':location.state.time.split('-')[1],
            'Servicess':location.state.service,
            'Date':new Date().toISOString().slice(0, 10),
            'Status':"Pending"
            
        }
        console.log(data)
       
        axios.post('http://192.168.43.218/AalimSchduler/api/request/sendrequest',data).then(response => {
            if(response.data!="Error"){
              alert("Request Sent")
              const newSearch = [...search];
  newSearch[index].rid = response.data;
  setSearch(newSearch);
            }else{
              alert("Error")
            }
             
            })
            .catch(error => {
              alert(error);
            });

    }


    function handleCancelRequest(index){
        const data={
            'Id':search[index].rid,
            'AalimId':search[index].Id,
            'ClientId':location.state.data.Id,
            'Location':location.state.Location,
            'StartTime':location.state.time.split('-')[0],
            'EndTime':location.state.time.split('-')[1],
            'Servicess':location.state.service,
            'Date':new Date().toISOString().slice(0, 10),
            'Status':"Pending"
            
        }
        console.log(data)
       
        axios.post('http://192.168.43.218/AalimSchduler/api/request/cancelrequest',data).then(response => {
            if(response.data!="Error"){
              alert("Request Cancelled")
              const newSearch = [...search];
  newSearch[index].rid = -1;
  setSearch(newSearch);
            }else{
              alert("Error")
            }
             
            })
            .catch(error => {
              alert(error);
            });

    }
   
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                  
                        <Image onClick={() => 
                            history.push({
                                pathname: "/main/SearchClient",
                                state: {
                                    data: location.state.data,
                                    Location: location.state.Location,
                                    fikkah: location.state.fikkah,
                                    day: location.state.day,
                                    time: location.state.time,
                                    service: location.state.service,
                                    latLng:location.state.latLng
                                },
                            })
                         
                        } src={Backbutton} width={25} height={25}></Image>
                    
                    Search Result
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
            <Row>
            {search.map((e, index) => {
                return (
                    <Container className="container-center">
                        <div>
                            <Card className="client-search-card-design shadow">
                                <Col>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <h5 className="ml-4">Name: </h5>
                                                <CardSubtitle className="mt-0">
                                                    {e.Name}
                                                </CardSubtitle>
                                            </Row>
                                            <Row>
                                                <h5 className="ml-4">
                                                    Contact no:{" "}
                                                </h5>
                                                <CardSubtitle className="mt-0">
                                                    {e.PhoneNo}
                                                </CardSubtitle>
                                            </Row>
                                            <Row>
                                                <h5 className="ml-4">
                                                    Distance:{" "}
                                                </h5>
                                                <CardSubtitle className="mt-0">
                                                    {e.Distance + "Km"}
                                                </CardSubtitle>
                                            </Row>
                                        </Col>
                                        <div className="px-4">
                                            <Avatar
                                                style={{
                                                    height: 20,
                                                }}
                                                src={
                                                    "http://192.168.43.218/AalimSchduler/Content/Uploads/" +
                                                    e.Image
                                                }
                                                size="100"
                                                round={true}
                                            />
                                        </div>
                                    </Row>
                                    <Row>
                                        <h5 className="ml-4">Rating: </h5>
                                        <div>
                                            <StarRatings
                                                rating={e.Rating}
                                                starRatedColor="yellow"
                                                numberOfStars={5}
                                                name="rating"
                                                starDimension="20px"
                                                starSpacing="2px"
                                            ></StarRatings>
                                        </div>
                                    </Row>
                                    <Row>
                                       {
                                        e.rid!=-1?  <Button onClick={()=>handleCancelRequest(index)}>
                                       Cancel Request
                                    </Button>:
                                     <Button onClick={()=>handleSendRequest(index)}>
                                     Send Request
                                 </Button>
                                       }
                                    </Row>
                                </Col>
                            </Card>
                        </div>
                    </Container>
                );
            })}
            </Row>
           
        </>
    );
};
