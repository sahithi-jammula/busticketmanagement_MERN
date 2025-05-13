import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EnterDetailsStyles.css';

export default function BookTicket() {
  const [passengerName, setPassengerName] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [ticketType, setTicketType] = useState('AC'); // Default to 'AC' for AC ticket
  const navigate = useNavigate();
  const location = useLocation();

  // Access bus name, seat capacity, and other details from URL parameters
  const busName = new URLSearchParams(location.search).get('busName');
  const seatCapacity = new URLSearchParams(location.search).get('seatCapacity');
  
  const handleBookTicket = () => {
    if (!passengerName || !departureDate || !departureTime) {
      alert('Please fill in all fields to book the ticket.');
      return;
    }

    // Implement your booking logic here, and include 'ticketType' in your booking data.

    // After successfully booking, navigate to the "BookingConfirmation" component.
    navigate('/booking-confirmation', {
      state: {
        passengerName,
        departureDate,
        departureTime,
        ticketType,
        busName, // Pass bus name to confirmation page
        seatCapacity, // Pass seat capacity to confirmation page
        // Include other booking details in the state object
      },
    });
  }

  return (
    <div>
      
      <h2>Book Ticket</h2>
      <p>Bus Name: {busName}</p>
      <p>Seat Capacity: {seatCapacity}</p>
      <form>
        <div>
          <label htmlFor="passengerName">Passenger Name:</label>
          <input
            type="text"
            id="passengerName"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)} style={{width: 200}}
          />
        </div>

        <div>
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="departureTime">Departure Time:</label>
          <input
            type="time"
            id="departureTime"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />
        </div>
        <div>
          <label>Choose Ticket Type:</label>
          <select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)} style={{width: 200}}
          >
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
        </div>
        <button type="button" onClick={handleBookTicket}>
          Book Now
        </button>
      </form>
    </div>
  );
}
