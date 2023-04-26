import React, { useState, useEffect } from 'react';

function Report() {
  const [intervention, setIntervention] = useState([]);
  const [redflagrecords, setRedFlag] = useState([])
  useEffect(() => {
    fetch('https://zaki-dev-jiseti.onrender.com/intervention_records')
      .then(response => response.json())
      .then(data => {
       setIntervention(data);
      });
  }, []);
  useEffect(() => {
    fetch('https://zaki-dev-jiseti.onrender.com/red_flag_records')
      .then(response => response.json())
      .then(data => {
       setRedFlag(data);
      });
  }, []);
  return (
    <center>
      <center><h1>REPORTS</h1></center>
      {intervention.map((records, index) => (

        <div key={index}>
          <h2 className='cardtitle' >{records.title}</h2>
          <img className='imgtag' src={records.image_url} alt={records.title} />
          <p className='cardDescription'>{records.description}</p>
          <p className='cardGeolocation'>{records.latitude}</p>
          <p className='cardGeolocation-1'>{records.longitude}</p>
          <p className='cardStatus'>{records.status}</p>
          {redflagrecords.map((records, index) => (
        <div key={index}>
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
          <a 
           href='/myreports'> Report</a>
    </center>
  );
}
export default Report;