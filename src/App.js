import React , {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import {newStudent} from "./pages/new-studnet.js";
import {registeredstudent} from "./pages/registered-students.js";
import {Navbar} from "./components/navbar.js";
import { set } from 'mongoose';

function App() {

  
  const [fullname, setFullname] = useState("");
  const [emailaddress, setEmailaddress] = useState("");
  const [contact, setContact] = useState("");
  const [emergencycontact, setEmergencycontact] = useState("");
  const [shirtsize, setShirtsize] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path ="/" element = {<registeredstudent/>}/>
          <Route path ="/registered-students" element = {<registeredstudent/>}/>
          <Route path ="/new-studnet" element = {<newStudent />}/>
            </Routes>
      </Router>

      <main>

  <h1 className="title"> Register New Student</h1>
  <form>
  
<div className="form-group">
    
    <label htmlFor="fullname"> Fullname:</label>
    <input type="text" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
    
    </div>

    <div className="form-group">
    
    <label htmlFor="emailaddress"> Email:</label>
    <input type="text" id="emailaddress" value={emailaddress} onChange={(e) => setEmailaddress(e.target.value)}/>
    
    </div>

    <div className="form-group">
    
    <label htmlFor="contact"> Contact:</label>
    <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)}/>
    
    </div>

    <div className="form-group">
    
    <label htmlFor="emergencycontact"> Emergency Contact:</label>
    <input type="text" id="emergencycontact" value={emergencycontact} onChange={(e) => setEmergencycontact(e.target.value)}/>
    
    </div>
    <div className="form-group">
    
    <label htmlFor="shirtsize"> T-shirt Size:</label>
    <input type="text" id="shirtsize" value={shirtsize} onChange={(e) => setShirtsize(e.target.value)}/>
    
    </div>
    <div className="form-group">
    
    <label htmlFor="address"> Email:</label>
    <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
    
    </div>
    <div className="form-group">
    
    <label htmlFor="comment"> Email:</label>
    <input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
    
    </div>

    <button type="submit"> Submit</button>
    </form>
</main>
      
    </div>
  );
}

export default App;
