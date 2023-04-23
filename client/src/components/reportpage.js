import React, { useState } from "react";

function Report() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [severity, setSeverity] = useState("low");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLocationChange = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation(`${latitude}, ${longitude}`);
    });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { text, description, date, location, image, severity };
    console.log(formData);
  };

  return (
    <div>
      <h1>Add a report</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <br />
        <button type="button" onClick={handleLocationChange}>
          Get Location
        </button>
        {location && <p>Location: {location}</p>}
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Severity:
          <br />
          <input
            type="radio"
            value="low"
            checked={severity === "low"}
            onChange={handleSeverityChange}
          />{" "}
          Low
          <br />
          <input
            type="radio"
            value="medium"
            checked={severity === "medium"}
            onChange={handleSeverityChange}
          />{" "}
          Medium
          <br />
          <input
            type="radio"
            value="high"
            checked={severity === "high"}
            onChange={handleSeverityChange}
          />{" "}
          High
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <a href='/report'>My Reports</a>

    </div>
  );
}

export default Report;


