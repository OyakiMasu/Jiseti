import React, { useState, useEffect } from 'react';
import '../styles/reports.css'

function Report() {
  const [intervention, setIntervention] = useState([]);
  const [redflagrecords, setRedFlag] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/red_flag_records')
      .then(response => response.json())
      .then(data => {
       setIntervention(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/intervention_records')
      .then(response => response.json())
      .then(data => {
       setRedFlag(data);
      });
  }, []);

  return (
     <div className='grand'>

      <center><h2>REPORTS</h2></center>
      <center><a href='/myreports'> Report</a></center>
      <center><a href='/reportpage'> Report</a></center>
          <div className='box'>

                {intervention.map((records, index) => (

                  <div className='box' key={index}>
                    <h2 className='cardtitle' >{records.title}</h2>
                    <img className='imgtag' src={records.image_url} alt={records.title} />
                    <p className='cardDescription'>{records.description}</p>
                    <p className='cardGeolocation'>{records.latitude}</p>
                    <p className='cardGeolocation-1'>{records.longitude}</p>
                    <p className='cardStatus'>{records.status}</p>

                    {redflagrecords.map((records, index) => (  
                  <div className='box' key={index}>
                  <h2 className='cardtitle' >{records.title}</h2>
                    <img className='imgtag' src={records.image_url} alt={records.title} />
                    <p className='cardDescription'>{records.description}</p>
                    <p className='cardGeolocation'>{records.latitude}</p>
                    <p className='cardGeolocation-1'>{records.longitude}</p>
                    <p className='cardStatus'>{records.status}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
     </div>
    
  );
}
export default Report;