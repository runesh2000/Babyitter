import React from 'react';
import './App.css';// Import the common CSS file

function Delete() {
  return (
    <div className="admin-page">
      <nav className="navbar">
        <h2>Delete babysitter</h2>
      </nav>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="babysitterId">Babysitter ID:</label>
            <input type="text" id="babysitterId" name="babysitterId" />
          </div>
          <button type="submit">Delete babysitter</button>
        </form>
      </div>
    </div>
  );
}

export default Delete;
