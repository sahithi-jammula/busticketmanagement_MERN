import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export default function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }
  return (
    <div>
      <h2>This is profile page</h2>
      <h2>Welcome to :{auth.user}</h2>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}