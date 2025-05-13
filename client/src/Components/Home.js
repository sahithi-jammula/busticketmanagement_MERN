import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const navigate = useNavigate();

  const carouselStyle = {
    width: '80%', // Adjust the width as needed
    maxWidth: '400px', // Set a maximum width if necessary
    margin: '0 auto', // Center the carousel
  };
  const textStyle = {
    float: 'left',
    width: '50%',
    padding: '10px',
    color: '#007BFF', // Text color
  };

  return (
    <div>
      <h2>Home</h2>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        style={carouselStyle} // Apply the custom style
      >
        
        {/* Slide 1 */}
        <div>
          <img src="https://i.pinimg.com/originals/ec/7b/78/ec7b78ab3079ace000a7bb5ab3f7c583.gif" alt="Image 1" style={{ maxWidth:'60%'}} />
          <h3>Love being on tour!!</h3>
          <h3>Book your own travel bus</h3>
          <button onClick={() => navigate('travel-bus')}>Book Now</button>
        </div>

        {/* Slide 2 */}
        <div>
          <img src="https://metro.co.uk/wp-content/uploads/2020/08/ILLO_BUS_01-2229.gif?quality=90&strip=all&zoom=1&resize=644%2C338" alt="Image 2" style={{ maxWidth: '90%' }} />
          <h3>Travel together with us</h3>
          <h3>a flight on road!</h3>
          <h3>Book your tickets now</h3>
          <button onClick={() => navigate('find-routes')}>findroutes</button>
        </div>
      </Carousel>
      
      <div style={textStyle}>
        <h1 style={{ fontWeight: 'bold' }}>Explore the World with Us</h1>
        <h3>
        A flight on road 
        </h3>
        <h3>
        you are safe with us
        </h3>
        <h3>
        book your tickets now
        </h3>
      </div>
      <img
            src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg"
            alt="Image 3"
            style={{ float: 'right', maxWidth: '50%' }}
          />

    </div>
    
  );
}
