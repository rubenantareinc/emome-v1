import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';

const dummyTimeline = [
  { date: '2025-06-01', note: 'Had dinner together.', score: 80 },
  { date: '2025-06-10', note: 'Big argument.', score: 40 },
  { date: '2025-07-01', note: 'Reconnected and walked in the park.', score: 90 }
];

export default function Friend() {
  const { name } = useParams();

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Timeline with {name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <Timeline entries={dummyTimeline} />
      </div>
    </>
  );
}
