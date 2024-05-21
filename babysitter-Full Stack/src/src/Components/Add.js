import React from 'react';
import './AdminPage.css'; // Import the common CSS file

function Add() {
  return (
    <div className="admin-page">
      <nav className="navbar">
        <h2>Add babysitter</h2>
      </nav>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="babysitterId">Babysitter ID:</label>
            <input type="text" id="babysitterId" name="babysitterId" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" />
          </div>
          
         
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" />
          </div>
          <div className="form-group">
            <label htmlFor="place">place:</label>
            <input type="text" id="price" name="place" />
          </div>
          <div className="form-group">
            <label htmlFor="HomeNo">HomeNo:</label>
            <input type="number" id="HomeNo" name="HomeNo" />
          </div>
          <button type="submit">Add babysitter</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
