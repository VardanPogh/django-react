import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddIntersection = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [streets, setStreets] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Initialize the navigate function

  // Validate form inputs
  const validate = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!location) formErrors.location = 'Location is required';
    if (!streets) formErrors.streets = 'Streets are required';
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios.post(`${process.env.REACT_APP_API_URL}/api/intersections/`, { name, location, streets })
        .then(() => {
          // Redirect to the home page after successful addition
          navigate('/');  // This will redirect to the home page
        })
        .catch(error => console.error("There was an error creating the intersection!", error));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add Intersection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className={`form-control ${errors.location ? 'is-invalid' : ''}`}
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          {errors.location && <div className="invalid-feedback">{errors.location}</div>}
        </div>
        <div className="form-group">
          <label>Streets</label>
          <textarea
            className={`form-control ${errors.streets ? 'is-invalid' : ''}`}
            value={streets}
            onChange={e => setStreets(e.target.value)}
          />
          {errors.streets && <div className="invalid-feedback">{errors.streets}</div>}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Intersection</button>
      </form>
    </div>
  );
};

export default AddIntersection;
