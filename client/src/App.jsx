import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Friend from './pages/Friend';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard/:uid" element={<Dashboard />} />
        <Route path="/friend/:uid/:name" element={<Friend />} />
      </Routes>
    </Router>
  );
}
