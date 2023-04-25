import React from 'react';

const View = ({ caseItem, handleClose }) => {

  return (
    <div className="view-container">
      <h2>View Case Details</h2>
      <div>
        <strong>Date: </strong> {caseItem.date}
      </div>
      <div>
        <strong>Title: </strong> {caseItem.title}
      </div>
      <div>
        <strong>Geolocation: </strong> {caseItem.geolocation}
      </div>
      <div>
        <strong>Email: </strong> {caseItem.email}
      </div>
      <div className="text-center">
        <button
          onClick={handleClose}
          className="button muted-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default View;
