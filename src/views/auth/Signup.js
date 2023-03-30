
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Card, CardBody, CardTitle, Col, Container, Input, Row } from 'reactstrap'
import download from "../../assets/img/1.png"
const Signup=() =>{
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data ={
      "Id":0,
      "Email":email,
      "Password":password,
      "Role":userValue
    }

    axios
        .post(
            "http://192.168.43.218/AalimSchduler/api/register/signup",data
        )
        .then((response) => {
            if (response.data["Schedules"] == undefined) {
                history.push({
                  pathname:"/main/clientdashboard",
                  state : {
                    data:response.data
                  }
                });
            } else if (response.data == "Not Exists") {
                alert(response.data);
            } else if (response.data == "Error") {
                alert(response.data);
            } else {
              history.push({pathname:"/main/aalimdashboard", state : {
                data:response.data
              }});
            }
        });
};
 
    const [userValue, setUserValue] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChange = e => {
      setUserValue(e.target.value);
    };

return(
    <React.Fragment>
         <Container fluid>
    <Row>
    <Col md={4} className='split left' >
       
        <div className='centered img'>
        <img  src={download} height={300} width={300} ></img>
        </div>

        
</Col>

<Col md={1}></Col>

<Col md={5} className='split right' >
<Card className='shadow centered w-75'  >
<CardTitle tag="h5" className="my-2">
      SignUp
    </CardTitle>
  <CardBody>

   
    <Row className="my-2">
      <Col>
      <div>
      <Input  placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} ></Input>
      </div>
      </Col>
    </Row>
    <Row className="my-2">
      <Col>
      <div>
      <Input  placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} ></Input>
      </div>
      </Col>
    </Row>

    <Row className="my-2 justify-content-center ">
    <fieldset>
          Aalim
          <input className='mr-4'
            value="Aalim"
            type="radio"
            onChange={handleChange}
            checked={userValue === "Aalim"}
           
          />
          Client
          <input
            value="Client"
            type="radio"
            onChange={handleChange}
            checked={userValue === "Client"}
           
          />
        </fieldset>
    </Row>
  
       
     

        

    <Button className='w-75 my-1' onClick={handleSubmit}>
      SignUp
    </Button>
    <Row>
      <Col>
      <div>
     <span>Already have account you ?</span><Link to="/auth/signin"><strong> SignIn</strong></Link>
   </div>
      </Col>
    </Row>
   
   
   
    
   
   
  
   
  </CardBody>
</Card>
    
</Col>
    </Row>
       
         </Container>
     
    </React.Fragment>
)

}
export default Signup