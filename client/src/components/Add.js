import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add   = ({ cases, setCases, setIsAdding }) => {
  const [date, setDate] = useState('');
  const [flag, setFlag] = useState('red');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [image, setImage] = useState(null);

  const handleAdd = e => {
    e.preventDefault();

    if (!date || !title || !description || !geolocation) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields except for image are required.',
        showConfirmButton: true,
      });
    }

    const id = cases.length + 1;
    const newCase = {
      id,
      date,
      flag,
      title,
      description,
      geolocation,
      image: image ? URL.createObjectURL(image) : null,
    };

    cases.push(newCase);
    localStorage.setItem('cases_data', JSON.stringify(cases));
    setCases(cases);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${title}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add case</h1>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <label htmlFor="flag">Records</label>
        <select id="flag" name="flag" value={flag} onChange={e => setFlag(e.target.value)}>
          <option value="" disabled>Choose</option>
          <option value="red">Red Flag Record</option>
          <option value="blue">Intervention Record</option>
        </select>
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
        <label htmlFor="image">Image(optional)</label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;