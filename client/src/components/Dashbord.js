import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import casesData from './data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [cases, setCases] = useState(casesData);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cases_data'));
    if (data !== null && Object.keys(data).length !== 0) setCases(data);
  }, []);

  const handleEdit = (id) => {
    const [selectedCase] = cases.filter((caseItem) => caseItem.id === id);

    setSelectedCase(selectedCase);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.value) {
        const [selectedCase] = cases.filter((caseItem) => caseItem.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${selectedCase.title}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const casesCopy = cases.filter((caseItem) => caseItem.id !== id);
        localStorage.setItem('cases_data', JSON.stringify(casesCopy));
        setCases(casesCopy);
      }
    });
  };

  return (
    <center className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            cases={cases}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add cases={cases} setCases={setCases} setIsAdding={setIsAdding} />
      )}
      {isEditing && (
        <Edit
          cases={cases}
          selectedCase={selectedCase}
          setCases={setCases}
          setIsEditing={setIsEditing}
        />
      )}
    </center>
  );
};

export default Dashboard;