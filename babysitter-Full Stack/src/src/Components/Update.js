import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { useNavigate } from "react-router-dom";
import { updatebabysitter } from '../Features/UserSliceupdate';
 
function Update() {
  const [babysitterId, setbabysitterId] = useState('');
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [price, setPrice] = useState('');
  const [place, setplace] = useState('');
  const [HomeNo, setHomeNo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 
  const handleUpdate = async (e) => {
    e.preventDefault();
 
    const babysitterDataToUpdate = {
        babysitterId,
        name,
        age,
        price,
       place,
    HomeNo,
    };
 
    try {
      const response = await dispatch(updatebabysitter({ babysitterId, ...babysitterDataToUpdate}));
 
      if (response.meta.requestStatus === 'fulfilled') { // Check for success
        setErrorMessage('');
        dispatch(getbabysitters()); // Fetch updated babysitter
        navigate("/");
      } else {
        setErrorMessage(response.error.message || 'Error updating babysitter'); // Handle errors
      }
    } catch (error) {
      console.error('Error updating babysitter:', error);
      setErrorMessage('Error updating babysitter');
    }
  };
 
  return (
    <div className="admin-page">
      <nav className="navbar">
        <h2>Update babysitter</h2>
      </nav>
      <div className="form-container">
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="babysitterId">babysitter ID:</label>
            <input
              type="text"
              id="babysitterId"
              name="babysitterId"
              value={babysitterId}
              onChange={(e) => setbabysitterId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">place:</label>
            <input
              type="text"
              id="place"
              name="place"
              value={place}
              onChange={(e) => setplace(e.target.value)}
            />
            </div>
          <div className="form-group">
            <label htmlFor="HomeNo">HomeNo:</label>
            <input
              type="text"
              id="HomeNo"
              name="HomeNo"
              value={HomeNo}
              onChange={(e) => setHomeNo(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Update babysitter</button>
        </form>
      </div>
    </div>
  );
}
 
export default Update;
 