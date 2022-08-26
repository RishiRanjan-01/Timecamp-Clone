import React from "react";
import { Route, Routes, Link} from "react-router-dom"
import MyCalendar from "./Calendar";
import "../style/global.scss"
import AddEvents from "./AddEvents";
import UpdateEvent from "./UpdateEvent";
import Calender from "./Calender"
// import Project from "./Project";

function App() {


  return (
    <>
    <div className="container">
      <div className="big-box">
            <div className="first-box">
                 <Calender/>
            </div>
            <div className="second-box">
                 <p>03 - 09 Jul, 2022 (0h 00m)</p>
            </div>
            <div className="third-box">
                    <p>Day</p>
            </div>
            <div className="fourth-box">
                 <p>Calender</p>
            </div>
      </div>

{/* 
      <div>
        <Project/>
      </div> */}



    <Routes>
      <Route  path="/" exact element={<MyCalendar/>} />
      <Route path="/events/add" element={<AddEvents/>}/>
      <Route path="/event/:id/update" element={<UpdateEvent/>}/>
    </Routes>
    </div>
    {/* <nav className="navbar navbar-light bg-light">
     
      <div className="container-fluid align-items-center">
        <Link className="navbar-brand ms-2" to="/">
          <h3>Agenda</h3>
        </Link>
        <span className="navbar-brand mb-0 h2 "><Link className="nav-link pe-0 " to={"/events/add"}>Add Event</Link></span>
      </div>

    </nav> */}
   
    </>
  );
}



export default (App)