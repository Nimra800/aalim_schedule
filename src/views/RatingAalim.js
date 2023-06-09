import React from "react";
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
import StarRatings from "react-star-ratings/build/star-ratings";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
export const RatingAalim = () => {
    const [rating, setRating] = useState(0);
    const location = useLocation()
    const history = useHistory()

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

function handleSave(){
     axios.get('http://192.168.244.66/AalimSchduler/api/task/completependingtask?id='+location.state.taskId+"&rating="+rating).then((response)=>{
            if(response.data!="Error")
            {
            //     let newList = [...lstpendingtask];
            //   for(let i=0;i<lstpendingtask.length;i++){
            //     if(lstpendingtask[i].Id==id){
            //         delete newList[i]
            //     }
            //   }
            // setListPendingTask(newList);
                alert('Task Completed')
                history.push({
                    pathname:'/main/viewtask',
                    state:{
                        data:location.state.data
                    }
                })
            }else{
                alert('Error')
            }
        })
}

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand href="/">
                <button>
                        <img
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></img>
                        </button>
                    Rating</NavbarBrand>
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
            <Container className="container-center">
                <Col>
                    <Card>
                        <Row className="margin-bottom">
                            <CardTitle className="ml-5 pt-1">
                                Rating:
                            </CardTitle>
                            <StarRatings
                                rating={rating}
                                starRatedColor="yellow"
                                changeRating={changeRating}
                                numberOfStars={5}
                                name="rating"
                                starDimension="20px"
                                starSpacing="2px"
                            ></StarRatings>
                        </Row>
                        <Row className="mx-5 my-3" onClick={handleSave}>
                            <Button className="btn-confirm">Submit</Button>
                        </Row>
                    </Card>
                </Col>
            </Container>
        </>
    );
};
