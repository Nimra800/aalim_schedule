import React from "react";
import { Navbar, NavbarBrand, Container,Row,Card,CardTitle,} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import editprofile from "../../src/assets/img/editprofile.png";
import viewprofile from "../../src/assets/img/viewprofile.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
export const ProfileAalim = () => {
    const history = useHistory()
    const location = useLocation()
    useEffect(()=>{
        console.log(location.state.data)
       if(location.state.data.Services!=null){
        location.state.data.Services.map((e)=>{
            if(e.name=='Nikkah'){
                location.state.nikkah=true
                location.state.nikkahHadiya=e.hadiya
            }if(e.name=='Dua'){
                location.state.dua=true
                location.state.duaHadiya=e.hadiya
            }if(e.name=='Kul'){
                location.state.kul=true
                location.state.kulHadiya=e.hadiya
            }if(e.name=='Ameen'){
                location.state.ameen=true
                location.state.ameenHadiya=e.hadiya
            }if(e.name=='Janaza'){
                location.state.janaza=true
                location.state.janazaHadiya=e.hadiya
            }if(e.name=='Nazrah'){
                console.log('a')
                location.state.nazra=true
                location.state.nazraHadiya=e.hadiya
            }
            console.log(location.state.nikkah)
        })
       }
    },[])
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
            Profile
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
    <Container className="container-center">
    <Row>
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push(
                                {
                                    pathname:"/main/ViewProfileAalim",
                                    state:{
                                        data:location.state.data
                                    }
                                }
                            )}>
                                <div>
                                    <img
                                        src={viewprofile}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2">
                                    View Profile
                                </CardTitle>
                            </Card>
                        </div>
                        
                        <div className="mx-5">
                            <Card className="card-design shadow" onClick={()=>history.push({
                                pathname:"/main/SetProfileAalim",
                               state:{
                                data:location.state.data,
                                nikkah:location.state.nikkah,
                                kul:location.state.kul,
                                janaza:location.state.janaza,
                                dua:location.state.dua,
                                ameen:location.state.ameen,
                                nazra:location.state.nazra,
                                nikkahHadiya:location.state.nikkahHadiya,
                                kulHadiya:location.state.kulHadiya,
                                janazaHadiya:location.state.janazaHadiya,
                                duaHadiya:location.state.duaHadiya,
                                ameenHadiya:location.state.ameenHadiya,
                                nazraHadiya:location.state.nazraHadiya


                               }
                            })}>
                                <div>
                                    <img
                                        src={editprofile}
                                        height={100}
                                        width={100}
                                    ></img>
                                </div>
                                <CardTitle tag="h5" className="my-2" >
                                    Set Profile
                                </CardTitle>
                            </Card>
                        </div>
                        </Row>
                        
                        </Container>
        </>
    )

}
