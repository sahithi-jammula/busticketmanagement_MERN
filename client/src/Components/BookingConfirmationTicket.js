import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmationStyles.css';

export default function BookingConfirmationTicket() {
  const location = useLocation();
  const { passengerName, departureDate, departureTime, selectedSeats, ticketType, routeName } = location.state;

  return (
    <div className="confirmation-container">
      <div>
        <p className="confirmation-heading">Passenger Name:</p>
        <p className="confirmation-heading">Ticket Type:</p>
        <p className="confirmation-heading">Departure Date:</p>
        <p className="confirmation-heading">Departure Time:</p>
        <p className="confirmation-heading">Selected Seats:</p> {/* Updated label for selected seats */}
        <p className="confirmation-heading">Route Name:</p>
      </div>
      <div>
        <p className="confirmation-response">{passengerName}</p>
        <p className="confirmation-response">{ticketType}</p>
        <p className="confirmation-response">{departureDate}</p>
        <p className="confirmation-response">{departureTime}</p>
        <p className="confirmation-response">{selectedSeats.join(', ')}</p>
      </div>
    </div>
  );
}
