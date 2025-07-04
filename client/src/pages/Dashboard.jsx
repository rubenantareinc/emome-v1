import React from 'react';
import Navbar from '../components/Navbar';
import FriendCard from '../components/FriendCard';
import { useNavigate, useParams } from 'react-router-dom';

const dummyFriends = [
  { name: 'Stacy', rating: 85 },
  { name: 'Leo', rating: 60 },
  { name: 'Maya', rating: 78 }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { uid } = useParams();

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Your Friends</h2>
        {dummyFriends.map((f, i) => (
          <FriendCard 
            key={i}
            name={f.name} 
            rating={f.rating}
            onClick={() => navigate(`/friend/${uid}/${f.name.toLowerCase()}`)} 
          />
        ))}
      </div>
    </>
  );
}
