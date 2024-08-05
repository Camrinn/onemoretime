import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ContactForm from './components/ContactForm';
import PhotoGallery from './components/pages/PhotoGallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/contact-form' element={<ContactForm />} />        
        <Route path='/photo-gallery' element={<PhotoGallery />} />        
      </Routes>
    </Router>
  );
}

export default App;