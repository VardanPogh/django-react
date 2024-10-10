import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const IntersectionList = () => {
  const [intersections, setIntersections] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/intersections/`)
      .then(response => setIntersections(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this intersection?")) {
      axios.delete(`${process.env.REACT_APP_API_URL}/api/intersections/${id}/`)
        .then(() => setIntersections(intersections.filter(intersection => intersection.id !== id)))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h2>Intersection List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Streets</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {intersections.map(intersection => (
            <tr key={intersection.id}>
              <td>{intersection.id}</td>
              <td>{intersection.name}</td>
              <td>{intersection.location}</td>
              <td>{intersection.streets}</td>
              <td>
                <Link to={`/update/${intersection.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(intersection.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntersectionList;
