import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Screens/About';
import Project from './Screens/Project';
import Contact from './Screens/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;