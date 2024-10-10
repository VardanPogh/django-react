import axios from 'axios';

const DeleteIntersection = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`/api/intersections/${id}/`)
      .catch(error => console.error(error));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteIntersection;
