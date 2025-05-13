import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EnterDetailsStyles.css';

export default function EnterDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]); // Track selected seats as an array
  const [numSeats, setNumSeats] = useState(1); // Number of seats to be selected
  const [ticketType, setTicketType] = useState('AC');
  const [price, setPrice] = useState(0);
  const queryParams = new URLSearchParams(location.search);

  const routeName = queryParams.get('routeName');
  const basePrice = queryParams.get('basePrice');
  const selectedTime = queryParams.get('time');
 

  useEffect(() => {
    // Calculate the price based on the selected ticket type
    const calculatePrice = (type) => {
      if (type === 'AC') {
        return basePrice * numSeats;
      } else if (type === 'Non-AC') {
        return (basePrice - 100) * numSeats;
      } else {
        return 0;
      }
    };

    // Update the price whenever the ticket type or number of seats change
    setPrice(calculatePrice(ticketType));
  }, [numSeats, basePrice, ticketType]);

  const handleSelectSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      // If the seat is already selected, remove it from the array
      setSelectedSeats(selectedSeats.filter((selected) => selected !== seat));
    } else if (selectedSeats.length < numSeats) {
      // If the seat is not already selected and the limit of selected seats has not been reached, add it to the array
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleConfirmBooking = () => {
   
      console.log('Name:', name);
      console.log('Gender:', gender);
      console.log('Email:', email);
      console.log('Departure Date:', departureDate);
      console.log('Departure Time:', departureTime);
    
    if (name && gender && email && departureDate && departureTime && selectedSeats.length === parseInt(numSeats, 10)) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
    
      if (emailPattern.test(email)) {

        navigate('/booking-confirmation-ticket', {
          state: {
            passengerName: name,
            gender,
            email,
            departureDate,
            departureTime,
            numSeats,
            selectedSeats,
            ticketType,
            routeName,
            basePrice,
          },
        });
      } else {
        alert('Please enter a valid email address.');
      }
    } else {
      alert('Please fill in all fields and select the correct number of seats to confirm the booking.');
    }
    
  }

  return (
    <div className="container">
      <div>
        <h2>Enter Booking Details</h2>
        <p>Please enter your details to confirm the booking for {routeName} ({ticketType}):</p>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: 200 }} />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: 200 }}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="departureDate">Departure Date:</label>
          <input type="date" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </div>

        <div>
          <label htmlFor="departureTime">Departure Time:</label>
          <input type="text" value={selectedTime} readOnly />
        </div>
        <div>
          <label htmlFor="numSeats">How Many Seats:</label>
          <input
            type="number"
            id="numSeats"
            value={numSeats}
            onChange={(e) => setNumSeats(e.target.value)}
            min="1"
            max="28"
          />
        </div>
        <div>
          <h4>Select Seats:</h4>
          <div className="seats">
            {Array.from({ length: 28 }, (_, index) => (index + 1).toString()).map((seat) => (
              <button
                key={seat}
                className={`seat-button ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => handleSelectSeat(seat)}
                disabled={selectedSeats.length === numSeats && !selectedSeats.includes(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label>Choose Ticket Type:</label>
          <select value={ticketType} onChange={(e) => setTicketType(e.target.value)} style={{ width: 200 }}>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
        </div>
        <div>
          <h4>Price for {numSeats} Seat(s): ${price}</h4>
        </div>

       

        <div>
          <h4 className="selected-seats">Your Selected Seats: {selectedSeats.join(', ')}</h4>
        </div>

        <button onClick={handleConfirmBooking}>Confirm Booking</button>
      </div>
    </div>
  );
}
