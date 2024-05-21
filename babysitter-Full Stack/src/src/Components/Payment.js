import React, { useState } from 'react';
import './App.css'; 

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Successfull Payment submitted ');
  };

  return (
    <div className="admin-page">
      <nav className="navbar">
        <h3>Payment</h3>
        
      </nav>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength="16"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              min={new Date().toISOString().split('T')[0]} 
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Payment</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
