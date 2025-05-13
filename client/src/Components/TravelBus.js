import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const busData = [
  {
    id: 1,
    name: 'Bus 1',
    capacity: 10,
    imageUrl: 'https://th.bing.com/th/id/OIP.KIWFlc8lQcdwFywhuMOwOwHaEs?pid=ImgDet&rs=1',
  },
  {
    id: 2,
    name: 'Bus 2',
    capacity: 20,
    imageUrl: 'https://th.bing.com/th/id/OIP.vJS0NPj1iryjyP0Yv7QTxAHaEK?pid=ImgDet&rs=1',
  },
  {
    id: 3,
    name: 'Bus 3',
    capacity: 30,
    imageUrl: 'https://minibusderby.com/wp-content/uploads/2015/03/bussrental.jpg',
  },
];

export default function TravelBus() {
  const navigate = useNavigate();

  const handleBookBus = (busId) => {
    const selectedBus = busData.find((bus) => bus.id === busId);
    if (selectedBus) {
      navigate(`/book-ticket?busId=${busId}&busName=${selectedBus.name}&seatCapacity=${selectedBus.capacity}`);
    }
  };
  

  return (
    <div>
      <h2>Travel Bus</h2>
      <p>Choose a bus to book a seat:</p>

      <div className="bus-list">
        {busData.map((bus) => (
          <div key={bus.id} className="bus-card">
            <div className="bus-image">
              <img src={bus.imageUrl} alt={bus.name} />
            </div>
            <div className="bus-details">
              <h3>{bus.name}</h3>
              <p>Seat Capacity: {bus.capacity}</p>
            </div>
            <button onClick={() => handleBookBus(bus.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
