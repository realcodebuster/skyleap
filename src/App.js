import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Error from './pages/Error';
import Home from './pages/Home';
import Message from './pages/Message';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='Message' element={<Message />} />
          <Route path='Home' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
