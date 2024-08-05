import React from 'react';
import '../App.css';
import './HeroSection.css';
import circularImage from '../images/profile1.jpg'; // Adjust the path to your image


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video3.mp4' autoPlay loop muted />
            <div className="hero-content">
                <div>
                    <h1>Cam's Life</h1>
                    <p>On the Web</p>
                </div>
                <img src={circularImage} alt="Circular" className="hero-image" />
            </div>
        </div>
    );
}

export default HeroSection;