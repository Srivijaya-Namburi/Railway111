import React, { useState } from 'react';

export default function RailwayReservationSystem() {
  const [name, setName] = useState('');
  const [train, setTrain] = useState('');
  const [ticket, setTicket] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicket({ name, train });
  };

  return (
    <div className="container">
      <h1>Railway Reservation System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Train Name" value={train} onChange={(e) => setTrain(e.target.value)} required />
        <button type="submit">Book Ticket</button>
      </form>
      {ticket && (
        <div>
          <h3>Ticket Details:</h3>
          <p>Name: {ticket.name}</p>
          <p>Train: {ticket.train}</p>
        </div>
      )}
    </div>
  );
}
