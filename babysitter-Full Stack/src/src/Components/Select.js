import React from 'react';
import './App.css';

function Select() {
  return (
    <div className="search-page">
      <nav className="navbar">
        <h2>Select babysitter</h2>
      </nav>
      <div className="babysitter-Nos">
        <div className="babysitter-No">
          <h3>babysitter 1</h3>
          <p>Age:23</p>
          <p>place:Muscat</p>
          <p>Price: OMR 20</p>
        </div>
        <div className="babysitter-No">
        <h3>babysitter 2</h3>
          <p>Age:33</p>
          <p>place:Nizwa</p>
          <p>Price: OMR 15</p>
        </div>
        {/* we can add more babysitter here as needed */}
      </div>
    </div>
  );
}

export default Select;
