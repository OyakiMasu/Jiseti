import '../styles/Report.css'
import React, { useState } from "react";

const Report = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportObj = {
      description,
      title,
      location,
      image,
      status,
      type,
    };
    console.log(reportObj);
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocation(`${lat}, ${long}`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
     <center><h2 className="reporttitle">Add a Report</h2></center>
      <form onSubmit={handleSubmit}>
       <center>
            <label className="labelinput">
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                  <option value="red_flag">Red Flag</option>
                  <option value="intervention">Intervention</option>
                </select>
              </label>
              <br/>
            <label className="addtitle">
            title:
              <input placeholder="Add title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <br/>

            <label>
              Description:
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </label>
            <br/>

            <label>
              Location:
              <input placeholder="Add Lat and Long coordinates" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required/>
              <button type="button" onClick={handleLocationClick}>Use current location</button>
            </label>
            <br/>
            <label>
              Image:
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            </label>
            <br/>
            <label>
              STATUS:
              <br />
              <input type="radio" name="status" value="under investigation" onChange={(e) => setStatus(e.target.value)}required/> Under investigation
              <br />
              <input type="radio" name="status" value="rejected" onChange={(e) => setStatus(e.target.value)} /> Rejected
              <br />
              <input type="radio" name="status" value="resolved" onChange={(e) => setStatus(e.target.value)} /> Resolved
            </label>
            <br />
            <button type="submit">Submit</button>
        </center>

      </form>
      <a className='' href='/dashboard'>My Reports</a>

      {/* Display submitted form data below with edit and delete buttons */}
      {/* TODO: Implement display and functionality for edit and delete buttons */}
    </div>
  );
};

export default Report;




