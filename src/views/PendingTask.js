import React, { useEffect, useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    Button,
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

export const PendingTask=()=> {
    const history=useHistory()
    const location=useLocation()
    const [lstpendingtask,setListPendingTask]=useState([])


    const  handleComplete=(id)=>{
        axios.get('http://192.168.43.218/AalimSchduler/api/task/completependingtask?id='+id).then((response)=>{
            if(response.data!="Error")
            {
                let newList = [...lstpendingtask];
              for(let i=0;i<lstpendingtask.length;i++){
                if(lstpendingtask[i].Id==id){
                    delete newList[i]
                }
              }
            setListPendingTask(newList);
                alert('Task Completed')
            }else{
                alert('Error')
            }
        })
    }

    useEffect(()=>{
        axios.get("http://192.168.43.218/AalimSchduler/api/task/getpendingtaskdetails?aalimId="+
            location.state.data.Id).then((response)=>{
                console.log(response.data)
                let newList = [...lstpendingtask];
                newList = response.data;
                setListPendingTask(newList);
            })
       },[])
   
  return (
    <>
    <Navbar className="mb-3 bg" light>
        <NavbarBrand>
        <Image  onClick={() => 
                            history.push({
                                pathname: "/main/ViewTask",
                                state: {
                                    data: location.state.data,
                                },
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
            PendingTask
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
   {
    lstpendingtask.map((e,index)=>{
        return (
            lstpendingtask.length==0? <>
            <h1 className="mx-3">
             No Task Found
            </h1>
            </>:
          <Col className='sm-6'> 
                <Card className="pandingtask-card shadow" >
                    <Row className="margin-bottom">
                        <CardTitle className="px-2">Client Name:</CardTitle>
                        <CardTitle>{e.Name}</CardTitle>
                    </Row>
                    <Row>
                    <CardTitle className="px-2">Location:</CardTitle>
                        <CardTitle>{e.Location}</CardTitle>
                    </Row>
                    <Row className="margin-bottom">
                        <CardTitle className="px-2">
                            Time:From {e.StartTime} To: {e.EndTime}
                        </CardTitle>
                    </Row>
                    <Row>
                    <CardTitle className="px-2">Status:</CardTitle>
                        <CardTitle>{e.Status}</CardTitle>
                    </Row>
                    <Row>
                    <CardTitle className="px-2">Date:</CardTitle>
                        <CardTitle>{e.Date.split('T')[0]}</CardTitle>
                    </Row>
                        <Row className='mr-5'>
                        <Button className="btn-confirm" onClick={()=>handleComplete(e.Id)}>Confirm</Button>
                    
                    </Row>
                        </Card>
                        
           </Col>
        )
    })
   }
    </>
  )
}
