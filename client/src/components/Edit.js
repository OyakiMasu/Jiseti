import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ cases, selectedCase, setCases, setIsEditing }) => {
  const id = selectedCase.id;

  const [date, setDate] = useState(selectedCase.date);
  const [title, setTitle] = useState(selectedCase.title);
  const [description, setDescription] = useState(selectedCase.description);
  const [geolocation, setGeolocation] = useState(selectedCase.geolocation);
  const [image, setImage] = useState(selectedCase.image);

  const handleUpdate = e => {
    e.preventDefault();

    if (!date || !title || !description || !geolocation) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields except the image URL are required.',
        showConfirmButton: true,
      });
    }

    const caseData = {
      id,
      date,
      title,
      description,
      geolocation,
      image,
    };

    for (let i = 0; i < cases.length; i++) {
      if (cases[i].id === id) {
        cases.splice(i, 1, caseData);
        break;
      }
    }

    localStorage.setItem('cases_data', JSON.stringify(cases));
    setCases(cases);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${caseData.title}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit case</h1>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="geolocation">Geolocation</label>
        <input
          id="geolocation"
          type="text"
          name="geolocation"
          value={geolocation}
          onChange={e => setGeolocation(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          name="image"
          onChange={e => setImage(e.target.files[0])}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;