import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmationStyles.css';

export default function BookingConfirmation() {
  const location = useLocation();
  const {
    passengerName,
    departureDate,
    departureTime,
    ticketType,
    busName,
    seatCapacity,
  } = location.state;
  
  return (
    <div className="confirmation-container">
      <div>
        <p className="confirmation-heading">Passenger Name:</p>
        <p className="confirmation-heading">Ticket Type:</p>
        <p className="confirmation-heading">Departure Date:</p>
        <p className="confirmation-heading">Departure Time:</p>
        <p className="confirmation-heading">Bus Name:</p> {/* Display bus name */}
        <p className="confirmation-heading">Seat Capacity:</p> {/* Display seat capacity */}
      </div>
      <div>
        <p className="confirmation-response">{passengerName}</p>
        <p className="confirmation-response">{ticketType}</p>
        <p className="confirmation-response">{departureDate}</p>
        <p className="confirmation-response">{departureTime}</p>
        <p className="confirmation-response">{busName}</p> {/* Display bus name */}
        <p className="confirmation-response">{seatCapacity}</p> {/* Display seat capacity */}
      </div>
    </div>
  );
}
