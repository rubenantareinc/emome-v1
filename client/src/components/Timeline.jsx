import React from 'react';

export default function Timeline({ entries }) {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Timeline</h2>
      {entries.map((entry, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          margin: '0.5rem 0',
          padding: '0.5rem'
        }}>
          <p><strong>{entry.date}</strong></p>
          <p>{entry.note}</p>
          <p>Score: {entry.score}%</p>
        </div>
      ))}
    </div>
  );
}
