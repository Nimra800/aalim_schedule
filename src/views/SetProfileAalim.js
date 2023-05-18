import React, { useEffect, useState } from "react";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import Avatar from "react-avatar";
import {
    Button,
    Card,
    CardSubtitle,
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
import { Image } from "react-bootstrap";
export const SetProfileAalim = () => {
    const history = useHistory();
    const location = useLocation();
    const message = "";
    const [isDropdownOpen, setDropDownOpen] = useState(false);
    const [selectedFikkahValue, setSelectedFikkahValue] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState("");
    const [cnic, setCnic] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [distance, setDistance] = useState("");
    const [gender, setGender] = useState(false);
    const [nikkah, setNikkah] = useState(false);
    const [janaza, setJanaza] = useState(false);
    const [kul, setKul] = useState(false);
    const [ameen, setAmeen] = useState(false);
    const [dua, setDua] = useState(false);
    const [nazra, setnazra]= useState(false);

    const [nikkahHadiya, setNikkahHadiya] = useState("");
    const [janazaHadiya, setJanazaHadiya] = useState("");
    const [kulHadiya, setKulHadiya] = useState("");
    const [ameenHadiya, setAmeenHadiya] = useState("");
    const [duaHadiya, setDuaHadiya] = useState("");
    const [nazraHadiya, setNazraHadiya]= useState("");
   

    //change image from directory
    const handleImageSelection = (event) => {
        location.state.image = event.target.files[0];
        setSelectedImage(event.target.files[0]);
    };

    //dropdown open/close
    function toggle() {
        setDropDownOpen((prevState) => !prevState);
    }

    //select dropdown value
    function DropwDownValueChange(fikkah) {
        location.state.data.Fikkah = fikkah;
        setSelectedFikkahValue(fikkah);
    }

    //set Gender
    const handleGender = (e) => {
        location.state.data.Gender = e.target.value;
        setGender(e.target.value);
    };

    //setNikkah
    const handleNikkah = (e) => {
        location.state.nikkah = !nikkah;
        setNikkah(!nikkah);
    };

    //setJanaza
    const handleJanaza = (e) => {
        location.state.janaza = !janaza;
        setJanaza(!janaza);
    };
    //setDua
    const handleDua = (e) => {
        location.state.dua = !dua;
        setDua(!dua);
    };
    //setAmeen
    const handleAmeen = (e) => {
        location.state.ameen = !ameen;
        setAmeen(!ameen);
    };
    //setKul
    const handleKul = (e) => {
        location.state.kul = !kul;
        setKul(!kul);
    };

    const handleNazra = (e) => {
        location.state.nazra = !nazra;
        setKul(!nazra);
    };
    const avatarRef = useRef(null);

    const handleClick = () => {
        avatarRef.current.click();
    };
    //send image with json object on server using multipart request
    const handleSubmit = (e) => {
        e.preventDefault();
        location.state.data.Service = "";
        if (location.state.nikkah) {
            location.state.data.Service += "Nikkah ";
        }  if (location.state.dua) {
            location.state.data.Service += "Dua ";
        }  if (location.state.ameen) {
            location.state.data.Service += "Ameen ";
        }  if (location.state.kul) {
            location.state.data.Service += "Kul ";
        }  if (location.state.janaza) {
            location.state.data.Service += "Janaza ";
        } if (location.state.nazra) {
            location.state.data.Service += "Nazrah ";
        }

        location.state.data.hadiya = "";
        if (location.state.nikkah) {
            location.state.data.hadiya += location.state.nikkahHadiya+" " ;
        }  if (location.state.dua) {
            location.state.data.hadiya += location.state.duaHadiya+" ";
        }  if (location.state.ameen) {
            location.state.data.hadiya += location.state.ameenHadiya+" ";
        }  if (location.state.kul) {
            location.state.data.hadiya += location.state.kulHadiya+" ";
        }  if (location.state.janaza) {
            location.state.data.hadiya += location.state.janazaHadiya+" ";
        }
        if (location.state.nazra) {
            location.state.data.hadiya += location.state.nazraHadiya+" ";
        }
        const data = {
            Id: location.state.data.Id,
            Name: location.state.data.Name,
            Cnic: location.state.data.Cnic,
            Phonenumber: location.state.data.Phonenumber,
            Fikkah: location.state.data.Fikkah,
            Password: location.state.data.Password,
            Distance: location.state.data.Distance,
            Gender: location.state.data.Gender,
            Location: location.state.data.Location,
            Email: location.state.data.Email,
            Image: "",
            Rating: location.state.data.Rating==null?0:location.state.data.Rating,
            LatLng: location.state.data.LatLng,
        };
        if(location.state.image==null){
            console.log(location.state.data.Image)
            location.state.image=location.state.data.Image
        }
        console.log(location.state.data.Service)
        console.log(location.state.data.hadiya)
        const formData = new FormData();
        formData.append("image", location.state.image);
        formData.append("data", JSON.stringify(data));
        formData.append("service", location.state.data.Service);
        formData.append("hadia", location.state.data.hadiya);
        axios
            .post(
                "http://192.168.43.218/AalimSchduler/api/AalimDetails/setProfile",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => {
                location.state.data = response.data;
                alert("Updated");
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
               
                        <Image
                        onClick={()=>history.push(
                            {
                             pathname:"/main/profileAalim",
                             state:{
                                 data:location.state.data
                             }
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
                <Card className="profile-card-design shadow ">
                    {/* Image Avatar Div*/}
                    <div>
                        {location.state.image == null &&
                            location.state.data.Image == null && (
                                <FormGroup>
                                    <Avatar
                                        name="Nam"
                                        round
                                        onClick={handleClick}
                                    />
                                </FormGroup>
                            )}
                        {location.state.image && (
                            <Avatar
                                onClick={handleClick}
                                src={URL.createObjectURL(location.state.image)}
                                size="100"
                                round={true}
                            />
                        )}

                        {location.state.data.Image &&
                            location.state.image == null && (
                                <Avatar
                                    onClick={handleClick}
                                    src={
                                        "http://192.168.43.218/AalimSchduler/Content/Uploads/" +
                                        location.state.data.Image
                                    }
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
                                    onChange={(e) => {
                                        location.state.data.Name =
                                            e.target.value;
                                        setName(e.target.value);
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
                                    onChange={(e) => {
                                        location.state.data.Cnic =
                                            e.target.value;
                                        setCnic(e.target.value);
                                    }}
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
                                    onChange={(e) => {
                                        location.state.data.Phonenumber =
                                            e.target.value;
                                        setPhoneno(e.target.value);
                                    }}
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
                    <Row className="my-2 mx-2">
                        <Col>
                            <div>
                                <Input
                                    placeholder="Distance"
                                    value={location.state.data.Distance}
                                    onChange={(e) => {
                                        location.state.data.Distance =
                                            e.target.value;
                                        setDistance(e.target.value);
                                    }}
                                ></Input>
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
                                checked={
                                    location.state.data.Gender === "Female"
                                }
                            />
                            Female
                        </fieldset>
                    </Row>
                    <Row className="my-2 mx-2">
                        <Col>
                            <Button
                                className="w-100 px-4 mt-2"
                                onClick={() => {
                                  
                                    history.push({
                                        pathname: "/main/Googlemap",
                                        state: {
                                            data: location.state.data,
                                            page: "aalim",
                                            nikkah:location.state.nikkah,
                                            janaza:location.state.janaza,
                                            kul:location.state.kul,
                                            dua:location.state.dua,
                                            ameen:location.state.ameen,
                                            image: selectedImage,
                                        },
                                    });
                                }}
                            >
                                Get Direction
                            </Button>
                        </Col>
                    </Row>

                    <div>
                        <CardTitle>{location.state.data.Location}</CardTitle>
                    </div>
                    <div>
                        <div className="text-profile">
                            <h5>Services</h5>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                       location.state.nikkah
                                    }
                                    onChange={handleNikkah}
                                />
                                Nikkah
                            </label>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                       location.state.janaza
                                    }
                                    onChange={handleJanaza}
                                />
                                Janaza
                            </label>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                       location.state.dua
                                    }
                                    onChange={handleDua}
                                />
                                Dua
                            </label>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                        location.state.kul
                                    }
                                    onChange={handleKul}
                                />
                                Kul
                            </label>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                       location.state.ameen
                                    }
                                    onChange={handleAmeen}
                                />
                                Ameen
                            </label>
                        </div>
                        <div className="radio-profile">
                            <label>
                                <Input
                                    type="checkbox"
                                    checked={
                                       location.state.nazra
                                    }
                                    onChange={handleNazra}
                                />
                                Nazra
                            </label>
                        </div>
                    </div>
                    {
                         location.state.ameen &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="Ameen"
                                        value={location.state.ameenHadiya}
                                        onChange={(e) => {
                                            location.state.ameenHadiya =
                                                e.target.value;
                                            setAmeenHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                     {
                         location.state.nikkah &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="Nikkah"
                                        value={location.state.nikkahHadiya}
                                        onChange={(e) => {
                                            location.state.nikkahHadiya =
                                                e.target.value;
                                            setNikkahHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                    {
                         location.state.kul &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="kul"
                                        value={location.state.kulHadiya}
                                        onChange={(e) => {
                                            location.state.kulHadiya =
                                                e.target.value;
                                            setKulHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                    {
                         location.state.janaza &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="janaza"
                                        value={location.state.janazaHadiya}
                                        onChange={(e) => {
                                            location.state.janazaHadiya =
                                                e.target.value;
                                            setJanazaHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                    {
                         location.state.dua &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="Dua"
                                        value={location.state.duaHadiya}
                                        onChange={(e) => {
                                            location.state.duaHadiya =
                                                e.target.value;
                                            setDuaHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                     {
                         location.state.nazra &&(
                            <Row className="my-2 mx-2">
                            <Col>
                                <div>
                                    <Input
                                        placeholder="Nazra"
                                        value={location.state.nazraHadiya}
                                        onChange={(e) => {
                                            location.state.nazraHadiya =
                                                e.target.value;
                                            setNazraHadiya(e.target.value);
                                        }}
                                    ></Input>
                                </div>
                            </Col>
                        </Row>
                         )
                    }
                    <Row className="my-2 mx-2">
                        <Col>
                            <Button
                                className="w-100 px-4 mt-2"
                                onClick={handleSubmit}
                            >
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
};
