import React, { useState } from 'react';

const Table = ({ cases, handleEdit, handleDelete, handlePost }) => {
  const casesWithIds = cases.map((singleCase, i) => ({
    ...singleCase,
    id: i + 1,
  }));

  const [selectedCase, setSelectedCase] = useState(null);

  const handleView = (singleCase) => {
    setSelectedCase(singleCase);
  };

  return (
    <div className="container-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Date</th>
            <th>Title</th>
            <th>Geolocation</th>
            <th colSpan={4} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {casesWithIds.length > 0 ? (
            casesWithIds.map((singleCase, i) => (
              <tr key={singleCase.id}>
                <td>{i + 1}</td>
                <td>{singleCase.date} </td>
                <td>{singleCase.title}</td>
                <td>{singleCase.geolocation}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(singleCase.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleView(singleCase)}
                    className="button muted-button"
                  >
                    View
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(singleCase.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handlePost(singleCase.id)}
                    className="button muted-button"
                  >
                    Post
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>There is nothing</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedCase && (
        <div className="view-container">
          <h2>Details</h2>
          <div>
            <strong>Date: </strong> {selectedCase.date}
          </div>
          <div>
            <strong>Title: </strong> {selectedCase.title}
          </div>
          <div>
            <strong>Geolocation: </strong> {selectedCase.geolocation}
          </div>
          <div className="text-center">
            <button
              onClick={() => setSelectedCase(null)}
              className="button muted-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
