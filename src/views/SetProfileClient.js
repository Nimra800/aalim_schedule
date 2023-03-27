import React, { useEffect, useState } from "react";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import Avatar from "react-avatar";
import {
    Button,
    Card,
    CardTitle,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    FormGroup,
    Input,
    Label,
    Navbar,
    NavbarBrand,
    Row,
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
export const SetProfileClient = () => {
    const history = useHistory();
    const location = useLocation();
    const message = "";
    const [isDropdownOpen, setDropDownOpen] = useState(false);
    const [selectedFikkahValue, setSelectedFikkahValue] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState("");
    const [cnic, setCnic] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [gender, setGender] = useState(false);
    
    
    

    //change image from directory
    const handleImageSelection = (event) => {
        location.state.image = event.target.files[0]
        setSelectedImage(event.target.files[0]);
    };

    //dropdown open/close
    function toggle() {
        setDropDownOpen((prevState) => !prevState);
    }

    //select dropdown value
    function DropwDownValueChange(fikkah) {
        location.state.data.Fikkah=fikkah
        setSelectedFikkahValue(fikkah);
    }

    //set Gender
    const handleGender = (e) => {
        location.state.data.Gender = e.target.value;
        setGender(e.target.value);
    };

    
    const avatarRef = useRef(null);

    const handleClick = () => {
        avatarRef.current.click();
    };
   //API send image with json object on server using multipart request
    const handleSubmit = (e)=>{
        e.preventDefault()
        
       const data={
        'Id':location.state.data.Id,
        'Name':location.state.data.Name,
        'Cnic':location.state.data.Cnic,
        'Phonenumber':location.state.data.Phonenumber,
        'Fikkah':location.state.data.Fikkah,
        'Password':location.state.data.Password,
        'Gender':location.state.data.Gender,
        'Location':location.state.data.Location,
        'Email':location.state.data.Email,
        'Image':"",
        'Rating':location.state.data.Rating,
        'LatLng':location.state.data.LatLng
       }
       


       const formData = new FormData();
       formData.append('image', selectedImage); 
       formData.append('data', JSON.stringify(data));
       axios.post( "http://192.168.43.218/AalimSchduler/api/ClientDetails/setProfile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        location.state.data = response.data
        alert("Updated");
      })
      .catch(error => {
        alert(error);
      });

    }

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                <Image  onClick={() => 
                            history.push({
                                pathname: "/main/ProfileClient",
                                state: {
                                    data: location.state.data,
                                },
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
                    Set Profile</NavbarBrand>
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
            <Container className="container-design">
                <Card className="client-profile-card-design shadow ">
                    {/* Image Avatar Div*/}
                    <div>
                        {
                        location.state.image == null && location.state.data.Image==null && (
                            <FormGroup>
                                <Avatar
                                    name="Nam"
                                    round
                                    onClick={handleClick}
                                />
                            </FormGroup>
                        )}
                        {
                            
                        location.state.image  && (
                            <Avatar
                                onClick={handleClick}
                                src={URL.createObjectURL(location.state.image)}
                                size="100"
                                round={true}
                            />
                        )}

{

                          location.state.data.Image && location.state.image==null && (
                                <Avatar
                                    onClick={handleClick}
                                    src={"http://192.168.43.218/AalimSchduler/Content/Uploads/"+location.state.data.Image}
                                    size="100"
                                    round={true}
                                />
                            )}

                        
                      
                        <input
                            type="file"
                            name="image"
                            id="image"
                            ref={avatarRef}
                            hidden
                            onChange={handleImageSelection}
                        />
                    </div>
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Input
                                    placeholder="Name"
                                    value={location.state.data.Name}
                                    onChange={(e)=>{
                                        location.state.data.Name = e.target.value
                                        setName(e.target.value)
                                    }}
                                ></Input>
                            </div>
                        </Col>
                    </Row>

                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Input
                                    placeholder="Cnic"
                                    value={location.state.data.Cnic}
                                    onChange={(e) =>{ 
                                        location.state.data.Cnic = e.target.value
                                        setCnic(e.target.value)}}
                                ></Input>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Input
                                    placeholder="Phoneno"
                                    value={location.state.data.Phonenumber}
                                    onChange={(e) =>{ 
                                        location.state.data.Phonenumber = e.target.value
                                        setPhoneno(e.target.value)}}
                                ></Input>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Dropdown
                                    isOpen={isDropdownOpen}
                                    toggle={toggle}
                                >
                                    <DropdownToggle caret>
                                        {location.state.data.Fikkah
                                            ? location.state.data.Fikkah
                                            : "Select an option"}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem
                                            onClick={() =>
                                                DropwDownValueChange("Hanfia")
                                            }
                                        >
                                            Hanfia
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() =>
                                                DropwDownValueChange("Jafari")
                                            }
                                        >
                                            Jafari
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() =>
                                                DropwDownValueChange("Maliki")
                                            }
                                        >
                                            Maliki
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() =>
                                                DropwDownValueChange("Hanbali")
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
                   
                    <div className="text-profile">
                        <h5>Gender</h5>
                    </div>
                    <Row className="radio-profile">
                        <fieldset>
                            <input
                                className="mr-2"
                                value="Male"
                                type="radio"
                                onChange={handleGender}
                                checked={location.state.data.Gender === "Male"}
                            />
                            Male
                            <input
                                className="mx-2"
                                value="Female"
                                type="radio"
                                onChange={handleGender}
                                checked={location.state.data.Gender === "Female"}
                            />
                            Female
                        </fieldset>
                    </Row>
                    <Row className="my-2 mx-2">
                        <Col>
                            <Button
                                className="w-100 px-4 mt-2"
                                onClick={() =>{
                                    location.state.data.Name=name
                                    history.push({
                                        pathname: "/main/Googlemap",
                                        state: {
                                            data: location.state.data,
                                            page:"client",
                                            
                                            image:selectedImage
                                        },
                                    })
                                }
                                }
                            >
                                Get Direction
                            </Button>
                        </Col>
                    </Row>

                    <div>
                        <CardTitle>{location.state.data.Location}</CardTitle>
                    </div>
                    
                        
                    
                    <Row className="my-2 mx-2">
                        <Col>
                            <Button className="w-100 px-4 mt-2" onClick={handleSubmit}>Save</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
};
