import React from "react";
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    CardSubtitle,
    Button,
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import StarRatings from "react-star-ratings/build/star-ratings";
import { Image } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
export const Request = () => {
    const [rating, setRating] = useState(0);
    const location = useLocation()
    const [lstrequest,setListRequest]=useState([])
    const history=useHistory()

    const  handleAccept=(id)=>{
        console.log(id)
        axios.get('http://192.168.244.66/AalimSchduler/api/request/acceptrequest?id='+id).then((response)=>{
            if(response.data!="Error")
            {
                let newList = [...lstrequest];
              for(let i=0;i<lstrequest.length;i++){
                if(lstrequest[i].Id==id){
                    delete newList[i]
                }
              }
            setListRequest(newList);
                alert('Request Accepted')
            }else{
                alert('Error')
            }
        })
    }

    const  handleReject=(id)=>{
        axios.get('http://192.168.244.66/AalimSchduler/api/request/rejectrequest?id='+id).then((response)=>{
            if(response.data!="Error")
            {
                let newList = [...lstrequest];
              for(let i=0;i<lstrequest.length;i++){
                if(lstrequest[i].Id==id){
                    delete newList[i]
                }
              }
            setListRequest(newList);
                alert('Request Rejected')
            }else{
                alert('Error')
            }
        })
    }


   useEffect(()=>{
    axios.get("http://192.168.244.66/AalimSchduler/api/request/requestDetails?aalimId="+
        location.state.data.Id).then((response)=>{
            console.log(response.data)
            let newList = [...lstrequest];
            newList = response.data;
            setListRequest(newList);
        })
   },[])

    return (
        <>
            <Navbar className="mb-3 bg" light>
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
                    Request</NavbarBrand>
                <div>
                    <img src={Notification} width={20} height={20}></img>
                    <img onClick={
                                ()=>history.push('/auth/signin')
                            }
                        src={Logout}
                        width={20}
                        height={20}
                        className="ml-4"
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

           {
           lstrequest.length==0? <>
           <h1 className="mx-3">
            No Request Found
           </h1>
           </> :
           lstrequest.map((e,index)=>{
            
            return (
                lstrequest.length==0? <>
                <h1 className="mx-3">
                 No Request Found
                </h1>
                </> :
                <Col className="sm-6">
                   
              
                    <Card className="request-card shadow">
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Client Name:</CardTitle>
                            <CardTitle>{e.Name}</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Requested Service:
                            </CardTitle>
                            <CardTitle>{e.Servicess}</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">
                                Previous Service:
                            </CardTitle>

                            <StarRatings
                                rating={e.Rating??0}
                                starRatedColor="yellow"
                              
                                numberOfStars={5}
                                name="rating"
                                starDimension="20px"
                                starSpacing="2px"
                            ></StarRatings>
                        </Row>
                       
                        <hr></hr>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Time:</CardTitle>
                            <CardTitle>From {e.StartTime} To {e.EndTime}</CardTitle>
                        </Row>
                        <Row className="margin-bottom">
                            <CardTitle className="px-2">Date:</CardTitle>
                            <CardTitle>{e.Date}</CardTitle>
                        </Row>
                        <Row className="mb-2">
                            <CardTitle className="px-2">Address:</CardTitle>
                            <CardTitle>{e.Location}</CardTitle>
                        </Row>

                            

                        <Row className="mr-5">
                            <Button className="btn-accept" onClick={()=>handleAccept(e.Id)}>Accept</Button>
                            <Button className="btn-reject" onClick={()=>handleReject(e.Id)}>Reject</Button>
                        </Row>
                        
                    </Card>
                </Col>
          
            )
           })}
           </Row>
        </>
    );
};
