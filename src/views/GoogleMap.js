import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GlobalGoogleMap from "./GlobalGoogleMap";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const GoogleMap = (props) => {
    const history = useHistory();
    const location = useLocation()
    const [currentPosition, setCurrentPosition] = useState({
        lat: 33.6428,
        lng: 73.0706,
    });
    const[latlng,setlatlng]=useState("")
    const handleBackClick = () => {
        console.log( location.state.fikkah )
        if(location.state.page=="client"){
            history.push({
                pathname:"/main/SetProfileClient",
                                   state:{
                                    data:location.state.data,
                                    image:location.state.image
                                   }
            });
        }else if(location.state.page=="searchClient"){
           
            history.push({
                pathname:"/main/SearchClient",
                                   state:{
                                    data:location.state.data,
                                    Location:location.state.Location,
                                    latLng:latlng,
                                    fikkah:location.state.fikkah,
                                    day:location.state.day,
                                    time:location.state.time,
                                    service:location.state.service
                                   }
            });
        }
        else{
            console.log(location.state.data)
            history.push({
                pathname:"/main/SetProfileAalim",
                                   state:{
                                    data:location.state.data,
                                    nikkah:location.state.nikkah,
                                    janaza:location.state.janaza,
                                    kul:location.state.kul,
                                    dua:location.state.dua,
                                    ameen:location.state.ameen,
                                    image:location.state.image,
                                    Location:location.state.Location,
                                    latLng: location.state.data.LatLng,
                                   }
            });
        }
       
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });

            const geocoder = new props.google.maps.Geocoder();
            geocoder.geocode(
                {
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                },
                (results, status) => {
                    if (status === "OK" && location.state.page!="searchClient") {
                        setAddress(results[0].formatted_address);
                        location.state.data.Location=results[0].formatted_address
                        location.state.data.LatLng = position.coords.latitude.toString()+","+position.coords.longitude.toString()
                       
                        GlobalGoogleMap.someProp = results[0].formatted_address;
                        Object.freeze(GlobalGoogleMap);
                    }else if(status === "OK" && location.state.page=="searchClient"){
                        setAddress(results[0].formatted_address);
                        location.state.Location=results[0].formatted_address
                        setlatlng(position.coords.latitude.toString()+","+position.coords.longitude.toString())
                        GlobalGoogleMap.someProp = results[0].formatted_address;
                    }
                    
                    else {
                        console.log(
                            "Geocode was not successful for the following reason: " +
                                status
                        );
                    }
                }
            );
        });
    }, []);
    const [address, setAddress] = useState("");

    const handleMapClick = (mapProps, map, event) => {
        const { latLng } = event;
        const newLat = latLng.lat();
        const newLng = latLng.lng();
        setCurrentPosition({ lat: newLat, lng: newLng });

        const geocoder = new props.google.maps.Geocoder();
        geocoder.geocode(
            { location: { lat: newLat, lng: newLng } },
            (results, status) => {
                            
                if (status === "OK" && location.state.page!="searchClient") {
                    setAddress(results[0].formatted_address);
                    GlobalGoogleMap.someProp = results[0].formatted_address;
                    Object.freeze(GlobalGoogleMap);
                    location.state.data.Location=results[0].formatted_address
                    location.state.data.LatLng = newLat.toString()+","+newLng.toString()
                   
                }else if(status === "OK" && location.state.page=="searchClient"){
                    setAddress(results[0].formatted_address);
                    location.state.Location=results[0].formatted_address
                  setlatlng(newLat.toString()+","+newLng.toString())
                    GlobalGoogleMap.someProp = results[0].formatted_address;
                } else {
                    console.log(
                        "Geocode was not successful for the following reason: " +
                            status
                    );
                }
            }
        );
    };
    return (
        <>
            <Row>
                <Col className="map">
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={currentPosition}
                        onClick={handleMapClick}
                        style={{ width: "80%", margin: "auto" }}
                    >
                        <Marker position={currentPosition} />
                    </Map>

                   <Row className="mx-3">
                   <Button className="btn-map" onClick={handleBackClick}>
                        Save
                    </Button>
                   </Row>
                </Col>
            </Row>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyBSs9-6oQqOeG7FwY6-tCCEAggHFKuVTds",
})(GoogleMap);