import React from 'react';

export default function Logo() {
  const logoStyle = {
    width: 'auto',            // Allow the width to adjust automatically
    height: '50px',           // Set the height to match the navbar's desired height
    float: 'right',
    marginRight: '10px',
  };

  return (
    <div className="logo" style={logoStyle}>
      <img
        src="https://i.pinimg.com/736x/0e/dd/fb/0eddfbb330bd8bc73b48f59e5c30cc29--buses-logodesign.jpg"
        alt="logo"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
}
