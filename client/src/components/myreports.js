import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/Myreport.css'
import { AuthContext } from "../AuthContext";

const MyReports = () => {
  const token = localStorage.getItem('token')
  const [reports, setReports] = useState([]);
  const storedId = localStorage.getItem("userId");
  const { isLoggedIn } = useContext(AuthContext);
  const [redFlagReports, setRedFlagReports] = useState([]);
  const [interventionReports, setInterventionReports] = useState([]);

  // console.log(token)

  useEffect(() => {
    
      fetch(`http://localhost:3000/red_flag_records?user_id={storeId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setRedFlagReports(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    // }
  }, [storedId, token]);
  // console.log(storedId);

  useEffect(() => {
    
    fetch(`http://localhost:3000/intervention_records?user_id={storeId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setInterventionReports(data);
        // console.log(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  // }
}, [storedId, token]);
// console.log(storedId);

  const handleEdit = (reportId) => {
    console.log(`Editing report with id ${reportId} for user ${storedId}`);

    const redFlagReport = redFlagReports.find((r) => r.id === reportId);
    const interventionReport = interventionReports.find(
      (r) => r.id === reportId
    );
    const report = redFlagReport || interventionReport;
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

    // send a PUT request to update the report data
    console.log(token)
    
    
    fetch(
      `http://localhost:3000/${
        redFlagReport ? "red_flag_records" : "intervention_records"
      }/${report.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(reportObj),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Report updated:", data);
      })
      .catch((error) => console.error("Error updating report:", error));
  };

  
  const handleDelete = (report ) => {
    console.log(`Deleting report with id ${report.id} for user ${storedId}`);
  
    if (!storedId) {
      console.error('You must be logged in to perform this action');
      alert('You must be logged in to perform this action');
      return;
    }
    
    if (storedId !== report.user_id) {
      console.error('You do not have permission to delete this report');
      alert('You do not have permission to delete this report');
      return;
    }
  
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );
    
    if (confirmDelete) {
      fetch(
        `http://localhost:3000/${
          report.red_flag_report ? "red_flag_records" : "intervention_records"
        }/${report.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            if (report.red_flag_report) {
              const updatedReports = redFlagReports.filter(
                (r) => r.id !== report.id
              );
              setRedFlagReports(updatedReports);
            } else {
              const updatedReports = interventionReports.filter(
                (r) => r.id !== report.id
              );
              setInterventionReports(updatedReports);
            }
          } else {
            throw new Error(response.status);
          }
        })
        .catch((error) => {
          if (error.message === "403") {
            if (report.red_flag_report) {
              alert("Only admin users can delete red flag records");
            } else {
              alert("Only admin users can delete intervention records");
            }
          } else {
            console.error("Error deleting report:", error);
          }
        });
    }
  };
  
  
  let filteredRedFlags = redFlagReports.filter(report => {return report.user_id == storedId} )
  let filteredIntervention = interventionReports.filter(report => {return report.user_id == storedId} )


  console.log(filteredRedFlags)
  // console.log(storedId)

  return (
    <center>
      <h2>My Reports</h2>

      <h3>RED FLAG RECORDS</h3>

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
          {filteredRedFlags.map(report => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td><img src={report.image_url} alt="report image" /></td>
              <td>{report.description}</td>
              <td>{report.latitude}, {report.longitude}</td>
              <td>{report.status}</td>
              <td>
              <button onClick={() => handleEdit(report.id, storedId)}>Edit</button>
              <button onClick={() => handleDelete(report, storedId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>INTERVENTION RECORDS</h3>

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
          {filteredIntervention.map(report => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td><img src={report.image_url} alt="report image" /></td>
              <td>{report.description}</td>
              <td>{report.latitude}, {report.longitude}</td>
              <td>{report.status}</td>
              <td>
              <button onClick={() => handleEdit(report.id, storedId)}>Edit</button>
              <button onClick={() => handleDelete(report, storedId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/reportpage">Add Report</Link>
      
    </center>
  );
};
export default MyReports;