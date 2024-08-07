import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={`${process.env.PUBLIC_URL}/videos/video3.mp4`} autoPlay loop muted />
            <div className="hero-content">
                <div>
                    <h1>Cam's Life</h1>
                    <p>On the Web</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Circular" className="hero-image" />
            </div>
        </div>
    );
}

export default HeroSection;
