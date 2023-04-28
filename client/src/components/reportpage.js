import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import '../styles/Report.css'

const Report = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("Red Flag")
  const { userId } = useContext(AuthContext);
  const storedId = localStorage.getItem("userId")
  const token = localStorage.getItem('token')

  // console.log(token)?

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reportObj = {
      type,
      title,
      description,
      latitude: location.split(',')[0],
      longitude: location.split(',')[1],
      image_url: image,
      status,
      user_id: storedId // add dynamic user id
    };
    // console.log("userId: ", userId);
    console.log(reportObj);

    let endpoint;
    if (type === "Red Flag") {
      endpoint = "http://localhost:3000/red_flag_records";
    } else if (type === "intervention") {
      endpoint = "http://localhost:3000/intervention_records";
    } else {
      // handle invalid report type
      return;
    }

    fetch(endpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
  
      body: JSON.stringify(reportObj)
    })

    .then(response => {
      console.log("response:", response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("data:", data);
      // TODO: Display success message to the user
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // TODO: Display error message to the user
    });
  };
    const handleLocationClick = (location) => {
      const encodedLocation = encodeURIComponent(location);
      const apiKey = "a84c1d6b2b8045a7b07115047e69f8be";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const { lat, lng } = data.results[0].geometry;
          setLocation(`${lat}, ${lng}`);
        })
        .catch(error => console.log(error));
    };
  return (
    <div>
      <center>
      <h2>Add a Report</h2>
      <a className='reportlink' href='/myreports'>My Reports</a>
      </center>

      <div className="reportcard"> 
          <form className="reportform" onSubmit={handleSubmit}>
          <label className="labelCo">
              Type:
              <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="Red Flag">Red Flag</option>
                <option value="intervention">Intervention</option>
              </select>
            </label>
            <br/>
            <label className="labelCo">
            Title:
              <input placeholder="Add title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <br/>
            <label className="labelCo">
              Description:
              <textarea value={description}
              onChange={(e) => setDescription(e.target.value)} required/>
            </label>
            <br/>
            <label className="labelCo">
            Location:
            <input placeholder="Add location"
            type="text" value={location}
            onChange={(e) => setLocation(e.target.value)} required/>
            <button type="button" onClick={() => handleLocationClick(location)}>Geocode</button>
            </label>
            <br/>
            <label className="labelCo">
              Image:
              <input placeholder="Add image url" type="text"
              onChange={(e) => setImage(e.target.value)} />
            </label>
            
            <label className="Radio">
              STATUS:
              <input className="Radio" type="radio" name="status" value="under_investigation" onChange={(e) => setStatus(e.target.value)}required/> Under Investigation
              <input className="Radio" type="radio" name="status" value="rejected" onChange={(e) => setStatus(e.target.value)} /> Rejected
              <input className="Radio" type="radio" name="status" value="resolved" onChange={(e) => setStatus(e.target.value)} /> Resolved
            </label> 



            <button type="submit">Submit</button>
          </form>

      </div>
    </div>
  );
};
export default Report;