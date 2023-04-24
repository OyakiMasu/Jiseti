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
    <center>
      <h2>Add a Report</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select type</option>
            <option value="red_flag">Red Flag</option>
            <option value="intervention">Intervention</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </label>
        <br />
        <label>
        title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </label>
        <br />
        <label>
          Location:
          <input placeholder="Add Lat and Long coordinates" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required/>
          <button type="button" onClick={handleLocationClick}>Use current location</button>
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
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
      </form>
      <a className='' href='/report'>My Reports</a>

      {/* Display submitted form data below with edit and delete buttons */}
      {/* TODO: Implement display and functionality for edit and delete buttons */}
    </center>
  );
};

export default Report;




