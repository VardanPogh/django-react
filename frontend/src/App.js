import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IntersectionList from './components/IntersectionList';
import AddIntersection from './components/AddIntersection';
import UpdateIntersection from './components/UpdateIntersection';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="mt-4">Intersections Management</h1>
        <Link to="/" className="btn btn-warning mb-4 me-2">Home</Link>
        <Link to="/add" className="btn btn-primary mb-4">Create New Intersection</Link>
        <Routes>
          <Route path="/" element={<IntersectionList />} />
          <Route path="/add" element={<AddIntersection />} />
          <Route path="/update/:id" element={<UpdateIntersection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
