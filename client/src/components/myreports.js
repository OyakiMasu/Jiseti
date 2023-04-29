import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/Myreport.css'
import { AuthContext } from "../AuthContext";

const MyReports = () => {
  const [reports, setReports] = useState([]);
  const storedId = localStorage.getItem("userId");
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    // const storedReports = JSON.parse(localStorage.getItem(`user-${storedId}-reports`) || '[]');
    // if (storedReports.length) {
    //   setReports(storedReports);
    // } else {
      fetch(`https://zaki-dev-jiseti.onrender.com/red_flag_records?user_id={storeId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setReports(data);
          // localStozrage.setItem(`user-${storedId}-reports`, JSON.stringify(data));
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    // }
  }, []);
  // console.log(storedId);
  const handleEdit = (reportId) => {
    console.log(`Editing report with id ${reportId} for user ${storedId}`);
    const report = reports.find(r => r.id === reportId);
    console.log(report.id)
    if (!storedId) {
      console.error('You must be logged in to perform this action');
      return;
    }
    if (storedId != report.user_id) {
      console.error('You do not have permission to update this report');
      return;
    }
    // show a form for editing the report data
    // populate the form fields with the existing report data
    const titleInput = prompt('Enter updated title:', report.title);
    const descriptionInput = prompt('Enter updated description:', report.description);
    let reportObj = {
      title: titleInput,
      description: descriptionInput
    }
    // update the report object with the new data
    // report.title = titleInput;
    // report.description = descriptionInput;
    // send a PUT request to update the report data
    fetch(`https://zaki-dev-jiseti.onrender.com/red_flag_records/{report.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' },
      body: JSON.stringify(reportObj),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Report updated:', data);
        // update the state with the updated report data
        // const updatedReports = reports.map(r => r.id === data.id ? data : r);
        // setReports(updatedReports);
        // // update local storage with the updated reports
        // localStorage.setItem(`user-${storedId}-reports`, JSON.stringify(updatedReports));
      })
      .catch(error => console.error('Error updating report:', error));
  };
  // ...
  useEffect(() => {
    // ...
    console.log("storedId:", storedId);
  }, [storedId]);
  const handleDelete = (report) => {
    // implement delete functionality here
    console.log(`Deleting report with id ${report.id}`);
  };
  return (
    <div className="myreportsbg">
       
        <center>
          <h2>My Reports</h2>
          <Link to="/reportpage">Add Report</Link>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => (
                <tr key={report.id}>
                  <td>{report.title}</td>
                  <td><img src={report.image_url} alt="report image" /></td>
                  <td>{report.description}</td>
                  <td>{report.latitude}, {report.longitude}</td>
                  <td>{report.status}</td>
                  <td>
                  <button onClick={() => handleEdit(report.id, storedId)}>Edit</button>
                  <button onClick={() => handleDelete(report)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
    </div>

  );
};
export default MyReports;