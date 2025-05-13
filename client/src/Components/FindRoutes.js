import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const routes = [
  // Your route data here
  { id: 1, name: 'hyderabad to vijaywada', imageUrl: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d6sr3lc9ti9cp36jp9i36rh3p7-20161208021723.Medi.jpeg', sname:'TSRTC',price:250},
  { id: 2, name: 'vizag to vijaywada', imageUrl: 'https://th.bing.com/th/id/OIP.djsb5lAMr-oDHlOMPtjoCgHaEY?pid=ImgDet&rs=1', sname:'APSSRTC',price:250},
  { id: 3, name: 'guntur to hyderabad', imageUrl: 'https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/1762/logo__1_.png', sname:'TSRTC',price:250},
  {id: 4, name: 'banglore to mumbai', imageUrl: 'https://th.bing.com/th/id/OIP.djsb5lAMr-oDHlOMPtjoCgHaEY?pid=ImgDet&rs=1', sname:'Orange APSRTC'},
  {id: 5, name: 'mumbai to hyderabad', imageUrl: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d6sr3lc9ti9cp36jp9i36rh3p7-20161208021723.Medi.jpeg', sname:'AMARAVATI TSRTC',price:250},
  {id: 6, name: 'banglore to hyderabad', imageUrl: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d6sr3lc9ti9cp36jp9i36rh3p7-20161208021723.Medi.jpeg', sname:'TSRTC',price:250},
  {id: 7, name: 'pune to banglore', imageUrl: 'https://1.bp.blogspot.com/-zSlMPzqEPzA/YNT558H5wmI/AAAAAAAA7-c/yw7duWqAfkQndDCrjNtjBEDemQ47wXu7QCLcBGAsYHQ/s0/ksrtc-kerala-logo-emblem.webp', sname:'KSRTC',price:250},
  {id: 8, name: 'banglore to vijayawada', imageUrl: 'https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/1762/logo__1_.png', sname:'Orange',price:250},
  {id: 9, name: 'chennai to hyderabad', imageUrl: 'https://th.bing.com/th/id/OIP.djsb5lAMr-oDHlOMPtjoCgHaEY?pid=ImgDet&rs=1', sname:'APSRTC',price:250},
  {id: 10, name: 'vijayawada to chennai', imageUrl: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-d6sr3lc9ti9cp36jp9i36rh3p7-20161208021723.Medi.jpeg', sname:'TSRTC',price:250},
];

export default function FindRoutes() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewTimes = (routeId, routeName, basePrice) => {
    navigate(`/times?routeId=${routeId}&routeName=${routeName}&basePrice=${basePrice}`);
  };
  

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search routes..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {/* Display filtered routes */}
      <div className="route-list">
        {routes.map((route) => (
          <div key={route.id} className="card">
            <div className="card-img-border">
              {/* Route image */}
              <img
                src={route.imageUrl}
                className="card-img-top"
                alt={`Image for ${route.name}`}
                style={{ width: '100px', height: '100px' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{route.name}</h5>
              <p>Price: ${route.price}</p>
            </div>
            <button onClick={() => handleViewTimes(route.id, route.name, route.price)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
