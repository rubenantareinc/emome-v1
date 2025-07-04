import React from 'react';

export default function FriendCard({ name, rating, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '0.5rem 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>{name}</h3>
      <p>Rating: {rating}%</p>
    </div>
  );
}
