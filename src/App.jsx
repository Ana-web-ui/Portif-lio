import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Project from './Screens/Project';
import GradientBackground from './components/GradientBackground/GradientBackground';

function App() {
  return (
    <Router>
      <GradientBackground>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </GradientBackground>
    </Router>
  );
}

export default App;