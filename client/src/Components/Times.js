import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const times = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

export default function Times() {
  const navigate = useNavigate();
  const location = useLocation();

  const routeName = new URLSearchParams(location.search).get('routeName');
  const price = new URLSearchParams(location.search).get('price');

  const handleSelectTime = (time) => {
    let newUrl = `/enter-details?routeName=${routeName}&time=${time}`;

    if (price) {
      newUrl += `&price=${price}`;
    }

    navigate(newUrl);
  };
  console.log('Price in Times.js:', price); 
  return (
    <div>
      <h2>Available Times for {routeName}</h2>
      <ul className="times-container">
        {times.map((time) => (
          <li key={time} className="horizontal-buttons">
            <button className="time-button" onClick={() => handleSelectTime(time)}>
              {time}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
