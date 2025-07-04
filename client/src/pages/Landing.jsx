import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  function handleStart() {
    const fakeId = Math.random().toString(36).substring(2, 8);
    navigate(`/dashboard/${fakeId}`);
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '4rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🌟 Welcome to Emome 🌟</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Track emotional patterns in your relationships
      </p>
      <button onClick={handleStart} style={{
        marginTop: '1rem',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Start Tracking
      </button>
    </div>
  );
}
