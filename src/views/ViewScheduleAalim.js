
import React, { useState } from "react";

import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Card,
    CardTitle,
    Col,
    Button,
    FormGroup,
    Input,
    Label,
    Table,
} from "reactstrap";
import Logout from "../../src/assets/img/Logout1.png";
import Notification from "../../src/assets/img/Notification1.png";
import download from "../../src/assets/img/dumpyicon.png";
import Backbutton from "../../src/assets/img/Backbutton.png";
import { Image } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const ViewScheduleAalim = () => {
  const location = useLocation()
  const history=useHistory()
  let count=0
  let [schedule, SetSchedule] = useState([location.state.data.Schedules]);

  useEffect(async()=>{
   await axios.get('http://192.168.244.66/AalimSchduler/api/schedule/getschedule?id='+location.state.data.Id).then(
    (response)=>{
    
      SetSchedule(response.data)
    }
   )
  },[])
 
   
    return (
        <>
            <Navbar className="mb-3 bg" light>
                <NavbarBrand>
                <Image
                        onClick={()=>history.push(
                            {
                             pathname:"/main/Schedule",
                             state:{
                                 data:location.state.data
                             }
                            })}
                                src={Backbutton}
                                width={25}
                                height={25}
                            ></Image>
                  View Schedule</NavbarBrand>
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

            <Table>
      <thead>
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Day</th>
          <th>Status</th>
          <th>Name</th>
          <th>Hadiya</th>
          
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, index) => (
          <tr key={index}>
            <td>{item.StartTime}</td>
            <td>{item.EndTime}</td>
            <td>{item.Day}</td>
            <td>{item.Status}</td>
            <td>{item.name}</td>
            <td>{item.hadiya}</td>

          </tr>
        ))}
      </tbody>
    </Table>

          
           
        </>
    );
};

export default ViewScheduleAalim;



























// import React, { useState } from "react";

// import {
//     Navbar,
//     NavbarBrand,
//     Container,
//     Row,
//     Card,
//     CardTitle,
//     Col,
//     Button,
//     FormGroup,
//     Input,
//     Label,
// } from "reactstrap";
// import Logout from "../../src/assets/img/Logout1.png";
// import Notification from "../../src/assets/img/Notification1.png";
// import download from "../../src/assets/img/dumpyicon.png";
// import Backbutton from "../../src/assets/img/Backbutton.png";
// import { Image } from "react-bootstrap";
// import { useEffect } from "react";
// import axios from "axios";
// import { useHistory, useLocation } from "react-router-dom";

// const ViewScheduleAalim = () => {
//   const location = useLocation()
//   const history=useHistory()
//   let count=0
//   let [schedule, SetSchedule] = useState([location.state.data.Schedules]);

//   useEffect(async()=>{
//    await axios.get('http://192.168.244.66/AalimSchduler/api/schedule/getschedule?id='+location.state.data.Id).then(
//     (response)=>{
    
//       SetSchedule(response.data)
//     }
//    )
//   },[])
 
    
//     const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     const timeArray = [
//         "01:00-02:00",
//         "02:00-03:00",
//         "03:00-04:00",
//         "04:00-05:00",
//         "05:00-06:00",
//         "06:00-07:00",
//         "07:00-08:00",
//         "08:00-09:00",
//         "09:00-10:00",
//         "10:00-11:00",
//         "11:00-12:00",
//         "12:00-13:00",
//         "13:00-14:00",
//         "14:00-15:00",
//         "15:00-16:00",
//         "16:00-17:00",
//         "17:00-18:00",
//         "18:00-19:00",
//         "19:00-20:00",
//         "20:00-21:00",
//         "21:00-22:00",
//         "22:00-23:00",
//         "23:00-24:00",
//         "24:00-01:00",
//     ];
//     return (
//         <>
//             <Navbar className="mb-3 bg" light>
//                 <NavbarBrand>
//                 <Image
//                         onClick={()=>history.push(
//                             {
//                              pathname:"/main/Schedule",
//                              state:{
//                                  data:location.state.data
//                              }
//                             })}
//                                 src={Backbutton}
//                                 width={25}
//                                 height={25}
//                             ></Image>
//                   View Schedule</NavbarBrand>
//                 <div>
//                     <img src={Notification} width={20} height={20}></img>
//                     <img
//                         src={Logout}
//                         width={20}
//                         height={20}
//                         className="header"
//                     ></img>
//                     <img
//                         className="ml-4"
//                         alt="logo"
//                         src={download}
//                         style={{
//                             height: 40,
//                             width: 40,
//                         }}
//                     />
//                 </div>
//             </Navbar>

//             <Row>
//                 <Col></Col>
//                 {days.map((day, index) => {
//                     return (
//                         <>
//                             <Col key={index}>
//                               <div className="px-4  text-center">
//                               <p>{day}</p>
//                               </div>
                                
//                             </Col>
//                         </>
//                     );
//                 })}
//             </Row>

//             {timeArray.map((time, colindex) => {
//                 return (
//                     <Row>
//                       <div style={{width:"150px"}} className="text-center">
//                       <h5>{time}</h5>
//                       </div>
                        
//                         {days.map((day, rowindex) => {
//                             return (
//                                 <Col className="px-0 py-0">
//                                     <div
//                                     className="border px-4 py-3"
//                                     >
//                                       {
                                       
//                                         schedule.map((element,index) => { 
                                        
//                                           if(index==0){
//                                             count=0
//                                           }
//                                           if(element.Status=='Booked' && element.SlotId==rowindex + 7 * colindex){
//                                             count++
//                                             return (
//                                               <>
//                                               <h6 className="text-center"
//                                               >Booked</h6>
//                                               </>
//                                             )
//                                            }
//                                          else if(element.SlotId==rowindex + 7 * colindex){
//                                           count++
//                                           return (
//                                             <>
//                                             <h6 className="text-center"
//                                             >Free</h6>
//                                             </>
//                                           )
//                                          }
//                                          if(index>schedule.length-2){
//                                           if(count==0){
//                                             return(
//                                               <>
//                                               <h6 className="text-white">
//                                                 -
//                                               </h6>
//                                               </>
//                                             )
//                                           }
//                                          }
                                     
                                          
//                                         })
//                                       }
//                                       </div>
//                                 </Col>
//                             );
//                         })}
//                     </Row>
//                 );
//             })}
           
//         </>
//     );
// };

// export default ViewScheduleAalim;
