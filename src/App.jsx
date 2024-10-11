import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Quiz from './components/Quiz';
import HomePage from './components/HomePage';
import Result from './components/Result';
import Review from './components/review';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} /> 
          <Route path="/result" element={<Result />} />   
          <Route path="/review" element={<Review />} />    
      </Routes>
    </Router>
  );
}

export default App;
